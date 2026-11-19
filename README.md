# 免费 API 中文索引

给中文开发者用的免费 API 目录：每条带中文说明、免费额度、认证方式、实测状态和可复制的调用示例。

站点（建设中）：https://public-apis.morio.cc

> 本 README 是临时版本。M1 开工后会由 `scripts/build-readme.mjs` 从 `data/apis.json` 生成，不再手写。

## 现在有什么

| 文件 | 内容 |
|---|---|
| `data/apis.json` | 244 条 API 条目，17 个字段 |
| `data/categories.json` | 17 个分类与说明 |
| `data/sources.json` | 9 个数据来源的登记表（含许可） |
| `data/README.md` | 字段口径与来源说明 |
| `REQUIREMENTS.md` | 需求文档 v0.3（含 M1 基础数据附录） |
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
