(function(){
	var viewCtx = {};
	viewCtx.Templates = {};
	
	viewCtx.Templates.Body = StoreBody;
		
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(viewCtx);
})();

function StoreBody(viewCtx){
	var source = $("#store-template").html();
	var storeTemplate = Handlebars.compile(source);
	
	return storeTemplate(viewCtx.ListData);
}