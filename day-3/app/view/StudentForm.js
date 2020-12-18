Ext.define('HelloWorld.view.StudentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.studentForm',
    title: 'Student Form',
    margin: 20,
    bodyPadding: 12,
    width: 400,
    itemId: 'student-form',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Student Name',
        name: 'name'
    }, {
        xtype: 'combo',
        fieldLabel: 'Subject',
        name: 'className',
        queryMode: 'local',
        displayField: 'className',
        valueField: 'className',
        store: {
            fields: ['className'],
            data: [{
                className: 'Geometry'
            }, {
                className: 'Biology'
            }, {
                className: 'Social Studies'
            }, {
                className: 'Recess'
            }, {
                className: 'History'
            }]
        }
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Grade',
        name: 'grade',
        minValue: 0,
        maxValue: 100
    }, {
        xtype: 'checkboxfield',
        fieldLabel: 'Attendance',
        name: 'attendance'
    }],
    buttons: [{
        text: 'Save Changes',
        handler: function () {
            var form = this.up('form'),
            //var form = this.up('student-form'),
                grid = form.nextSibling('grid'),
                store  = grid.getStore();
            store.add(form.getValues());
            form.getForm().reset();
        }
    }]
});