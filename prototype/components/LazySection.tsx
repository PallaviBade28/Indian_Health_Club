"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";

type Loader = () => Promise<{ default: ComponentType }>;

type Props = {
  id: string;
  loader: Loader;
  /** Start loading this far before the section enters the viewport */
  rootMargin?: string;
  minHeight?: string;
};

/**
 * Defers client JS + render until near viewport or hash/menu targets this id.
 */
export default function LazySection({
  id,
  loader,
  rootMargin = "320px 0px",
  minHeight = "68vh",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const startedRef = useRef(false);
  const loaderRef = useRef(loader);
  loaderRef.current = loader;

  const load = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    loaderRef
      .current()
      .then((mod) => setComp(() => mod.default))
      .catch(() => {
        startedRef.current = false;
      });
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === id) load();
    };

    onHash();
    window.addEventListener("hashchange", onHash);

    const el = ref.current;
    if (!el) {
      return () => window.removeEventListener("hashchange", onHash);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin, threshold: 0.01 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.removeEventListener("hashchange", onHash);
    };
  }, [id, load, rootMargin]);

  return (
    <div
      ref={ref}
      id={Comp ? undefined : id}
      className={Comp ? undefined : "relative"}
      style={Comp ? undefined : { minHeight }}
      aria-busy={!Comp}
    >
      {Comp ? <Comp /> : null}
    </div>
  );
}
