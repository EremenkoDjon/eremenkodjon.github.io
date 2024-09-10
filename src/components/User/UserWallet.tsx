import type { FC, PropsWithChildren } from 'react';
import { List } from 'antd';
import { theme, Skeleton } from 'antd';

export interface userWallet {
    user_balance: string
    user_balance_clone: string,
}

export const UserWallet: FC<PropsWithChildren<{UserWallet: userWallet}>> = ({UserWallet, children}) => {

    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    const data = [
      {
        title: 'Баланс',
        description: UserWallet.user_balance,
      },
      {
        title: 'Баланс управляемых клонов',
        description: UserWallet.user_balance_clone,
      },
    ];
  
    let loading = false;
    
    return (
      <>
        <div style={{background: colorBgContainer, padding: "0px 24px"}}>
          <List
          //header={<div>Header</div>}
          //footer={<div>Footer</div>}
          //bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={
                    <Skeleton loading={loading} active title={false} paragraph={{ rows: 1 }}>
                    {item.description}
                    </Skeleton>
                    }
                />
              
            </List.Item>
          )}
        />
        {children}
        </div>
      </>  
    );
  }