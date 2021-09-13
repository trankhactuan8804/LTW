var myapp_config = {
    VERSION: "4.0.2",
    throttleDelay: 450,
    filterDelay: 150,
    thisDevice: null,
    isMobile: /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
        navigator.userAgent.toLowerCase()
    ),
    mobileMenuTrigger: null,
    mobileResolutionTrigger: 992,
    isWebkit:
        !0 == (!!window.chrome && !!window.chrome.webstore) ||
        0 <
        Object.prototype.toString
        .call(window.HTMLElement)
        .indexOf("Constructor") ==
        !0,
    isChrome: /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()),
    isIE: 0 < window.navigator.userAgent.indexOf("Trident/") == !0,
    debugState: !0,
    rippleEffect: !0,
    mythemeAnchor: "#mytheme",
    navHooks: "#js-nav-menu",
    navAccordion: !0,
    navInitalized: "js-nav-built",
    navHorizontalWrapperId: "js-nav-menu-wrapper",
    navSpeed: 500,
    mythemeColorProfileID: $("#js-color-profile"),
    navClosedSign: "fal fa-angle-down",
    navOpenedSign: "fal fa-angle-up",
    appDateHook: ".js-get-date",
    storeLocally: !0,
    jsArray: [],
};

function registerEvent() {
    $("body [data-action]").off("click");
    $("body [data-action]").on("click", function(e) {
        var o = $(this).data("action");
        switch (!0) {
            case "toggle" === o:
                var t = $(this).attr("data-target") || $("body");
                var n = $(this).attr("data-class");
                var i = $(this).attr("data-focus");
                if (-1 !== n.indexOf("mod-bg-")) {
                    $(t).removeClass(function(e, o) {
                        return (o.match(/(^|\s)mod-bg-\S+/g) || []).join(" ");
                    });
                }
                $(t).toggleClass(n);
                if ($(this).hasClass("dropdown-item")) {
                    $(this).toggleClass("active");
                }
                if (null != i) {
                    setTimeout(function() {
                        $("#" + i).focus();
                    }, 200);
                }
                window.initApp.checkNavigationOrientation();
                window.initApp.saveSettings();
                break;
            case "toggle-swap" === o:
                (t = $(this).attr("data-target")), (n = $(this).attr("data-class"));
                $(t).removeClass().addClass(n);
                break;
            case "panel-collapse" === o:
                (l = $(this).closest(".panel"))
                .children(".panel-container")
                    .collapse("toggle")
                    .on("show.bs.collapse", function() {
                        l.removeClass("panel-collapsed"),
                            myapp_config.debugState &&
                            console.log(
                                "panel id:" + l.attr("id") + " | action: uncollapsed"
                            );
                    })
                    .on("hidden.bs.collapse", function() {
                        l.addClass("panel-collapsed"),
                            myapp_config.debugState &&
                            console.log(
                                "panel id:" + l.attr("id") + " | action: collapsed"
                            );
                    });
                break;
            case "panel-fullscreen" === o:
                (l = $(this).closest(".panel")).toggleClass("panel-fullscreen"),
                    $("body").toggleClass("panel-fullscreen"),
                    myapp_config.debugState &&
                    console.log("panel id:" + l.attr("id") + " | action: fullscreen");
                break;
            case "panel-close" === o:
                function a() {
                    l.fadeOut(500, function() {
                        $(this).remove(),
                            myapp_config.debugState &&
                            console.log("panel id:" + l.attr("id") + " | action: removed");
                    });
                }
                var l = $(this).closest(".panel");
                "undefined" != typeof bootbox
                    ?
                    (window.initApp.playSound("media/sound", "messagebox"),
                        bootbox.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i> Do you wish to delete panel <span class='fw-500'>&nbsp;'" +
                                l.children(".panel-hdr").children("h2").text().trim() +
                                "'&nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
                            centerVertical: !0,
                            swapButtonOrder: !0,
                            buttons: {
                                confirm: {
                                    label: "Yes",
                                    className: "btn-danger shadow-0",
                                },
                                cancel: {
                                    label: "No",
                                    className: "btn-default"
                                },
                            },
                            className: "modal-alert",
                            closeButton: !1,
                            callback: function(e) {
                                1 == e && a();
                            },
                        })) :
                    confirm(
                        "Do you wish to delete panel " +
                        l.children(".panel-hdr").children("h2").text().trim() +
                        "?"
                    ) && a();
                break;
            case "theme-update" === o:
                if ($(myapp_config.mythemeAnchor).length)
                    $(myapp_config.mythemeAnchor).attr(
                        "href",
                        $(this).attr("data-theme")
                    );
                else {
                    var r = $("<link>", {
                        id: myapp_config.mythemeAnchor.replace("#", ""),
                        rel: "stylesheet",
                        href: $(this).attr("data-theme"),
                    });
                    $("head").append(r);
                }
                null != $(this).attr("data-themesave") && window.initApp.saveSettings();
                break;
            case "app-reset" === o:
                window.initApp.resetSettings();
                break;
            case "factory-reset" === o:
                window.initApp.factoryReset();
                break;
            case "app-print" === o:
                window.print();
                break;
            case "app-loadscript" === o:
                var s = $(this).attr("data-loadurl"),
                    c = $(this).attr("data-loadfunction");
                window.initApp.loadScript(s, c);
                break;
            case "lang" === o:
                var p = $(this).attr("data-lang").toString();
                $.i18n ?
                    i18n.setLng(p, function() {
                        $("[data-i18n]").i18n(),
                            $("[data-lang]").removeClass("active"),
                            $(this).addClass("active");
                    }) :
                    window.initApp.loadScript("js/i18n/i18n.js", function() {
                        $.i18n.init({
                                resGetPath: "media/data/__lng__.json",
                                load: "unspecific",
                                fallbackLng: !1,
                                lng: p,
                            },
                            function(e) {
                                $("[data-i18n]").i18n();
                            }
                        );
                    });
                break;
            case "app-fullscreen" === o:
                document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.webkitFullscreenElement ||
                    document.msFullscreenElement ?
                    (document.exitFullscreen ?
                        document.exitFullscreen() :
                        document.msExitFullscreen ?
                        document.msExitFullscreen() :
                        document.mozCancelFullScreen ?
                        document.mozCancelFullScreen() :
                        document.webkitExitFullscreen &&
                        document.webkitExitFullscreen(),
                        myapp_config.debugState &&
                        console.log(
                            "%capp fullscreen toggle inactive! ",
                            "color: #ed1c24"
                        )) :
                    (document.documentElement.requestFullscreen ?
                        document.documentElement.requestFullscreen() :
                        document.documentElement.msRequestFullscreen ?
                        document.documentElement.msRequestFullscreen() :
                        document.documentElement.mozRequestFullScreen ?
                        document.documentElement.mozRequestFullScreen() :
                        document.documentElement.webkitRequestFullscreen &&
                        document.documentElement.webkitRequestFullscreen(
                            Element.ALLOW_KEYBOARD_INPUT
                        ),
                        myapp_config.debugState &&
                        console.log("app fullscreen toggle active"));
                break;
            case "playsound" === o:
                var f = $(this).attr("data-soundpath") || "media/sound/",
                    d = $(this).attr("data-soundfile");
                window.initApp.playSound(f, d);
        }
        $(this).tooltip("hide"),
            myapp_config.debugState && console.log("data-action clicked: " + o),
            e.stopPropagation(),
            e.preventDefault();
    });
}

