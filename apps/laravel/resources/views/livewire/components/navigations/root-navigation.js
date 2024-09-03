$(function () {
    $('button[aria-label="Open menu"]').on("click", function () {
        $("#root-navigation-bottom-sheet")[0].showModal();
    });

    $(window).scroll(function () {
        const top = window.scrollY === 0;
        $("#root-navigation-nav").toggleClass("backdrop-blur-md", !top);
        $("#root-navigation-backdrop").toggleClass("opacity-80", !top);
        $("#root-navigation-backdrop").toggleClass("opacity-0", top);
    });
});
