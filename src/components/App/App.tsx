//  import type { FC } from 'react';
//  import { 
//    useMemo, 
//    useEffect, 
//    useState,
//    //useContext
//  } from 'react';
//  import { 
//    Route, 
//    Router, 
//    Routes,
//    Link,
//  } from 'react-router-dom';
//  import {
//    createNavigator,
//    useBackButtonIntegration,
//    useNavigatorIntegration,
//  } from '@tma.js/react-router-integration';
//  import {
//    useBackButton, 
//    useMiniApp, 
//    usePostEvent,
//    useInitDataRaw, 
//    useInitData,
//    useLaunchParams,
//    useMainButton,
//  } from '@tma.js/sdk-react';
//  import type {
//    GetProp,
//    MenuProps
//  } from 'antd';
//  import {
//    Spin, 
//    ConfigProvider,
//    Layout,
//    Menu
//  } from 'antd';
//  import {
//    UserOutlined,
//    WalletOutlined,
//    AppstoreOutlined,
//    SettingOutlined,
//    HistoryOutlined,
//    HomeOutlined,
//    ShareAltOutlined,
//  } from '@ant-design/icons';
//  import {
//    routes
//  } from '../../routes/routes.ts';
//  
//  //import {ApiStatus, ApiContext } from '../Api';
//  //import { MessageContext, } from '../Message';
//  //import { NotificationContext, sendNotification } from '../Notification';
//
//  function AppLoading() {
//
//    return (
//      <div className="App-Loading">
//          <Spin tip="Connecting" size="large">
//            <div className="content" />
//          </Spin>
//      </div>
//    );
//  }
//
//  type MenuItem = GetProp<MenuProps, 'items'>[number];
//
//  const { Sider } = Layout;
//  
//  function getItem(
//    label: React.ReactNode,
//    key?: React.Key | null,
//    icon?: React.ReactNode,
//    children?: MenuItem[],
//  ): MenuItem {
//    return {
//      key,
//      icon,
//      children,
//      label,
//    } as MenuItem;
//  }
//  
//  var defaultSelectedKeys = "home";
//
//  const items = [
//    getItem(<Link to="/home">Home</Link>, defaultSelectedKeys, <HomeOutlined />),
//    getItem(<Link to="/user">User</Link>, 'user', <UserOutlined />),
//    getItem(<Link to="/wallet">Wallet</Link>, 'wallet', <WalletOutlined />),
//    getItem("Programs", "prog", <AppstoreOutlined />, [
//      getItem(<Link to="/prog/prog1">Program №1</Link>, 'prog1', <ShareAltOutlined />),
//      getItem(<Link to="/prog/prog2">Program №2</Link>, 'prog2', <ShareAltOutlined />),
//    ]),
//    getItem(<Link to="/history">History</Link>, 'history', <HistoryOutlined />),
//    getItem(<Link to="/setting">Setting</Link>, 'setting', <SettingOutlined />)
//  ];
//
//  let tmaNavigator:any;
//
//  export const goBack = () => {
//    tmaNavigator.back();
//  };
//  
//  export const App: FC = () => {
//
//    const miniApp = useMiniApp();
//    const postEvent = usePostEvent();
//
//    const initDataRaw = useInitDataRaw();
//    const initData    = useInitData();
//
//    tmaNavigator = useMemo(createNavigator, []);
//    const [location, navigator] = useNavigatorIntegration(tmaNavigator);
//    const backButton = useBackButton();
//    useBackButtonIntegration(tmaNavigator, backButton);
//
//    const [getPageRef, setPageRef] = useState(false);
//
//    //const apiProvider = useContext(ApiContext);
//    //const MessageProvider = useContext(MessageContext);
//    //const NotificationProvider = useContext(NotificationContext);
//
//    const [getUserIdRef, setUserIdRef] = useState("");
//
//    const getApiData = async (initDataRaw:any, initData:any) => {
//      setPageRef(false);
//      
//      const strExplode = initData?.startParam?.toString();
//      const explodeParam = strExplode?.split('=');
//      
//      if(explodeParam)
//      {
//        for(let i = 0; i < explodeParam.length; i++)
//        {
//          if(explodeParam[i] == "user")
//          {
//            setUserIdRef(explodeParam[i+1]);
//          }
//
//          if(explodeParam[i] == "page")
//          {
//            if(explodeParam[i+1] == "ref")
//            {
//              //tmaNavigator.push('/user/ref');
//              setPageRef(true);
//            }
//            else if(explodeParam[i+1] == "wallet")
//            {
//              tmaNavigator.push('/wallet');
//              //setViewRef(true);
//            }
//          }
//          
//          i++;
//        }
//      }
//
//      console.log(initDataRaw);
//      console.log(getUserIdRef);
//      
//      //apiProvider?.auth(initDataRaw, initData);
//    };
//
//    //useEffect(() => {
//    //  if(apiProvider?.getEvent)
//    //  {
//    //    if(apiProvider.getEvent == "eventAppCloseGoToBot")
//    //    {
//    //      console.log('eventAppCloseGoToBot');
//    //      //postEvent('web_app_open_tg_link', {path_full: "/EremenkoEV_bot"});
//    //      //postEvent('web_app_close');
//    //    }
//    //    else if(apiProvider.getEvent == "eventStatusAuth")
//    //    {
//    //      if(getPageRef)
//    //      {
//    //        apiProvider?.method("getUserRef", {userIdRef: getUserIdRef });
//    //      }
//    //      else
//    //      {
//    //        apiProvider?.page("index");
//    //      }
//    //    }
//    //  }     
//    //}, [apiProvider?.getEvent]);
//
//    //useEffect(() => {
//    //  console.log('getApiData', apiProvider?.getApiData);
//    //}, [apiProvider?.getApiData]);
//    //
//    //useEffect(() => {
//    //  if(apiProvider?.getStatus == ApiStatus.Error)
//    //  {
//    //    MessageProvider?.messageApi.open({
//    //      type: 'warning',
//    //      content: 'Плохое подключение к интернету',
//    //    });
//    //  }      
//    //}, [apiProvider?.getStatus]);
//
//    const setMenu = () => {
//      var pathSplits = tmaNavigator.path.split("/");
//
//      //console.log(pathSplits);
//
//      if(pathSplits[1] == "")
//      {
//        setSelectedKeys([defaultSelectedKeys]);
//      }
//      else if(pathSplits[1] == "prog")
//      {
//        setSelectedKeys([pathSplits[2]]);
//      }
//      else
//      {
//        setSelectedKeys([pathSplits[1]]);
//      }    
//    };
//
//    const [selectedKeys, setSelectedKeys] = useState([defaultSelectedKeys]);
//
//    const { themeParams } = useLaunchParams();
//
//    const mainButton = useMainButton();
//
//    function MainButtonReset() {
//        mainButton.setParams({
//          isVisible: false,
//        });
//    }
//
//    useEffect(() => {
//      miniApp.ready();
//
//      postEvent('web_app_expand');
//
//      getApiData(initDataRaw, initData);
//
//      setMenu();
//    }, []);
//
//    useEffect(() => { 
//      return backButton.on('click', () => {
//        setCollapsed(true);
//        MainButtonReset();
//      });
//    }, []);
//
//    const [collapsed, setCollapsed] = useState(true);
//
//    const onCollapse = () => {
//      setCollapsed(!collapsed);
//      setMenu();
//    }
//    
//    const onClick = (e:any) => {
//      setCollapsed(!collapsed);
//      console.log('click', e['key']);
//      setSelectedKeys([e['key']]);
//      MainButtonReset();
//    };
//
//    //if (apiProvider?.getStatusAuth == false)
//    //{
//    //  return (
//    //    <>
//    //    {MessageProvider?.contextHolder}
//    //    <AppLoading />
//    //    </>
//    //  );
//    //} 
//    //else 
//    
//    //if (apiProvider?.getStatusAuth == true)
//    //{MessageProvider?.contextHolder}
//    //{NotificationProvider?.contextHolder}
//    if (1)
//    {
//      return (
//        <>
//        <ConfigProvider
//          theme={{
//            token: {
//              colorLink: themeParams['buttonColor'],//linkColor
//              colorPrimary: themeParams['linkColor'],
//              colorPrimaryBg: themeParams['secondaryBackgroundColor'],
//              colorBgBase: themeParams['secondaryBackgroundColor'],
//              colorText: themeParams['textColor'],
//              borderRadius: 4,
//              colorBgContainer: themeParams['sectionBackgroundColor'],
//            },
//            components: {
//              Menu: {
//                collapsedWidth: 0,
//                borderRadius:0,
//              },
//              Layout: {
//                siderBg: themeParams['buttonColor'],
//                triggerColor: themeParams['buttonTextColor'],
//              },
//              List:{
//                colorTextDescription: themeParams['subtitleTextColor'],
//              },
//              //Drawer: {
//              //  colorSplit: themeParams['buttonColor']
//              //},
//              //Input:{
//              //  colorBgContainer: '#FFFFFF',
//              //  colorText: themeParams['buttonColor'], 
//              //  //colorTextDescription: '#666666',
//              //  colorBorder: themeParams['linkColor'],
//              //  lineWidth: 2,
//              //  colorPrimary: themeParams['buttonTextColor'],
//              //  //colorBgTextHover: themeParams['buttonTextColor'],
//              //  colorTextDisabled: themeParams['buttonColor'],
//              //  controlOutline: themeParams['buttonColor'],
//              //  //colorSplit: '#FFFFFF',
//              //},
//              //Select:{
//              //  colorBgContainer: '#FFFFFF',
//              //  //colorTextPlaceholder: themeParams['buttonColor'],
//              //  colorText: themeParams['buttonColor'],
//              //  //colorTextDescription: themeParams['buttonTextColor'],
//              //  colorBorder: themeParams['buttonColor'],
//              //  lineWidth: 2,
//              //  //colorBgTextHover: themeParams['buttonTextColor'],
//              //
//              //  colorTextQuaternary: themeParams['buttonColor'],
//              //  colorPrimary: themeParams['buttonTextColor'],
//              //
//              //  colorIcon: themeParams['buttonColor'],
//              //  colorIconHover: themeParams['buttonTextColor'],
//              //
//              //  //colorBgElevated: themeParams['linkColor'],
//              //  optionSelectedBg: themeParams['buttonColor'],
//              //  optionSelectedColor: themeParams['buttonTextColor'],
//              //
//              //  controlOutline: themeParams['buttonColor'],
//              //},
//              //Notification: {
//              //  colorBgElevated: themeParams['sectionBackgroundColor'],
//              //  colorTextHeading: themeParams['buttonColor'],
//              //  colorIconHover: themeParams['buttonTextColor'],
//              //  colorBgTextActive: themeParams['linkColor'],
//              //  colorBgTextHover: themeParams['buttonColor'],
//              //  colorIcon: themeParams['buttonColor'],
//              //  boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"
//              //}
//            },
//          }}
//        >
//        {!getPageRef && (  
//        <Router location={location} navigator={navigator}>
//          <Layout>
//          {!collapsed && (
//            <div
//              style={{ position: 'fixed', minHeight: '100vh', minWidth: '100%', background: 'rgba(0, 0, 0, 0.7)', zIndex: 10}}
//              onClick={onCollapse}
//            />
//            )}
//            <Sider
//              style={{ position: 'fixed', minHeight: '100vh', zIndex: 50}}
//              breakpoint="lg"
//              collapsedWidth="0"
//              collapsible
//              collapsed={collapsed}
//              onCollapse={onCollapse}
//            >
//              <Menu
//                style={{ minHeight: '100vh' }}
//                mode="inline"
//                items={items} 
//                onClick={onClick}
//                selectedKeys={selectedKeys}
//              />
//            </Sider>
//            <Layout>
//            <Routes>
//              {routes.map((route) => <Route key={route.path} {...route} />)}
//            </Routes>
//            </Layout>
//          </Layout>
//        </Router>
//        )}
//
//        {getPageRef && (  
//          <AppLoading />
//        )}
//        </ConfigProvider>
//        </>
//      );
//    }
//  };