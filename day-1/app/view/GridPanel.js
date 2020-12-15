Ext.define('HelloWorld.view.GridPanel', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.gridPanel',
    requires: [
        'GridStore'
    ],

    title: 'Grid',
    columns: [
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: 'Phone',
            dataIndex: 'phone'
        },
        {
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                icon: 'resources/edit.png',  // Use a URL in the icon config
                tooltip: 'Edit',
                handler: function (grid, rowIndex, colIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    alert("Edit : " + record.get('name'));
                    /* Ext.create('HelloWorld.view.Window', {
                        title: 'Grid Details Window',
                        record: record
                    }).show(); */
                }
            }]
        }
    ],
    initComponent: function () {
        var me = this;
        data = {
            'items': [
                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                { 'name': 'Maggie', "email": "Maggie@simpsons.com", "phone": "555-222-1244" },
                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" }
            ]
        };
        me.store = Ext.create('GridStore', {
            data: data
        });
        this.callParent(arguments);
    }
});