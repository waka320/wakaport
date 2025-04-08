/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wakaport.com',
  generateRobotsTxt: true,
  exclude: ['/admin', '/private/*'],
  transform: async (config, path) => {
    if (path.includes('/articles/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // デフォルト設定
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
