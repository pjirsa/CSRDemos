var storeBodyTemplate;

(function(){
	var viewCtx = {};
	viewCtx.Templates = {};
	
	viewCtx.Templates.Body = StoreBody;
	viewCtx.Templates.OnPreRender = CompileStoreTemplate;
	viewCtx.Templates.OnPostRender = RenderMap;
			
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(viewCtx);
})();

function CompileStoreTemplate(){
	var source = $("#store-template").html();
	storeBodyTemplate = Handlebars.compile(source);
}

function RenderMap(inCtx){
	var map = new mxn.Mapstraction('map-canvas', 'googlev3');
	var bounds = new mxn.BoundingBox(40.0,-89.0,42.0,-87.0);
	for (var i = 0; i < inCtx.ListData.Row.length; ++i){
		var item = inCtx.ListData.Row[i];
		var pt = new mxn.LatLonPoint(item.Latitude, item.Longitude);
		var marker = new mxn.Marker(pt);
		marker.setLabel(item.Title);
		
		map.addMarker(marker);
	}

	map.setBounds(bounds);	

	
}

function StoreBody(viewCtx){
	return storeBodyTemplate(viewCtx.ListData);
}

