usgs.views.UsgsMenu = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'USGS'
    }],

    items: [{
        xtype: 'list',
        store: usgs.stores.usgsMenu,
        itemTpl : '{title}',
        onItemDisclosure: function (record) {
            Ext.dispatch({
                controller: usgs.controllers.usgsController,
                action: 'showUsgsList',
                id: record.getId()
            });
        },
        grouped: false,
        scroll: 'vertical',
        fullscreen: true
    }],

    initComponent: function() {
        lanzaLog('USGS: VISTA MENU --------------     SE LANZA EL VIWPORT AQUI');
        usgs.views.UsgsMenu.superclass.initComponent.apply(this, arguments);        
    }
});
