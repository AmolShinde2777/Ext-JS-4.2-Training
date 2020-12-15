Ext.define('GridStore', {

    extend: 'Ext.data.Store',
    requires:[
        'GridModel',
        'Ext.data.proxy.Ajax'
    ], 
    model: 'GridModel',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    } 
});