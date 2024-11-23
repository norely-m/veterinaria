// src/RazasCrud.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const RazasCrud = () => {
    const [formData, setFormData] = useState({ nombre_raza: '', E_especie_id: '' });
    const [editingId, setEditingId] = useState(null);
    const [especies, setEspecies] = useState([]);
    //const [razas, setRazas] = useState([]);

    // Fetch especies al cargar el componente
    useEffect(() => {
        fetchEspecies();
        fetchRazas();
    }, []);

    const fetchEspecies = async () => {
        try {
            const response = await axios.get('/api/especies'); // Asegúrate de tener una ruta de listado para especies
            setEspecies(response.data);
        } catch (error) {
            console.error('Error al obtener las especies:', error);
        }
    };

    // Fetch razas al cargar el componente o después de actualizaciones
    const fetchRazas = async () => {
        try {
            const response = await axios.get('/api/razas'); // Asegúrate de tener una ruta de listado para razas
            setRazas(response.data);
        } catch (error) {
            console.error('Error al obtener las razas:', error);
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
                await axios.put(`/api/razas/${editingId}`, formData);
            } else {
                await axios.post('/api/razas', formData);
            }
            setFormData({ nombre_raza: '', E_especie_id: '' });
            setEditingId(null);
            fetchRazas(); // Actualizar la lista después de agregar o editar
        } catch (error) {
            console.error('Error al agregar o actualizar la raza:', error);
        }
    };

    const handleEdit = (id, nombre_raza, E_especie_id) => {
        setEditingId(id);
        setFormData({ nombre_raza, E_especie_id });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/razas/${id}`);
            fetchRazas(); // Actualizar la lista después de eliminar
        } catch (error) {
            console.error('Error al eliminar la raza:', error);
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
                <h2><b>Gestión de Razas</b></h2>
                <br />
                <center>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="nombre_raza"
                                    placeholder="Raza"
                                    value={formData.nombre_raza}
                                    onChange={handleInputChange}
                                    required
                                />
                                <br />
                                <select
                                    name="E_especie_id"
                                    value={formData.E_especie_id}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Selecciona una especie</option>
                                    {especies.map((especie) => (
                                        <option key={especie.id} value={especie.id}>
                                            {especie.nombre_especie}
                                        </option>
                                    ))}
                                </select>
                                <br />
                                <button type="submit"  className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Raza</button>
                                </div>
                        </form>
                    </div>
                    <br />
                    <h3><b><i>Lista de Razas</i></b></h3>
                    <br />
                    <div className='container'>
                        {/* <ul>
                            {razas.map((raza) => (
                                <li key={raza.id}>
                                    {raza.nombre_raza} - {raza.E_especie_id && especies.find((especie) => especie.id === raza.E_especie_id)?.nombre_especie}
                                    <button className="editar-button" onClick={() => handleEdit(raza.id, raza.nombre_raza, raza.E_especie_id)}>Editar</button>
                                    <button className="eliminar-button" onClick={() => handleDelete(raza.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </center>

                
            </div>
        </>
    );
};

export default RazasCrud;

   
