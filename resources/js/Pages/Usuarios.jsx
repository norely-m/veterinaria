
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const UsuariosCrud = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        fecha_registro: '',
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('/api/usuarios');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`/api/usuarios/${editingId}`, formData); //actualizar
            } else {
                await axios.post('/api/usuarios', formData); //crear
            }
            setFormData({ name: '', email: '', password: '', phone: '', fecha_registro: '' });
            setEditingId(null);
            fetchUsuarios();
        } catch (error) {
            console.error('Error al guardar usuario:', error.response?.data || error.message);
        }
    };

    const handleEdit = (usuario) => {
        setEditingId(usuario.id);
        setFormData({
            name: usuario.name,
            email: usuario.email,
            password: '',
            phone: usuario.phone,
            fecha_registro: usuario.fecha_registro,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/usuarios/${id}`);
            fetchUsuarios();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <>
            <div className="flex">
                <div className="shrink-0 flex items-center">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                </div>
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>

                    <NavLink href={route('usuarios')} active={route().current('usuarios')}>
                        Usuarios
                    </NavLink>
                                
                    <NavLink href={route('servicios')} active={route().current('servicios')}>
                        Servicios
                    </NavLink>

                    <NavLink href={route('empleados')} active={route().current('empleados')}>
                        Empleados
                    </NavLink>

                    <NavLink href={route('roles')} active={route().current('roles')}>
                        Roles
                    </NavLink>

                    <NavLink href={route('especies')} active={route().current('especies')}>
                        Especies
                    </NavLink>

                    <NavLink href={route('razas')} active={route().current('razas')}>
                        Razas
                    </NavLink>

                    <NavLink href={route('mascotas')} active={route().current('mascotas')}>
                        Mascotas
                    </NavLink>

                    <NavLink href={route('estatus')} active={route().current('estatus')}>
                        Estatus
                    </NavLink>

                    <NavLink href={route('citas')} active={route().current('citas')}>
                        Citas
                    </NavLink>
                </div>
            </div>
            <br />

            <div>
                <h2><b>Gestión de Usuarios</b></h2>
                <center>
                    <div className="form-container"> 
                        <form onSubmit={handleSubmit}>
                            <div className="form-group"> 
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required={!editingId}
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Teléfono"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="date"
                                    name="fecha_registro"
                                    value={formData.fecha_registro}
                                    onChange={handleInputChange}
                                    required
                                />
                                <br />
                                <button className="submit-button" type="submit">{editingId ? 'Actualizar' : 'Crear'} Usuario</button>
                            </div>
                        </form>
                    </div>
                    <br />

                    <h3><b><i>Lista de Usuarios</i></b></h3>
                    <br />
                    <div className='container'>
                        <ul>
                            {usuarios.map((usuario) => (
                                <li key={usuario.id}>
                                    {usuario.name} - {usuario.email} - {usuario.phone} - {usuario.fecha_registro}
                                    <button className="editar-button"  onClick={() => handleEdit(usuario)}>Editar</button>
                                    <button className="eliminar-button" onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </center>
            </div>
        </>
    );
};

export default UsuariosCrud;
