(function(){
	var itemOverrideCtx = {};
	itemOverrideCtx.Templates = {};
	
	itemOverrideCtx.Templates.Item = ProductItemOverride;
	
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemOverrideCtx);			
	
})();


function ProductItemOverride(itemCtx){
	var templateSrc = $("#product-template").html();
	var itemTemplate = Handlebars.compile(templateSrc);
	return itemTemplate(itemCtx.CurrentItem);
}