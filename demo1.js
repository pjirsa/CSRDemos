(function () {
    var template;
    var inCtx = {};
    inCtx.Templates = {};

    inCtx.Templates.Item = ItemOverride;
    inCtx.Templates.OnPreRender = TemplatePreRender;

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(inCtx);

    function TemplatePreRender() {
        var tempHtml = $("#demo-template").html();
        template = Handlebars.compile(tempHtml);
    }

    function ItemOverride(itemCtx) {
        return template(itemCtx.CurrentItem);
    }
})();