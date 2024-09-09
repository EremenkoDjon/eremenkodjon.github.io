//import './WalletPage.css';
//
//import type { FC } from 'react';
//import { useEffect } from 'react';
//import { useMainButton, useLaunchParams, useInitData, //usePostEvent
// } from '@tma.js/sdk-react';
//import { DrawerWallet, NumericInput } from '../../components/Page/Page';
//import { Input } from 'antd';
//import { useTonWallet, useTonConnectUI, 
//} from '@tonconnect/ui-react';
//import { useState } from 'react';
//
//import { beginCell, toNano 
//} from '@ton/ton';
//
////import { goBack } from '../../components/App';
//
////import { ApiTest, ApiStatus
////} from '../../components/Api';
//
//export const WalletInPage: FC = () => {
//  //const postEvent = usePostEvent();
//
//  const initData = useInitData();
//
//  const { themeParams } = useLaunchParams();
//
//  const [tonConnectUi] = useTonConnectUI();
//
//  const mainButton = useMainButton();
//
//  const [addresswallet, setAddress] = useState("");
//  const [tonValue, setTonValue] = useState("");
//
//  function setMainButtonWalletIn(text:string, isVisible:boolean, isEnabled:boolean, isLoaderVisible:boolean = false)
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
//  function MainButtonWalletIn(){
//    useEffect(() => {
//      return mainButton.on('click', () => {
//        //console.log(body.toBoc().toString("base64"));
//
//        //goBack();
//
//        const body = beginCell()
//        .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
//        .storeStringTail(initData?.user?.id.toString() as "") // write our text comment
//        .endCell();
//
//        tonConnectUi.sendTransaction(
//          {
//            validUntil: Math.floor(Date.now() / 1000) + 600,
//            messages: [
//              {
//                address: "EQBPggGXZjs8hjinKSUyy38Cl-5Yohy1vX4Hvho9pkpTIhpD",
//                //amount: "10000000",
//                amount: toNano(tonValue).toString(),
//                payload: body.toBoc().toString("base64"),
//              },        
//            ],
//          }
//        )
//
//        //postEvent('web_app_close');
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
//      setMainButtonWalletIn("Next", true, true);
//    }
//    else
//    {
//      setMainButtonWalletIn("Next", true, false);
//    }
//    
//  }, [tonValue]);
//
//  return (
//    <>
//      <DrawerWallet title='Пополнить счет'  height='200'>
//        <Input 
//          suffix="Wallet" 
//          name='wallet' 
//          value={addresswallet} 
//          style={{ marginBottom: "15px", width: '100%' }}
//          disabled 
//        />
//
//        <NumericInput
//          className=''//input-wallet
//          suffix="TON"
//          value={tonValue} 
//          onChange={setTonValue} />
//      </DrawerWallet>
//      <MainButtonWalletIn/>
//    </>
//  );
//};
