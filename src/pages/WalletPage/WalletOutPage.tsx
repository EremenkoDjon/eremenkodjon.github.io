//import './WalletPage.css';
//
//import type { FC } from 'react';
//import { useEffect, //useContext
// } from 'react';
//import { useMainButton, useLaunchParams } from '@tma.js/sdk-react';
//import { DrawerWallet, NumericInput } from '../../components/Page/Page';
//import { Input } from 'antd';
//
//import { useTonWallet } from '@tonconnect/ui-react';
//import { useState } from 'react';
//
////import { ApiContext } from '../../components/Api';
//
//export const WalletOutPage: FC = () => {
//  const { themeParams } = useLaunchParams();
//  const mainButton = useMainButton();
//
//  const [addresswallet, setAddress] = useState("");
//  const [tonValue, setTonValue] = useState('');
//
//  //const apiProvider = useContext(ApiContext);
//
//  function setMainButtonWallenOut(text:string, isVisible:boolean, isEnabled:boolean, isLoaderVisible:boolean = false)
//  {
//    mainButton.setParams({
//      text: text,
//      isVisible: isVisible,
//      isEnabled: isEnabled,
//      isLoaderVisible: isLoaderVisible,
//    });
//
//    if(!isEnabled)
//    {
//      mainButton.setParams({
//        backgroundColor: "#CCCCCC"
//      });
//    }
//    else
//    {
//      mainButton.setParams({
//        backgroundColor: themeParams['buttonColor']
//      });
//    }
//  }
//
//  function MainButtonWallenOut(){
//    useEffect(() => {
//      return mainButton.on('click', () => {
//        //apiProvider?.page("wallet");
//      });
//    }, [mainButton]);
//  
//    return null;
//  }
//
//  const wallet = useTonWallet();
//
//  useEffect(() => {
//    if(wallet?.account.address)
//    {
//      setAddress(wallet.account.address);
//    }
//    else
//    {
//      setAddress("");
//    }
//  }, [wallet]);
//
//  useEffect(() => {
//    if(Number(tonValue) > 0 && addresswallet != "")
//    {
//      setMainButtonWallenOut("Next", true, true);
//    }
//    else
//    {
//      setMainButtonWallenOut("Next", true, false);
//    }
//    
//  }, [tonValue]);
//
//  return (
//    <>
//      <DrawerWallet title='Вывести на кошелек' height='200'>
//        <Input 
//          suffix="Wallet" 
//          name='wallet'
//          style={{ marginBottom: "15px", width: '100%' }}
//          value={addresswallet} 
//          disabled
//        />
//
//        <NumericInput
//          className=''//input-wallet
//          suffix="TON"
//          value={tonValue} 
//          onChange={setTonValue} />
//      </DrawerWallet>
//      <MainButtonWallenOut/>
//    </>
//  );
//};