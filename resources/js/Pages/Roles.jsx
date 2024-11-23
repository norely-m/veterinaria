
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const RolesCrud = () => {
    const [formData, setFormData] = useState({ nombre_rol: '' });
    const [editingId, setEditingId] = useState(null);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get('/api/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error al obtener los roles:', error);
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
                await axios.put(`/api/roles/${editingId}`, formData);
            } else {
                await axios.post('/api/roles', formData);
            }
            setFormData({ nombre_rol: '' });
            setEditingId(null);
            fetchRoles();
        } catch (error) {
            console.error('Error al agregar o actualizar el rol:', error);
        }
    };

    const handleEdit = (id, nombre_rol) => {
        setEditingId(id);
        setFormData({ nombre_rol });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/roles/${id}`);
            fetchRoles();
        } catch (error) {
            console.error('Error al eliminar el rol:', error);
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
                <h2><b>Gestión de Roles</b></h2>
                <center>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group"> 
                                <input
                                    type="text"
                                    name="nombre_rol"
                                    placeholder="Rol"
                                    value={formData.nombre_rol}
                                    onChange={handleInputChange}
                                    required
                                />
                                <br />
                                <button type="submit" className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Rol</button>
                            </div>
                        </form>
                    </div>

                        <br />
                        <h3><b><i>Lista de Roles</i></b></h3>
                        <br />
                        <div className='container'>
                            <ul>
                                {roles.map((rol) => (
                                    <li key={rol.id}>
                                        {rol.nombre_rol}
                                        <button className="editar-button" onClick={() => handleEdit(rol.id, rol.nombre_rol)}>Editar</button>
                                        <button className="eliminar-button" onClick={() => handleDelete(rol.id)}>Eliminar</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </center>
            </div>
        </>
    );
};

export default RolesCrud;
