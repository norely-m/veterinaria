import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user = {}, onSuccess }) => {
    const [form, setForm] = useState({
        email: user.email || '',
        password: '',
        phone: user.phone || '',
        name: user.name || ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const request = user.id
            ? axios.put(`/api/users/${user.id}`, form)
            : axios.post('/api/users', form);

        request.then(onSuccess);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="password" placeholder="Contraseña" type="password" value={form.password} onChange={handleChange} required />
            <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} required />
            <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default UserForm;
