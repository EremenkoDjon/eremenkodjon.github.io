import type { FC, PropsWithChildren } from 'react';

import { theme } from 'antd';

export const UserHistoryWallet: FC<PropsWithChildren> = ({ children }) => {

    const {
      token: { colorBgContainer },
    } = theme.useToken();
    
    return (
      <>
        <div style={{ background: colorBgContainer, marginTop:"12px", padding: "10px 24px", boxShadow: '0px -1px 2px -1px var(--tg-theme-button-color)'}}>
          <h3>История транзакций</h3>
          {children}
        </div>
      </>  
    );
  }