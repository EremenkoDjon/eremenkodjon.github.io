import { setDebug } from '@tma.js/sdk';
import { DisplayGate, SDKProvider } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import type { FC } from 'react';
import { useEffect, useMemo } from 'react';
import { Spin, Flex } from 'antd';
import { App } from './App';

import {
  AntdConfigProvider
} from './AntdConfigProvider';

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
  return (
    <Flex className="App-Loading">
      <Spin tip="Application is loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>
  );
};

export const Root: FC = () => {
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    setDebug(true);
  }, []);

  return (
    <TonConnectUIProvider 
      manifestUrl  ={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/EremenkoEV_bot/EEV?startapp=page=wallet'
      }}
      >
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
        <AntdConfigProvider>
        <DisplayGate error={Err} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
        </AntdConfigProvider>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};