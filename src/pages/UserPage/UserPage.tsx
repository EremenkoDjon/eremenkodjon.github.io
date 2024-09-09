//import './UserPage.css';
//import type { FC } from 'react';
//
//import { PageHeader, PageSubMenu } from '../../components/Page/Page';
////import { Page } from '../../components/Page';
//import { Link } from '../../components/Link';
//
////mport { useEffect, useState, 
//// useContext 
////} from 'react';
////
////import { ApiContext , //getApi, //ApiTest, ApiStatus, getToken
////} from '../../components/Api';
//
// import { Avatar, Flex, Space } from 'antd';
//
// import { UserOutlined } from '@ant-design/icons';
//
//function IconAccount(props: React.SVGProps<SVGSVGElement>) {
//  return (
//    <svg
//      viewBox="0 0 24 24"
//      fill="currentColor"
//      height="2em"
//      width="2em"
//      {...props}
//    >
//      <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
//    </svg>
//  );
//}
//
////<IconAccountMultiple/>
////function IconAccountMultiple(props: React.SVGProps<SVGSVGElement>) {
////  return (
////    <svg
////      viewBox="0 0 24 24"
////      fill="currentColor"
////      height="3em"
////      width="3em"
////      {...props}
////    >
////      <path d="M16 17v2H2v-2s0-4 7-4 7 4 7 4m-3.5-9.5A3.5 3.5 0 109 11a3.5 3.5 0 003.5-3.5m3.44 5.5A5.32 5.32 0 0118 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 00-1.93.59 5 5 0 010 5.82A3.39 3.39 0 0015 11a3.5 3.5 0 000-7z" />
////    </svg>
////  );
////}
//
////<IconAccountSync/>
////function IconAccountSync(props: React.SVGProps<SVGSVGElement>) {
////  return (
////    <svg
////      viewBox="0 0 24 24"
////      fill="currentColor"
////      height="3em"
////      width="3em"
////      {...props}
////    >
////      <path d="M11 4C8.8 4 7 5.8 7 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5 0-1.2.3-2.3.9-3.4-.6 0-1.2-.1-1.9-.1m7 6c-1.4 0-2.5-1.1-2.5-2.5 0-.4.1-.8.3-1.1l-1.1-1.1c-.4.6-.7 1.4-.7 2.2 0 2.2 1.8 4 4 4V23l2.2-2.2-2.2-2.3V20m0-6.5V12l-2.2 2.2 2.2 2.2V15c1.4 0 2.5 1.1 2.5 2.5 0 .4-.1.8-.3 1.1l1.1 1.1c.4-.6.7-1.4.7-2.2 0-2.2-1.8-4-4-4z" />
////    </svg>
////  );
////}
//
////<IconAccountPlus/>
////function IconAccountPlus(props: React.SVGProps<SVGSVGElement>) {
////  return (
////    <svg
////      viewBox="0 0 24 24"
////      fill="currentColor"
////      height="3em"
////      width="3em"
////      {...props}
////    >
////      <path d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 004-4 4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 004 4z" />
////    </svg>
////  );
////}
//
//function IconAccountCard(props: React.SVGProps<SVGSVGElement>) {
//  return (
//    <svg
//      viewBox="0 0 24 24"
//      fill="currentColor"
//      height="2em"
//      width="2em"
//      {...props}
//    >
//      <path d="M7 12c2.2 0 4-1.8 4-4S9.2 4 7 4 3 5.8 3 8s1.8 4 4 4m4 8v-5.3c-1.1-.4-2.5-.7-4-.7-3.9 0-7 1.8-7 4v2h11m4-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-7z" />
//    </svg>
//  );
//}
//
//
////<IconAccountEdit/>
////function IconAccountEdit(props: React.SVGProps<SVGSVGElement>) {
////  return (
////    <svg
////      viewBox="0 0 24 24"
////      fill="currentColor"
////      height="3em"
////      width="3em"
////      {...props}
////    >
////      <path d="M21.7 13.35l-1 1-2.05-2.05 1-1a.55.55 0 01.77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06 2.05 2.05L14.06 21H12v-2.06M12 14c-4.42 0-8 1.79-8 4v2h6v-1.89l4-4c-.66-.08-1.33-.11-2-.11m0-10a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z" />
////    </svg>
////  );
////}
//
//function IconAccountGroup(props: React.SVGProps<SVGSVGElement>) {
//  return (
//    <svg
//      viewBox="1 2 22 22"
//      fill="currentColor"
//      height="2em"
//      width="2em"
//      {...props}
//    >
//      <path d="M12 5.5A3.5 3.5 0 0115.5 9a3.5 3.5 0 01-3.5 3.5A3.5 3.5 0 018.5 9 3.5 3.5 0 0112 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 01-3-3 3 3 0 013-3m14 0a3 3 0 013 3 3 3 0 01-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 001.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z" />
//    </svg>
//  );
//}
//
////<IconAccountCog/>
////function IconAccountCog(props: React.SVGProps<SVGSVGElement>) {
////  return (
////    <svg
////      viewBox="0 0 24 24"
////      fill="currentColor"
////      height="3em"
////      width="3em"
////      {...props}
////    >
////      <path d="M10 4a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4m7 8a.26.26 0 00-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.193 4.193 0 000 1l-1.06.82a.26.26 0 00-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 00-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5 0-.17-.01-.33-.04-.5l1.06-.82a.26.26 0 00.06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0019 12h-2m-7 2c-4.42 0-8 1.79-8 4v2h9.68a7 7 0 01-.68-3 7 7 0 01.64-2.91c-.53-.06-1.08-.09-1.64-.09m8 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z" />
////    </svg>
////  );
////}
//
//export const UserPage: FC = () => {
//
//  //const apiProvider = useContext(ApiContext);
//
//  const getUserPhoto =  "https://ton.workcontrol.online/photo/default.png"
//
// //const [getUserPhoto, setUserPhoto] = useState("https://ton.workcontrol.online/photo/default.png");
//
// //useEffect(() => {
// //  setUserPhoto("https://ton.workcontrol.online/photo/default.png");
// //}, [apiProvider?.getApiData]);
//
//  return (
//    <>
//    <PageHeader>
//      <PageSubMenu>
//        <Flex style={{ width: '100%', height: 130, marginTop: 10 }} justify='space-evenly' align='center'>
//          <Avatar srcSet={getUserPhoto} size={130} style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: 'var(--tg-theme-button-color)', border: '2px solid var(--tg-theme-button-color)'}} icon={<UserOutlined />} />
//        </Flex>
//
//        <Flex style={{ width: '100%', height: 50, marginTop: 10 }} justify='space-evenly' align='center'>
//          <Space align="start" style={{ height: 35}}><h3>Еременко Евгений</h3></Space>
//        </Flex>
//
//        <div className='container-sub-menu'>
//          <Link to="/prog/prog2"><div className='container-sub-menu-item'><IconAccount /><p>Кабинет</p></div></Link>
//          <Link to="/prog/prog2"><div className='container-sub-menu-item'><IconAccountGroup/><p>Команда</p></div></Link>
//          <Link to="/prog/prog2"><div className='container-sub-menu-item'><IconAccountCard/><p>AccountCard</p></div></Link>
//        </div>
//      </PageSubMenu>
//    </PageHeader>
//    </>
//  );
//};
