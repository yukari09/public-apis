# 免费 API 中文索引

给中文开发者用的免费 API 目录：每条带中文说明、免费额度、认证方式、实测状态和可复制的调用示例。

站点：https://public-apis.morio.cc

## 现在有什么

- 244 条 API，17 个分类
- 语义友好的分类页与详情页，支持搜索、认证筛选、额度筛选与 CSV 导出
- 静态 JSON 接口：`/api/all.json`、`/api/category/{slug}.json`
- 深色 Signal Deck 主题，Astro 5 + Tailwind CSS 4，无前端框架、无运行时后端
- 每 14 天复测端点状态

## 本地开发

需要 Node 22。

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # 输出 dist/
npm run preview  # 预览 dist/
```

Cloudflare Pages 使用 `npm ci && npm run build` 构建，输出目录为 `dist`。

## 目录

| 路径 | 内容 |
|---|---|
| `data/apis.json` | 244 条 API 条目，17 个字段 |
| `data/categories.json` | 17 个分类与说明 |
| `data/sources.json` | 9 个数据来源的登记表（含许可） |
| `data/README.md` | 字段口径与来源说明 |
| `src/pages/` | 首页、分类、详情、关于、免责、隐私、404 与 JSON API |
| `src/lib/data.js` | 数据读取、标签映射与页面辅助函数 |
| `src/styles/global.css` | Tailwind 4 入口、主题 token 与组件样式 |
| `NOTICE` | 第三方署名、商标与免责声明 |

## 数据概况（2026-11-18 实测）

- 收录 244 条，17 个分类
- 140 条免 key 可直接调用，96 条需要 Key，8 条本次连不上
- 认证方式：无需认证 117 / API Key 119 / OAuth 4

## 和 public-apis 的区别

不是翻译副本。差异只有三样：**额度**（免费多少次、多久重置）、**状态**（现在还能不能调）、**示例**（能直接粘进终端的 curl）。

## 收录标准

收：有公开文档 + 至少一种免费方式（永久免费或免费额度），需要 Key 但有免费额度的也收。
不收：国内厂商、只有 7 天试用且必须绑卡的、已停服的、灰产。

## 更新

每 14 天复测一次端点状态与部分额度，结果写入 `data/status-history.jsonl`。

## 许可

- 代码：MIT（见 `LICENSE`）
- 数据：CC BY 4.0（转载需署名并链回站点）
- 第三方来源：见 `NOTICE` 与 `data/sources.json`

## 纠错

发现条目错误、链接失效或希望下架，发 Issue 或邮件 hello@morio.cc。
