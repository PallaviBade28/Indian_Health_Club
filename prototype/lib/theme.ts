/** Indian Health Club brand tokens — from Client 3/assets/Logo.png */
export const ACCENT = "#FF5A00";
export const ACCENT_HOT = "#FF7A14";
export const ACCENT_HOVER = "#E04800";
export const ACCENT_RGB = "255, 90, 0";

export const PHONE_DISPLAY = "9504414141";
export const PHONE_E164 = "919504414141";
export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hi! I'm interested in joining Indian Health Club, Beed.";
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_URL = whatsappUrl();
export const TEL_URL = `tel:+${PHONE_E164}`;

/** Lean scrub-optimized hero clip (~3MB) + still for instant first paint */
export const HERO_VIDEO_SRC = "/gym_ai_scrub.mp4";
export const HERO_POSTER = "/hero-poster.jpg";
