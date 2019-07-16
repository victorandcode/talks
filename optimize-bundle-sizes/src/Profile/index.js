import React, { useState, useEffect } from 'react'
import _ from 'lodash';

import { fetchUserInfo } from './api';

const Profile = () => {
    const [name, setName] = useState('N/A');
    const [fullAddress, setFullAdress] = useState('N/A');
    const [age, setAge] = useState(null);
    const [occupation, setOccupation] = useState(null);

    useEffect(() => {
        fetchUserInfo().then(userInfo => {
            const street = _.get(userInfo, 'address.street');
            const number = _.get(userInfo, 'address.number');
            setFullAdress(`${street} #${number}`);

            const fullName = `${userInfo.name} ${userInfo.surname}`;
            setName(fullName);

            setAge(userInfo.age);

            setOccupation(userInfo.occupation);
        })
    }, []);

    return (
        <>
            <h2>Profile</h2>
            <hr />

            <h3>Welcome back <span className='profile-name'>{name}</span> 👋</h3>
            <p><strong>Age</strong>: {age || 'N/A'}</p>
            <p><strong>Occupation</strong>: {occupation || 'N/A'}</p>
            <p><strong>Address</strong>: {fullAddress || 'N/A'}</p>
        </>
    );
};

export default Profile;