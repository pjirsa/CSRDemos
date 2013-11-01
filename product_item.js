var itemTemplate;

(function(){
	var itemOverrideCtx = {};
	itemOverrideCtx.Templates = {};
	
	itemOverrideCtx.Templates.Item = ProductItemOverride;
	
	itemOverrideCtx.Templates.Fields = {
		"BusinessEntityID" : {
			"NewForm" : ProductFieldOverride,
			"EditForm" : ProductFieldOverride,
			"View" : ProductFieldOverride
		}
	};
	
	
	itemOverrideCtx.Templates.OnPreRender = ProductItemPreRender;
	
//	itemOverrideCtx.Templates.Group = GroupProductOverride;
	
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemOverrideCtx);			
	

})();


function ProductFieldOverride(){
	return "";
}

function ProductItemPreRender(){
	var templateSrc = $("#product-template").html();
	itemTemplate = Handlebars.compile(templateSrc);	
}

function ProductItemOverride(itemCtx){	
	return itemTemplate(itemCtx.CurrentItem);
}

function JsonItemOverride(itemCtx){
	var result = "";
	result += "<div>";
	result += JSON.stringify(itemCtx.CurrentItem);
	result += "</div>";
	return result;
}

function GroupProductOverride(){
	return "Phils Group";
}
