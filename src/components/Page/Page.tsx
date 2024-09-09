//import type { FC, PropsWithChildren } from 'react';
//
//import { Layout, theme, Skeleton, Drawer, Input } from 'antd';
//
////import { useEffect } from 'react';
//
//const { Content, Footer } = Layout;
//
//export const Page: FC<PropsWithChildren<{ title: string }>> = ({ children }) => {
//
//  const {
//    token: { colorBgContainer, borderRadiusLG },
//  } = theme.useToken();
//
//  return (
//    <div>
//        <Content style={{ marginTop: '12px', boxShadow: '0px 0px 1px 0px #000000' }}>
//          <div
//            style={{
//              padding: 24,
//              minHeight: 360,
//              background: colorBgContainer,
//              borderRadius: borderRadiusLG,
//            }}
//          >
//            {children}
//          </div>
//        </Content>
//        <Footer style={{ textAlign: 'center' }}>
//          Ant Design ©{new Date().getFullYear()} Created by Ant UED
//        </Footer>
//    </div>
//  );
//};
//
//export const PageHeader: FC<PropsWithChildren> = ({ children }) => {
//
//  const {
//    token: { colorBgContainer },
//  } = theme.useToken();
//
//  return (
//    <div style={{background: colorBgContainer, paddingTop:"25px", boxShadow: '0px 0px 2px 0px var(--tg-theme-button-color)'}}>
//      {children}
//    </div>
//  );
//};
//
//export const PageSubMenu: FC<PropsWithChildren> = ({ children }) => {
//  return (
//    <>
//      {children}
//    </>  
//  );
//}
//
//import { List } from 'antd';
//
//
//export const WalletUserInfo: FC<PropsWithChildren<{loading:boolean, user_balance:string, user_balance_clone:string}>> = ({user_balance, user_balance_clone, loading, children }) => {
//
//  const {
//    token: { colorBgContainer },
//  } = theme.useToken();
//
//  const data = [
//    {
//      title: 'Баланс',
//      description: user_balance,
//    },
//    {
//      title: 'Баланс управляемых клонов',
//      description: user_balance_clone,
//    },
//  ];
//
//  //let loading = false;
//  
//  return (
//    <>
//      <div style={{background: colorBgContainer, padding: "0px 24px"}}>
//        <List
//        //header={<div>Header</div>}
//        //footer={<div>Footer</div>}
//        //bordered
//        dataSource={data}
//        renderItem={(item) => (
//          <List.Item>
//              <List.Item.Meta
//                title={item.title}
//                description={
//                  <Skeleton loading={loading} active title={false} paragraph={{ rows: 1 }}>
//                  {item.description}
//                  </Skeleton>
//                  }
//              />
//            
//          </List.Item>
//        )}
//      />
//      {children}
//      </div>
//    </>  
//  );
//}
//
////export const WalletUser: FC<PropsWithChildren> = ({ children }) => {
////
////  const {
////    token: { colorBgContainer },
////  } = theme.useToken();
////
////  return (
////    <>
////    <div style={{background: colorBgContainer, marginTop:"12px", paddingTop:"10px", boxShadow: '0px 0px 1px 0px #000000'}}>
////      {children}
////    </div>
////    </>  
////  );
////}
//
////import { Select, Spin } from 'antd';
////import type { SelectProps } from 'antd';
////import React, { useMemo, useRef, useState, //useEffect 
////} from 'react';
////import debounce from 'lodash/debounce';
////import { debounce } from "lodash";
////import type { UserValue } from '../../components/Api';
////import { ApiContextType, ApiStatus, //fetchUserList2
////} from '../../components/Api';
//
////export interface DebounceSelectProps<ValueType = any>
////  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
////  fetchContext: ApiContextType | null;
////  debounceTimeout?: number;
////}
////
////export function DebounceSelect<
////  ValueType extends {
////    key?: string;
////    label: React.ReactNode;
////    value: string | number;
////  } = any
////>({
////  fetchContext,
////  debounceTimeout = 800,
////  ...props
////}: DebounceSelectProps<ValueType>) {
////  const [fetching, setFetching] = useState(false);
////  const [options, setOptions] = useState<UserValue[]>([]);
////  const fetchRef = useRef(0);
////
////  const debounceFetcher = useMemo(() => {
////    const loadOptions = (value: string) => {
////      fetchRef.current += 1;
////      //const fetchId = fetchRef.current;
////      setOptions([]);
////      setFetching(true);
////
////      fetchContext?.method("getUserFriends", {user: value});
////
////      console.log("debounceFetcher", value);
////      
////      //fetchOptions(value);
////
////      //if(fetchOptions != null)
////      //{
////      //  fetchContext;
////      //  //setOptions(fetchOptions(value));
////      //}
////
////      //fetchOptions(value).then((newOptions) => {
////      //
////      //  console.log("debounceFetcher", newOptions);
////      //
////      ////  if (fetchId !== fetchRef.current) {
////      ////    // for fetch callback order
////      ////    return;
////      ////  }
////      ////
////      ////  setOptions(newOptions);
////      ////  setFetching(false);
////      //});
////    };
////
////    return debounce(loadOptions, debounceTimeout);
////  }, [debounceTimeout]);
////
////  useMemo(() => {
////    if(fetchContext?.getStatus != ApiStatus.Loading)
////    {
////      setFetching(false);
////    }
////
////    if(fetchContext?.getStatus == ApiStatus.Success)
////    {
////      //setOptions(fetchContext?.getData);
////      setOptions(fetchContext?.getUserFriends);
////    }
////
////  }, [fetchContext?.getStatus]);
////
////  return (
////    <Select
////      labelInValue
////      filterOption={false}
////      maxCount={1}
////      onSearch={debounceFetcher}
////      notFoundContent={fetching ? <Spin size="small" /> : null}
////      {...props}
////      options={options}
////    />
////  );
////}
//
//import { createStyles } from 'antd-style';
//import type { DrawerClassNames } from 'antd/es/drawer/DrawerPanel';
//
//import { goBack } from '../../components/App';
//
//const useStyle = createStyles(() => ({
//  'my-drawer-body': {
//    background: '#FCFCFC',
//  },
//  'my-drawer-header': {
//    background: 'var(--tg-theme-button-color)',
//    color: 'var(--tg-theme-button-text-color)',
//  },
//}));
//
//const onCloseDrawer = () => {
//  goBack();
//};
//
//export const DrawerWallet: FC<PropsWithChildren<{ title: string, height: string}>> = ({title, height, children }) => {
//
//  //const {
//  //  token: { colorBgContainer },
//  //} = theme.useToken();
//
//  const { styles } = useStyle();
//
//  const classNames: DrawerClassNames = {
//    body: styles['my-drawer-body'],
//    header: styles['my-drawer-header'],
//  };
//
//  return (
//    <>
//      <Drawer
//        height={height}
//        title={title}
//        placement="bottom"
//        size={'default'}
//        open={true}
//        closable={false}
//        onClose={onCloseDrawer}
//        classNames={classNames}
//      >
//      <div>
//        {children}
//      </div>
//      </Drawer>
//    </>  
//  );
//}
//
//export const WalletUserHistory: FC<PropsWithChildren> = ({ children }) => {
//
//  const {
//    token: { colorBgContainer },
//  } = theme.useToken();
//  
//  return (
//    <>
//      <div style={{ background: colorBgContainer, marginTop:"12px", padding: "10px 24px", boxShadow: '0px -1px 2px -1px var(--tg-theme-button-color)'}}>
//        <h3>История транзакций</h3>
//        {children}
//      </div>
//    </>  
//  );
//}
//
////////////////////////////////////////////////////////////////////////////
//
//interface NumericInputProps {
//  className: string;
//  suffix: string;
//  value: string;
//  onChange: (value: string) => void;
//}
//
////const formatNumber = (value: number) => new Intl.NumberFormat().format(value);
//
//export const NumericInput = (props: NumericInputProps) => {
//  const { value, onChange } = props;
//
//  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//    const { value: inputValue } = e.target;
//    const reg = /^-?\d*(\.\d*)?$/;
//    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
//      onChange(inputValue);
//    }
//  };
//
//  // '.' at the end or only '-' in the input box.
//  const handleBlur = () => {
//    let valueTemp = value;
//    if (value.charAt(value.length - 1) === '.' || value === '-') {
//      valueTemp = value.slice(0, -1);
//    }
//    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
//  };
//
//  return (
//      <Input
//        {...props}
//        onChange={handleChange}
//        onBlur={handleBlur}
//        placeholder="Input a number"
//        maxLength={16}
//        inputMode='numeric'
//      />
//  );
//};

