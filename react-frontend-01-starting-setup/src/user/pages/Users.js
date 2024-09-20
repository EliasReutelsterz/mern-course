import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {id: 'u1',
        name: 'Max Schwarz',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Tesla3.jpg',
        places: 3}
    ];

    return <UsersList items={USERS}/>;
};

export default Users;