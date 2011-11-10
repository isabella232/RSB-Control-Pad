/*
 *   R Service Bus Control Pad
 *   
 *   Copyright (c) Copyright of OpenAnalytics BVBA, 2010-2011
 *
 *   ===========================================================================
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *   @author rsb.development@openanalytics.eu
 */

app.views.NewServer = Ext.extend(Ext.form.FormPanel, {
  dockedItems: [{
    xtype: 'toolbar',
    title: 'New Server',
    items: [
      {
        text: 'Cancel',
        ui: 'back',
        listeners: {
          'tap': function () {
            Ext.dispatch({
              controller: app.controllers.servers,
              action: 'index',
              animation: {type:'slide', direction:'right'}
            });
          }
        }
      },
      {xtype:'spacer'},
      {
        id: 'save',
        text: 'Save',
        ui: 'action',
        listeners: {
          'tap': function () {
            // FIXME pass username and password
            var newRecords = app.stores.servers.add({url: app.views.newServer.fields.get('new_server_url').getValue()});
            newRecords[0].save();
            //Ext.dispatch({
            //    controller: app.controllers.servers,
            //    action: 'view',
            //    id: this.record.getId()
            //});
          }
        }
      }
    ]
  }],
  scroll: 'vertical',
  submitOnAction: false,
  items: [
    {
      xtype: 'fieldset',
      title: 'Connection Info',
      instructions: 'Please enter the information above.',
      defaults: {
        labelAlign: 'left',
        labelWidth: '30%',
        required: false
      },
      items: [
        {
          id: 'new_server_url',
          xtype: 'textfield',
          name : 'url',
          label: 'URL',
          useClearIcon: true,
          autoCapitalize : false,
          required: true
        },
        {
          xtype: 'textfield',
          name : 'username',
          label: 'Username',
          useClearIcon: true,
          autoCapitalize : false,
        },
        {
          xtype: 'passwordfield',
          name : 'password',
          label: 'Password',
          autoCapitalize : false,
          useClearIcon: false
        }        
      ]
    }
  ]
});
