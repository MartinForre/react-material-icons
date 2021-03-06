'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var DeviceSignalCellularConnectedNoInternet2Bar = createClass({
  displayName: 'DeviceSignalCellularConnectedNoInternet2Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.3', d: 'M22 8V2L2 22h16V8z' }),
      React.createElement('path', { d: 'M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z' })
    );
  }

});

module.exports = DeviceSignalCellularConnectedNoInternet2Bar;