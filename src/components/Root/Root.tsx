//import { setDebug } from '@tma.js/sdk';
import { DisplayGate, SDKProvider } from '@tma.js/sdk-react';
//import { TonConnectUIProvider } from '@tonconnect/ui-react';
import type { FC } from 'react';
//import { useEffect, useMemo } from 'react';
//import { Spin } from 'antd';
//import { App } from '../App';

const Err: FC<{ error: unknown }> = ({ error }) => {
  return (
    <div>
      <p>An error occurred while initializing the SDK</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
};

const Loading: FC = () => {
  //<div className="App-Loading">
  //<Spin tip="Application is loading" size="large">
  //  <div className="content" />
  //</Spin>
  //</div>
  return (
    <p>Application is loading</p>
  );
};

const Initial: FC = () => {
  return (
    <p>Application is Initial</p>
  );
};

export const Root: FC = () => {

//const manifestUrl = useMemo(() => {
//  return new URL('tonconnect-manifest.json', window.location.href).toString();
//}, []);

//// Enable debug mode to see all the methods sent and events received.
//useEffect(() => {
//  setDebug(true);
//}, []);

//return (
//  <TonConnectUIProvider   
//    manifestUrl ={manifestUrl}
//    actionsConfiguration={{
//      twaReturnUrl: 'https://t.me/EremenkoEV_bot/EEV?startapp=page=wallet'
//    }}
//    >
//    <SDKProvider async options={{ acceptCustomStyles: true, cssVars: true, complete: true }} >
//      <DisplayGate error={Err} loading={Loading} initial={Loading}>
//          <App />
//      </DisplayGate>
//    </SDKProvider>
//  </TonConnectUIProvider>
//);

  return (
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }} >
        <DisplayGate error={Err} loading={Loading} initial={Initial}>
          <p>msvldkmskl</p>
        </DisplayGate>
      </SDKProvider>
  );
};