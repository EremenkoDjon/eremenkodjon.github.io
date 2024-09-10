import './RefPage.css';
import type { FC } from 'react';

import { useEffect, useState, useContext } from 'react';
import { PageHeader } from '../../components/Page';
import { ApiContext } from '../../components/Api';
import { UserInfoVertical, userInfo } from '../../components/User/UserInfo';

export const RefPage: FC = () => {

    const apiProvider = useContext(ApiContext);

    const [getUserPhoto, setUserPhoto] = useState("");

    const userInfo: userInfo = {
        userPhoto: getUserPhoto,
        userName: "Eremenko E V",
    };

    useEffect(() => {
        setUserPhoto("https://ton.workcontrol.online/photo/1224284296.jpg");
    }, [apiProvider?.getApiData]);

    return(
        <>
        <PageHeader>
            <UserInfoVertical UserInfo={userInfo}/>
        </PageHeader>
        </>
    );
};