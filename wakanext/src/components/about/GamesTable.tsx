"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, useReactTable, SortingState } from "@tanstack/react-table";
import { GameData } from "@/lib/games/gamesData";

type GameRow = {
    platform: string;
    title: string;
};

export default function GamesTable({ games }: { games: GameData[] }) {
    // ランダムな初期順序でゲームデータを作成
    const data = useMemo<GameRow[]>(() => {
        const mapped = games.map(g => ({ platform: g.platform, title: g.title }));
        // Fisher-Yates shuffle
        for (let i = mapped.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
        }
        return mapped;
    }, [games]);

    // プラットフォーム別色分け（ダークテーマ対応）
    const platformColors: Record<string, string> = {
        '3DS': 'text-red-400 dark:text-red-300', 'DS': 'text-blue-500 dark:text-blue-400', 'DSi': 'text-indigo-600 dark:text-indigo-400',
        'FC': 'text-red-600 dark:text-red-400', 'GB': 'text-green-600 dark:text-green-400', 'GBA': 'text-purple-600 dark:text-purple-400',
        'GBC': 'text-cyan-500 dark:text-cyan-300', 'GC': 'text-indigo-700 dark:text-indigo-300', 'iOS': 'text-gray-700 dark:text-gray-300',
        'PS3': 'text-gray-800 dark:text-gray-200', 'PS4': 'text-blue-800 dark:text-blue-300', 'PSP': 'text-gray-900 dark:text-gray-100',
        'SFC': 'text-purple-500 dark:text-purple-300', 'Switch': 'text-red-500 dark:text-red-300', 'Wii': 'text-cyan-400 dark:text-cyan-200',
        'FCミニ': 'text-red-600 dark:text-red-400', 'ミニSFC': 'text-purple-500 dark:text-purple-300', 'Switch2': 'text-orange-500 dark:text-orange-300'
    };

    const columns = useMemo<ColumnDef<GameRow>[]>(() => [
        {
            accessorKey: "platform",
            header: () => <span>プラットフォーム</span>,
            cell: ({ row }) => (
                <span className={`text-base font-black ${platformColors[row.original.platform] || 'text-foreground'} pachinko-glow`}>
                    {row.original.platform}
                </span>
            ),
        },
        {
            accessorKey: "title",
            header: () => <span>タイトル</span>,
            cell: ({ row }) => {
                const handleTitleClick = () => {
                    const searchQuery = `${row.original.platform} ${row.original.title}`;
                    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
                    window.open(googleSearchUrl, '_blank', 'noopener,noreferrer');
                };

                return (
                    <span
                        className="text-base font-semibold cursor-pointer hover:text-[var(--link-color)] hover:underline transition-colors"
                        onClick={handleTitleClick}
                        title={`「${row.original.platform} ${row.original.title}」をGoogleで検索`}
                    >
                        {row.original.title}
                    </span>
                );
            },
        },
    ], [platformColors]);

    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState<string>("全て");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15;

    // プラットフォーム一覧を取得
    const platforms = useMemo(() => {
        const unique = Array.from(new Set(games.map(g => g.platform))).sort();
        return ["全て", ...unique];
    }, [games]);

    // フィルタリングされたデータ
    const filteredData = useMemo(() => {
        if (selectedPlatform === "全て") return data;
        return data.filter(row => row.platform === selectedPlatform);
    }, [data, selectedPlatform]);

    // ページネーション用のデータ
    const paginatedData = useMemo(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage, itemsPerPage]);

    // 総ページ数
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // プラットフォーム変更時にページをリセット
    React.useEffect(() => {
        setCurrentPage(0);
    }, [selectedPlatform, globalFilter]);

    const table = useReactTable({
        data: paginatedData,
        columns,
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="space-y-1">
            {/* パチスロ風ギラギラヘッダー */}
            <div className="rainbow-border p-1">
                <div className="bg-background rounded-lg p-2">
                    <div className="flex flex-nowrap gap-1 mb-2 overflow-x-auto no-scrollbar">
                        {platforms.map(platform => (
                            <button
                                key={platform}
                                onClick={() => setSelectedPlatform(platform)}
                                className={`px-2 py-1 text-xs rounded transition-all duration-200 shrink-0 ${selectedPlatform === platform
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-400 text-black dark:text-gray-900 font-black shadow-lg transform scale-110 pachinko-glow'
                                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground font-semibold'
                                    }`}
                            >
                                {platform}
                                {platform !== "全て" && (
                                    <span className="ml-1 opacity-75">
                                        ({games.filter(g => g.platform === platform).length})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    <input
                        value={globalFilter ?? ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder="🔍 検索"
                        className="w-full px-2 py-1 text-sm font-semibold bg-background border border-border rounded focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-1 focus:ring-yellow-500 dark:focus:ring-yellow-400"
                    />
                </div>
            </div>

            {/* パチスロ風ギラギラテーブル */}
            <div className="rainbow-border p-1">
                <div className="bg-background rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-base leading-tight">
                            <thead className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th
                                                key={header.id}
                                                className={`px-2 py-0.5 text-xs leading-none font-black cursor-pointer select-none hover:bg-yellow-600 dark:hover:bg-yellow-500 transition-colors pachinko-glow ${header.column.id === 'platform' ? 'w-28 md:w-36 whitespace-nowrap' : 'w-auto'}`}
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                <div className="flex items-center gap-1">
                                                    <span className="text-sm truncate leading-none">
                                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                                    </span>
                                                    <span className="text-yellow-400 dark:text-yellow-300 text-sm">
                                                        {{ asc: "🔼", desc: "🔽" }[header.column.getIsSorted() as string] ?? "⚪"}
                                                    </span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row, index) => (
                                    <tr
                                        key={row.id}
                                        className={`border-t border-border hover:bg-gradient-to-r hover:from-yellow-100/50 hover:to-orange-100/50 dark:hover:from-yellow-900/20 dark:hover:to-orange-900/20 transition-all duration-200 ${index % 2 === 0 ? 'bg-muted/20 dark:bg-muted/10' : 'bg-background'
                                            }`}
                                    >
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className={`px-1.5 py-0.5 ${cell.column.id === 'platform' ? 'w-28 md:w-36 whitespace-nowrap' : 'w-auto'}`}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* パチスロ風ギラギラ統計 */}
            <div className="rainbow-border p-1">
                <div className="bg-background rounded-lg p-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground font-semibold">
                                全体: <span className="text-green-600 dark:text-green-400 font-black text-sm pachinko-glow">{filteredData.length}</span> 本
                            </span>
                            {selectedPlatform !== "全て" && (
                                <span className={`font-black text-sm ${platformColors[selectedPlatform] || 'text-foreground'} pachinko-glow`}>
                                    🎮 {selectedPlatform} 専用表示
                                </span>
                            )}
                        </div>

                        {/* ページネーション */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-1">
                                <button
                                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                                    disabled={currentPage === 0}
                                    className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-600 transition-all pachinko-glow"
                                >
                                    ⬅️ 前へ
                                </button>

                                <div className="flex gap-1">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i;
                                        } else if (currentPage <= 2) {
                                            pageNum = i;
                                        } else if (currentPage >= totalPages - 3) {
                                            pageNum = totalPages - 5 + i;
                                        } else {
                                            pageNum = currentPage - 2 + i;
                                        }

                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                className={`px-2 py-1 text-xs font-bold rounded transition-all ${currentPage === pageNum
                                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black pachinko-glow transform scale-110'
                                                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                                                    }`}
                                            >
                                                {pageNum + 1}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                                    disabled={currentPage === totalPages - 1}
                                    className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-600 transition-all pachinko-glow"
                                >
                                    次へ ➡️
                                </button>

                                <span className="text-xs text-muted-foreground ml-1">
                                    {currentPage + 1} / {totalPages} ページ
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


