(function () {
    var inCtx = {};
    inCtx.Templates = {};
    inCtx.Templates.OnPostRender = RowHighlight;
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(inCtx);
})();

function RowHighlight(inCtx) {
    for (var i = 0; i < inCtx.ListData.Row.length; i++) {
        var listItem = inCtx.ListData.Row[i];

        if (listItem.Status === 'Not Started') {
            var iid = GenerateIIDForListItem(inCtx, listItem);
            var row = document.getElementById(iid);

            if (row != null)
                row.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // red
        }
    }
}