
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const ServiciosCrud = () => {
    const [servicios, setServicios] = useState([]);
    const [formData, setFormData] = useState({ nombre: '', descripcion: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchServicios();
    }, []);

    const fetchServicios = async () => {
        const response = await axios.get('/api/servicios');
        setServicios(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await axios.put(`/api/servicios/${editingId}`, formData);
        } else {
            await axios.post('/api/servicios', formData);
        }
        setFormData({ nombre: '', descripcion: '' });
        setEditingId(null);
        fetchServicios();
    };


    const handleEdit = (servicio) => {
        setEditingId(servicio.id);
        setFormData({ nombre: servicio.nombre, descripcion: servicio.descripcion });
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/servicios/${id}`);
        fetchServicios();
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
                <h2><b>Gestión de Servicios</b></h2>
                <br />
                <center>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                                <br />
                                <textarea
                                    name="descripcion"
                                    placeholder="Descripción"
                                    value={formData.descripcion}
                                    onChange={handleInputChange}
                                ></textarea>
                                <br />
                                <button type="submit" className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Servicio</button>
                            </div>
                        </form>
                    </div>
                    <br />

                    <h2><b><i>Listado de Servicios</i></b></h2>
                    <br />
                    <div className='container'>
                        <ul>
                            {servicios.map((servicio) => (
                                <li key={servicio.id}>
                                    <strong>{servicio.nombre}</strong>: {servicio.descripcion}
                                    <button className="editar-button" onClick={() => handleEdit(servicio)}>Editar</button>
                                    <button className="eliminar-button" onClick={() => handleDelete(servicio.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </center>
            </div>
        </>
    );
};

export default ServiciosCrud;
