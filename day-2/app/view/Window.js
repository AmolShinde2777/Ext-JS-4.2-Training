Ext.define('HelloWorld.view.Window', {
    extend: 'Ext.window.Window',
    height: 200,
    width: 400,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        margin: 10,
        bodyPadding: 15,
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Name',
            name: 'name'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Email',
            name: 'email'
        },{
            xtype: 'displayfield',
            fieldLabel: 'Phone',
            name: 'phone'
        }]
    },
    listeners:{
        beforerender:function(window) {
            //here, you load window.record into the form!
            //if(window.record) window.down('form').loadRecord(window.record);
        }
    }
});