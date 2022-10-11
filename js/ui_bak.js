$(function () {

	searchBtn(); //상세검색
	menuBtn(); //상세검색
	menu_li_setting();
	gnbSetting();
	lnbSetting(); //lnb

});

function maskOn(){
	$(".mask").fadeIn("fast").addClass("mask_open");
}
function maskOff(){
	$(".mask").removeClass("mask_open");
}

function searchBtn(){
	var $search_open = $("#detail_search_open"),
        $Parent = $search_open.parent(".detail_search"),
		IsActive = $Parent.is(".on"),
        $Layer = $search_open.siblings(".detail_search_wrap"),
		$search_close = $("#btn_detail_search_close"),
		$mask = $(".mask");
		
	$search_open.on("click", function(){
		if(!IsActive){
			$Parent.addClass("on");
			$Layer.slideDown(400);
			$mask.css("z-index" , 100);
			maskOn();
			
			$("#btn_sitemap_close").click();
			$("#btn_txttype_close").click();
			$("#btn_localtype_close").click();
			$("#btn_mgnb_close").click();
		}
	});
	$search_close.on("click", function(){
		$Parent.removeClass("on");
        $Layer.slideUp(400);
		maskOff();
		setTimeout(function(){
			$(".mask").css("z-index" , 99);
		}, 600);
	});
}


