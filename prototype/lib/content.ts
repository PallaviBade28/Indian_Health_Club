/** EXPLORE content — rates from owner cards; bios/media placeholders until owner sends */

export const SITE = {
  name: "Indian Health Club",
  shortName: "IHC",
  city: "Beed",
  tagline: "Train harder. Live stronger.",
  description:
    "Indian Health Club is a premium training gym in Beed — strength, conditioning, and personal coaching built for real results.",
};

export const HERO = {
  eyebrow: "Premium training · Beed, Maharashtra",
  /** Line 1 plain + fire word; line 2 plain + electric charge pulse */
  line1Before: "Bring the ",
  line1Fire: "heat",
  line2Before: "Own the ",
  line2Charge: "charge",
  support:
    "A serious training floor with coaching that shows up — strength, discipline, and membership plans that fit how you train.",
  primaryCta: "Start Training",
  secondaryCta: "Explore Plans",
};

export const STATS = [
  { value: "500+", label: "Members trained" },
  { value: "10+", label: "Years of coaching" },
  { value: "20+", label: "Sessions / week" },
  { value: "4.9", label: "Member rating" },
];

export const ABOUT = {
  eyebrow: "About us",
  title: "Not just a gym. A training",
  titleAccent: "standard.",
  body: "Indian Health Club exists for people who want structure, intensity, and a room that pushes back. Whether you are stepping in for the first time or chasing a heavier lift, our coaches keep the plan clear and the work honest.",
  chipHint: "Tap a facility to explore",
  facilities: [
    {
      title: "Strength floor",
      detail:
        "Racks, free weights, and progressive programming for real strength gains. Built for compound lifts, accessory work, and long-term progression — not random machine hopping.",
      bullets: ["Olympic & free-weight focus", "Progressive weekly plans", "Form-first coaching cues"],
    },
    {
      title: "Cardio & conditioning",
      detail:
        "Treadmills, cycles, and finishers that raise work capacity. Pair conditioning with strength so fat loss and stamina improve without burning out.",
      bullets: ["HIIT & steady-state options", "Conditioning finishers", "Recovery-aware pacing"],
    },
    {
      title: "Personal training",
      detail:
        "Gold and Diamond coaching tracks for form, pace, and accountability. 1:1 sessions keep you honest when motivation dips.",
      bullets: ["Gold & Diamond tracks", "Custom weekly structure", "Check-ins that track progress"],
    },
    {
      title: "Ladies membership",
      detail:
        "Special membership rates so more women can start and stay consistent — with coaching that respects comfort, goals, and form.",
      bullets: ["Special membership rates", "Technique-focused guidance", "Welcoming floor culture"],
    },
  ],
};

