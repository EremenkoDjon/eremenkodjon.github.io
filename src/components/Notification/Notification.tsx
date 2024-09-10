import type { FC, PropsWithChildren } from 'react';
import { notification } from 'antd';

import {
    createContext
  } from 'react';

interface NotificationContextType {
    notificationApi: any;
    contextHolder: any;
}

export const sendNotification = (NotificationProvider: NotificationContextType | null) => {

    if(NotificationProvider)
    {
        NotificationProvider?.notificationApi.open({
            message: 'Notification Title',
            description: `${Array(Math.round(Math.random() * 5) + 1)
            .fill('This is the content of the notification.')
            .join('\n')}`,
            duration: null,
            //style:{ 
            //  border: '1px solid var(--tg-theme-button-color)',
            //  boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
            //  borderRadius: 8,
            //},
        });
    }
};
  
  
export const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {

    const [notificationApi, contextHolder] = notification.useNotification({
        placement: 'top',
        bottom: 50,
        //rtl: true,
        stack:{ threshold: 1 },
      });

    return (
        <NotificationContext.Provider value={{notificationApi, contextHolder}}>
          {children}
        </NotificationContext.Provider>
    );
};