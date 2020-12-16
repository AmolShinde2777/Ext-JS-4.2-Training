Ext.define('GridModel', {

    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            mapping: 'name',
            defaultValue: ''
        },
        {
            name: 'email',
            mapping: 'email',
            defaultValue: ''
        },
        {
            name: 'phone',
            mapping: 'phone',
            defaultValue: ''
        }
    ]
});