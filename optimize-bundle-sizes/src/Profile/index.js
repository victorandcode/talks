import React, { useState, useEffect } from 'react'
import _ from 'lodash';

import { fetchUserInfo } from './api';

const Profile = () => {
    const [name, setName] = useState('N/A');
    const [fullAddress, setFullAdress] = useState('N/A');

    useEffect(() => {
        fetchUserInfo().then(userInfo => {
            const street = _.get(userInfo, 'address.street');
            const number = _.get(userInfo, 'address.number');
            setFullAdress(`${street} #${number}`);

            const fullName = `${userInfo.name} ${userInfo.surname}`;
            setName(fullName);
        })
    }, []);

    return (
        <>
            <h1>Profile</h1>
            <hr />

            <h2>Welcome back {name}</h2>
            <p>Address: {fullAddress || 'N/A'}</p>
        </>
    );
};

export default Profile;