export const PROGRAMS = [
  {
    title: "Strength Training",
    detail:
      "Compound lifts, progressive overload, and accessory work that builds muscle you can keep. Ideal if you want measurable strength — not just sweat.",
    outcomes: [
      "Heavier lifts week to week",
      "Muscle you keep",
      "Solid technique cues",
      "Progressive weekly blocks",
    ],
    includes: ["Free-weight focus", "Coach floor support", "Form checkpoints"],
    sessionHint: "4–5 sessions / week",
    bestFor: "Beginners to intermediates chasing size & strength",
    href: "#pricing",
  },
  {
    title: "Fat Loss Coaching",
    detail:
      "Strength plus conditioning with a clear weekly rhythm — not random grind sessions. We protect muscle while you drop fat.",
    outcomes: [
      "Sustainable deficit habits",
      "Muscle retention",
      "Energy that lasts",
      "Clear weekly structure",
    ],
    includes: ["Strength + conditioning mix", "Pacing guidance", "Habit check-ins"],
    sessionHint: "3–5 sessions / week",
    bestFor: "Anyone stuck in stop-start diets",
    href: "#contact",
  },
  {
    title: "Gold Personal Training",
    detail:
      "1:1 coaching focused on form, consistency, and a plan you will actually follow. Perfect first step into personal training.",
    outcomes: [
      "Custom weekly plan",
      "Form corrections",
      "Accountability",
      "Faster confidence on the floor",
    ],
    includes: ["1:1 sessions", "Program design", "Progress notes"],
    sessionHint: "Flexible with coach",
    bestFor: "Members who want guided structure",
    href: "#pricing",
  },
  {
    title: "Diamond Personal Training",
    detail:
      "Higher-intensity 1:1 coaching for faster transformation — tighter feedback loops and stronger session focus.",
    outcomes: [
      "Faster feedback loops",
      "Performance focus",
      "Transformation runway",
      "Priority coaching attention",
    ],
    includes: ["1:1 high-touch coaching", "Performance tracking", "Recovery cues"],
    sessionHint: "Higher weekly touchpoints",
    bestFor: "Athletes & serious recomposition goals",
    href: "#pricing",
  },
  {
    title: "Ladies Programs",
    detail:
      "Welcoming coaching and special membership pricing designed for consistency, confidence, and long-term habit building.",
    outcomes: [
      "Comfortable start",
      "Special membership rates",
      "Technique confidence",
      "Supportive floor culture",
    ],
    includes: ["Ladies special pricing", "Form-first coaching", "Flexible start plans"],
    sessionHint: "Train at your pace",
    bestFor: "Women starting or restarting training",
    href: "#pricing",
  },
  {
    title: "Beginner Path",
    detail:
      "Guided first weeks on the floor so you learn machines, form, and routine with confidence — no guessing, no intimidation.",
    outcomes: [
      "Floor orientation",
      "Simple weekly routine",
      "Safe progression",
      "Zero guesswork start",
    ],
    includes: ["Machine walkthrough", "Starter program", "Coach intro"],
    sessionHint: "First 2–4 weeks guided",
    bestFor: "First-time gym goers",
    href: "#contact",
  },
];

export type PriceRow = {
  package: string;
  price: string;
  compare?: string;
  perks?: string[];
  extras?: string[];
  blurb?: string;
  popular?: boolean;
};

export type PriceTab = {
  id: string;
  label: string;
  badge?: string;
  rows: PriceRow[];
};

export const PRICING: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  support: string;
  note: string;
  tabs: PriceTab[];
} = {
  eyebrow: "Membership plans",
  title: "Choose your",
  titleAccent: "plan",
  support:
    "Flexible membership and personal training options. No hidden fees — pick a plan, then WhatsApp to join.",
  note: "Fees once paid are non-refundable. Confirm your plan when you join.",
  tabs: [
    {
      id: "general",
      label: "Membership",
      rows: [
        {
          package: "1 Month",
          price: "₹1,799",
          blurb: "Try the floor, learn the rhythm, decide with clarity.",
          perks: ["Full gym access", "Coach guidance on the floor", "Locker use"],
          extras: ["Walkthrough on request", "WhatsApp plan help"],
        },
        {
          package: "3 Months",
          price: "₹4,999",
          popular: true,
          blurb: "Enough runway to build habit and see first real changes.",
          perks: ["Full gym access", "Best value for a solid start", "Progress check-in"],
          extras: ["Form refresh session", "Goal mapping on join"],
        },
        {
          package: "6 Months",
          price: "₹7,999",
          blurb: "Stay consistent through the season with lower monthly cost.",
          perks: ["Full gym access", "Season consistency", "Priority walkthrough"],
          extras: ["Mid-plan check-in", "Conditioning tips"],
        },
        {
          package: "1 Year",
          price: "₹10,999",
          blurb: "Lowest monthly equivalent for members who are in for the long game.",
          perks: ["Full gym access", "Lowest monthly equivalent", "Long-term coaching support"],
          extras: ["Quarterly progress chat", "Priority coach questions"],
        },
      ],
    },
    {
      id: "ladies",
      label: "Ladies Special",
      badge: "Special membership rates",
      rows: [
        {
          package: "1 Month",
          price: "₹1,299",
          compare: "₹1,799",
          blurb: "A welcoming start with special pricing.",
          perks: ["Full gym access", "Ladies special pricing", "Form-first coaching"],
          extras: ["Comfort-first intro", "Flexible start timing"],
        },
        {
          package: "3 Months",
          price: "₹3,499",
          compare: "₹4,999",
          popular: true,
          blurb: "Build confidence and consistency without rushing.",
          perks: ["Full gym access", "Ladies special pricing", "Consistency plan"],
          extras: ["Technique focus", "Habit check-in"],
        },
        {
          package: "6 Months",
          price: "₹5,599",
          compare: "₹7,999",
          blurb: "Longer runway at a stronger ladies rate.",
          perks: ["Full gym access", "Ladies special pricing", "Coach support"],
          extras: ["Progress chat", "Optional PT upgrade path"],
        },
        {
          package: "1 Year",
          price: "₹7,699",
          compare: "₹10,999",
          blurb: "Best yearly ladies value for members who stay.",
          perks: ["Full gym access", "Ladies special pricing", "Best yearly value"],
          extras: ["Quarterly check-in", "Long-term support"],
        },
      ],
    },
    {
      id: "pt",
      label: "Personal Training",
      rows: [
        {
          package: "1 Month",
          price: "Gold ₹5,000 · Diamond ₹6,000",
          blurb: "1:1 coaching to lock form and weekly structure fast.",
          perks: ["1:1 coaching", "Custom weekly plan", "Form focus"],
          extras: ["Gold or Diamond track", "Session notes"],
        },
        {
          package: "3 Months",
          price: "Gold ₹14,000 · Diamond ₹16,000",
          popular: true,
          blurb: "Enough time for measurable strength or recomposition wins.",
          perks: ["1:1 coaching", "Progress check-ins", "Faster results runway"],
          extras: ["Performance tracking", "Recovery cues"],
        },
        {
          package: "6 Months",
          price: "Gold ₹26,000 · Diamond ₹30,000",
          blurb: "Long transformation runway with priority coaching attention.",
          perks: ["1:1 coaching", "Longer transformation plan", "Priority scheduling"],
          extras: ["Milestone reviews", "Plan adjustments"],
        },
      ],
    },
  ],
};

