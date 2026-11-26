/**
 * 多元宇宙分支追踪器
 *
 * 变体 variant 格式：
 * { name: "洛基", chaos: 3 }
 *
 * 分支状态由当前熵值决定：
 *   entropy <  threshold      → "stable"
 *   entropy ≥  threshold      → "collapsing"
 *   entropy ≥  threshold × 2  → "erased"
 *
 * 每次熵值变化后，按新熵值结算状态。
 */

function createMultiverseTracker() {
    const branches = new Map();
    // 分支对象结构：
    // {
    //   id: string,
    //   threshold: number,
    //   entropy: number,
    //   status: "stable" | "collapsing" | "erased",
    //   variants: Array<{ name, chaos }>
    // }

    return {
        /**
         * 1. 开辟分支
         * @param {string} branchId
         * @param {number} threshold 必须 > 0
         * @returns {boolean}
         */
        spawnBranch(branchId, threshold) {
            // TODO
        },

        /**
         * 2. 投放变体
         * @param {string} branchId
         * @param {{name:string, chaos:number}} variant
         * @returns {boolean}
         */
        addVariant(branchId, variant) {
            // TODO
        },

        /**
         * 3. 劫持分支：直接把熵值设为指定值（可升可降）
         * @param {string} branchId
         * @param {number} entropy 目标熵值
         * @returns {boolean}
         *
         * 关键：erased 分支不可劫持；新熵值 = max(0, entropy)
         */
        hijack(branchId, entropy) {
            // TODO
        },

        /**
         * 4. 时间推进一格
         * @returns {Array} 事件数组 [{ type, branchId, entropy }]
         *
         * 关键：只有 stable 分支涨熵；每条分支都要输出快照
         */
        tick() {
            // TODO
        },

        /**
         * 5. 查询分支报告
         * @param {string} branchId
         * @returns {Object|null}
         *
         * 关键：variants 深拷贝，按 name 字典序
         */
        getBranchReport(branchId) {
            // TODO
        },
    };
}