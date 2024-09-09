//import './WalletPage.css';
//
////import { TonConnectButton, //useTonConnectUI, useTonWallet 
////} from '@tonconnect/ui-react';
//import type { FC, ReactNode } from 'react';
//
//import { Link } from '../../components/Link';
//import { PageHeader, PageSubMenu, WalletUserInfo, WalletUserHistory } from '../../components/Page/Page';
//
//import { useEffect, useState, 
//// useContext 
//} from 'react';
//import { //useMainButton, 
//  useLaunchParams, //useInitData, usePostEvent
//} from '@tma.js/sdk-react';
//
////import { useParams } from 'react-router-dom';
//
//import { IconSwapHorizontalCircle, IconPlusCircle, IconArrowUpCircle } from '../../components/Icon';
//
////import { WalletOutPage } from '../../pages/WalletPage/WalletOutPage';
////import { WalletInPage } from '../../pages/WalletPage/WalletInPage';
////import { WalletInternalPage } from '../../pages/WalletPage/WalletInternalPage';
//
////import { message } from 'antd';
//
////import { ApiContext , //getApi, //ApiTest, ApiStatus, getToken  
////} from '../../components/Api';
//
//import { Avatar, Flex, Space } from 'antd';
//
//import { UserOutlined } from '@ant-design/icons';
//
////import { MessageContext , 
////} from '../../components/Message';
//
// //import { request } from '@tma.js/sdk';
////async function request_write_access() {
////
////  const viewport = await request(
////    'web_app_request_write_access',
////    'write_access_requested'
////  );
////
////  console.log("viewport_changed = ", viewport);
////}
//
//export const WalletPage: FC = () => {
//
//  //const api = useContext(ContextName);
//
//  const [WalletUserInfoloading, setWalletUserInfoloading] = useState(false);
//  //const [userBalanceClone, setUserBalanceClone] = useState("Loading... TON");
//  //const [userBalance, setUserBalance] = useState("Loading... TON");
//
//  //const initData = useInitData();
//
//  //request_write_access();
//
//  //const wallet = useTonWallet();
//  //const { themeParams } = useLaunchParams();
//  const lp = useLaunchParams();
//
//  let content: ReactNode;
//  let contentMainButton: ReactNode;
//
//  //const [messageApi, contextHolder] = message.useMessage();
//
//  //const postEvent = usePostEvent();
//
//  //const apiProvider = useContext(ApiContext);
//  //const MessageProvider = useContext(MessageContext);
//
//  useEffect(() => {
//
//    console.log('themeParams.platform', lp.platform);
//    
//    setWalletUserInfoloading(false);
//
//    //apiProvider?.page("wallet");
//
//    //ApiTest('https://workcontrol.online/api/', 
//    //  {
//    //    page: 'wallet',
//    //    user_id: initData?.user?.id,
//    //    token: getToken(),
//    //    time: Date.now()
//    //  }
//    //).then((result) => {
////
//    //  if(result.status == ApiStatus.Success)
//    //  {
//    //    console.log('Api', result);
////
//    //    if(result.data.getBalance.result == "success")
//    //    {
//    //      setUserBalance(result.data.getBalance.data.user_balance + " TON");
//    //      setUserBalanceClone(result.data.getBalance.data.user_balance_clone + " TON");
//    //    }
//    //    else
//    //    {
//    //      setUserBalance("Loading... TON");
//    //      setUserBalanceClone("Loading... TON");
////
//    //      if(result.data.getBalance.result == 'failed' && result.data.getBalance.info == 'tokenNoActive')
//    //      {
//    //        console.log('ApiTestErrorToken');
//    //        messageApi.open({
//    //          type: 'warning',
//    //          content: 'Ваш токен устпрел перезапустите приложение!',
//    //        });
//    //      }
//    //    }
//    //  }
//    //  else
//    //  {
//    //    messageApi.open({
//    //      type: 'warning',
//    //      content: 'Плохое подключение к интернету',
//    //    });
//    //  }
////
//    //  setWalletUserInfoloading(false);
//    //})
//    
//  }, []);
//
//  //function MainButtonConnectWallet() {
//  //  const mainButton = useMainButton();
//  //  const [tonConnectUi] = useTonConnectUI();
////
//  //  useEffect(() => {
//  //    mainButton.setParams({
//  //      text: 'Connect Wallet',
//  //      backgroundColor: themeParams['buttonColor'],
//  //      isVisible: true,
//  //      isEnabled: true,
//  //      isLoaderVisible: false,
//  //    });
////
//  //    return mainButton.on('click', () => {
//  //      tonConnectUi.openModal();
//  //    });
//  //  }, [mainButton]);
////
//  //  return null;
//  //}
//
//  //function MainButtonOff() {
//  //  const mainButton = useMainButton();
////
//  //  useEffect(() => {
//  //    mainButton.setParams({
//  //      text: 'OFF',
//  //      //textColor: '#aabb01',
//  //      isVisible: false,
//  //      isEnabled: false,
//  //      isLoaderVisible: false,
//  //    });
//  //  }, [mainButton]);
//  //
//  //  return null;
//  //}
//
//  //const params = useParams();
//  //const pageWallet = params.page;
//  //console.log('wallet page = ', pageWallet);
//
//  //if (pageWallet == "in") {
//  //  //if(lp.platform == "android2")
//  //  //{
//  //  //  postEvent('web_app_open_link', {url: "https://pay.workcontrol.online/account?login="+initData?.user?.id+"&token=&action=", try_instant_view: true});
//  //  //  postEvent('web_app_close');
//  //  //} else {
//  //    if(wallet) {
//  //      content = (<WalletInPage/>);
//  //    } else {
//  //      contentMainButton =(<MainButtonConnectWallet />);
//  //    }
//  //  //}
//  //} 
//  //else if (pageWallet == "internal") {
//  //  content = (<WalletInternalPage/>);
//  //}
//  //else if (pageWallet == "out")
//  //{
//  //  //if(lp.platform == "android2")
//  //  //{
//  //  //  postEvent('web_app_open_link', {url: "https://pay.workcontrol.online/account"});
//  //  //  postEvent('web_app_close');
//  //  //} else {
//  //    if(wallet) {
//  //      content = (<WalletOutPage/>);
//  //    } else {
//  //      contentMainButton =(<MainButtonConnectWallet />);
//  //    }
//  //  //}
//  //}
//  //else
//  //{
//  //  contentMainButton =(<MainButtonOff />);
//  //}
//
//  //const [getUserPhoto, setUserPhoto] = useState("https://ton.workcontrol.online/photo/1224284296.jpg");
//  ////https://ton.workcontrol.online/photo/default.png
//  //
//  //useEffect(() => {
//  //  setUserPhoto("https://ton.workcontrol.online/photo/1224284296.jpg");
//  //}, [apiProvider?.getApiData]);
//
//  //<form> <input type="number" pattern="[0-9]*" inputMode="numeric" /> <button type="submit">Submit</button> </form>
//  return (
//    <>
//      {content}
//      {contentMainButton}
//
//      {
//      //lp.platform != "android2" && (
//      //<TonConnectButton style={{ position: 'fixed', top: '10px', right: '15px', zIndex: 5}} />
//      //)
//      }
//      
//      <PageHeader>
//        <Flex style={{ width: '100%', height: 180, marginTop: 30, padding:20, paddingLeft:30 }} justify='space-between' align='center'>
//            <Avatar src={"https://ton.workcontrol.online/photo/default.png"} size={180} style={{ width: 180, height: 180, borderRadius: 90, backgroundColor: 'var(--tg-theme-button-color)', border: '3px solid var(--tg-theme-button-color)'}} icon={<UserOutlined />} />
//            <Space align="start" style={{ maxWidth: 200, height: 180 }}><h4 style={{ textAlign: 'right'}}>Еременко Евгений</h4></Space>
//        </Flex>
//
//        <WalletUserInfo 
//          loading={WalletUserInfoloading} 
//          //user_balance={apiProvider?.getUserBalance ? apiProvider.getUserBalance : "Loading... TON"}
//          //user_balance_clone={apiProvider?.getUserBalanceClone ? apiProvider.getUserBalanceClone : "Loading... TON"}
//          user_balance={"Loading... TON"}
//          user_balance_clone={"Loading... TON"}
//        />
//        <PageSubMenu>
//          <div className='container-sub-menu'>
//            <Link to="/wallet/out"><div className='container-sub-menu-item'><IconArrowUpCircle /><p>Отправить</p></div></Link>
//            <Link to="/wallet/in"><div className='container-sub-menu-item'><IconPlusCircle/><p>Пополнить</p></div></Link>
//            <Link to="/wallet/internal"><div className='container-sub-menu-item'><IconSwapHorizontalCircle/><p>Перевести</p></div></Link>
//          </div>
//        </PageSubMenu>
//      </PageHeader>
//
//      <WalletUserHistory>
//
//      </WalletUserHistory>
//    </>
//  );
//};
