Ext.regApplication({
    name: "usgs",
    launch: function() {
	    lanzaLog('USGS: APP - SE LANZA EL APLICATIVO USGS ======== ');
        this.launched = true;
        this.mainLaunch();
    },     
    mainLaunch: function() {
        if (!device || !this.launched)  {
    	    lanzaLog('USGS: APP  -  ERROR  =======================');
        	return;
        } else {
    		lanzaLog('USGS: APP - EMPIEZA LA APLICACION =======================');
    		this.views.viewport = new this.views.Viewport();
        }
    }
});