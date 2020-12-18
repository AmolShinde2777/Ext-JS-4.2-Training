Ext.define('HelloWorld.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridPanel',
    store: Ext.create('HelloWorld.store.GridStore'),
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
                    //alert("Edit : " + record.get('name'));
                    Ext.create('HelloWorld.view.Window', {
                        title: 'Grid Details Window',
                        record: record
                    }).show();
                }
            }]
        },
        {
            xtype: 'booleancolumn', 
            text: 'Active',
            trueText: 'Yes',
            falseText: 'No', 
            dataIndex: 'active'
        }
    ]/* ,
    initComponent: function () {
        var me = this;
        data = {
            'items': [
                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224", "active":"true" },
                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234", "active":"false"},
                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244", "active":"true"},
                { 'name': 'Maggie', "email": "Maggie@simpsons.com", "phone": "555-222-1244", "active":"false"},
                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254", "active":"true"}
            ]
        };
        me.store = Ext.create('GridStore', {
            data: data
        });
        this.callParent(arguments);
    } */
});