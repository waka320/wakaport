export type ProjectProps = {
    title: string;
    description: string;
    tags: string[];
    start: string;
    end?: string;
};

export const projects: ProjectProps[] = [
    {
        title: 'Wakaport. 制作',
        description: 'ポートフォリオであり、自身のポータルでもあるWebサイトの制作。',
        tags: ['技術開発', '自分史', '学校'],
        start: '2025年1月',
        end: ''
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
        start: '2024年11月'
    },
    {
        title: '第65回名大祭 「スナップ！」 運営',
        description: '広報局長として大学祭の運営。主な仕事はテーマの決定、プレスリリースの作成、撤収の統括など。イベント中は運営本部で、全体の運営をサポートしました。',
        tags: ['自分史', '学校'],
        start: '2024年6月'
    },
    {
        title: '第45回秋革命祭 運営',
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
        description: 'オランダに2週間短期留学をし、トゥエンテ大学の短期研修でサマースクール「Curious U」を受講',
        tags: ['自分史', '学校'],
        start: '2022年8月',
        end: ''
    },
    {
        title: '名古屋大学 情報学部 人間・社会情報学科 入学',
        description: '浪人を経て、名古屋大学の情報学部人間・社会情報学科に入学。',
        tags: ['自分史', '学校'],
        start: '2022年4月',
        end: '2026年3月（見込み）'
    },
    {
        title: '河合塾名駅校で浪人',
        description: '集中が苦手な理由から物理などの科目に向いていないことを悟り、文転をして浪人。',
        tags: ['自分史',],
        start: '2021年4月',
        end: '2022年3月'
    },
    {
        title: '英検準1級 合格',
        description: '高校2年生の冬に念願の合格をしました。',
        tags: ['自分史'],
        start: '2020年2月',
        end: ''
    },
    {
        title: '名古屋高校 入学',
        description: '中学校からそのまま名古屋高校に入学。',
        tags: ['自分史', '学校'],
        start: '2018年4月',
        end: '2021年3月'
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
