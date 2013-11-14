(function () {
    var inCtx = {};
    inCtx.Templates = {};

    inCtx.Templates.Item = ItemOverride;

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(inCtx);

    function ItemOverride(itemCtx) {
        var result = "";
        result += "<div>";
        result += itemCtx.CurrentItem.Title;
        result += "</div>";
        return result;
    }
})();