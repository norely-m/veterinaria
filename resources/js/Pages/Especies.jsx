
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const EspeciesCrud = () => {
    const [especies, setEspecies] = useState([]);
    const [formData, setFormData] = useState({ nombre_especie: '' });
    const [editingId, setEditingId] = useState(null);
    

    useEffect(() => {
        fetchEspecies();
    }, []);

    const fetchEspecies = async () => {
        try {
            const response = await axios.get('/api/especies');
            setEspecies(response.data);
        } catch (error) {
            console.error('Error al obtener las especies:', error);
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
                await axios.put(`/api/especies/${editingId}`, formData);
            } else {
                await axios.post('/api/especies', formData);
            }
            setFormData({ nombre_especie: '' });
            setEditingId(null);
            fetchEspecies();
        } catch (error) {
            console.error('Error al agregar o actualizar la especie:', error);
        }
    };

    const handleEdit = (especie) => {
        setEditingId(especie.id);
        setFormData({ nombre_especie: especie.nombre_especie });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/especies/${id}`);
            fetchEspecies();
        } catch (error) {
            console.error('Error al eliminar la especie:', error);
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
            <h2><b>Gestión de Especies</b></h2>
            <br />
            <center>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="nombre_especie"
                                placeholder="Especie"
                                value={formData.nombre_especie}
                                onChange={handleInputChange}
                                required
                            />
                            <br />
                            <button type="submit" className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Especie</button>
                        </div>
                    </form>
                </div>

            
                <br />

                <h2><b><i>Listado de las especies</i></b></h2>
                <br />
                <div className='container'>
                    <ul>
                        {especies.map((especie) => (
                            <li key={especie.id}>
                                <strong>{especie.nombre_especie}</strong>
                                <button className="editar-button"onClick={() => handleEdit(especie)}>Editar</button>
                                <button className="eliminar-button" onClick={() => handleDelete(especie.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </center>
        </div>
        </>
    );
};

export default EspeciesCrud;