export const TRAINERS = [
  {
    name: "Coach Aryan",
    role: "Head Strength Coach",
    years: "8+ years",
    focus: "Powerlifting · Hypertrophy",
    specialties: ["Strength programming", "Competition prep", "Form clinics"],
    bio: "Builds progressive strength blocks for beginners through intermediates — clear cues, honest loading, no ego lifts.",
    quote: "Strength is a skill. We train it like one.",
    initials: "CA",
  },
  {
    name: "Coach Meera",
    role: "Personal Training Lead",
    years: "6+ years",
    focus: "Ladies coaching · Technique",
    specialties: ["Ladies pathways", "Technique resets", "Habit coaching"],
    bio: "Helps members feel confident on the floor from week one — especially women restarting training after a long break.",
    quote: "Clear form first. Then we load the bar.",
    initials: "CM",
  },
  {
    name: "Coach Rohan",
    role: "Conditioning Coach",
    years: "7+ years",
    focus: "Fat loss · Athlete prep",
    specialties: ["Fat-loss conditioning", "Work capacity", "Athlete finishers"],
    bio: "Pairs conditioning with strength so fat loss stays sustainable — intensity with a plan, not random burnouts.",
    quote: "Intensity without a plan is just noise.",
    initials: "CR",
  },
  {
    name: "Coach Priya",
    role: "Mobility & Recovery",
    years: "5+ years",
    focus: "Flexibility · Longevity",
    specialties: ["Mobility flows", "Pain-aware training", "Warm-up systems"],
    bio: "Keeps members training longer by fixing the boring fundamentals — mobility, warm-ups, and recovery that stick.",
    quote: "Move well so you can train hard for years.",
    initials: "CP",
  },
];

