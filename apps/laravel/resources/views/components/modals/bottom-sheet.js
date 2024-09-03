$(function () {
    $("body").on("click", ".bottom-sheet", function (e) {
        const dialog = e.target;
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
            dialog.close();
        }
    });

    $("body").on("click", ".bottom-sheet-close-button", function (e) {
        e.target.closest(".bottom-sheet").close();
        e.stopPropagation();
    });
});
