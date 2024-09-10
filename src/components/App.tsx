import type { FC } from 'react';
import { useEffect, useState, useContext } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { useMiniApp, usePostEvent, useInitDataRaw, useInitData } from '@tma.js/sdk-react';
import { Spin, Flex, Layout } from 'antd';
import { routes } from '../routes/routes.ts';
import { createTmaNavigator, tmaNavigator, RootMenu } from './Navigation.tsx';
import { useNavigatorIntegration } from '@tma.js/react-router-integration';

import { ApiStatus, ApiContext } from './Api/index.ts';
import { MessageContext } from './Message/index.ts';
import { NotificationContext } from './Notification/index.ts';

 function AppLoading() {
   return (
    <Flex className="App-Loading">
         <Spin tip="Connecting" size="large">
           <div className="content" />
         </Spin>
     </Flex>
   );
 }
  
export const App: FC = () => {

  const miniApp = useMiniApp();
  const postEvent = usePostEvent();

  const initDataRaw = useInitDataRaw();
  const initData    = useInitData();

  createTmaNavigator();

  const [location, navigator] = useNavigatorIntegration(tmaNavigator);

  const [getPageRef, setPageRef] = useState(false);
  const [getUserIdRef, setUserIdRef] = useState("");

  const apiProvider = useContext(ApiContext);
  const MessageProvider = useContext(MessageContext);
  const NotificationProvider = useContext(NotificationContext);

  useEffect(() => {
    miniApp.ready();

    postEvent('web_app_expand');

    const strExplode = initData?.startParam?.toString();
    const explodeParam = strExplode?.split('=');
    
    if(explodeParam)
    {
      for(let i = 0; i < explodeParam.length; i++)
      {
        if(explodeParam[i] == "user")
        {
          setUserIdRef(explodeParam[i+1]);
        }
        if(explodeParam[i] == "page")
        {
          if(explodeParam[i+1] == "ref")
          {
            tmaNavigator.push('/user/ref');
            setPageRef(true);
          }
          else if(explodeParam[i+1] == "wallet")
          {
            tmaNavigator.push('/wallet');
          }
        }
        
        i++;
      }
    }

    getApiData(initDataRaw, initData);
  }, []);

  const getApiData = async (initDataRaw:any, initData:any) => {
    console.log(initDataRaw);
    console.log(getUserIdRef);
    
    apiProvider?.auth(initDataRaw, initData);
  };

  useEffect(() => {
    if(apiProvider?.getEvent)
    {
      if(apiProvider.getEvent == "eventAppCloseGoToBot")
      {
        console.log('eventAppCloseGoToBot');
        //postEvent('web_app_open_tg_link', {path_full: "/EremenkoEV_bot"});
        //postEvent('web_app_close');
      }
      else if(apiProvider.getEvent == "eventStatusAuth")
      {
        if(getPageRef)
        {
          apiProvider?.method("getUserRef", {userIdRef: getUserIdRef });
        }
        else
        {
          apiProvider?.page("index");
        }
      }
    }     
  }, [apiProvider?.getEvent]);

  useEffect(() => {
    console.log('getApiData', apiProvider?.getApiData);
  }, [apiProvider?.getApiData]);

  useEffect(() => {
    if(apiProvider?.getStatus == ApiStatus.Error)
    {
      MessageProvider?.messageApi.open({
        type: 'warning',
        content: 'Плохое подключение к интернету',
      });
    }      
  }, [apiProvider?.getStatus]);

  return (
    <>
      {MessageProvider?.contextHolder}
      {NotificationProvider?.contextHolder}

      {apiProvider?.getStatusAuth && (
      <Router location={location} navigator={navigator}>
        <Layout>
          {getPageRef && (<RootMenu/>)}
          <Layout>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
          </Routes>
          </Layout>
        </Layout>
      </Router>
      )}

      {!apiProvider?.getStatusAuth && (  
        <AppLoading />
      )}
    </>
  );
 };