export const TRANSFORMATIONS = [
  {
    name: "Rahul M.",
    age: 28,
    duration: "12 weeks",
    focus: "Fat loss + strength",
    trainedBy: "Gold P.T.",
    tag: "Cut + keep muscle",
    highlight: "−8 kg · +35% strength",
    metrics: [
      { label: "Weight", from: "82 kg", to: "74 kg", delta: "−8 kg" },
      { label: "Waist", from: "36 in", to: "32 in", delta: "−4 in" },
      { label: "Squat", from: "60 kg", to: "100 kg", delta: "+40 kg" },
      { label: "Sessions", from: "2×/wk", to: "5×/wk", delta: "Habit locked" },
    ],
    quote:
      "I finally stopped guessing. Clear sessions, heavier lifts, and clothes that fit again.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    name: "Sneha K.",
    age: 24,
    duration: "16 weeks",
    focus: "Body recomposition",
    trainedBy: "Ladies + coaching",
    tag: "Confidence rebuild",
    highlight: "2× → 5× weekly · steadier energy",
    metrics: [
      { label: "Energy", from: "Afternoon crash", to: "Steady day", delta: "Stable" },
      { label: "Consistency", from: "2×/wk", to: "5×/wk", delta: "+3 days" },
      { label: "Hip thrust", from: "New", to: "Confident", delta: "Form solid" },
      { label: "Sleep", from: "Irregular", to: "Better", delta: "Improved" },
    ],
    quote:
      "The floor felt intimidating at first. Now it feels like my routine — and I look forward to it.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    name: "Amit D.",
    age: 34,
    duration: "10 weeks",
    focus: "Muscle gain",
    trainedBy: "Diamond P.T.",
    tag: "Lean mass push",
    highlight: "+5 kg · bench +22.5 kg",
    metrics: [
      { label: "Weight", from: "68 kg", to: "73 kg", delta: "+5 kg" },
      { label: "Bench", from: "40 kg", to: "62.5 kg", delta: "+22.5" },
      { label: "Arms", from: "12.5 in", to: "13.8 in", delta: "+1.3 in" },
      { label: "Protein habit", from: "Guessing", to: "On plan", delta: "Dialed" },
    ],
    quote:
      "Diamond coaching kept me accountable. Numbers moved every month — not just the scale.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    name: "Pooja R.",
    age: 31,
    duration: "14 weeks",
    focus: "Strength + posture",
    trainedBy: "General + PT",
    tag: "Pain → power",
    highlight: "Back pain rare · deadlift confident",
    metrics: [
      { label: "Back pain", from: "Frequent", to: "Rare", delta: "Relief" },
      { label: "Deadlift", from: "Avoided", to: "Confident", delta: "Loaded" },
      { label: "Posture", from: "Desk slump", to: "Upright", delta: "Stronger" },
      { label: "Walk energy", from: "Tired", to: "Easy", delta: "Daily" },
    ],
    quote:
      "Form-first coaching changed everything. I feel stronger in daily life, not only in the gym.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
];

export const MARQUEE_ITEMS = [
  "Indian Health Club",
  "Gold Coaching",
  "Diamond Coaching",
  "Strength Floor",
  "Ladies Membership",
  "Personal Training",
  "Results First",
  "Train Daily",
];

export const FAQS = [
  {
    q: "Where is Indian Health Club?",
    a: "We train in Beed, Maharashtra. WhatsApp or call 9504414141 for directions and the fastest way to visit.",
  },
  {
    q: "What membership options do you offer?",
    a: "General membership from 1 month to 1 year, Ladies special rates, and Gold / Diamond personal training packages. See the Plans section for current prices.",
  },
  {
    q: "Are beginners welcome?",
    a: "Yes. We help new members learn the floor, basic form, and a simple weekly routine so you never feel lost on day one.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. Gold and Diamond personal training packages are available in 1-month, 3-month, and 6-month options.",
  },
  {
    q: "What is your refund policy?",
    a: "Membership fees once paid are non-refundable. Ask any questions before you join — we would rather clarify first.",
  },
  {
    q: "What are your opening hours?",
    a: "Call or WhatsApp 9504414141 for today’s schedule and the best time to visit for a walkthrough.",
  },
];

export const CONTACT = {
  addressLine: "Beed, Maharashtra",
  hours: "WhatsApp us for today’s opening hours and visit timing",
  mapNote: "Google Maps embed placeholder — pin appears once the full street address is confirmed.",
};
