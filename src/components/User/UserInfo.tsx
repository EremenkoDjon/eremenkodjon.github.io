import type { FC, PropsWithChildren } from 'react';
import { Avatar, Flex, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export interface userInfo {
    userPhoto: string
    userName: string,
}

export const UserInfoVertical: FC<PropsWithChildren<{UserInfo: userInfo}>> = ({UserInfo}) => {
    return(
        <>
        <Flex style={{ width: '100%', height: 130, marginTop: 10 }} justify='space-evenly' align='center'>
        {UserInfo.userPhoto== "" && (
          <Avatar icon={<UserOutlined />} size={130} style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: 'var(--tg-theme-button-color)', border: '2px solid var(--tg-theme-button-color)'}}/>
        )}

        {UserInfo.userPhoto != "" && (
          <Avatar src={UserInfo.userPhoto} size={130} style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: 'var(--tg-theme-button-color)', border: '2px solid var(--tg-theme-button-color)'}}/>
        )}
        </Flex>

        <Flex style={{ width: '100%', height: 50, marginTop: 10 }} justify='space-evenly' align='center'>
          <Space align="start" style={{ height: 35}}><h3>{UserInfo.userName}</h3></Space>
        </Flex>
        </>
    );
};

export const UserInfoHorizontal: FC<PropsWithChildren<{ UserInfo: userInfo}>> = ({UserInfo}) => {
    return(
        <>
        <Flex style={{ width: '100%', height: 180, marginTop: 30, padding:20, paddingLeft:30 }} justify='space-between' align='center'>
        {UserInfo.userPhoto == "" && (
          <Avatar icon={<UserOutlined />} size={180} style={{ width: 180, height: 180, borderRadius: 180, backgroundColor: 'var(--tg-theme-button-color)', border: '2px solid var(--tg-theme-button-color)'}}/>
        )}

        {UserInfo.userPhoto != "" && (
          <Avatar src={UserInfo.userPhoto} size={180} style={{ width: 180, height: 180, borderRadius: 180, backgroundColor: 'var(--tg-theme-button-color)', border: '2px solid var(--tg-theme-button-color)'}}/>
        )}
        <Space align="start" style={{ maxWidth: 200, height: 180 }}><h4 style={{ textAlign: 'right'}}>{UserInfo.userName}</h4></Space>
        </Flex>
        </>
    );
};
