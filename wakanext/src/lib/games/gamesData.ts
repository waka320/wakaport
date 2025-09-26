export interface GameData {
  platform: string;
  title: string;
}

// Google Sheets CSVエクスポート機能を使用してデータを取得
export async function fetchGamesFromSheet(sheetId: string): Promise<GameData[]> {
  try {
    // Google SheetsのCSVエクスポートURL
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
    
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch games data');
    }
    
    const csvText = await response.text();
    const lines = csvText.split('\n');
    
    // ヘッダー行をスキップして、データを解析
    const games: GameData[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // CSV解析（簡単な実装）
      const columns = line.split(',').map(col => col.replace(/"/g, '').trim());
      if (columns.length >= 2 && columns[0] && columns[1]) {
        games.push({
          platform: columns[0],
          title: columns[1]
        });
      }
    }
    
    return games;
  } catch (error) {
    console.error('Error fetching games data:', error);
    return [];
  }
}

// 開発用のモックデータ
export const mockGamesData: GameData[] = [
  { platform: "Nintendo Switch", title: "ゼルダの伝説 ブレス オブ ザ ワイルド" },
  { platform: "Nintendo Switch", title: "スプラトゥーン3" },
  { platform: "Nintendo Switch", title: "マリオカート8 デラックス" },
  { platform: "PlayStation 5", title: "スパイダーマン2" },
  { platform: "PlayStation 5", title: "ホライゾン フォービドゥン ウェスト" },
  { platform: "PC", title: "Cyberpunk 2077" },
  { platform: "PC", title: "Minecraft" },
  { platform: "Nintendo Switch", title: "どうぶつの森" },
  { platform: "PlayStation 5", title: "ファイナルファンタジー16" },
  { platform: "PC", title: "Apex Legends" },
];
