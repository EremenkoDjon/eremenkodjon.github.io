import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './components/Root';
//import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs';

//import { ApiProvider } from '../src/components/Api';
//import { MessageProvider } from '../src/components/Message';
//import { NotificationProvider } from '../src/components/Notification';
//ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
//    <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
//      <ApiProvider>
//        <MessageProvider>
//          <NotificationProvider>
//            <Root />
//          </NotificationProvider>
//        </MessageProvider>
//      </ApiProvider>
//    </StyleProvider>
//  </React.StrictMode>,
//);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);