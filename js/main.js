$(function () {
	recommend_list();
	local_tab_list();
});

function recommend_list(){
    const slider = $(".recommend_list");
    const setting = {
        mobileFirst: true, //모바일 우선 세팅
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick"
            }
        ]
    }

    slider.slick(setting);

    $(window).on("resize", function () {
        if ($(window).width() > 1199) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(setting);
        }
    });
}

function local_tab_list(){
    const slider = $(".local_tab_list");
    const setting = {
        mobileFirst: true, //모바일 우선 세팅
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick"
            }
        ]
    }

    slider.slick(setting);

    $(".local_tab_list a:first").addClass("slick-current");
    $(document).on("click", ".local_tab_list a", function (e) {
        const index = $(e.target).index();

        $(this).addClass("slick-current").siblings("a").removeClass("slick-current");
        $(".move_box").css("transform", "translateX(" + 100 * index + "%)");
    });

    $(window).on("resize", function () {
        $(".local_tab_list a:first").addClass("slick-current");

        if ($(window).width() > 767) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(setting);
        }
    });
}
