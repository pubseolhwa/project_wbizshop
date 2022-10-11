// layer_popup
$(function () {
	$(".layer_popup.show").each(function () {
		layerOpen($(this));
	});
});

var layerOpener = null;
$(document).on("click", "a.js_layer_open", function(e) {
    var tg = $(this).attr("href");
    layerOpen(tg, $(this));
    e.preventDefault();
}).on("click", ".js_layer_close , .btn_close_layer", function() {
    var target = $(this).closest(".layer_popup").attr("id");
    layerClose("#" + target, layerOpener);
}).on("keydown", ".layer_popup .btn_close_layer", function(e) {
    if (e.keyCode == 9 && !e.shiftKey) {// tab
        e.preventDefault();
        $(this).siblings(".layer_title").attr("tabindex", "0").focus();
    }
}).on("keydown", ".layer_title", function(e) {
    if (e.keyCode == 9 && e.shiftKey) {// shift + tab
        e.preventDefault();
        $(this).siblings(".btn_close_layer").focus();
    }
});

function layerOpen(_target, _opener) {
    layerOpener = _opener;
    $(_target).fadeIn("fast").addClass("show");
    $(_target).attr("tabindex", "0").focus();
    bodyScroll(true, $("body").width());
}

function layerClose(_target, _opener) {
    bodyScroll(false);
    var tg = null;

    if (_opener) {
        tg = $(_target);
        layerOpener = $(_opener);
    } else {
        tg = $(".layer_popup.show");
        layerOpener = null;
    }

    $(tg).removeClass("show");
    if (layerOpener !== null) {
        layerOpener.focus();
        layerOpener = null;
    }
}

function bodyScroll(_status, _orgWidth) {
    var $fixedObj = $("body");
    if (_status) {
        $("body").addClass("layer_opened");
        if ($("html").get(0).scrollWidth > $("html").width() === false) {
            $fixedObj.css("margin-right", $("body").width() - _orgWidth);
        }
    } else {
        $fixedObj.css("margin-right", "");
        $("body").removeClass("layer_opened");
    }
}
