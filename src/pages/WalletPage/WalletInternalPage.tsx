//import './WalletPage.css';
//
//import type { FC } from 'react';
//import { useEffect, //useContext 
//} from 'react';
//import { useMainButton, //useLaunchParams 
//} from '@tma.js/sdk-react';
//import { DrawerWallet,// DebounceSelect, 
//  NumericInput } from '../../components/Page/Page';
//import { useState } from 'react';
//import { Select} from 'antd';
//import type { SelectProps } from 'antd';
//import { Modal } from 'antd';
//
////import { MessageContext } from '../../components/Message';
////import { UserValue, ApiContext } from '../../components/Api';
//
//export const WalletInternalPage: FC = () => {
//
//  //const { themeParams } = useLaunchParams();
//
//  const mainButton = useMainButton();
//
//  //const apiProvider = useContext(ApiContext);
//  //const MessageProvider = useContext(MessageContext);
//
//  //const [userValue, setValue] = useState<UserValue[]>([]);
//  const [tonValue, setTonValue] = useState('');
//  const [balanceValue, setBalanceValue] = useState("1");
//
//  const [isModalOpen, setIsModalOpen] = useState(false);
//
// // function setMainButtonWalletInternal(text:string, isVisible:boolean, isEnabled:boolean, isLoaderVisible:boolean = false)
// // {
//  //mainButton.setParams({
//  //  text: text,
//  //  isVisible: isVisible,
//  //  isEnabled: isEnabled,
//  //  isLoaderVisible: isLoaderVisible,
//  //});
//
//  //if(!isEnabled)
//  //{
//  //  mainButton.setParams({
//  //    backgroundColor: "#CCCCCC"
//  //  });
//  //}
//  //else
//  //{
//  //  mainButton.setParams({
//  //    backgroundColor: themeParams['buttonColor']
//  //  });
//  //}
//  //
//
//  function MainButtonWallenInternal(){
//    useEffect(() => {
//      return mainButton.on('click', () => {
//        console.log("MainButtonWallenInternal", balanceValue);
//
//        //MessageProvider?.messageApi.open({
//        //  type: 'warning',
//        //  content: 'internal',
//        //});
//
//        setIsModalOpen(true);
//      });
//    }, [mainButton]);
//  
//    return null;
//  }
//
// //useEffect(() => {
// //  if(Number(tonValue) > 0 && userValue.length == 1)
// //  {
// //    setMainButtonWalletInternal("Next", true, true);
// //  }
// //  else
// //  {
// //    setMainButtonWalletInternal("Next", true, false);
// //  }
// //  
// //  console.log("onChange", userValue);
//
// //}, [tonValue, userValue]);
//
//  const handleChange = (value: string | string[]) => {
//    setBalanceValue(`${value}`);
//  };
//
//  const options: SelectProps['options'] = [
//    {
//      label: "Баланс",
//      value: "1",
//    },
//    {
//      label: "Баланс управляемых клонов",
//      value: "2",
//    }
//  ];
//
//  const [confirmLoading, setConfirmLoading] = useState(false);
//
//  const handleOk = () => {
//    setConfirmLoading(true);
//
//    //apiProvider?.method("setWalletInternal", {sendUser: userValue[0].label, tonValue: tonValue });
//
//    setTimeout(() => {
//      //MessageProvider?.messageApi.open({
//      //  type: 'success',
//      //  content: 'Заявка на перевод отправленна.',
//      //});
//      setIsModalOpen(false);
//      setConfirmLoading(false);
//    }, 2000);
//  };
//
//  const handleCancel = () => {
//    setIsModalOpen(false);
//  };
//
//  //<DebounceSelect
//  //mode="multiple"
//  //value={userValue}
//  //placeholder="Select users"
//  ////suffixIcon="User"
//  //fetchContext={apiProvider}
//  //onChange={(newValue) => {
//  //  setValue(newValue as UserValue[]);
//  //}}
//  //style={{ marginBottom: "15px", width: '100%' }}
//  ///>
//
//  return (
//    <>
//      <Modal 
//        title={"Внутренний перевод для"}
//        confirmLoading={confirmLoading}
//        open={isModalOpen} 
//        onOk={handleOk} 
//        onCancel={handleCancel}
//        centered
//      >
//        <p>Some contents...</p>
//      </Modal>
//
//        <DrawerWallet title='Внутренний перевод' height='250'>
//          <Select
//            defaultValue="1"
//            onChange={handleChange}
//            style={{ marginBottom: "15px", width: '100%'}}
//            options={options}
//            //status="warning"
//          />
//
//          <NumericInput
//            className=''//input-wallet
//            suffix="TON"
//            value={tonValue} 
//            onChange={setTonValue} />
//
//          <MainButtonWallenInternal/>
//
//        </DrawerWallet>
//    </>
//  );
//};
