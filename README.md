# 本次测试题目仓库

这是本次测试的题目仓库。

## 作答与提交方式

1. 在 GitHub 上 Fork 本仓库，然后将自己的仓库克隆到本地。
2. 在本地创建 `answers` 文件夹（如已存在则直接使用），将整个 `questions` 文件夹复制到 `answers` 文件夹下。
3. 将复制后的 `questions` 文件夹重命名为自己名字的汉语拼音。例如，张三的作答目录为 `answers/zhangsan/`。
4. 在复制后的文件夹中完成作答。除页面题外，统一在各题的 `solution.js` 中作答；页面题按题目说明作答。
5. 使用 Git 提交修改，并推送到自己的 GitHub 仓库。
6. 在自己的 GitHub 仓库中，向源仓库发起 Pull Request（PR）提交答案。

## 目录示例

```text
questions/
└── JS-第一题/
    ├── README.md
    └── solution.js           # 公共模板

answers/
├── danyujia/                 # 示例作答文件夹
│   └── JS-第一题/
│       ├── README.md
│       └── solution.js       # 示例模板
├── liukaiqing/               # 示例作答文件夹
│   └── JS-第一题/
│       ├── README.md
│       └── solution.js       # 示例模板
└── 你的名字/                 # 仅作目录展示，作答时使用自己名字的汉语拼音
    └── JS-第一题/
        ├── README.md
        └── solution.js       # 你的答案
```

仓库中的 `answers/danyujia/` 和 `answers/liukaiqing/` 均为示例作答文件夹，复制自 `questions/`。

`你的名字/` 仅在上面的目录结构中展示，仓库中不创建该文件夹。作答时请使用自己名字的汉语拼音创建目录。

## 出题操作指南（作答者不需要关注）

### 提交步骤
1. 在 GitHub 上 Fork 本仓库，然后将自己的仓库克隆到本地。
2. 在 `questions/` 下为每道题创建一个独立文件夹，例如 `JS-第二题/`。沿用仓库现有的 `questions/` 目录，不要另外创建 `question/`。
3. 准备作答模板：除页面题外，作答文件统一命名为 `solution.js`，提供函数签名和待填写位置，可参考现有的 `questions/JS-第一题/`。模板中不要填写完整答案。
4. 使用 Git 提交新增的题目文件夹，并推送到自己的 GitHub 仓库。
5. 在自己的 GitHub 仓库中，向源仓库发起 Pull Request（PR），在标题中写明新增的题目名称，等待审核合并。

### 出题目录示例

```text
questions/
├── JS-第二题/
│   ├── README.md          # 题目说明
│   └── solution.js        # 作答模板，非页面题统一使用此文件名
└── 页面-第一题/
    ├── README.md          # 题目说明、作答入口和运行方式
    ├── index.html         # 页面题文件示例，按实际需要提供
    ├── style.css
    └── script.js
```

以上为目录示例，页面题的文件结构可根据题目需要调整。出题文件夹提交到 `questions/`，`answers/` 用于保存作答者的答案。
