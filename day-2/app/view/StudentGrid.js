Ext.define('HelloWorld.view.StudentGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentGrid',
    title: 'Students Grid',
    collapsible: true,
    margin: 20,
    height: 300,
    width: 400,
    store: {
        fields: ['name', 'className', 'attendance', {
            name: 'grade',
            // type: 'number' ensures that the data is saved as a number
            // and not a string
            type: 'number'
        }],
        data: [{
            name: 'Louise',
            className: 'Geometry',
            grade: '77',
            attendance: true
        }, {
            name: 'Tina',
            className: 'Geometry',
            grade: '100',
            attendance: true
        }, {
            name: 'Gene',
            className: 'Geometry',
            grade: '84',
            attendance: false
        }, {
            name: 'Bob',
            className: 'Geometry',
            grade: '90',
            attendance: true
        }, {
            name: 'Linda',
            className: 'Geometry',
            grade: '99',
            attendance: false
        }]
    },
    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Class',
        dataIndex: 'className'
    }, {
        text: 'Grade',
        dataIndex: 'grade'
    }],

    // when a record / row is selected load that record
    // to the Form Panel for editing
    listeners: {
        select: function (selModel, rec) {
            var parentContainer = this.up('container'),
                form = parentContainer.queryById('student-form');
            form.loadRecord(rec);
        }
    }
})