$(function () {
    $("body").on("click", ".card-overlay-anchor", function (e) {
        e.preventDefault();
        const dialog = $(this).closest(".card").find("dialog")[0];
        dialog.showModal();
        const preNavigated = window.location.pathname;
        history.pushState(null, "", e.target.href);
        $(dialog).one("close", function () {
            history.pushState(null, "", preNavigated);
        });
    });
});
