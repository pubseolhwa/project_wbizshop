$(function () {
    tnb();
});

// faq
$(document).on("click", ".faq_header a", function () {
    $(this).hasClass("closed") ? $(this).attr("title", "질문 답변 열기") : $(this).attr("title", "질문 답변 닫기");
    $(this).toggleClass("closed").parent().next(".faq_body").stop().slideToggle();
    return false;
});

// 검색옵션
$(document).on("click", "#btn_search_option_open", function () {
    $(this).parent().next(".search_option").toggleClass("open");
    return false;
}).on("click", "#btn_search_option_close", function () {
    $(this).parent().parent(".search_option").toggleClass("open");
    return false;
});

// sns
$(document).on("click", "#btn_sns_open", function () {
	$(".sns_list").addClass("open");
	return false;
}).on("click", "#btn_sns_close", function () {
	$(".sns_list").removeClass("open");
    return false;
});

// 문의 여닫기
$(document).on("click", ".btn_dataOpen", function () {
    $(this).hasClass("open") ? $(this).text("보기") : $(this).text("닫기");
    
    $(this).toggleClass("open").parent().parent().siblings("tr").children().find(".btn_dataOpen").removeClass("open");
    $(this).parent().parent().next(".dataView").toggleClass("open").siblings(".dataView").removeClass("open");
    return false;
});

// 상품보기 선택
$(document).on("click", ".list_type button", function () {
	$(this).toggleClass("on").siblings().removeClass("on");
	return false;
}).on("click", ".btn_view_type_thumb", function () {
	$(".view_type_thumb").addClass("on");
	$(".view_type_list").removeClass("on");
    return false;
}).on("click", ".btn_view_type_list", function () {
	$(".view_type_list").addClass("on");
	$(".view_type_thumb").removeClass("on");
    return false;
});

// order_type_pc
$(document).on("click", ".order_type_pc a", function () {
    $(this).addClass("on").siblings().removeClass("on");
    return false;
});

// tnb
function tnb(){

    let btn_tnb_txt = $(".tnb_list").find(".on").children("a").text();
    $(".btn_tnb").text(btn_tnb_txt);

    $(document).on("click", ".btn_tnb", function () {
        if ($(window).width() > 768) {
            $(this).parent(".tnb").removeClass("on").children(".tnb_list").show();
            return false;
        } else if($(window).width() < 767){ 
            $(this).parent(".tnb").hasClass("on") ? $(this).attr("title", "하위메뉴열기") : $(this).attr("title", "하위메뉴닫기");
            $(this).parent(".tnb").toggleClass("on").children(".tnb_list").slideToggle();
            return false;
        }
    });
    $(window).on("resize", function(){
        if($(window).width() > 768){ 
            $(".btn_tnb").parent(".tnb").removeClass("on").children(".tnb_list").css({"display":"flex"});
            $(".btn_tnb").attr("title", "하위메뉴열기");
        } else if ($(window).width() < 767) {
            $(".btn_tnb").parent(".tnb").removeClass("on").children(".tnb_list").css({"display":"none"});
        }
    });
}

$(function () {

    // 상세 탭
    $(".product_detail_list .on a").each(function () {
        var opt = $(this).attr("href");
        if (opt !== "#" && opt !== "#;" && opt.charAt(0) === "#") {
            $(opt + ".product_detail_contents").css("display", "block");
        }
    });

    $(".product_detail_list a").on("click", function (e) {
        var opt = $(this).attr("href");
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");

        if (opt === "#" || opt === "" || opt === "#;") {
            e.preventDefault();
        } else if (opt.charAt(0) === "#") {
            if ($(opt).hasClass("product_detail_contents")) {
                $(opt).show().siblings(".product_detail_contents").hide();
                e.preventDefault();
            }
        }
    });

    // 미리보기 팝업
    $(document).on("click", ".btn_product_preview", function () {
        preview_detail();
    });

    function preview_detail() {
        const big = $(".thumb_big");
        const nav = $(".thumb_nav");
        const bigsetting = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".thumb_nav"
        }
        const navsetting = {
            mobileFirst: true, //모바일 우선 세팅
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".thumb_big",
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        asNavFor: ".thumb_big",
                        dots: false,
                        arrows: false,
                        autoplay: false,
                        centerMode: false,
                        focusOnSelect: true,
                    }
                }
            ]
        }

        big.slick(bigsetting);	
        nav.slick(navsetting);

        $(window).on("resize", function () {
            if (!big.hasClass("slick-initialized")) {
                return big.slick(bigsetting);
            }
            if (!nav.hasClass("slick-initialized")) {
                return nav.slick(navsetting);
            }
        });
    }

    product_detail();

    function product_detail() {
        const detail_big = $(".detail_thumb_big");
        const detail_nav = $(".detail_thumb_nav");
        const detail_bigsetting = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".detail_thumb_nav"
        }
        const detail_navsetting = {
            mobileFirst: true, //모바일 우선 세팅
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".detail_thumb_big",
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        asNavFor: ".detail_thumb_big",
                        dots: false,
                        arrows: false,
                        autoplay: false,
                        centerMode: false,
                        focusOnSelect: true,
                    }
                }
            ]
        }

        detail_big.slick(detail_bigsetting);	
        detail_nav.slick(detail_navsetting);

        $(window).on("resize", function () {
            if (!detail_big.hasClass("slick-initialized")) {
                return detail_big.slick(detail_bigsetting);
            }
            if (!detail_nav.hasClass("slick-initialized")) {
                return detail_nav.slick(detail_navsetting);
            }
        });
    }

});