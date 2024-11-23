import React from 'react';
import axios from 'axios';

const UserDelete = ({ userId, onSuccess }) => {
    const handleDelete = () => {
        axios.delete(`/api/users/${userId}`).then(onSuccess);
    };

    return <button onClick={handleDelete}>Eliminar</button>;
};

export default UserDelete;
