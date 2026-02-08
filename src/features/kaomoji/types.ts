export type KaomojiCollectionItem = {
  kaomoji: string;
  tags?: string[];
};

export type KaomojiCollectionGroup = {
  title: string;
  items: KaomojiCollectionItem[];
};

export type KaomojiHeroProps = {
  title: string;
  kaomoji: string;
  subtitle: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export type KaomojiWhatProps = {
  heading: string;
  intro: string;
  usageHeading: string;
  usageItems: string[];
  typesHeading: string;
  types: Array<{
    title: string;
    description: string;
    example: string;
  }>;
  featuresHeading: string;
  features: Array<{
    symbol: string;
    title: string;
    description: string;
  }>;
};

export type KaomojiWhyProps = {
  heading: string;
  subheading: string;
  guideHeading: string;
  guides: Array<{
    title: string;
    bullets: string[];
    recommend: string;
  }>;
  cultureHeading: string;
  cultureBody: string;
  cultureCards: Array<{ title: string; description: string }>;
  tipsHeading: string;
  tips: Array<{ title: string; body: string; example: string }>;
};

export type KaomojiFaqItem = {
  question: string;
  answer: string;
};

export type KaomojiFaqProps = {
  heading: string;
  subheading?: string;
  items: KaomojiFaqItem[];
};

export type KaomojiGroupListProps = {
  groups: KaomojiCollectionGroup[];
  searchPlaceholder?: string;
  allLabel?: string;
  groupCountSuffix?: string;
  totalPrefix?: string;
  totalSuffix?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};

export type HomeHeroContent = {
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  badges: string[];
  sample: {
    title: string;
    hint: string;
    rows: Array<{ kaomoji: string; label: string }>;
  };
};

export type HomeFeaturesContent = {
  heading: string;
  subheading: string;
  items: Array<{
    key: "copy" | "categories" | "mobile";
    title: string;
    description: string;
  }>;
};

export type HomeHowToUseContent = {
  heading: string;
  subheading: string;
  steps: Array<{
    key: "choose" | "click" | "paste" | "enjoy";
    title: string;
    description: string;
    step: string;
    visual?: string;
  }>;
};

export type HomeCultureHistoryContent = {
  heading: string;
  leftHeading: string;
  body: string;
  featuresHeading: string;
  features: string[];
  timelineHeading: string;
  timeline: Array<{ label: string; kaomoji: string }>;
};

export type HomeFaqContent = {
  heading: string;
  items: Array<{ question: string; answer: string }>;
};

export type HomeCtaContent = {
  heading: string;
  description: string;
  example: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};
