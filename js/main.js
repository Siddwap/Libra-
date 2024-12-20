! function(e) {
    "use strict";
    e(window).on("load", (function() {
        e(".preloader").fadeOut()
    })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(".preloader").css("display", "none")
        }))
    })), e.fn.vsmobilemenu = function(t) {
        var s = e.extend({
            menuToggleBtn: ".vs-menu-toggle",
            bodyToggleClass: "vs-body-visible",
            subMenuClass: "vs-submenu",
            subMenuParent: "vs-item-has-children",
            subMenuParentToggle: "vs-active",
            meanExpandClass: "vs-mean-expand",
            appendElement: '<span class="vs-mean-expand"></span>',
            subMenuToggleClass: "vs-open",
            toggleSpeed: 400
        }, t);
        return this.each((function() {
            var t = e(this);

            function a() {
                t.toggleClass(s.bodyToggleClass);
                var a = "." + s.subMenuClass;
                e(a).each((function() {
                    e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle))
                }))
            }
            t.find("li").each((function() {
                var t = e(this).find("ul");
                t.addClass(s.subMenuClass), t.css("display", "none"), t.parent().addClass(s.subMenuParent), t.prev("a").append(s.appendElement), t.next("a").append(s.appendElement)
            }));
            var n = "." + s.meanExpandClass;
            e(n).each((function() {
                e(this).on("click", (function(t) {
                    var a;
                    t.preventDefault(), a = e(this).parent(), e(a).next("ul").length > 0 ? (e(a).parent().toggleClass(s.subMenuParentToggle), e(a).next("ul").slideToggle(s.toggleSpeed), e(a).next("ul").toggleClass(s.subMenuToggleClass)) : e(a).prev("ul").length > 0 && (e(a).parent().toggleClass(s.subMenuParentToggle), e(a).prev("ul").slideToggle(s.toggleSpeed), e(a).prev("ul").toggleClass(s.subMenuToggleClass))
                }))
            })), e(s.menuToggleBtn).each((function() {
                e(this).on("click", (function() {
                    a()
                }))
            })), t.on("click", (function(e) {
                e.stopPropagation(), a()
            })), t.find("div").on("click", (function(e) {
                e.stopPropagation()
            }))
        }))
    }, e(".vs-menu-wrapper").vsmobilemenu();
    var t = "",
        s = ".scrollToTop";
    e(window).on("scroll", (function() {
        var a, n, o, i, r;
        a = e(".sticky-active"), n = "active", o = "will-sticky", i = e(window).scrollTop(), r = a.css("height"), a.parent().css("min-height", r), e(window).scrollTop() > 800 ? (a.parent().addClass(o), i > t ? a.removeClass(n) : a.addClass(n)) : (a.parent().css("min-height", "").removeClass(o), a.removeClass(n)), t = i, e(this).scrollTop() > 500 ? e(s).addClass("show") : e(s).removeClass("show")
    })), e(s).each((function() {
        e(this).on("click", (function(s) {
            return s.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, t / 3), !1
        }))
    })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e(".vs-hero-carousel").each((function() {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }
        t.on("sliderDidLoad", (function(s, a) {
            var n = ".ls-custom-dot",
                o = "data-slide-go",
                i = a.slides.current.index,
                r = 1;
            e(n).each((function() {
                e(this).attr(o, r), r++, e(this).on("click", (function(s) {
                    s.preventDefault();
                    var a = e(this).attr(o);
                    t.layerSlider(parseInt(a))
                }))
            })), e(n + "[" + o + '="' + i + '"').addClass("active"), setTimeout((() => {
                t.find(".ls-custom-arrow").each((function() {
                    e(this).on("click", (function(s) {
                        s.preventDefault();
                        var a = e(this).attr("data-change-slide");
                        t.layerSlider(a)
                    }))
                }))
            }), 1e3)
        })).on("slideChangeDidComplete", (function(t, s) {
            var a = s.slides.current.index;
            e('.ls-custom-dot[data-slide-go="' + a + '"').addClass("active").siblings().removeClass("active")
        })), t.layerSlider({
            allowRestartOnResize: !0,
            maxRatio: s("maxratio") ? s("maxratio") : 1,
            type: s("slidertype") ? s("slidertype") : "responsive",
            pauseOnHover: !!s("pauseonhover"),
            navPrevNext: !!s("navprevnext"),
            hoverPrevNext: !!s("hoverprevnext"),
            hoverBottomNav: !!s("hoverbottomnav"),
            navStartStop: !!s("navstartstop"),
            navButtons: !!s("navbuttons"),
            loop: !1 !== s("loop"),
            autostart: !!s("autostart"),
            height: s("height") ? s("height") : 1080,
            responsiveUnder: s("responsiveunder") ? s("responsiveunder") : 1220,
            layersContainer: s("container") ? s("container") : 1220,
            showCircleTimer: !!s("showcircletimer"),
            skinsPath: "layerslider/skins/",
            thumbnailNavigation: !1 !== s("thumbnailnavigation")
        })
    })), e(".vs-carousel").each((function() {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }
        var a = '<button type="button" class="slick-prev"><i class="' + s("prev-arrow") + '"></i></button>',
            n = '<button type="button" class="slick-next"><i class="' + s("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == s("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!s("dots"),
            fade: !!s("fade"),
            arrows: !!s("arrows"),
            speed: s("speed") ? s("speed") : 1e3,
            asNavFor: !!s("asnavfor") && s("asnavfor"),
            autoplay: 0 != s("autoplay"),
            infinite: 0 != s("infinite"),
            slidesToShow: s("slide-show") ? s("slide-show") : 1,
            adaptiveHeight: !!s("adaptive-height"),
            centerMode: !!s("center-mode"),
            autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
            centerPadding: s("center-padding") ? s("center-padding") : "0",
            focusOnSelect: !!s("focuson-select"),
            pauseOnFocus: !!s("pauseon-focus"),
            pauseOnHover: !!s("pauseon-hover"),
            variableWidth: !!s("variable-width"),
            vertical: !!s("vertical"),
            verticalSwiping: !!s("vertical"),
            prevArrow: s("prev-arrow") ? a : '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>',
            nextArrow: s("next-arrow") ? n : '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!s("xl-arrows"),
                    dots: !!s("xl-dots"),
                    slidesToShow: s("xl-slide-show") ? s("xl-slide-show") : s("slide-show"),
                    centerMode: !!s("xl-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!s("ml-arrows"),
                    dots: !!s("ml-dots"),
                    slidesToShow: s("ml-slide-show") ? s("ml-slide-show") : s("slide-show"),
                    centerMode: !!s("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!s("lg-arrows"),
                    dots: !!s("lg-dots"),
                    slidesToShow: s("lg-slide-show") ? s("lg-slide-show") : s("slide-show"),
                    centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!s("md-arrows"),
                    dots: !!s("md-dots"),
                    slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                    centerMode: !!s("md-center-mode") && s("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 767,
                settings: {
                    arrows: !!s("sm-arrows"),
                    dots: !!s("sm-dots"),
                    slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                    centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!s("xs-arrows"),
                    dots: !!s("xs-dots"),
                    slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                    centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    }));
    var a, n, o, i = ".ajax-contact",
        r = "is-invalid",
        l = '[name="email"]',
        d = '[name="name"],[name="email"],[name="number"],[name="message"]',
        c = e(i).find(".form-messages");

    function u() {
        var t, s = e(i).serialize();
        t = function() {
            var t, s = !0;

            function a(a) {
                a = a.split(",");
                for (var n = 0; n < a.length; n++) t = i + " " + a[n], e(t).val() ? (e(t).removeClass(r), s = !0) : (e(t).addClass(r), s = !1)
            }
            a(d), e(l).val() && e(l).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(l).removeClass(r), s = !0) : (e(l).addClass(r), s = !1);
            return s
        }(), t && jQuery.ajax({
            url: e(i).attr("action"),
            data: s,
            type: "POST"
        }).done((function(t) {
            c.removeClass("error"), c.addClass("success"), c.text(t), e(i + ' input:not([type="submit"]),' + i + " textarea").val("")
        })).fail((function(e) {
            c.removeClass("success"), c.addClass("error"), "" !== e.responseText ? c.html(e.responseText) : c.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function p(e) {
        return parseInt(e, 10)
    }
    e(i).on("submit", (function(e) {
            e.preventDefault(), u()
        })), a = ".sidemenu-wrapper", n = ".sideMenuCls", o = "show", e(".sideMenuToggler").on("click", (function(t) {
            t.preventDefault(), e(a).addClass(o)
        })), e(a).on("click", (function(t) {
            t.stopPropagation(), e(a).removeClass(o)
        })), e(a + " > div").on("click", (function(t) {
            t.stopPropagation(), e(a).addClass(o)
        })), e(n).on("click", (function(t) {
            t.preventDefault(), t.stopPropagation(), e(a).removeClass(o)
        })),
        function(t, s, a, n) {
            e(s).on("click", (function(s) {
                s.preventDefault(), e(t).addClass(n)
            })), e(t).on("click", (function(s) {
                s.stopPropagation(), e(t).removeClass(n)
            })), e(t).find("form").on("click", (function(s) {
                s.stopPropagation(), e(t).addClass(n)
            })), e(a).on("click", (function(s) {
                s.preventDefault(), s.stopPropagation(), e(t).removeClass(n)
            }))
        }(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"), e(".popup-image").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").magnificPopup({
            type: "iframe"
        }), e.fn.sectionPosition = function(t, s) {
            e(this).each((function() {
                var a, n, o, i, r, l = e(this);
                a = Math.floor(l.height() / 2), n = l.attr(t), o = l.attr(s), i = p(e(o).css("padding-top")), r = p(e(o).css("padding-bottom")), "top-half" === n ? (e(o).css("padding-bottom", r + a + "px"), l.css("margin-top", "-" + a + "px")) : "bottom-half" === n && (e(o).css("padding-top", i + a + "px"), l.css("margin-bottom", "-" + a + "px"))
            }))
        };
    var v = "[data-sec-pos]";
    e(v).length && e(v).sectionPosition("data-sec-pos", "data-pos-for"), e(".circle-progress").circleProgress({
        size: 110,
        thickness: 8,
        startAngle: -1.6,
        fill: "#47AF34",
        emptyFill: "#F5F5F5"
    }).on("circle-animation-progress", (function(t, s, a) {
        e(this).find(".progress-value").text(a.toFixed(2).substr(2) + "%")
    })), e.fn.vsTab = function(t) {
        var s = e.extend({
            sliderTab: !1,
            tabButton: "button",
            indicator: !1
        }, t);
        e(this).each((function() {
            var t = e(this),
                a = t.find(s.tabButton);
            if (a.on("click", (function(t) {
                    t.preventDefault();
                    var a = e(this);
                    a.addClass("active").siblings().removeClass("active"), s.sliderTab && e(n).slick("slickGoTo", a.data("slide-go-to"))
                })), s.sliderTab) {
                var n = t.data("asnavfor"),
                    o = 0;
                a.each((function() {
                    var a = e(this);
                    a.attr("data-slide-go-to", o), o++, a.hasClass("active") && e(n).slick("slickGoTo", a.data("slide-go-to")), e(n).on("beforeChange", (function(e, a, n, o) {
                        t.find(s.tabButton + '[data-slide-go-to="' + o + '"]').addClass("active").siblings().removeClass("active")
                    }))
                }))
            }
        }))
    }, e(".vs-slider-tab").length && e(".vs-slider-tab").vsTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".testi-nav").each((function() {
        var t = 0;
        e(this).find(".tab-btn").each((function() {
            var s = e(this);
            s.attr("data-goto", t), t++, s.on("click", (function() {
                e("#testislide2").slick("slickGoTo", s.data("goto"))
            }))
        }))
    }));
    var g = e("#testislide2");
    g.on("init", (function(t, s, a) {
        var n = e(s.$slides[s.currentSlide]),
            o = n.data("slick-index"),
            i = n.prev().data("slick-index"),
            r = n.next().data("slick-index");
        e(`.testi-nav .tab-btn[data-goto="${o}"]`).addClass("active"), e(`.testi-nav .tab-btn[data-goto="${r}"]`).addClass("next"), e(`.testi-nav .tab-btn[data-goto="${i}"]`).addClass("prev"), s.$prevIndex = i, s.$nextIndex = r
    })).on("beforeChange", (function(t, s, a, n) {
        var o = e(s.$slides[n]),
            i = o.data("slick-index");
        e(`.testi-nav .tab-btn[data-goto="${s.$prevIndex}"]`).removeClass("prev"), e(`.testi-nav .tab-btn[data-goto="${s.$nextIndex}"]`).removeClass("next");
        var r = o.prev().data("slick-index"),
            l = o.next().data("slick-index");
        e(`.testi-nav .tab-btn[data-goto="${l}"]`).addClass("next"), e(`.testi-nav .tab-btn[data-goto="${r}"]`).addClass("prev"), s.$prevIndex = r, s.$nextIndex = l, e(`.testi-nav .tab-btn[data-goto="${i}"]`).addClass("active").removeClass("next").removeClass("prev").siblings().removeClass("active")
    })), g.slick({
        speed: 600,
        arrows: !1,
        fade: !0,
        dots: !0,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !1,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: !1
            }
        }]
    }), e(".team-style1 .share-btn").on("click", (function() {
        e(this).prev(".team-social").slideToggle(), e(this).toggleClass("active");
        var t = e(this).closest(".team-column").siblings().find(".team-style1 .share-btn.active");
        t.prev(".team-social").slideUp(), t.removeClass("active")
    })), new WOW({
        boxClass: "wow",
        animateClass: "wow-animated",
        offset: 0,
        mobile: !1,
        live: !0,
        scrollContainer: null,
        resetAnimation: !1
    }).init()
}(jQuery);