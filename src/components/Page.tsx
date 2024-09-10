import type { FC, PropsWithChildren } from 'react';

import { Layout, theme, Drawer } from 'antd';

//import { useEffect } from 'react';

const { Content, Footer } = Layout;

export const Page: FC<PropsWithChildren<{ title: string }>> = ({ children }) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
        <Content style={{ marginTop: '12px', boxShadow: '0px 0px 1px 0px #000000' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </div>
  );
};

export const PageHeader: FC<PropsWithChildren> = ({ children }) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div style={{background: colorBgContainer, paddingTop:"25px", boxShadow: '0px 0px 2px 0px var(--tg-theme-button-color)'}}>
      {children}
    </div>
  );
};

export const PageSubMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>  
  );
}

import { createStyles } from 'antd-style';
import type { DrawerClassNames } from 'antd/es/drawer/DrawerPanel';

import { goBack } from './Navigation';

const useStyle = createStyles(() => ({
  'my-drawer-body': {
    background: '#FCFCFC',
  },
  'my-drawer-header': {
    background: 'var(--tg-theme-button-color)',
    color: 'var(--tg-theme-button-text-color)',
  },
}));

const onCloseDrawer = () => {
  goBack();
};

export const PageDrawerWallet: FC<PropsWithChildren<{ title: string, height: string}>> = ({title, height, children }) => {

  //const {
  //  token: { colorBgContainer },
  //} = theme.useToken();

  const { styles } = useStyle();

  const classNames: DrawerClassNames = {
    body: styles['my-drawer-body'],
    header: styles['my-drawer-header'],
  };

  return (
    <>
      <Drawer
        height={height}
        title={title}
        placement="bottom"
        size={'default'}
        open={true}
        closable={false}
        onClose={onCloseDrawer}
        classNames={classNames}
      >
      <div>
        {children}
      </div>
      </Drawer>
    </>  
  );
}