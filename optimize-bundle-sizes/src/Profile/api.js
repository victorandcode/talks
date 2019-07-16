const userInfo = {
    address: {
        street: 'Plaça de Catalunya',
        number: '1',
        door: '4'
    },
    name: 'General',
    surname: 'Kenobi',
    age: 38,
    occupation: 'Jedi Master',
};

export const fetchUserInfo = () => Promise.resolve(userInfo);
