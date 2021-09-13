ViSon.DefaultPageLoadBase = function () {
    $.extend(this, new ViSon.DefaultPageLoad());
    $.extend(this, new Core());
    this.onLoad = function () {
        var $this = this;
        var $window = $(window);
    };

    this.BuildCode = function (btn) {
        var form = $(document).find(".widget");
        var content = form.find(".tab-content");

        form.find("[data-tab=symptomtab]").removeClass("active");
        form.find("[data-tab=all]").addClass("active");
        
        content.find("#declarationtab").addClass("active");
        content.find("#infotab").addClass("active");
        content.find("#qrtab").addClass("active");

        content.find("#forTab1").addClass("hidden");
        content.find("#forTab2").addClass("hidden");
        content.find("#btn-Create").addClass("hidden");


        var DiseaseId = form.attr("data-disease");
        var Name = content.find("[name=Name]").val();
        var DayOfBirth = content.find("[name=DayOfBirth]").val();
        var Gender = content.find("[name=Gender]").val();
        var Address = content.find("[name=Address]").val();
        var Phone = content.find("[name=Phone]").val();
        var Noidung = content.find("[name=Noidung]").val();


        var ObjId = content.find("[name=ObjId]").val();
        var LocationId = content.find("[name=LocationId]").val();
        var IsNear = $("input[name='IsNearradio']:checked").val() == "yes" ? true : false;
        var IsNearLocation = content.find("[name=IsNearLocation]").val();
        var IsExamp = $("input[name='IsExampradio']:checked").val() == "yes" ? true : false;
        var IsExampLocation = content.find("[name=IsExampLocation]").val();
        var Note = content.find("[name=Note]").val();

        var SymptomIds = "";
        $.each($("input[name='symptoms']:checked"), function () {
            SymptomIds = SymptomIds + $(this).val() + ",";
        });
        SymptomIds = SymptomIds.substring(0, SymptomIds.length - 1);

        var data = {
            DiseaseId: DiseaseId,
            Name: Name,
            DayOfBirth: DayOfBirth,
            Gender: Gender,
            Address: Address,
            Phone: Phone,
            ObjId: ObjId,
            LocationId: LocationId,
            IsNear: IsNear,
            IsNearLocation: IsNearLocation,
            IsExamp: IsExamp,
            IsExampLocation: IsExampLocation,
            Note: Note,
            SymptomIds: SymptomIds,
            QRCode: "",
            QRImage: "",
            Title: ""
        }
        var ajax = new CoreAjax();
        ajax.typeAction = "Projects.Web.Functions.SaveDataHelper";
        ajax.assembly = "Core.FE.Hospitals";
        ajax.post("SaveData", data, function (res) {
            var tg2 = $(document).find("#QRTarget2");
            tg2.find("#QRCode").attr("src", res.Data.Image);
            tg2.find("#download").attr("href", res.Data.Image);
            tg2.addClass(" show");

            var formpdf = $(document).find("#cvpdf");
            formpdf.find("#lblName").text(res.Data.CurrentInfo.Name);
            formpdf.find("#lblName2").text(res.Data.CurrentInfo.Name);
            formpdf.find("#lblGender").text(res.Data.CurrentInfo.GenderName);
            formpdf.find("#lblDob").text(res.Data.Date);
            formpdf.find("#lblAddress").text(res.Data.CurrentInfo.Address);
            formpdf.find("#lblPhone").text(res.Data.CurrentInfo.Phone);

            var dtkb = $("select[name='ObjId'] option:selected").text();
            formpdf.find("#lblDTKB").text(dtkb);

            var vtlv = $("select[name='LocationId'] option:selected").text();
            formpdf.find("#lblVTLV").text(vtlv);

            var isnear = $("input[name='IsNearradio']:checked").val() == "yes" ? "Có" : "Không";
            formpdf.find("#lblIsNear").text(isnear);

            formpdf.find("#lblIsNearLocation").text(res.Data.CurrentInfo.IsNearLocation);

            var isexamp = $("input[name='IsExampradio']:checked").val() == "yes" ? "Có" : "Không";
            formpdf.find("#lblIsExamp").text(isexamp);

            formpdf.find("#lblIsExampLocation").text(res.Data.CurrentInfo.IsExampLocation);

            var symptoms = "";
            $.each($("input[name='symptoms']:checked"), function () {
                symptoms = symptoms + $(this).attr("data-name") + ",";
            });
            symptoms.substring(0, symptoms.length - 2);

            formpdf.find("#lblSymptoms").text(symptoms);
            var today = new Date();
            var datestring = "Ngày " + String(today.getDate()).padStart(2, '0') + " tháng " + String(today.getMonth() + 1).padStart(2, '0') + " năm " + today.getFullYear();
            formpdf.find("#lblDate").text(datestring);

            formpdf.find("#lblQRCode").text(res.Data.CurrentInfo.QRCode);

            var tg = formpdf.find("#QRTarget1");
            tg.find("#QRCode").attr("src", res.Data.Image);
        });
    }
}
ViSon.PageLoad = function () {
    $.extend(this, new ViSon.DefaultPageLoadBase());
}

ViSon.DefaultPageLoadInstance = function () { return new ViSon.PageLoad(); };