# 数据说明

本目录是四个文件：

- `apis.json` — 244 条 API 条目，字段定义见需求文档 §7.1。
- `categories.json` — 17 个分类，含 slug、中文名、说明与条数。
- `sources.json` — 9 个数据来源的登记表，含许可、用途、贡献条数。
- `README.md` — 本文件。

## 每条记录的来源

`source` 字段只有四种取值：

| 值 | 含义 |
|---|---|
| `manual` | 本项目人工整理（当前 244 条全部是这一类） |
| `public-apis` | 来自 public-apis/public-apis（MIT），M2 扩量时使用 |
| `public-api-lists` | 来自 public-api-lists/public-api-lists（MIT），M2 扩量时使用 |
| `user` | 外部贡献者提交 |

## 字段口径

- `description_zh`：一句话标签，8–14 字，用于列表页和卡片标题下方。
- `plain_intro`：正文前的一句话，20–40 字，口语说清「给它什么、它返回什么」，不写术语堆叠。
- `intro`：详情页正文，300–600 字，固定结构：简介段 → `## 主要能力`（4–6 条 `- **名称**：说明`）→ `## 特点`（3 条）→ `典型使用场景：…`；内容是标准 Markdown：谁维护、具体数据、端点与返回、限额与坑、替代品；必须逐条手写并核对官网，不许套模板。
- `capabilities`：3–4 条能力，每条 6–14 字，写具体功能（如「逐笔成交」「说话人分离」），不写「免费」「需 Key」这类计费属性。
- `best_for`：一句话适用场景，12–25 字。
- `intent_queries`：Bing 联想词原样保存（`api.bing.com/qsonhs.aspx` 抓取），最多 6 条，抓不到就留空数组，不编。
- `intent_tags`：从联想词归纳的意图标签，取值见需求文档 §7.1。
- `faq`：2 条问答，问题取自真实搜索词，答案只能用正文已核实的事实，不确定就写「以官网为准」。
- `free_tier`：免费额度。写具体数字（`1000 次/天`），没有公开数字就写 `以官网为准`，不许留空。
- `limit_source`：`manual`（人工核实）/ `scraped`（官网原文摘录）/ `none`（未标注）。
- `status`：`ok`（可直接调）/ `key_required`（需要 Key）/ `unreachable`（本次连不上）/ `dead`（连续 3 次失败）。
- `checked_at`：最后一次实测日期，格式 `YYYY-MM-DD`。
- `probe`：实际探测的端点，`example` 由它生成。
- `example`：可复制的 curl，密钥一律写成 `KEY`。

## 数据从哪来

1. 精选 200 条：`~/Assets/data/api-lists/200个知名免费API清单.csv`（人工整理，含中文说明、额度、HTTP 实测码、探测端点）。
2. 公共数据 44 条：`~/.hermes/cache/scratch/api-big/add_public.json`（联合国、世界银行、OECD、Eurostat 等官方端点，逐个探测过）。
3. M2 备选池：`~/Assets/data/api-lists/免费API大全-2283-含限额.csv`，2,283 条，其中 504 条有明确额度。

## 当前状态（2026-11-18 实测）

| 项 | 数量 |
|---|---|
| 条目总数 | 244 |
| 免 key 可直接调（status=ok） | 140 |
| 需要 Key（key_required） | 96 |
| 本次连不上（unreachable） | 8 |
| 认证方式：无需认证 | 117 |
| 认证方式：API Key | 119 |
| 认证方式：OAuth | 4 |

## 更新

每 14 天复测一次，结果追加到 `status-history.jsonl`，规则见需求文档 §15。

## 许可

数据 CC BY 4.0，代码 MIT。第三方来源与商标声明见仓库根目录 `NOTICE`。
