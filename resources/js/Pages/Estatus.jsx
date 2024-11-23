
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const EstatusCrud = () => {
    const [formData, setFormData] = useState({ nombre_estatus: '' });
    const [editingId, setEditingId] = useState(null);
    const [estatusList, setEstatusList] = useState([]);

    useEffect(() => {
        fetchEstatus();
    }, []);

    const fetchEstatus = async () => {
        try {
            const response = await axios.get('/api/estatus');
            setEstatusList(response.data);
        } catch (error) {
            console.error('Error al obtener los estatus:', error);
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
                await axios.put(`/api/estatus/${editingId}`, formData);
            } else {
                await axios.post('/api/estatus', formData);
            }
            setFormData({ nombre_estatus: '' });
            setEditingId(null);
            fetchEstatus();
        } catch (error) {
            console.error('Error al agregar o actualizar el estatus:', error);
        }
    };

    const handleEdit = (id, nombre_estatus) => {
        setEditingId(id);
        setFormData({ nombre_estatus });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/estatus/${id}`);
            fetchEstatus();
        } catch (error) {
            console.error('Error al eliminar el estatus:', error);
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

            


            <div>
                <h2><b>Gestión de Estatus</b></h2>
                <br />
                <center>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group"> 
                                <input
                                    type="text"
                                    name="nombre_estatus"
                                    placeholder="Nombre del estatus"
                                    value={formData.nombre_estatus}
                                    onChange={handleInputChange}
                                    required
                                />
                                <br />
                                <button type="submit"  className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Estatus</button>
                            </div>
                        </form>
                    </div>
                    <br />
                    <h3><b><i>Lista de Estatus</i></b></h3>
                    <br />
                    <div className='container'>
                        <ul>
                            {estatusList.map((estatus) => (
                                <li key={estatus.id}>
                                    {estatus.nombre_estatus}
                                    <button className="editar-button" onClick={() => handleEdit(estatus.id, estatus.nombre_estatus)}>Editar</button>
                                    <button className="eliminar-button" onClick={() => handleDelete(estatus.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </center>
            </div>
        </>
    );
};

export default EstatusCrud;
