import {ConfigCtrl} from './components/config/config';
import {EndpointListCtrl} from './components/endpoint/endpoint_list';
import {EndpointDetailsCtrl} from './components/endpoint/endpoint_details';
import {EndpointConfigCtrl} from './components/endpoint/endpoint_config';
import {ProbeListCtrl} from './components/probe/probe_list';
import {loadPluginCss} from 'app/plugins/sdk';
import './filters/all';
import './directives/all';

loadPluginCss({
  dark: 'plugins/worldping-app/css/dark.css',
  light: 'plugins/worldping-app/css/light.css'
});

export {
  EndpointListCtrl,
  EndpointDetailsCtrl,
  EndpointConfigCtrl,
  ProbeListCtrl,
  ConfigCtrl
};