if (!window.bundle) {
    window.bundle = function() {
        window.initApp = {
            listFilter: function(t, e, o) {
                o ? $(o).addClass("js-list-filter") : $(t).addClass("js-list-filter"),
                    $(e)
                    .change(function() {
                        var e = $(this).val().toLowerCase(),
                            o = $(t).next().filter(".js-filter-message");

                        if (e.createUniqueText) e = e.createUniqueText();
                        if (e) {
                            var _total = 0;
                            var _menus = $(t).find($("[data-filter-tags]"));
                            _menus.toArray().forEach((item) => {
                                var tag = $(item).attr("data-filter-tags");
                                tag = tag.toLowerCase();
                                if (tag.createUniqueText) tag = tag.createUniqueText();
                                if (tag.indexOf(e) == -1) {
                                    $(item)
                                        .parentsUntil(t)
                                        .removeClass("js-filter-show")
                                        .addClass("js-filter-hide");
                                }
                            });
                            _menus.toArray().forEach((item) => {
                                var tag = $(item).attr("data-filter-tags");
                                tag = tag.toLowerCase();
                                if (tag.createUniqueText) tag = tag.createUniqueText();
                                if (tag.indexOf(e) !== -1) {
                                    $(item)
                                        .parentsUntil(t)
                                        .addClass("js-filter-show")
                                        .removeClass("js-filter-hide");
                                }
                            });

                            // o && o.text("hiển thị " + count + " trong tổng số " + _total);
                        } else {
                            $(t)
                                .find("[data-filter-tags]")
                                .parentsUntil(t)
                                .removeClass("js-filter-hide js-filter-show");
                            // ,
                            // o && o.text("");
                        }
                        // return (
                        //   1 < e.length
                        //     ? ($(t)
                        //         .find(
                        //           $(
                        //             "[data-filter-tags]:not([data-filter-tags*='" +
                        //               e +
                        //               "'])"
                        //           )
                        //         )
                        //         .parentsUntil(t)
                        //         .removeClass("js-filter-show")
                        //         .addClass("js-filter-hide"),
                        //       $(t)
                        //         .find($("[data-filter-tags*='" + e + "']"))
                        //         .parentsUntil(t)
                        //         .removeClass("js-filter-hide")
                        //         .addClass("js-filter-show"),
                        //       o &&
                        //         o.text(
                        //           "showing " +
                        //             $(t).find("li.js-filter-show").length +
                        //             " from " +
                        //             $(t).find("[data-filter-tags]").length +
                        //             " total"
                        //         ))
                        //     : ($(t)
                        //         .find("[data-filter-tags]")
                        //         .parentsUntil(t)
                        //         .removeClass("js-filter-hide js-filter-show"),
                        //       o && o.text("")),
                        //   !1
                        // );
                    })
                    .keyup(
                        $.debounce(myapp_config.filterDelay, function(e) {
                            $(this).change();
                        })
                    );
            },
            loadScript: function(e, o) {
                if (myapp_config.jsArray[e])
                    myapp_config.debugState &&
                    console.log("This script was already loaded: " + e);
                else {
                    var t = jQuery.Deferred(),
                        n = document.getElementsByTagName("body")[0],
                        i = document.createElement("script");
                    (i.type = "text/javascript"),
                    (i.src = e),
                    (i.onload = function() {
                        t.resolve();
                    }),
                    n.appendChild(i),
                        (myapp_config.jsArray[e] = t.promise());
                }
                myapp_config.jsArray[e].then(function() {
                    "function" == typeof o && o();
                });
            },
            saveSettings: function() {
                "undefined" != typeof saveSettings &&
                    $.isFunction(saveSettings) &&
                    myapp_config.storeLocally ?
                    (window.initApp.accessIndicator(),
                        saveSettings(),
                        myapp_config.debugState &&
                        console.log(
                            "Theme settings: \n" + localStorage.getItem("themeSettings")
                        )) :
                    console.log("save function does not exist");
            },
            resetSettings: function() {
                $("body").removeClass(function(e, o) {
                        return (o.match(/(^|\s)(nav-|header-|mod-|display-)\S+/g) || []).join(
                            " "
                        );
                    }),
                    $(myapp_config.mythemeAnchor).attr("href", ""),
                    window.initApp.checkNavigationOrientation(),
                    window.initApp.saveSettings(),
                    myapp_config.debugState && console.log("App reset successful");
            },
            factoryReset: function() {
                window.initApp.playSound("media/sound", "messagebox"),
                    $(".js-modal-settings").modal("hide"),
                    "undefined" != typeof bootbox ?
                    bootbox.confirm({
                        title: "<i class='fal fa-exclamation-triangle text-warning mr-2'></i> You are about to reset all of your localStorage settings",
                        message: "<span><strong>Warning:</strong> This action is not reversable. You will lose all your layout settings.</span>",
                        centerVertical: !0,
                        swapButtonOrder: !0,
                        buttons: {
                            confirm: {
                                label: "Factory Reset",
                                className: "btn-warning shadow-0",
                            },
                            cancel: {
                                label: "Cancel",
                                className: "btn-success"
                            },
                        },
                        className: "modal-alert",
                        closeButton: !1,
                        callback: function(e) {
                            1 == e &&
                                (localStorage.clear(),
                                    window.initApp.resetSettings(),
                                    location.reload());
                        },
                    }) :
                    confirm(
                        "You are about to reset all of your localStorage to null state. Do you wish to continue?"
                    ) &&
                    (localStorage.clear(),
                        window.initApp.resetSettings(),
                        location.reload()),
                    myapp_config.debugState && console.log("App reset successful");
            },
            accessIndicator: function() {
                $("body")
                    .addClass("saving")
                    .delay(600)
                    .queue(function() {
                        return $(this).removeClass("saving").dequeue(), !0;
                    });
            },
            pushSettings: function(e, o) {
                return (
                    0 != o && localStorage.setItem("themeSettings", ""),
                    $("body").addClass(e),
                    window.initApp.checkNavigationOrientation(),
                    0 != o && window.initApp.saveSettings(),
                    e
                );
            },
            getSettings: function() {
                return $("body")
                    .attr("class")
                    .split(/[^\w-]+/)
                    .filter(function(e) {
                        return /^(nav|header|mod|display)-/i.test(e);
                    })
                    .join(" ");
            },
            playSound: function(e, o) {
                var t = document.createElement("audio");
                navigator.userAgent.match("Firefox/") ?
                    t.setAttribute("src", e + "/" + o + ".ogg") :
                    t.setAttribute("src", e + "/" + o + ".mp3"),
                    t.addEventListener(
                        "load",
                        function() {
                            t.play();
                        }, !0
                    ),
                    t.pause(),
                    t.play();
            },
            detectBrowserType: function() {
                return myapp_config.isChrome ?
                    ($("body").addClass("chrome webkit"), "chrome webkit") :
                    myapp_config.isWebkit ?
                    ($("body").addClass("webkit"), "webkit") :
                    myapp_config.isIE ?
                    ($("body").addClass("ie"), "ie") :
                    void 0;
            },
            addDeviceType: function() {
                return (
                    myapp_config.isMobile ?
                    ($("body").addClass("mobile"),
                        (myapp_config.thisDevice = "mobile")) :
                    ($("body").addClass("desktop"),
                        (myapp_config.thisDevice = "desktop")),
                    myapp_config.thisDevice
                );
            },
            // windowScrollEvents: function () {
            //   $("body").is(
            //     ".nav-function-hidden.header-function-fixed:not(.nav-function-top)"
            //   ) && "desktop" === myapp_config.thisDevice
            //     ? $(".page-sidebar > .page-logo").css({ top: $(window).scrollTop() })
            //     : $("body").is(
            //         ".header-function-fixed:not(.nav-function-top):not(.nav-function-hidden)"
            //       ) &&
            //       "desktop" === myapp_config.thisDevice &&
            //       $(".page-sidebar > .page-logo").attr("style", "");
            // },
            checkNavigationOrientation: function() {
                switch (!0) {
                    case $.fn.menuSlider &&
                    $("body").hasClass("nav-function-top") &&
                    0 == $("#js-nav-menu-wrapper").length &&
                    !$("body").hasClass("mobile-view-activated"):
                        $(myapp_config.navHooks).menuSlider({
                                element: $(myapp_config.navHooks),
                                wrapperId: myapp_config.navHorizontalWrapperId,
                            }),
                            myapp_config.debugState &&
                            console.log("----top controls created -- case 1");
                        break;
                    case $("body").hasClass("nav-function-top") &&
                    1 == $("#js-nav-menu-wrapper").length &&
                    $("body").hasClass("mobile-view-activated"):
                        $(myapp_config.navHooks).menuSlider("destroy"),
                            myapp_config.debugState &&
                            console.log("----top controls destroyed -- case 2");
                        break;
                    case !$("body").hasClass("nav-function-top") &&
                    1 == $("#js-nav-menu-wrapper").length:
                        $(myapp_config.navHooks).menuSlider("destroy"),
                            myapp_config.debugState &&
                            console.log("----top controls destroyed -- case 3");
                }
            },
            buildNavigation: function(e) {
                if ($.fn.navigation)
                    return (
                        $(e).navigation({
                            accordion: myapp_config.navAccordion,
                            speed: myapp_config.navSpeed,
                            closedSign: '<em class="' + myapp_config.navClosedSign + '"></em>',
                            openedSign: '<em class="' + myapp_config.navOpenedSign + '"></em>',
                            initClass: myapp_config.navInitalized,
                        }),
                        e
                    );
                myapp_config.debugState &&
                    console.log("WARN: navigation plugin missing");
            },
            destroyNavigation: function(e) {
                if ($.fn.navigation) return $(e).navigationDestroy(), e;
                myapp_config.debugState &&
                    console.log("WARN: navigation plugin missing");
            },
            appForms: function(o, t, e) {
                $(o).each(function() {
                    var e = $(this).find(".form-control");
                    e.on("focus", function() {
                            !(function(e, o, t) {
                                $(e).parents(o).addClass(t);
                            })(this, o, t);
                        }),
                        e.on("blur", function() {
                            !(function(e, o, t) {
                                $(e).parents(o).removeClass(t);
                            })(this, o, t);
                        });
                });
            },
            mobileCheckActivation: function() {
                return (
                    window.innerWidth < myapp_config.mobileResolutionTrigger ?
                    ($("body").addClass("mobile-view-activated"),
                        (myapp_config.mobileMenuTrigger = !0)) :
                    ($("body").removeClass("mobile-view-activated"),
                        (myapp_config.mobileMenuTrigger = !1)),
                    myapp_config.debugState &&
                    console.log(
                        "mobileCheckActivation on " +
                        $(window).width() +
                        " | activated: " +
                        myapp_config.mobileMenuTrigger
                    ),
                    myapp_config.mobileMenuTrigger
                );
            },
            toggleVisibility: function(e) {
                var o = document.getElementById(e);
                "block" == o.style.display ?
                    (o.style.display = "none") :
                    (o.style.display = "block");
            },
            domReadyMisc: function() {
                if (
                    ($(".custom-file input").change(function(e) {
                            for (var o = [], t = 0; t < $(this)[0].files.length; t++)
                                o.push($(this)[0].files[t].name);
                            $(this).next(".custom-file-label").html(o.join(", "));
                        }),
                        $(".modal-backdrop-transparent").on("show.bs.modal", function(e) {
                            setTimeout(function() {
                                $(".modal-backdrop").addClass("modal-backdrop-transparent");
                            });
                        }),
                        $(myapp_config.appDateHook).length)
                ) {
                    var e = new Date(),
                        o = [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ][e.getDay()] +
                        ", " + [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                        ][e.getMonth()] +
                        " " +
                        e.getDate() +
                        ", " +
                        e.getFullYear();
                    $(myapp_config.appDateHook).text(o);
                }
                window.initApp.checkNavigationOrientation();
                var t = localStorage.getItem("lastTab");
                if (
                    ($('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
                            localStorage.setItem("lastTab", $(this).attr("href"));
                        }),
                        t && $('[href="' + t + '"]').tab("show"),
                        void 0 !== $.fn.slimScroll && "desktop" === myapp_config.thisDevice ?
                        ($(
                                ".custom-scroll:not(.disable-slimscroll) >:first-child"
                            ).slimscroll({
                                height: $(this).data("scrollHeight") || "100%",
                                size: $(this).data("scrollSize") || "4px",
                                position: $(this).data("scrollPosition") || "right",
                                color: $(this).data("scrollColor") || "rgba(0,0,0,0.6)",
                                alwaysVisible: $(this).data("scrollAlwaysVisible") || !1,
                                distance: $(this).data("scrollDistance") || "4px",
                                railVisible: $(this).data("scrollRailVisible") || !1,
                                railColor: $(this).data("scrollRailColor") || "#fafafa",
                                allowPageScroll: !1,
                                disableFadeOut: !1,
                            }),
                            myapp_config.debugState &&
                            console.log("%c✔ SlimScroll plugin active", "color: #148f32")) :
                        (console.log(
                                "WARN! $.fn.slimScroll not loaded or user is on desktop"
                            ),
                            $("body").addClass("no-slimscroll")),
                        void 0 !== window.initApp.listFilter &&
                        $.isFunction(window.initApp.listFilter) &&
                        $("[data-listfilter]").length)
                ) {
                    var n = $("[data-listfilter]").attr("id"),
                        i = $("[data-listfilter]").attr("data-listfilter");
                    window.initApp.listFilter(i, "#" + n);
                }
                if (
                    (void 0 !== $.fn.tooltip && $('[data-toggle="tooltip"]').length ?
                        $('[data-toggle="tooltip"]').tooltip() :
                        console.log("OOPS! bs.tooltip is not loaded"),
                        void 0 !== $.fn.popover && $('[data-toggle="popover"]').length)
                ) {
                    $.fn.tooltip.Constructor.Default.whiteList;
                    $('[data-toggle="popover"]').popover({
                        sanitize: !1
                    });
                }
                if (
                    (void 0 !== $.fn.dropdown ?
                        (Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !1) :
                        console.log("OOPS! bs.popover is not loaded"),
                        $(document).on(
                            "click",
                            ".dropdown-menu:not(.js-auto-close)",
                            function(e) {
                                e.stopPropagation();
                            }
                        ),
                        window.Waves && myapp_config.rippleEffect ?
                        (Waves.attach(
                                ".nav-menu:not(.js-waves-off) a, .btn:not(.js-waves-off):not(.btn-switch), .js-waves-on", ["waves-themed"]
                            ),
                            Waves.init(),
                            myapp_config.debugState &&
                            console.log("%c✔ Waves plugin active", "color: #148f32")) :
                        myapp_config.debugState &&
                        console.log("%c✘ Waves plugin inactive! ", "color: #fd3995"),
                        navigator.userAgent.match(/IEMobile\/10\.0/))
                ) {
                    var a = document.createElement("style");
                    a.appendChild(
                            document.createTextNode("@-ms-viewport{width:auto!important}")
                        ),
                        document.head.appendChild(a);
                }
                myapp_config.debugState &&
                    console.log(
                        "%c✔ Finished app.init() v" +
                        myapp_config.VERSION +
                        "\n---------------------------",
                        "color: #148f32"
                    );
            },
        };

        $(window).resize(
                $.throttle(myapp_config.throttleDelay, function(e) {
                    window.initApp.mobileCheckActivation(),
                        window.initApp.checkNavigationOrientation();
                })
            ),
            $(window).scroll($.throttle(myapp_config.throttleDelay, function(e) {})),
            $(window).on("scroll", window.initApp.windowScrollEvents),
            document.addEventListener("DOMContentLoaded", function() {
                window.initApp.addDeviceType(),
                    window.initApp.detectBrowserType(),
                    window.initApp.domReadyMisc(),
                    window.initApp.appForms(".input-group", "has-length", "has-disabled");
            }),
            $(window).on("orientationchange", function(e) {
                myapp_config.debugState && console.log("orientationchange event");
            }),
            $(window).on("blur focus", function(e) {
                if ($(this).data("prevType") != e.type)
                    switch (e.type) {
                        case "blur":
                            $("body").toggleClass("blur"),
                                myapp_config.debugState && console.log("blur");
                            break;
                        case "focus":
                            $("body").toggleClass("blur"),
                                myapp_config.debugState && console.log("focused");
                    }
                $(this).data("prevType", e.type);
            });
        var color = {
            primary: {
                _50: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-50")
                    .css("color")
                ) || "#ccbfdf",
                _100: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-100")
                    .css("color")
                ) || "#beaed7",
                _200: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-200")
                    .css("color")
                ) || "#b19dce",
                _300: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-300")
                    .css("color")
                ) || "#a38cc6",
                _400: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-400")
                    .css("color")
                ) || "#967bbd",
                _500: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-500")
                    .css("color")
                ) || "#886ab5",
                _600: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-600")
                    .css("color")
                ) || "#7a59ad",
                _700: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-700")
                    .css("color")
                ) || "#6e4e9e",
                _800: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-800")
                    .css("color")
                ) || "#62468d",
                _900: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-primary-900")
                    .css("color")
                ) || "#563d7c",
            },
            success: {
                _50: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-50")
                    .css("color")
                ) || "#7aece0",
                _100: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-100")
                    .css("color")
                ) || "#63e9db",
                _200: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-200")
                    .css("color")
                ) || "#4de5d5",
                _300: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-300")
                    .css("color")
                ) || "#37e2d0",
                _400: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-400")
                    .css("color")
                ) || "#21dfcb",
                _500: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-500")
                    .css("color")
                ) || "#1dc9b7",
                _600: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-600")
                    .css("color")
                ) || "#1ab3a3",
                _700: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-700")
                    .css("color")
                ) || "#179c8e",
                _800: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-800")
                    .css("color")
                ) || "#13867a",
                _900: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-success-900")
                    .css("color")
                ) || "#107066",
            },
            info: {
                _50: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-50")
                    .css("color")
                ) || "#9acffa",
                _100: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-100")
                    .css("color")
                ) || "#82c4f8",
                _200: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-200")
                    .css("color")
                ) || "#6ab8f7",
                _300: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-300")
                    .css("color")
                ) || "#51adf6",
                _400: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-400")
                    .css("color")
                ) || "#39a1f4",
                _500: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-500")
                    .css("color")
                ) || "#2196F3",
                _600: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-600")
                    .css("color")
                ) || "#0d8aee",
                _700: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-700")
                    .css("color")
                ) || "#0c7cd5",
                _800: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-800")
                    .css("color")
                ) || "#0a6ebd",
                _900: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-info-900")
                    .css("color")
                ) || "#0960a5",
            },
            warning: {
                _50: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-50")
                    .css("color")
                ) || "#ffebc1",
                _100: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-100")
                    .css("color")
                ) || "#ffe3a7",
                _200: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-200")
                    .css("color")
                ) || "#ffdb8e",
                _300: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-300")
                    .css("color")
                ) || "#ffd274",
                _400: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-400")
                    .css("color")
                ) || "#ffca5b",
                _500: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-500")
                    .css("color")
                ) || "#ffc241",
                _600: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-600")
                    .css("color")
                ) || "#ffba28",
                _700: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-700")
                    .css("color")
                ) || "#ffb20e",
                _800: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-800")
                    .css("color")
                ) || "#f4a500",
                _900: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-warning-900")
                    .css("color")
                ) || "#da9400",
            },
            danger: {
                _50: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-50")
                    .css("color")
                ) || "#feb7d9",
                _100: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-100")
                    .css("color")
                ) || "#fe9ecb",
                _200: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-200")
                    .css("color")
                ) || "#fe85be",
                _300: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-300")
                    .css("color")
                ) || "#fe6bb0",
                _400: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-400")
                    .css("color")
                ) || "#fd52a3",
                _500: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-500")
                    .css("color")
                ) || "#fd3995",
                _600: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-600")
                    .css("color")
                ) || "#fd2087",
                _700: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-700")
                    .css("color")
                ) || "#fc077a",
                _800: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-800")
                    .css("color")
                ) || "#e7026e",
                _900: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-danger-900")
                    .css("color")
                ) || "#ce0262",
            },
            fusion: {
                _50: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-50")
                    .css("color")
                ) || "#909090",
                _100: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-100")
                    .css("color")
                ) || "#838383",
                _200: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-200")
                    .css("color")
                ) || "#767676",
                _300: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-300")
                    .css("color")
                ) || "#696969",
                _400: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-400")
                    .css("color")
                ) || "#5d5d5d",
                _500: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-500")
                    .css("color")
                ) || "#505050",
                _600: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-600")
                    .css("color")
                ) || "#434343",
                _700: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-700")
                    .css("color")
                ) || "#363636",
                _800: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-800")
                    .css("color")
                ) || "#2a2a2a",
                _900: rgb2hex(
                    myapp_config.mythemeColorProfileID
                    .find(".color-fusion-900")
                    .css("color")
                ) || "#1d1d1d",
            },
        };
    };
    window.bundle.call(this);
}
$("[data-original-title]").tooltip();