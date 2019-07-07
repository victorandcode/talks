const userInfo = {
    address: {
        street: 'Plaça de Catalunya',
        number: '1',
        door: '4'
    },
    name: 'General',
    surname: 'Kennobi',
};

export const fetchUserInfo = () => Promise.resolve(userInfo);
