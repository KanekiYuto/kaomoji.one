export type KaomojiCategoryLinkItem = {
  href: string;
  label: string;
  sample: string;
  description: string;
};

export type KaomojiCategoryGroup = {
  title: string;
  items: KaomojiCategoryLinkItem[];
  defaultOpen?: boolean;
};

export const CATEGORY_GROUPS: KaomojiCategoryGroup[] = [
  {
    title: "感情表現",
    items: [
      {
        href: "/cute-kaomoji",
        label: "可愛い",
        sample: "٩꒰｡•◡•｡꒱۶",
        description: "もこもこ・動物・ハート系など、ふわっと可愛い顔文字まとめ。",
      },
      {
        href: "/kawaii-kaomoji",
        label: "可愛い",
        sample: "(｡♥‿♥｡)",
        description: "可愛い 顔 文字（kawaii）をまとめてコピペ。ハート・動物・照れ顔など。",
      },
      {
        href: "/cry-kaomoji",
        label: "泣く",
        sample: "(ಥ﹏ಥ)",
        description: "うるうる・えーん・大泣きまで。気持ちに合う泣き顔文字をコピペ。",
      },
      {
        href: "/gougoku-kaomoji",
        label: "号泣",
        sample: "(༎ຶ⌑༎ຶ)",
        description: "激しく泣く・大泣き表情。絵文字付き・かわいい号泣・シンプル系をコピペ。",
      },
      {
        href: "/doya-kaomoji",
        label: "ドヤ顔",
        sample: "(｀・ω・´)✧",
        description:
          "得意げ・キメ顔で自信をアピール。かわいいドヤ顔からキリッとした決め顔までコピペ。",
      },
      {
        href: "/kimoi-kaomoji",
        label: "キモい",
        sample: "(ಠ_ಠ)",
        description:
          "気持ち悪い・ドン引き・ゾワゾワ（ホラー）まで。キモい顔文字をまとめてコピペ。",
      },
      {
        href: "/iphone-kaomoji",
        label: "iPhone",
        sample: "(^_^)",
        description: "iPhoneでコピペしやすい顔文字まとめ。LINE/iMessage/SNSですぐ使える定番中心。",
      },
      {
        href: "/yumekawa-kaomoji",
        label: "ゆめかわ",
        sample: "꒰⑅•ᴗ•⑅꒱",
        description:
          "夢かわいい・パステル・天使・キラキラ。ふんわり可愛いゆめかわ顔文字をまとめてコピペ。",
      },
      {
        href: "/fuwafuwa-kaomoji",
        label: "ふわふわ",
        sample: "( ⁎ᵕᴗᵕ⁎ )",
        description: "癒し・優しさ・ほんわか。ふわふわ系の顔文字をまとめてコピペ。",
      },
      {
        href: "/mofumofu-kaomoji",
        label: "もふもふ",
        sample: "(ﾉ)•ω•(ヾ)",
        description:
          "毛並み・ぬいぐるみ感をふんわり表現。もふもふ・もこもこ系の顔文字をまとめてコピペ。",
      },
      {
        href: "/biyoon-kaomoji",
        label: "びよーん",
        sample: "o<(´ω`*)>o",
        description: "伸ばす・引っ張る・もちもち。びよーん系の動作顔文字をまとめてコピペ。",
      },
    ],
  },
  {
    title: "キャラクター系",
    items: [
      {
        href: "/character-kaomoji",
        label: "キャラクター系",
        sample: "ฅ(^^ฅ)",
        description:
          "動物（うさぎ/くま）や特殊・装飾まで。キャラクター顔文字をまとめてコピペ。",
      },
      {
        href: "/anpanman-kaomoji",
        label: "アンパンマン",
        sample: "(● ̍̑⚈ ̍̑●)",
        description:
          "アンパンマンの丸い顔と赤いほっぺが特徴の顔文字。元気・可愛い・アクション系をまとめてチェック。",
      },
      {
        href: "/animal-kaomoji",
        label: "動物",
        sample: "(=^･ω･^=)",
        description:
          "猫・犬・熊・兎など動物の顔文字をまとめてチェック。かわいい動物の表情をコピペできます。",
      },
      {
        href: "/kuma-kaomoji",
        label: "くま",
        sample: "ʕ•ᴥ•ʔ",
        description:
          "くま顔文字まとめ。定番（ʕ•ᴥ•ʔ）・かわいい・表情・アクションまでコピペ。",
      },
      {
        href: "/kitsune-kaomoji",
        label: "きつね",
        sample: "^.,.^",
        description:
          "きつね顔文字まとめ。かわいい・いたずら・🦊絵文字付き・和風までコピペ。",
      },
      {
        href: "/momonga-kaomoji",
        label: "モモンガ",
        sample: "꒰՞o̴̶̷̤ᾥo̴̶̷̤՞꒱",
        description:
          "モモンガ顔文字まとめ。かわいい・表情・滑空（飛ぶ）・ユニークまでコピペ。",
      },
      {
        href: "/karasu-kaomoji",
        label: "カラス",
        sample: "🐦‍⬛",
        description:
          "カラス顔文字まとめ。絵文字系・シンプル・かわいい・鳴き声までコピペ。",
      },
      {
        href: "/tanuki-kaomoji",
        label: "たぬき/狸/タヌキ",
        sample: "₍ᐢ⓿ᴥ⓿ᐢ₎",
        description:
          "たぬき/狸/タヌキ顔文字まとめ。基本・かわいい・シンプル・デコまでコピペ。",
      },
      {
        href: "/tako-kaomoji",
        label: "たこ",
        sample: "𐂠(ᵒ⊙꒳ᵒ)𐂠",
        description:
          "たこ顔文字まとめ。ASCII art・絵文字付き・基本・特殊記号までコピペ。",
      },
      {
        href: "/takoyaki-kaomoji",
        label: "たこ焼き",
        sample: "(๑´ڡ`๑)",
        description:
          "たこ焼き顔文字まとめ。基本・絵文字付き・かわいい・デコまでコピペ。",
      },
      {
        href: "/ahiru-kaomoji",
        label: "アヒル",
        sample: "(・Θ・)",
        description:
          "アヒル顔文字まとめ。基本・かわいい・シンプル・デコまでコピペ。",
      },
      {
        href: "/tori-kaomoji",
        label: "鳥",
        sample: "(・⊝・)",
        description:
          "鳥顔文字まとめ。シンプル・かわいい・ひよこ・飛ぶ鳥までコピペ。",
      },
      {
        href: "/thanks-kaomoji",
        label: "ありがとう/感謝/サンキュー",
        sample: "ｱﾘｶﾞﾄ♡(｡･･｡)",
        description:
          "ありがとう/感謝/サンキュー顔文字まとめ。ありがとう系・感謝系・あざす系・Thank you系までコピペ。",
      },
      {
        href: "/hage-kaomoji",
        label: "ハゲ",
        sample: "✨彡⌒ミ(´･ω･`)✨",
        description:
          "ハゲ顔文字まとめ。可愛いハゲ・シンプルなハゲ・彡⌒ミスタイル・テキスト入りハゲまでコピペ。",
      },
      {
        href: "/ojisan-kaomoji",
        label: "おじさん",
        sample: "( ´灬` )",
        description:
          "おじさん顔文字まとめ。絵文字付き・シンプル・かわいい・表情豊かまでコピペ。",
      },
      {
        href: "/shisa-kaomoji",
        label: "シーサー",
        sample: "꒰(՞..◜ヮ◝..՞)꒱",
        description:
          "シーサー顔文字まとめ。基本的なシーサー・可愛いシーサー・勇ましいシーサー・眠いシーサーまでコピペ。",
      },
      {
        href: "/doraemon-kaomoji",
        label: "ドラえもん",
        sample: "((=ﾟДﾟ=)ﾉ",
        description:
          "ドラえもん顔文字まとめ。可愛いドラえもん・ASCII アートのドラえもん・シンプルなドラえもん・秘密道具を使うドラえもんまでコピペ。",
      },
      {
        href: "/my-melody-kaomoji",
        label: "マイメロ",
        sample: "ᐡ o̴̶̷ ࿁ o̴̶̷ ᐡ",
        description:
          "マイメロ顔文字まとめ。基本系・可愛い系・装飾系・絵文字組合系までコピペ。",
      },
      {
        href: "/miffy-kaomoji",
        label: "ミッフィー",
        sample: "(・×・)",
        description:
          "ミッフィー顔文字まとめ。基本型・点型・表情変化・アクションまでコピペ。",
      },
      {
        href: "/kirby-kaomoji",
        label: "カービィ",
        sample: "( ⊃'-'⊂ )",
        description:
          "カービィ顔文字まとめ。基本的なカービィ・ポヨポヨ系・アクション系・感情表現系までコピペ。",
      },
      {
        href: "/kaeru-kaomoji",
        label: "カエル",
        sample: "Θ_Θ",
        description:
          "カエル顔文字まとめ。ASCII Art・基本的なカエル・可愛い系・絵文字入りまでコピペ。",
      },
      {
        href: "/rabbit-kaomoji",
        label: "うさぎ/ウサギ/兎",
        sample: "₍ᐢ.ˬ.ᐢ₎",
        description:
          "うさぎ/ウサギ/兎顔文字まとめ。基本うさぎ顔文字・ハート付きうさぎ・装飾・絵文字風・複雑・組み合わせまでコピペ。",
      },
      {
        href: "/azarashi-kaomoji",
        label: "あざらし",
        sample: "(´ω` っ)З",
        description:
          "あざらし顔文字まとめ。基本的な海豹・可愛い表情・泳ぐ・水中・嬉しい・幸せまでコピペ。",
      },
      {
        href: "/tora-kaomoji",
        label: "虎",
        sample: "ฅ(`ω´)ฅ",
        description:
          "虎顔文字まとめ。基本・かわいい・テキスト系・絵文字付きまでコピペ。",
      },
      {
        href: "/gorira-kaomoji",
        label: "ゴリラ",
        sample: "( -᷅ ̫̈-᷄ )",
        description:
          "ゴリラ顔文字まとめ。基本・かわいい・テキスト系・絵文字付きまでコピペ。",
      },
      {
        href: "/horse-kaomoji",
        label: "馬",
        sample: "𓃗 ⋆",
        description:
          "馬顔文字まとめ。シンプル 𓃗・絵文字付き 🐴・チェス・特殊文字 ♘までコピペ。",
      },
      {
        href: "/hiyoko-kaomoji",
        label: "ひよこ",
        sample: "(・Θ・)",
        description:
          "ひよこ顔文字まとめ。基本・かわいい・デコ・絵文字付きまでコピペ。",
      },
      {
        href: "/hamusutaa-kaomoji",
        label: "ハムスター",
        sample: "ʕ•ᴥ•ʔ",
        description:
          "ハムスター顔文字まとめ。基本・かわいい・シンプル・デコまでコピペ。",
      },
      {
        href: "/azasu-kaomoji",
        label: "あざーす/あざす/アザース",
        sample: "🙏(・∀・)ﾉぁざーすっ♪",
        description:
          "あざーす/あざす/アザース顔文字まとめ。基本・かわいい・敬礼・お辞儀までコピペ。",
      },
      {
        href: "/baymax-kaomoji",
        label: "ベイマックス",
        sample: "( ●－● )💙",
        description:
          "ベイマックス顔文字まとめ。アスキーアート・シンプル・かわいい・表情豊かまでコピペ。",
      },
      {
        href: "/cat-kaomoji",
        label: "猫",
        sample: "ฅ^•ω•^ฅ",
        description:
          "猫/ねこ/ネコ顔文字まとめ。定番・特殊文字・ニャー・招き猫・ハート系までコピペ。",
      },
      {
        href: "/dog-kaomoji",
        label: "犬",
        sample: "U・ᴥ・U",
        description:
          "犬顔文字まとめ。基本・ワンワン（鳴き声）・特殊文字・可愛い系までコピペ。",
      },
      {
        href: "/buta-kaomoji",
        label: "豚",
        sample: "(๑•(oo)•๑)",
        description:
          "豚顔文字まとめ。かわいい・シンプル・表情豊か・AA風までコピペ。",
      },
      {
        href: "/fish-kaomoji",
        label: "魚",
        sample: "∈(ﾟ◎ﾟ)∋",
        description:
          "魚顔文字まとめ。基本の魚・特殊文字🐟・金魚・フグ🐡までコピペ。",
      },
      {
        href: "/kani-kaomoji",
        label: "カニ",
        sample: "(V)('ω')(V)",
        description:
          "カニ顔文字まとめ。かわいい・チョキチョキ・はさみ・絵文字付きまでワンクリックでコピペ。",
      },
      {
        href: "/kurage-kaomoji",
        label: "クラゲ",
        sample: "(o🪼'▽')o🪼",
        description:
          "クラゲ顔文字まとめ。ぷかぷか・デコ・絵文字付き・かわいいまでコピペ。",
      },
      {
        href: "/same-kaomoji",
        label: "サメ",
        sample: "(^^^)",
        description:
          "サメ顔文字まとめ。かわいい・怖い・泳ぐ・ASCIIアート・🦈絵文字までコピペ。",
      },
      {
        href: "/shirasu-kaomoji",
        label: "しらす",
        sample: "(｡∀ﾟ)",
        description:
          "しらす顔文字まとめ。シンプル・動き・キラキラ・海・群れまでワンクリックでコピペ。",
      },
      {
        href: "/nyaa-kaomoji",
        label: "ニャー",
        sample: "ฅ•ω•ฅﾆｬｰ",
        description:
          "ニャー/ニャンの鳴き声つき顔文字まとめ。挨拶・感情・動作・可愛いにゃーまでコピペ。",
      },
      {
        href: "/chiikawa-kaomoji",
        label: "ちいかわ",
        sample: "(՞ᵕ՞)",
        description:
          "ちいかわ風の顔文字まとめ。嬉しい・悲しい（わァ…）・愛などを検索してコピペ。",
      },
    ],
  },
  {
    title: "スタイル別",
    items: [
      {
        href: "/star-kaomoji",
        label: "星",
        sample: "⭐",
        description:
          "星顔文字まとめ。絵文字付き・かわいい・基本・デコ・特殊までコピペ。",
      },
      {
        href: "/tsuki-kaomoji",
        label: "月",
        sample: "(☾_☾)",
        description:
          "月顔文字まとめ。基本・かわいい・シンプル・デコまでコピペ。",
      },
      {
        href: "/nagareboshi-kaomoji",
        label: "流れ星",
        sample: "｡･*･:≡( 「ε:)ﾉ💫",
        description:
          "流れ星顔文字まとめ。可愛い流れ星・シンプル流れ星・願い事流れ星・夜空流れ星までコピペ。",
      },
      {
        href: "/kirakira-kaomoji",
        label: "キラキラ/キラッ☆/キラーン",
        sample: "॑⸜(* ॑꒳ ॑* )⸝⋆*",
        description:
          "キラキラ/キラッ☆/キラーン顔文字まとめ。基本・かわいい・デコ・シンプルまでコピペ。",
      },
      {
        href: "/pikapika-kaomoji",
        label: "ピカピカ",
        sample: "✧(°∀°)✧",
        description:
          "ピカピカ顔文字まとめ。シンプル系・かわいい系・ひらめき・閃き系・絵文字付きまでコピペ。",
      },
      {
        href: "/kigou-kaomoji",
        label: "記号",
        sample: "✧٩(ˊᗜˋ*)و✧",
        description:
          "記号顔文字まとめ。かわいい記号・シンプル記号・絵文字ミックス・特殊記号までコピペ。",
      },
      {
        href: "/kiraan-kaomoji",
        label: "キラーン",
        sample: "( ✧Д✧) ｷﾗｰﾝ",
        description:
          "キラーン顔文字まとめ。基本的なキラーン・可愛いキラキラ・猫のキラーン・アクション系までコピペ。",
      },
      {
        href: "/line-kaomoji",
        label: "線/ライン",
        sample: "＿＿＿",
        description:
          "線/ライン顔文字まとめ。基本の区切り線・切り取り線✂・点線・破線・装飾ライン・飾り線までコピペ。",
      },
      {
        href: "/ribbon-kaomoji",
        label: "リボン",
        sample: "🎀",
        description:
          "リボン顔文字まとめ。リボン絵文字・特殊文字・記号・ハート付きまでコピペ。",
      },
      {
        href: "/ryosangata-kaomoji",
        label: "量産型",
        sample: "ᐡ ̫ ᐡ",
        description:
          "量産型顔文字まとめ。基本の量産型・装飾付き・動物系・ハート系までコピペ。",
      },
      {
        href: "/jirai-kaomoji",
        label: "地雷系",
        sample: "ᐡ ̫ ᐡ",
        description:
          "地雷系顔文字まとめ。病みかわ・ゴシック・量産型寄り・メンヘラ系までコピペ。",
      },
      {
        href: "/menhera-kaomoji",
        label: "メンヘラ",
        sample: "(🎀ㅇ-ㅇ)🔪",
        description:
          "メンヘラ顔文字まとめ。かわいい・シンプル・病み系・ヤンデレ風までコピペ。",
      },
      {
        href: "/glasses-kaomoji",
        label: "メガネ",
        sample: "(-□д□-)✧",
        description:
          "メガネ顔文字まとめ。基本的なメガネ・メガネを押す・調整・サングラス・可愛いメガネまでコピペ。",
      },
      {
        href: "/gyaru-kaomoji",
        label: "ギャル",
        sample: "(๑ơ ₃ ơ)✨₹˝ｬʓ₹˝ｬʓ",
        description:
          "ギャル顔文字まとめ。基本・かわいい・デコ・ハートまでコピペ。",
      },
      {
        href: "/hengao-kaomoji",
        label: "変顔",
        sample: "( ᐛ )",
        description:
          "変顔顔文字まとめ。基本の変顔・きもかわいい・ネタ・ミーム系・不気味・きもいまでコピペ。",
      },
      {
        href: "/homoo-kaomoji",
        label: "ホモォ",
        sample: "┌(┌^o^)┐ﾎﾓｫ…",
        description:
          "ホモォ顔文字まとめ。シンプル・かわいい・動き・感情までコピペ。",
      },
      {
        href: "/juujika-kaomoji",
        label: "十字架",
        sample: "†",
        description:
          "十字架顔文字まとめ。シンプルな十字架・可愛い十字架・祈りの十字架・装飾された十字架までコピペ。",
      },
      {
        href: "/oukan-kaomoji",
        label: "王冠",
        sample: "👑",
        description:
          "王冠顔文字まとめ。シンプル・かわいい・装飾・特殊記号までコピペ。",
      },
      {
        href: "/america-kaomoji",
        label: "アメリカ",
        sample: "アメリカ🇺🇸",
        description:
          "アメリカ顔文字まとめ。シンプル・かわいい・ハッピー・笑いまでコピペ。",
      },
      {
        href: "/alphabet-kaomoji",
        label: "アルファベット",
        sample: "💕 :D 💕",
        description:
          "アルファベット顔文字まとめ。かわいい・シンプル・メアド用・英語スタイルまでコピペ。",
      },
    ],
  },
  {
    title: "シーン",
    items: [
      {
        href: "/aisatsu-kaomoji",
        label: "挨拶",
        sample: "(｡･ω･)ﾉﾞ",
        description: "おはよう・こんにちは・さようなら。挨拶の顔文字をまとめてコピペ。",
      },
      {
        href: "/ohayou-kaomoji",
        label: "おはよう",
        sample: "(｡･ω･)ﾉﾞ",
        description: "おはよう・おはよー・グッドモーニング。朝の挨拶顔文字をまとめてコピペ。",
      },
      {
        href: "/konbanwa-kaomoji",
        label: "こんばんは",
        sample: "(*´∇｀)ﾉ",
        description: "こんばんは・こんばんわ・グッドイブニング。夜の挨拶顔文字をまとめてコピペ。",
      },
      {
        href: "/oyasumi-kaomoji",
        label: "おやすみ",
        sample: "(´-ω-`)",
        description: "おやすみなさい・おやすみー・グッドナイト。就寝前の挨拶顔文字をまとめてコピペ。",
      },
      {
        href: "/yoroshiku-kaomoji",
        label: "よろしく",
        sample: "(๑•̀ㅂ•́)و✧",
        description: "よろしく・よろしくお願いします。挨拶の顔文字をまとめてコピペ。",
      },
      {
        href: "/arigatou-kaomoji",
        label: "ありがとう",
        sample: "ｱﾘｶﾞﾄ♡(｡･･｡)",
        description: "ありがとう・感謝・サンキュー。感謝の顔文字をまとめてコピペ。",
      },
      {
        href: "/gomen-kaomoji",
        label: "ごめん",
        sample: "(´･ω･`)",
        description: "ごめんなさい・すみません・謝罪。謝る顔文字をまとめてコピペ。",
      },
      {
        href: "/ganbatte-kaomoji",
        label: "頑張って",
        sample: "ファイトー!(๑•̀ㅂ•́)و✧",
        description: "頑張って・ファイト・応援。励ましの顔文字をまとめてコピペ。",
      },
      {
        href: "/otsukare-kaomoji",
        label: "お疲れ様",
        sample: "(´-ω-`)",
        description: "お疲れ様・おつかれさま・お疲れ。労いの顔文字をまとめてコピペ。",
      },
      {
        href: "/okaerinasai-kaomoji",
        label: "おかえりなさい",
        sample: "(´∀｀*)ﾉ",
        description: "おかえりなさい・おかえり。帰宅の挨拶顔文字をまとめてコピペ。",
      },
      {
        href: "/ittekimasu-kaomoji",
        label: "行ってきます",
        sample: "ヾ(´∀`*)ﾉ",
        description: "行ってきます・行ってくる。出かける時の挨拶顔文字をまとめてコピペ。",
      },
      {
        href: "/itadakimasu-kaomoji",
        label: "いただきます",
        sample: "(๑´ڡ`๑)",
        description: "いただきます・ごちそうさま。食事の挨拶顔文字をまとめてコピペ。",
      },
      {
        href: "/tanjoubi-kaomoji",
        label: "誕生日",
        sample: "🎂(*´▽`*)🎂",
        description: "ハッピーバースデー・お誕生日おめでとう。誕生日の顔文字をまとめてコピペ。",
      },
      {
        href: "/christmas-kaomoji",
        label: "クリスマス",
        sample: "🎄(*´▽`*)🎄",
        description: "メリークリスマス・サンタ。クリスマスの顔文字をまとめてコピペ。",
      },
      {
        href: "/valentine-kaomoji",
        label: "バレンタイン",
        sample: "💝(*´▽`*)💝",
        description: "バレンタインデー・チョコ。バレンタインの顔文字をまとめてコピペ。",
      },
      {
        href: "/halloween-kaomoji",
        label: "ハロウィン",
        sample: "🎃(*´▽`*)🎃",
        description: "ハッピーハロウィン・かぼちゃ。ハロウィンの顔文字をまとめてコピペ。",
      },
      {
        href: "/shinnen-kaomoji",
        label: "新年",
        sample: "🎍(*´▽`*)🎍",
        description: "あけましておめでとう・新年の挨拶。年始の顔文字をまとめてコピペ。",
      },
      {
        href: "/obon-kaomoji",
        label: "お盆",
        sample: "🏮(*´▽`*)🏮",
        description: "お盆・先祖供養。お盆の顔文字をまとめてコピペ。",
      },
      {
        href: "/setsubun-kaomoji",
        label: "節分",
        sample: "👹(*´▽`*)👹",
        description: "節分・豆まき・鬼は外。節分の顔文字をまとめてコピペ。",
      },
      {
        href: "/shichi-go-san-kaomoji",
        label: "七五三",
        sample: "⛩️(*´▽`*)⛩️",
        description: "七五三・お祝い。七五三の顔文字をまとめてコピペ。",
      },
      {
        href: "/hinamatsuri-kaomoji",
        label: "ひな祭り",
        sample: "🎎(*´▽`*)🎎",
        description: "ひな祭り・桃の節句。ひな祭りの顔文字をまとめてコピペ。",
      },
      {
        href: "/tanabata-kaomoji",
        label: "七夕",
        sample: "🎋(*´▽`*)🎋",
        description: "七夕・天の川・願い事。七夕の顔文字をまとめてコピペ。",
      },
      {
        href: "/kurakka-kaomoji",
        label: "クラッカー",
        sample: "🎉(*´▽`*)🎉",
        description: "お祝い・クラッカー。お祝いの顔文字をまとめてコピペ。",
      },
      {
        href: "/majo-kaomoji",
        label: "魔女",
        sample: "🧙(*´▽`*)🧙",
        description: "魔女・ハロウィン。魔女の顔文字をまとめてコピペ。",
      },
      {
        href: "/kabocha-kaomoji",
        label: "かぼちゃ",
        sample: "🎃(*´▽`*)🎃",
        description: "かぼちゃ・ハロウィン。かぼちゃの顔文字をまとめてコピペ。",
      },
      {
        href: "/noroi-kaomoji",
        label: "呪い",
        sample: "†(◣_◢)†",
        description: "呪い・ホラー。呪いの顔文字をまとめてコピペ。",
      },
      {
        href: "/hanabi-kaomoji",
        label: "花火",
        sample: "🎆(*´▽`*)🎇",
        description: "花火・夏祭り。花火の顔文字をまとめてコピペ。",
      },
      {
        href: "/wasshoi-kaomoji",
        label: "わっしょい",
        sample: "ﾜｯｼｮｲヽ(ﾟ∀ﾟ)ﾒ(ﾟ∀ﾟ)ﾉ",
        description: "わっしょい・お祭り。お祭りの顔文字をまとめてコピペ。",
      },
      {
        href: "/matsuri-kaomoji",
        label: "祭り",
        sample: "🏮(*´▽`*)🏮",
        description: "祭り・夏祭り。祭りの顔文字をまとめてコピペ。",
      },
      {
        href: "/okane-kaomoji",
        label: "お金",
        sample: "💰(*´▽`*)💰",
        description: "お金・豊かさ。お金の顔文字をまとめてコピペ。",
      },
      {
        href: "/eiga-kaomoji",
        label: "映画",
        sample: "🎬(*´▽`*)🎬",
        description: "映画・鑑賞。映画の顔文字をまとめてコピペ。",
      },
      {
        href: "/kyanpu-kaomoji",
        label: "キャンプ",
        sample: "⛺(*´▽`*)⛺",
        description: "キャンプ・アウトドア。キャンプの顔文字をまとめてコピペ。",
      },
      {
        href: "/yakyuu-kaomoji",
        label: "野球",
        sample: "⚾(*´▽`*)⚾",
        description: "野球・スポーツ。野球の顔文字をまとめてコピペ。",
      },
      {
        href: "/basu-kaomoji",
        label: "バス",
        sample: "🚌(*´▽`*)🚌",
        description: "バス・旅行。バスの顔文字をまとめてコピペ。",
      },
    ],
  },
];

