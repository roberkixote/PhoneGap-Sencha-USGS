usgs.controllers.usgsController = new Ext.Controller({

	index: function(options) {
		lanzaLog('USGS: CONTROLLER: =========== SE LANZA INDEX');
		anulaVuelta();
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsMenu, options.animation
        );
    },

    showMap: function(options) {
		lanzaLog('USGS: CONTROLLER: =========== SE LANZA showMap');
		anulaVuelta();
        var data = options.data;
    		usgs.views.usgsMap.addMap(data);
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsMap, options.animation
        );
    },
    
    showUsgsList: function(options) {
		lanzaLog('USGS: CONTROLLER: =========== SE LANZA showUsgsList');
		anulaVuelta();
        var id = parseInt(options.id);
    		usgs.stores.usgsData.getProxy().extraParams.q = usgs.query[id].q;
    		usgs.stores.usgsData.read();
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsList, options.animation
        );
    },
    
    backToIndex: function(options) {
    	lanzaLog('USGS: CONTROLLER: =========== SE LANZA backToIndex');
    	activaVuelta();
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsMenu, options.animation
        );
    },

    backToUsgsList: function(options) {
    	lanzaLog('USGS: CONTROLLER: =========== SE LANZA backToUsgsList');
    	anulaVuelta();
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsList, options.animation
        );
    }    

});

