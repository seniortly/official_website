// 必须用显式开关：加载本配置时 NODE_ENV 未必已是 production，`next build` 会误判为空 basePath，
// 导致 GitHub Pages 上 CSS/JS 仍指向 /_next/...（无 /仓库名/ 前缀）→ 页面无样式。
// 本地 dev 不要设置 GITHUB_PAGES=1。
const repo =
  process.env.GITHUB_PAGES === "1"
    ? (process.env.GITHUB_PAGES_REPOSITORY ?? "").trim()
    : "";
const basePath = /^[a-zA-Z0-9_.-]+$/.test(repo) ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
