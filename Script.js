
    function OpenMenu(form) {
        var body = $(document).find("#page-top");
        if (body.hasClass("mobile-nav-on")) {
            body.removeClass("mobile-nav-on");
        }
        else {
            body.addClass("mobile-nav-on");
        }
    }
    function HideMenu() {
        var body = $(document).find("#page-top");
        if (body.hasClass("mobile-nav-on")) {
            body.removeClass("mobile-nav-on");
        }
    }
    function GoNextTab(target) {
        var parent = $(target).parents(".tab-pane");
        var currentTab = parent.attr("id");
        var chk = Validate(parent);
        if (chk == true) {
            switch (currentTab) {
                case "infotab": {
                    var form = $(document).find(".widget");
                    var roundtabs = form.find(".round-tabs");
                    var tabs = roundtabs.find(".nav-link");
                    tabs.each(function (tab) {
                        if ($(tabs[tab]).attr("data-tab") == "infotab")
                            $(tabs[tab]).removeClass("active");
                        if ($(tabs[tab]).attr("data-tab") == "declarationtab")
                            $(tabs[tab]).addClass("active");
                    });

                    var tabcontents = form.find(".tab-content");
                    var contents = tabcontents.find(".tab-pane");
                    contents.each(function (tab) {
                        if ($(contents[tab]).attr("id") == "infotab")
                            $(contents[tab]).removeClass("active");
                        if ($(contents[tab]).attr("id") == "declarationtab")
                            $(contents[tab]).addClass("active");
                    });

                    break;
                }
                case "declarationtab": {
                    var form = $(document).find(".widget");
                    var roundtabs = form.find(".round-tabs");
                    var tabs = roundtabs.find(".nav-link");
                    tabs.each(function (tab) {
                        if ($(tabs[tab]).attr("data-tab") == "declarationtab")
                            $(tabs[tab]).removeClass("active");
                        if ($(tabs[tab]).attr("data-tab") == "symptomtab")
                            $(tabs[tab]).addClass("active");
                    });

                    var tabcontents = form.find(".tab-content");
                    var contents = tabcontents.find(".tab-pane");
                    contents.each(function (tab) {
                        if ($(contents[tab]).attr("id") == "declarationtab")
                            $(contents[tab]).removeClass("active");
                        if ($(contents[tab]).attr("id") == "symptomtab")
                            $(contents[tab]).addClass("active");
                    });
                    break;
                }
            }
        }
    }
    function Reload() {
        location.reload();
    }
    function OnchangeValue(target) {
        var parent = $(target).parents(".form-group");
        var parentdata = parent.attr("data-target");
        var form = parent.parents(".order-detail-form");
        var group = form.find("[data-target=" + parentdata + "]");
        group.find("#mess").removeClass("needshow");
    }
    function Validate(target) {
        var groups = $(target).find(".form-group");
        groups.each(function (group) {
            var datatarget = $(groups[group]).attr("data-target");
            var input = $(groups[group]).find("[name=" + datatarget + "]").val();
            if (datatarget == "IsNearLocation" && (input == "" || input == undefined)) 
			{
				var chkvalueIn = $("input[name='IsNearradio']:checked").val();
				if (chkvalueIn == "yes")
					$(groups[group]).find("#mess").addClass("needshow");
				else
					$(groups[group]).find("#mess").removeClass("needshow");
			}
			else if (datatarget == "IsExampLocation" && (input == "" || input == undefined)) {
				var chkvalueIe = $("input[name='IsExampradio']:checked").val();
				if (chkvalueIe == "yes")
					$(groups[group]).find("#mess").addClass("needshow");
				else
					$(groups[group]).find("#mess").removeClass("needshow");
			}
			else {
				if (input == "" || input == undefined) {
					$(groups[group]).find("#mess").addClass("needshow");
				}
			}
        });
        if ($(target).find(".needshow").length == 0)
            return true;
        else
            return false;
    }
    function screenshot() {
        window.scrollTo(0, 0);
        const input = document.getElementById('cvpdf');
        input.style.display = "block";
        html2canvas(input, {
            scrollY: -window.scrollY
        }).then(function (canvas) {
            var img = canvas.toDataURL("image/png", 1.0);
            var doc = new jsPDF("p", "mm", "a4");
            var position = 0;
            var imgWidth = doc.internal.pageSize.width;
            var pageHeight = doc.internal.pageSize.height;

            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;

            doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = 10 + heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            doc.save("tkyt.pdf");
        });
        input.style.display = "none";
    }


    function checkisnear() {
        var form = $(document).find("[name=IsNearLocation]");
        form.prop("disabled", false);
    }
    function uncheckisnear() {
        var form = $(document).find("[name=IsNearLocation]");
        form.val("");
        form.prop("disabled", true);
    }

    function checkisexamp() {
        var form = $(document).find("[name=IsExampLocation]");
        form.prop("disabled", false);
    }
    function uncheckisexamp() {
        var form = $(document).find("[name=IsExampLocation]");
        form.val("");
        form.prop("disabled", true);
    }
