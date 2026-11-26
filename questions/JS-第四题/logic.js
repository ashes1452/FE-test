const tracker = createMultiverseTracker();

// ===== 开辟分支 =====
document.getElementById("spawn").onclick = () => {
    const ok = tracker.spawnBranch(
        $("branch-id").value,
        Number($("threshold").value)
    );
    if (!ok) return render.error("分支开辟失败（编号为空/重复，或阈值非法）");
    render.show({ branch: $("branch-id").value, message: "分支已开辟" });
};

// ===== 投放变体 =====
document.getElementById("add-variant").onclick = () => {
    const ok = tracker.addVariant($("v-branch").value, {
        name: $("v-name").value,
        chaos: Number($("v-chaos").value)
    });
    if (!ok) return render.error("变体投放失败（分支不存在或变体重名）");
    render.show({ variant: $("v-name").value, message: "变体已投放" });
};

// ===== 洛基劫持 =====
document.getElementById("hijack").onclick = () => {
    const ok = tracker.hijack(
        $("h-branch").value,
        Number($("h-number").value)
    );
    if (!ok) return render.error("劫持失败（分支不存在，或 number 非法）");
    render.show({ ok: true, message: "熵值已劫持" });
};

// ===== 时间推进一格 =====
document.getElementById("tick").onclick = () => {
    render.show(tracker.tick());
};


// ===== 查询分支报告 =====
document.getElementById("report").onclick = () => {
    const report = tracker.getBranchReport($("report-branch").value);
    if (report === null) return render.error("分支不存在");
    render.show(report);
};