//import type { ComponentType } from 'react';
//
//import { IndexPage } from '../pages/IndexPage';
//import { WalletPage } from '../pages/WalletPage';
//import { UserPage } from '../pages/UserPage';
//import { Error404 } from '../pages/Error404';
//
//interface Route {
//  path: string;
//  Component: ComponentType;
//  title?: string;
//}
//
//export const routes: Route[] = [
//  { path: '/', Component: IndexPage, title: 'Home page' },
//  { path: '/home', Component: IndexPage, title: 'Home page' },
//  { path: '/user', Component: UserPage, title: 'Home UserPage' },
//  //{ path: '/user/ref', Component: UserPage, title: 'UserPage' },
//  { path: '/wallet', Component: WalletPage, title: 'TON Connect' },
//  //{ path: '/wallet/:page', Component: WalletPage, title: 'TON Connect' },
//  { path: '*', Component: Error404, title: 'Error 404' },
//];