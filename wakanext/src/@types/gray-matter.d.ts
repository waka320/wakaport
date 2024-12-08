declare module 'gray-matter' {
    interface GrayMatterFile<T = string> {
        data: T;
        content: string;
    }

    function matter(input: string): GrayMatterFile;
    export = matter;
}
