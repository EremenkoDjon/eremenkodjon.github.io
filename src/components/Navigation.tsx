import type { FC, //PropsWithChildren 
} from 'react';

import {
    useMainButton,
} from '@tma.js/sdk-react';

import {
    GetProp,
    MenuProps,
    Layout,
    Menu,
} from 'antd';

import { 
    useMemo, 
    useEffect, 
    useState
} from 'react';

import { 
    Link,
} from 'react-router-dom';

import {
    createNavigator,
    useBackButtonIntegration,
    //useNavigatorIntegration,
} from '@tma.js/react-router-integration';

import {
    UserOutlined,
    WalletOutlined,
    AppstoreOutlined,
    SettingOutlined,
    HistoryOutlined,
    HomeOutlined,
    ShareAltOutlined,
} from '@ant-design/icons';

import {
    useBackButton, 
} from '@tma.js/sdk-react';

const { Sider } = Layout;

type MenuItem = GetProp<MenuProps, 'items'>[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
  
var defaultSelectedKeys = "home";

const items = [
getItem(<Link to="/home">Home</Link>, defaultSelectedKeys, <HomeOutlined />),
getItem(<Link to="/user">User</Link>, 'user', <UserOutlined />),
getItem(<Link to="/wallet">Wallet</Link>, 'wallet', <WalletOutlined />),
getItem("Programs", "prog", <AppstoreOutlined />, [
    getItem(<Link to="/prog/prog1">Program №1</Link>, 'prog1', <ShareAltOutlined />),
    getItem(<Link to="/prog/prog2">Program №2</Link>, 'prog2', <ShareAltOutlined />),
]),
getItem(<Link to="/history">History</Link>, 'history', <HistoryOutlined />),
getItem(<Link to="/setting">Setting</Link>, 'setting', <SettingOutlined />)
];

export let tmaNavigator:any;

export const createTmaNavigator = () => {
    tmaNavigator = useMemo(createNavigator, []);
};

export const goBack = () => {
tmaNavigator.back();
};

export const RootMenu: FC = () => {

    const backButton = useBackButton();
    useBackButtonIntegration(tmaNavigator, backButton);

    useEffect(() => {
        setMenu();
      }, []);

    const setMenu = () => {
        var pathSplits = tmaNavigator.path.split("/");

        //console.log(pathSplits);

        if(pathSplits[1] == "")
        {
            setSelectedKeys([defaultSelectedKeys]);
        }
        else if(pathSplits[1] == "prog")
        {
            setSelectedKeys([pathSplits[2]]);
        }
        else
        {
            setSelectedKeys([pathSplits[1]]);
        }    
    };
  
    const [selectedKeys, setSelectedKeys] = useState([defaultSelectedKeys]);
  
    const mainButton = useMainButton();
  
    function MainButtonReset() {
        mainButton.setParams({
        isVisible: false,
        });
    }
  
    useEffect(() => { 
    return backButton.on('click', () => {
        setCollapsed(true);
        MainButtonReset();
    });
    }, []);

    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = () => {
    setCollapsed(!collapsed);
    setMenu();
    }
    
    const onClick = (e:any) => {
    setCollapsed(!collapsed);
    console.log('click', e['key']);
    setSelectedKeys([e['key']]);
    MainButtonReset();
    };
  
    return (
      <>
        {!collapsed && (
            <div
              style={{ position: 'fixed', minHeight: '100vh', minWidth: '100%', background: 'rgba(0, 0, 0, 0.7)', zIndex: 10}}
              onClick={onCollapse}
            />
            )
        }
            <Sider
              style={{ position: 'fixed', minHeight: '100vh', zIndex: 50}}
              breakpoint="lg"
              collapsedWidth="0"
              collapsible
              collapsed={collapsed}
              onCollapse={onCollapse}
            >
              <Menu
                style={{ minHeight: '100vh' }}
                mode="inline"
                items={items} 
                onClick={onClick}
                selectedKeys={selectedKeys}
              />
            </Sider>
      </>
    );
  };