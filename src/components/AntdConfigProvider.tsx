import type { FC, PropsWithChildren } from 'react';

import {
    useLaunchParams
} from '@tma.js/sdk-react';

import {
    ConfigProvider
} from 'antd';

export const AntdConfigProvider: FC<PropsWithChildren> = ({ children }) => {

    const { themeParams } = useLaunchParams();

    return (
        <ConfigProvider
        theme={{
          token: {
            colorLink: themeParams['buttonColor'],//linkColor
            colorPrimary: themeParams['linkColor'],
            colorPrimaryBg: themeParams['secondaryBackgroundColor'],
            colorBgBase: themeParams['secondaryBackgroundColor'],
            colorText: themeParams['textColor'],
            borderRadius: 4,
            colorBgContainer: themeParams['sectionBackgroundColor'],
          },
          components: {
            Menu: {
              collapsedWidth: 0,
              borderRadius:0,
            },
            Layout: {
              siderBg: themeParams['buttonColor'],
              triggerColor: themeParams['buttonTextColor'],
            },
            List:{
              colorTextDescription: themeParams['subtitleTextColor'],
            },
            //Drawer: {
            //  colorSplit: themeParams['buttonColor']
            //},
            //Input:{
            //  colorBgContainer: '#FFFFFF',
            //  colorText: themeParams['buttonColor'], 
            //  //colorTextDescription: '#666666',
            //  colorBorder: themeParams['linkColor'],
            //  lineWidth: 2,
            //  colorPrimary: themeParams['buttonTextColor'],
            //  //colorBgTextHover: themeParams['buttonTextColor'],
            //  colorTextDisabled: themeParams['buttonColor'],
            //  controlOutline: themeParams['buttonColor'],
            //  //colorSplit: '#FFFFFF',
            //},
            //Select:{
            //  colorBgContainer: '#FFFFFF',
            //  //colorTextPlaceholder: themeParams['buttonColor'],
            //  colorText: themeParams['buttonColor'],
            //  //colorTextDescription: themeParams['buttonTextColor'],
            //  colorBorder: themeParams['buttonColor'],
            //  lineWidth: 2,
            //  //colorBgTextHover: themeParams['buttonTextColor'],
            //
            //  colorTextQuaternary: themeParams['buttonColor'],
            //  colorPrimary: themeParams['buttonTextColor'],
            //
            //  colorIcon: themeParams['buttonColor'],
            //  colorIconHover: themeParams['buttonTextColor'],
            //
            //  //colorBgElevated: themeParams['linkColor'],
            //  optionSelectedBg: themeParams['buttonColor'],
            //  optionSelectedColor: themeParams['buttonTextColor'],
            //
            //  controlOutline: themeParams['buttonColor'],
            //},
            //Notification: {
            //  colorBgElevated: themeParams['sectionBackgroundColor'],
            //  colorTextHeading: themeParams['buttonColor'],
            //  colorIconHover: themeParams['buttonTextColor'],
            //  colorBgTextActive: themeParams['linkColor'],
            //  colorBgTextHover: themeParams['buttonColor'],
            //  colorIcon: themeParams['buttonColor'],
            //  boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"
            //}
          },
        }}
      >
        {children}
      </ConfigProvider>
    );
  };