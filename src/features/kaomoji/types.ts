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
