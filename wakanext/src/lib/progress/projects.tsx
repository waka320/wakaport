export type ProjectProps = {
    title: string;
    description: string;
    tags: string[];
    start: string;
    end?: string;
    link?: string;
};

export const projects: ProjectProps[] = [
    {
        title: 'ソニーグループ株式会社 インクルーシブデザインインターンシップ 参加',
        description: 'インクルーシブデザインのインターンシップに参加。',
        tags: ['技術開発'],
        start: '2026年9月14日',
        end: '2026年9月17日'
    },
    {
        title: 'GMOインターネットグループ株式会社 新卒年収710万プログラム ビジネス職 5daysインターンシップ 参加',
        description: 'ビジネス職の5daysインターンシップに参加。',
        tags: ['技術開発'],
        start: '2026年8月24日',
        end: '2026年8月28日'
    },
    {
        title: 'シスコシステムズ合同会社 28卒向けCXサマーインターンシップ（テクニカルコンサルティングエンジニア職）参加',
        description: 'テクニカルコンサルティングエンジニア職のCXサマーインターンシップに参加。',
        tags: ['技術開発'],
        start: '2026年8月17日',
        end: '2026年8月20日'
    },
    {
        title: 'アクセンチュア株式会社 和魂偉才塾 アドバンスト・アーキテクティング塾 参加',
        description: 'アドバンスト・アーキテクティング塾に参加。',
        tags: ['技術開発'],
        start: '2026年8月3日',
        end: '2026年8月6日'
    },
    {
        title: 'IIAI AAI 2026（福井）で研究発表',
        description: '「Designing and Evaluating Pedestrian Count Dashboards for Data-Novice Local Tourism Businesses」を発表。',
        tags: ['学校'],
        start: '2026年7月',
        end: '',
        link: 'https://mdg.si.i.nagoya-u.ac.jp/2026/07/20/6369/'
    },
    {
        title: '名古屋大学 大学院 情報学研究科 情報社会設計論講座 入学',
        description: '情報学部を卒業し、情報学研究科の修士課程に入学。情報社会設計論講座で研究を続けている。',
        tags: ['学校'],
        start: '2026年4月',
        end: ''
    },
    {
        title: '情報処理学会第88回全国大会で研究発表、学生奨励賞を受賞',
        description: '「商店街事業者のための歩行者数データを用いた目的ベースダッシュボードの設計と開発」を発表し、学生奨励賞を受賞。',
        tags: ['学校'],
        start: '2026年3月',
        end: '',
        link: 'https://www.ipsj.or.jp/event/taikai/88/WEB/html/author/wa.html'
    },
    {
        title: '名古屋大学×ノースカロライナ大学 サイバーセキュリティ・日米交流プログラム 採択',
        description: '名古屋大学とノースカロライナ大学チャペルヒル校が連携して実施するサイバーセキュリティ・日米交流プログラムに7名の奨学生の1人として採択。2月にアメリカへ派遣、5月に名古屋大学にて交流を実施。',
        tags: ['学校'],
        start: '2026年2月',
        end: '2026年5月',
        link: 'https://www.iech.provost.nagoya-u.ac.jp/info/2025/10/post_93.html'
    },
    {
        title: '数学動画ジェネレーター「SUDO」を制作',
        description: 'JPHACKS2025出場の際に作成したプロダクト。決勝の全国大会に進出したほか、審査員特別賞やスポンサー賞を獲得。',
        tags: ['技術開発'],
        start: '2025年10月',
        end: '',
        link: 'https://github.com/jphacks/ng_2501'
    },
    {
        title: 'Chrome拡張機能「ReadEasy.JP」を制作',
        description: '日本語学習者向けのChrome拡張機能を開発。Webページ上の漢字にふりがなを自動で付与し、読みやすさを向上させる機能を実装。',
        tags: ['技術開発'],
        start: '2025年9月',
        end: '',
        link: 'https://chromewebstore.google.com/detail/readeasyjp/jjfjlfbdjklmpgfnfomkbcfjhmiekhdn?authuser=0&hl=ja'
    },
    {
        title: 'ECC外語学院 非常勤講師（岡崎校・バロー刈谷校）',
        description: '岡崎校とバロー刈谷校で非常勤講師として勤務。',
        tags: ['自分史'],
        start: '2025年8月',
        end: '2026年8月'
    },
    {
        title: '日本財団 HUMAIプログラム 奨励金A 採択',
        description: '次世代AI人材育成プログラムの奨励金Aに採択され、AI・データサイエンス分野の研究に従事。',
        tags: ['技術開発', '学校'],
        start: '2025年8月',
        end: '2026年3月',
        link: 'https://zen.ac.jp/humai'
    },
    {
        title: '高山市 目的ベースダッシュボード制作',
        description: '岐阜県高山市における研究の一環で作成したダッシュボード。商店街の歩行者データをわかりやすく表示。',
        tags: ['技術開発', '学校'],
        start: '2025年4月',
        end: '',
        link: 'https://ai-camera.lab.mdg-meidai.com'
    },
    {
        title: '株式会社ハウテレビジョンにて短期インターン',
        description: 'メディア・エンターテインメント業界での短期インターンシップに参加。業界の最新動向や技術について学習。',
        tags: ['技術開発'],
        start: '2025年3月',
        end: ''
    },
    {
        title: '江崎グリコにて短期インターン',
        description: 'glico梅田オフィスで行われたデジタル推進（CRMコース）インターンシップに参加。同イベント内で開催されたコンペでチームで優勝し、高級ポッキーをいただく。',
        tags: ['技術開発',],
        start: '2025年2月',
        end: ''
    },
    {
        title: 'WakamatsuYukiの部屋. 制作',
        description: 'ポートフォリオであり、自身のポータルでもあるWebサイトの制作。',
        tags: ['技術開発', '自分史', '学校'],
        start: '2025年1月',
        end: '',
        link: 'https://wakaport.com'
    },
    {
        title: '歩行者逆引きボード 制作',
        description: '岐阜県高山市における研究の一環で作成したダッシュボード。商店街の歩行者データをわかりやすく表示。',
        tags: ['技術開発', '学校'],
        start: '2024年11月',
        end: ''
    },
    {
        title: '安心打診おばあ 制作',
        description: 'JPHACKS2024出場の際に作成したプロダクト。決勝の全国大会に進出したほか、スポンサー賞を2つ獲得。',
        tags: ['技術開発', '自分史',],
        start: '2024年11月',
        link: 'https://jphacks.github.io/ng_2406/'
    },
    {
        title: '第65回名大祭 「スナップ！」 運営',
        description: '広報局長として大学祭の運営。主な仕事はテーマの決定、プレスリリースの作成、撤収の統括など。イベント中は運営本部で、全体の運営をサポートしました。',
        tags: ['自分史', '学校'],
        start: '2024年6月',
        link: 'https://meidaisai.com/65th/'
    },
    {
        title: '第45回秋革祭 運営',
        description: '大学祭の広報局長に就任。マスコットキャラクター「ふりゃあ」の担当として、キャラクターグッズ制作や各種広報を行う。結果として「大学祭マスコットキャラクター総選挙」第3位を獲得。',
        tags: ['自分史', '学校',],
        start: '2023年11月',
        end: ''
    },
    {
        title: 'アイクリスタル株式会社 インターン',
        description: '名古屋大学内のスタートアップで長期のインターン。NextJSをはじめとするWeb技術を使って開発を継続中。',
        tags: ['技術開発', '自分史',],
        start: '2023年8月',
        end: ''
    },
    {
        title: '第64回名大祭Webサイト 制作',
        description: '大学祭の公式Webサイトの制作。広報や案内だけでなく、楽しいコンテンツを充実させることで、更新が楽しみになるようなWebサイトを目指した。結果として6ヵ月で25万PVを獲得。',
        tags: ['技術開発', '学校'],
        start: '2023年8月',
        end: ''
    },
    {
        title: '株式会社DRAGON AGENCY インターン',
        description: '株式会社DRAGON AGENCYで約8ヶ月間インターン。InstagramGraphAPI（当時）を利用したダッシュボードの実装を行う。Webアプリの基礎的な事柄などを学ぶことができた。',
        tags: ['技術開発', '自分史'],
        start: '2022年9月',
        end: ''
    },
    {
        title: 'オランダ短期留学・CuriousU 単位取得',
        description: 'オランダに2週間短期留学をし、トゥエンテ大学の短期研修でサマースクール「Curious U」を受講。',
        tags: ['自分史', '学校'],
        start: '2022年8月',
        end: '',
        link: 'https://www.uni-muenster.de/studium/en/outgoing/CuriousU.html'
    },
    {
        title: '名古屋大学 情報学部 人間・社会情報学科 在学（2026年3月卒業）',
        description: '浪人を経て名古屋大学の情報学部人間・社会情報学科に入学し、2026年3月に卒業した。',
        tags: ['自分史', '学校'],
        start: '2022年4月',
        end: '2026年3月'
    },
    {
        title: '河合塾名駅校で浪人',
        description: '集中が苦手な理由から物理などの科目に向いていないことを悟り、文転をして浪人。',
        tags: ['自分史',],
        start: '2021年4月',
        end: '2022年3月'
    },
    {
        title: '名古屋高校 入学',
        description: '中学校からそのまま名古屋高校に入学。',
        tags: ['自分史', '学校'],
        start: '2018年4月',
        end: '2021年3月'
    },
    {
        title: '陰嚢の皮膚 手術',
        description: '人生で最初で最後の手術（であってほしい）。自転車から転んで表面に大きな傷ができる。３針縫った。後遺症はなし。',
        tags: ['自分史', '学校'],
        start: '2015年4月',
        end: '2015年5月'
    },
    {
        title: '名古屋中学校 入学',
        description: '地元を少し離れ名古屋市の中学校に入学。ここから6年間男子校に所属。3年間水球部に所属し、不器用ながらも夏の大会まで続けました。',
        tags: ['自分史', '学校'],
        start: '2015年4月',
        end: '2018年3月'
    },
    {
        title: '日本の小学校に入学',
        description: '日本に帰国。不器用でしたけど、この頃にできた友達には仲良くして貰っています。',
        tags: ['自分史', '学校'],
        start: '2010年4月(?)',
        end: '2015年3月'
    },
    {
        title: 'アメリカに移住',
        description: '親の海外出張の都合で海外に移住。小学校2年生までの約4年間をアメリカで過ごす。',
        tags: ['自分史'],
        start: '2006年4月(?)',
        end: '2010年3月'
    },
    {
        title: '爆誕',
        description: '両親のお陰で生を授かりました。',
        tags: ['自分史'],
        start: '2002年8月29日',
        end: '2102年がいいな'
    },
];
