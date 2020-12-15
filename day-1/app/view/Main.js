Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        title: 'South Region is resizable',
        region: 'south',     // position for region
        xtype: 'panel',
        height: 100,
        split: true,         // enable resizing
        margins: '0 5 5 5'
    }, {
        region: 'west',
        xtype: 'panel',
        title: 'West Region is collapsible',
        collapsible: true,
        width: 200,
        layout: 'fit',
        margins: '5 0 0 5'
    }, {
        region: 'center',
        layout: 'fit',
        margins: '5 5 0 0',
        xtype: 'tabpanel',
        items: [{
            xtype: 'gridPanel'
        }]
    }]
});