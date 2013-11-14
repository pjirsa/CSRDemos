(function () {
    var template;
    var inCtx = {};
    inCtx.Templates = {};

    inCtx.Templates.Item = ItemOverride;
    inCtx.Templates.OnPreRender = PreRenderOverride;

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(inCtx);

    function ItemOverride(itemCtx) {
        return template(itemCtx.CurrentItem);
    }

    function PreRenderOverride() {
        var tempHtml = $("#product-template").html();
        template = Handlebars.compile(tempHtml);
    }

    function DebugOverride(itemCtx) {
        return JSON.stringify(itemCtx.CurrentItem);
    }
})();