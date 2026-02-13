import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = { title: "お墓顔文字一覧（Kaomoji）｜RIP・追悼の表現をコピペ", description: "お墓顔文字をまとめて掲載。", ...withCanonical("/ohaka-kaomoji") };
export const ohakaKaomojiHeroContent: KaomojiHeroProps = { title: "お墓顔文字一覧", kaomoji: "†RIP†", subtitle: "追悼の表現【コピペ簡単】", description: "お墓顔文字は、追悼や哀悼の気持ちを表現するKaomoji。", primaryCta: { href: "#list", label: "顔文字を探す" }, secondaryCta: { href: "/", label: "ホームへ" } };
export const ohakaKaomojiWhatContent: KaomojiWhatProps = { heading: "お墓顔文字とは？", intro: "追悼の気持ちを表現。", usageHeading: "使えるシーン", usageItems: ["追悼", "哀悼"], typesHeading: "タイプ", types: [{ title: "RIP", description: "安らかに。", example: "例：†RIP†" }], featuresHeading: "特徴", features: [{ symbol: "†", title: "十字架", description: "追悼の印。" }] };
export const ohakaKaomojiWhyContent: KaomojiWhyProps = { heading: "使い方", subheading: "哀悼の気持ちを込めて。", guideHeading: "ガイド", guides: [{ title: "追悼時", bullets: ["丁寧に"], recommend: "おすすめ：†RIP†" }], cultureHeading: "文化", cultureBody: "RIPは「Rest In Peace」の略。", cultureCards: [{ title: "追悼", description: "安らかに。" }], tipsHeading: "例", tips: [{ title: "RIP＋メッセージ", body: "哀悼の意を。", example: "例：†RIP† ご冥福をお祈りします" }] };
export const ohakaKaomojiFaqContent: KaomojiFaqProps = { heading: "FAQ", subheading: "お墓顔文字。", items: [{ question: "コピー方法は？", answer: "コピーアイコンを押すだけ。" }] };
export const ohakaKaomojiGroups: KaomojiCollectionGroup[] = [{ title: "RIP", items: uniq(["†RIP†", "🙏RIP🙏", "✝RIP✝"]).map((kaomoji) => ({ kaomoji, tags: ["お墓", "RIP"] })) }];
export const ohakaKaomojiPlainText: string = uniq(ohakaKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
