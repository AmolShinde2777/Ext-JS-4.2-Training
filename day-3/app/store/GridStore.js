Ext.define('HelloWorld.store.GridStore', {
    extend: 'Ext.data.Store',
    model: 'HelloWorld.model.GridModel',
    /* proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    } */ 

    autoLoad: 'true',
    proxy: {
        type: 'ajax',
        url: 'app/data/user.json', // give your file path
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});