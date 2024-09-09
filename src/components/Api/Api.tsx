//import {
//  useState,
//  createContext
//} from 'react';
//
//import type { FC, PropsWithChildren } from 'react';
//
//export enum ApiStatus {
//  // API request is being made
//  Loading,
//  // API call was successful
//  Success,
//  // API resulted in an error
//  Error,
//}
//
//interface IApiData {
//  status: ApiStatus
//  error: any,
//  data: any,
//}
//
//export interface UserValue {
//  label: string;
//  value: string;
//}
//
//export async function httpApi(body = {}) {
//
//  const url = "https://workcontrol.online/api/";
//  const result:IApiData = {
//    status: ApiStatus.Loading,
//    error: null,
//    data: null,
//  };
//
//  const request = {
//    method: 'POST',
//    headers: {
//      //'Accept': 'application/json',
//      //'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(body)
//  };
//
//  try {
//    const response = await fetch(url, request);
//    if (!response.ok) {
//      throw new Error('Network response was not ok');
//    }
//
//    const data = await response.json();
//    
//    result.status = ApiStatus.Success;
//    result.data = data;
//    
//    //console.log('httpApi = ', data);
//    //return data;
//  } catch (error) {
//    result.status = ApiStatus.Error;
//    result.error = error;
//    console.error('Error:', error);
//  }
//
//  return result;
//}
//
//export interface ApiContextType {
//  getStatusAuth: boolean;
//  getStatus: ApiStatus;
//  getUserFriends: UserValue[];
//  getEvent: string;
//  getApiData: {};
//  getUserBalance: string;
//  getUserBalanceClone: string;
//  auth: (initDataRaw:any, initData:any) => void;
//  page: (page:string) => void;
//  method: (method:string, param?: {}) => void;
//}
//
//export const ApiContext = createContext<ApiContextType | null>(null);
//
//export const ApiProvider: FC<PropsWithChildren> = ({ children }) => {
//
//  const [getStatusAuth, setStatusAuth] = useState(false);
//  const [getStatus, setStatus] = useState(ApiStatus.Loading);
//  const [getUserFriends, setUserFriends] = useState<UserValue[]>([]);
//  const [getToken, setToken] = useState("");
//  const [getUserId, setUserId] = useState("");
//  const [getEvent, setEvent] = useState("");
//  const [getApiData, setApiData] = useState({});
//  const [getUserBalance, setUserBalance] = useState("Loading... TON");
//  const [getUserBalanceClone, setUserBalanceClone] = useState("Loading... TON");
//
//  function page(page:string) {
//    console.log('useApiStart -->');
//    console.log('useApiSet - page:', page);
//    console.log('useApiSet - userId:', getUserId);
//    console.log('useApiSet - token:',  getToken);
//
//    setStatus(ApiStatus.Loading);
//
//    httpApi(
//      {
//        page: page,
//        user_id: getUserId,
//        token: getToken,
//        time: Date.now()
//      }
//    ).then((result) => {
//      setResult(result);
//    })
//  }
//
//  function method(method:string, param?: {}) {
//    console.log('useApiStart -->');
//    console.log('useApiSet - method:', method);
//    console.log('useApiSet - userId:', getUserId);
//    console.log('useApiSet - token:',  getToken);
//
//    setStatus(ApiStatus.Loading);
//
//    let data = {
//      method: method,
//      user_id: getUserId,
//      token: getToken,
//      time: Date.now(),
//    }
//
//    data = Object.assign({}, data, param);
//
//    httpApi(data)
//    .then((result) => {
//      setResult(result);
//      return result;
//    })
//  }
//
//  function auth(initDataRaw:any, initData:any) {
//    console.log('useApiStart -->');
//    console.log('useApiSet - Auth');
//
//    setStatus(ApiStatus.Loading);
//    setUserId(initData.user.id);
//
//    httpApi(
//      {
//        method: 'Auth',
//        user_id: initData.user.id,
//        tma: initDataRaw,
//      }
//    ).then((result) => {
//      setResult(result);
//    })
//  }
//
//  function setResult(val: IApiData)
//  {
//    setStatus(val.status);
//
//    if(val.status == ApiStatus.Success)
//    {
//      setApiData(val?.data);
//      
//      if(val?.data?.result == "success")
//      {
//        console.log('useApiGet - success', val);
//
//        if(val?.data?.token)
//        {
//          setStatusAuth(true);
//          setEvent("eventStatusAuth");
//          setToken(val.data.token);
//          console.log('useApiGet - Token:', val.data.token);
//        }
//
//        if(val?.data?.getUserBalance?.result == "success")
//        {
//          if(val?.data?.getUserBalance?.data?.user_balance)
//          {
//            setUserBalance(val?.data?.getUserBalance?.data?.user_balance);
//            console.log('useApiGet - user_balance', val?.data?.getUserBalance?.data?.user_balance);
//          }
//
//          if(val?.data?.getUserBalance?.data?.user_balance_clone)
//          {
//            setUserBalanceClone(val?.data?.getUserBalance?.data?.user_balance_clone);
//            console.log('useApiGet - user_balance_clone', val?.data?.getUserBalance?.data?.user_balance_clone);
//          }
//        }
//        
//        if(val?.data?.getUserFriends?.result == "success")
//        {
//          setUserFriends(Object.values(val?.data?.getUserFriends?.data));
//        }
//
//        if(val?.data?.setUserRef?.result == "success")
//        {
//          setEvent("eventAppCloseGoToBot");
//        }
//      }
//      else
//      {
//        console.log('useApiGet - failed', val);
//      }
//    }
//    else if(val.status == ApiStatus.Error)
//    {
//      console.log('useApiGet - failed', val);
//    }
//
//    console.log('useApiStop <--');
//  }
//
//  return (
//    <ApiContext.Provider value={{getStatusAuth, getStatus, getUserFriends, getEvent, getApiData, getUserBalance, getUserBalanceClone, auth, page, method}}>
//      {children}
//    </ApiContext.Provider>
//  );
//};
