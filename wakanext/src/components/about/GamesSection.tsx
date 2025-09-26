"use client";

import { useState, useEffect } from 'react';
import GamesTable from './GamesTable';
import { GameData, fetchGamesFromSheet, mockGamesData } from '@/lib/games/gamesData';

interface GamesSectionProps {
    sheetId?: string; // Google Sheets ID（オプション）
}

export default function GamesSection({ sheetId }: GamesSectionProps) {
    const [games, setGames] = useState<GameData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const loadGames = async () => {
            try {
                setLoading(true);
                setError(null);

                if (sheetId) {
                    // Google Sheetsからデータを取得
                    const gamesData = await fetchGamesFromSheet(sheetId);
                    if (gamesData.length > 0) {
                        setGames(gamesData);
                    } else {
                        // データ取得に失敗した場合はモックデータを使用
                        console.warn('Google Sheetsからデータを取得できませんでした。モックデータを使用します。');
                        setGames(mockGamesData);
                    }
                } else {
                    // Sheet IDが提供されていない場合はモックデータを使用
                    setGames(mockGamesData);
                }
            } catch (err) {
                console.error('ゲームデータの読み込みに失敗しました:', err);
                setError('ゲームデータの読み込みに失敗しました');
                // エラーの場合もモックデータを表示
                setGames(mockGamesData);
            } finally {
                setLoading(false);
            }
        };

        loadGames();
    }, [sheetId]);

    return (
        <section className="content-background pixel-panel mb-2 p-2 rounded-lg rainbow-border">
            <h2 
                className="text-2xl md:text-4xl font-black mb-2 white-text text-center cursor-pointer select-none hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                🎮 所持しているゲーム 🎮
                <span className="text-lg">
                    {isCollapsed ? '▼' : '▲'}
                </span>
            </h2>

            {!isCollapsed && (
                <>
                    {loading ? (
                        <div className="flex items-center justify-center h-20">
                            <div className="text-muted-foreground">読み込み中...</div>
                        </div>
                    ) : error && games.length === 0 ? (
                        <div className="flex items-center justify-center h-20">
                            <div className="text-destructive">{error}</div>
                        </div>
                    ) : (
                        <>
                            {error && (
                                <div className="mb-2 p-2 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded text-sm text-yellow-800 dark:text-yellow-200">
                                    注意: {error}（モックデータを表示中）
                                </div>
                            )}
                            <GamesTable games={games} />
                        </>
                    )}
                </>
            )}
        </section>
    );
}
