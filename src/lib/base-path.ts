/**
 * GitHub Pages 项目页地址为 /<仓库名>/，构建时通过 GITHUB_PAGES_REPOSITORY 注入 basePath，
 * 静态资源（public 下文件）需手动加上此前缀；站内路由优先使用 next/link（会自动处理 basePath）。
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function publicPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${raw}${p}`;
}