function menuBtn(){

	function pcgnb(){
		// sitemap
		$("#btn_sitemap_open").on("click", function(){
			$("#sitemap").addClass("on");
			$(".sitemap_list").slideDown(400);
			$("#btn_txttype_close").click();
			$("#btn_localtype_close").click();
			maskOn();
			return false;
		});
		$("#btn_sitemap_close").on("click", function(){
			$("#sitemap").removeClass("on");
			$(".sitemap_list").slideUp(400);
			maskOff();
			setTimeout(function(){
				$(".sitemap_list").find(".on").removeClass("on");
			}, 1000);
			return false;
		});
		$(document).on("click", ".depth01 > li > a", function () {
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).parent().parent("ul").next().addClass("on").nextAll().removeClass("on");
			return false;
		}).on("click", ".depth02 > li > a", function () {
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).parent().parent("ul").next().addClass("on").nextAll().removeClass("on");
			return false;
		}).on("mouseenter", ".depth03 > li > a", function () {
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).parent().parent("ul").next().addClass("on").nextAll().removeClass("on");
			return false;
		});

		// 업체별상품
		$("#btn_txttype_open").on("click", function(){
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).siblings("div").slideDown(400);
			$(".localtype").slideUp(400);
			maskOn();

			$("#btn_sitemap_close").click();
			$("#btn_localtype_close").click();
			return false;
		});
		$("#btn_txttype_close").on("click", function(){
			$(this).parent().parent("li").removeClass("on");
			$(this).parent("div").slideUp(400);
			maskOff();
			return false;
		});
		// 지역별상품
		$("#btn_localtype_open").on("click", function(){
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).siblings("div").slideDown(400);
			maskOn();

			$("#btn_sitemap_close").click();
			$("#btn_txttype_close").click();
			return false;
		});
		$("#btn_localtype_close").on("click", function(){
			$(this).parent().parent("li").removeClass("on");
			$(this).parent("div").slideUp(400);
			maskOff();
			return false;
		});
	}pcgnb();

	function mgnb(){
		// mgnb
		$(document).on("click", ".btn_mgnb_open", function () {
			$(".header_gnb").addClass("on");
			$("#btn_detail_search_close").click();
			maskOn();
			return false;
		}).on("click", "#btn_mgnb_close", function () {
			$(".header_gnb").removeClass("on");
			maskOff();
			return false;
		}).on("click", ".menu_list > li > a", function () {
			$(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
			return false;
		}).on("click", "#gnb > ul > li > a, #gnb > ul > li > ul > li > a", function () {
			$(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
			return false;
		});
	
	}mgnb();

	$(window).on('resize', function () {
		if ($(window).width() > 1024) {
			pcgnb();
		} else {
			mgnb();
		}
    });
}

$(function () {

	/* if ($(window).width() > 1024) {
		// sitemap
		$("#btn_sitemap_open").on("click", function(){
			$("#sitemap").addClass("on");
			$(".sitemap_list").slideDown(400);
			$("#btn_txttype_close").click();
			$("#btn_localtype_close").click();
			$(".mask").fadeIn("fast").addClass("show");
		});
		$("#btn_sitemap_close").on("click", function(){
			$("#sitemap").removeClass("on");
			$(".sitemap_list").slideUp(400);
			$(".mask").removeClass("show");
			setTimeout(function(){
                $(".sitemap_list").find(".on").removeClass("on");
            }, 1000);
		});
		$(document).on("click", ".depth01 > li > a", function () {
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).parent().parent("ul").next().addClass("on").nextAll().removeClass("on");
		}).on("click", ".depth02 > li > a", function () {
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).parent().parent("ul").next().addClass("on").nextAll().removeClass("on");
		}).on("mouseenter", ".depth03 > li > a", function () {
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).parent().parent("ul").next().addClass("on").nextAll().removeClass("on");
		});

		// 업체별상품
		$("#btn_txttype_open").on("click", function(){
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).siblings("div").slideDown(400);
			$(".localtype").slideUp(400);
			$("#btn_sitemap_close").click();
			$("#btn_localtype_close").click();
			$(".mask").fadeIn("fast").addClass("show");
		});
		$("#btn_txttype_close").on("click", function(){
			$(this).parent().parent("li").removeClass("on");
			$(this).parent("div").slideUp(400);
			$(".mask").removeClass("show");
		});
		// 지역별상품
		$("#btn_localtype_open").on("click", function(){
			$(this).parent("li").addClass("on").siblings("li").removeClass("on");
			$(this).siblings("div").slideDown(400);
			$("#btn_sitemap_close").click();
			$("#btn_txttype_close").click();
			$(".mask").fadeIn("fast").addClass("show");
		});
		$("#btn_localtype_close").on("click", function(){
			$(this).parent().parent("li").removeClass("on");
			$(this).parent("div").slideUp(400);
			$(".mask").removeClass("show");
		});

	} else {

		// mgnb
		$(document).on("click", ".btn_mgnb_open", function () {
			$(".header_gnb").addClass("on");
			$("#btn_detail_search_close").click();
			$(".mask").fadeIn("fast").addClass("show");
		}).on("click", "#btn_mgnb_close", function () {
			$(".header_gnb").removeClass("on");
			$(".mask").removeClass("show");
		}).on("click", ".menu_list > li > a", function () {
			$(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
		}).on("click", "#gnb > ul > li > a, #gnb > ul > li > ul > li > a", function () {
			$(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
		});
	
	} */

	// 오른쪽 퀵메뉴
	var fixmenu_position = parseInt($(".fix_menu").css('top'))

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + fixmenu_position + "px";

		$(".fix_menu").stop().animate({
			"top" : newPosition
		}, 500);

	}).scroll();

	// 상단으로
	$(document).on("click", ".btn_top", function () {
		return $("html, body").animate({scrollTop:0},300),!1
	});

	// 모바일 fix메뉴
	$(document).on("click", ".fix_menu_m > ul > li > button", function () {
		$("#btn_detail_search_close").click();
		$(this).parent("li").addClass("on").siblings("li").removeClass("on");
		$mask.fadeIn("fast").addClass("show");
		$(".mask").css("z-index" , 101);
	}).on("click", ".btn_products_close", function () {
		$(this).parent().parent("li").removeClass("on");
		$mask.removeClass("show");
		$(".mask").css("z-index" , 99);
	}).on("click", "#btn_see_product", function () {
		fixSlick01();
	}).on("click", "#btn_favorite_product", function () {
		fixSlick02();
	}).on("click", "#btn_top_m", function () {
		$(".icon_detail_search_close").click();
		$(".btn_products_close").click();
		return $("html, body").animate({scrollTop:0},300),!1
	});

	function fixSlick01() {
		$(".see_products_slider .item").each(function(idx){
			if(idx == 1){
				$(".see_products_slider .fix_slick").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					infinite: false,
					autoplay: true,
					autoplaySpeed: 7000,
					customPaging: function (slider, i) {
						return '<span>' + (i + 1) + '</span> / ' + Math.ceil(slider.slideCount / 1);
					}
				});
				$(".see_products_slider .numbering").append($(".see_products_slider .slick-dots"));
				$(".see_products_slider .fix_slick_button").prepend("<button class='prev'>이전슬라이드</button>");
				$(".see_products_slider .fix_slick_button").append("<button class='next'>다음슬라이드</button>");

				$(".see_products_slider .fix_slick_button .prev").on("click", function() {
					$(this).parent().siblings(".slider").slick("slickPrev");
				});
				$(".see_products_slider .fix_slick_button .next").on("click", function() {
					$(this).parent().siblings(".slider").slick("slickNext");
				});
			}
		});
	}
	function fixSlick02() {
		$(".favorite_products_slider .item").each(function(idx){
			if(idx == 1){
				$(".favorite_products_slider .fix_slick").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					infinite: false,
					autoplay: true,
					autoplaySpeed: 7000,
					customPaging: function (slider, i) {
						return '<span>' + (i + 1) + '</span> / ' + Math.ceil(slider.slideCount / 1);
					}
				});
				$(".favorite_products_slider .numbering").append($(".favorite_products_slider .slick-dots"));
				$(".favorite_products_slider .fix_slick_button").prepend("<button class='prev'>이전슬라이드</button>");
				$(".favorite_products_slider .fix_slick_button").append("<button class='next'>다음슬라이드</button>");

				$(".favorite_products_slider .fix_slick_button .prev").on("click", function() {
					$(this).parent().siblings(".slider").slick("slickPrev");
				});
				$(".favorite_products_slider .fix_slick_button .next").on("click", function() {
					$(this).parent().siblings(".slider").slick("slickNext");
				});
			}
		});
	}
	
});

function menu_li_setting() {
	$(".menu_list > li div").each(function () {
		$(this).parent("li").addClass("collapse");
	});
}

function gnbSetting() {
	$("#gnb ul ul ul").each(function () {
		$(this).parent("li").addClass("collapse");
	});
}

function lnbSetting() {
    $("#lnb ul ul").each(function () {
        $(this).parent("li").addClass("collapse");
    });
    $("#lnb li.on").each(function () {
        $(this).parentsUntil($("#snb"), "li").addClass("on");
    });
    $("#lnb li.on > ul").each(function () {
        $(this).show();
    });

	$("#lnb .collapse > a").on("click", function(){
		$(this).next("ul").slideToggle().parent("li").toggleClass("on").siblings("li").removeClass("on").children("ul").slideUp();
		return false;
	});
}
