import { message } from 'antd';
import type { FC, PropsWithChildren } from 'react';
import {
    createContext
  } from 'react';

interface MessageContextType {
    messageApi: any;
    contextHolder: any;
}
  
export const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider: FC<PropsWithChildren> = ({ children }) => {

    const [messageApi, contextHolder] = message.useMessage();

    return (
        <MessageContext.Provider value={{messageApi, contextHolder}}>
          {children}
        </MessageContext.Provider>
    );
};