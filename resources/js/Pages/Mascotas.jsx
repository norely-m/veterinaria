

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const MascotasCrud = () => {
    const [formData, setFormData] = useState({ nombre: '', edad: '', usuario_id: '', E_especie_id: '' });
    const [editingId, setEditingId] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [especies, setEspecies] = useState([]);
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        fetchUsuarios();
        fetchEspecies();
        fetchMascotas();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('/api/usuarios');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    };

    const fetchEspecies = async () => {
        try {
            const response = await axios.get('/api/especies');
            setEspecies(response.data);
        } catch (error) {
            console.error('Error al obtener las especies:', error);
        }
    };

    const fetchMascotas = async () => {
        try {
            const response = await axios.get('/api/mascotas');
            setMascotas(response.data);
        } catch (error) {
            console.error('Error al obtener las mascotas:', error);
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
                await axios.put(`/api/mascotas/${editingId}`, formData);
            } else {
                await axios.post('/api/mascotas', formData);
            }
            setFormData({ nombre: '', edad: '', usuario_id: '', E_especie_id: '' });
            setEditingId(null);
            fetchMascotas();
        } catch (error) {
            console.error('Error al agregar o actualizar la mascota:', error);
        }
    };

    const handleEdit = (id, nombre, edad, usuario_id, E_especie_id) => {
        setEditingId(id);
        setFormData({ nombre, edad, usuario_id, E_especie_id });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/mascotas/${id}`);
            fetchMascotas();
        } catch (error) {
            console.error('Error al eliminar la mascota:', error);
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
                <h2><b>Gestión de Mascotas</b></h2>
                <br />
                <center>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group"> 
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre de la mascota"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="edad"
                                    placeholder="Edad"
                                    value={formData.edad}
                                    onChange={handleInputChange}
                                    required
                                />
                                <select name="usuario_id" value={formData.usuario_id} onChange={handleInputChange} required>
                                    <option value="">Selecciona un usuario</option>
                                    {usuarios.map((usuario) => (
                                        <option key={usuario.id} value={usuario.id}>
                                            {usuario.name}
                                        </option>
                                    ))}
                                </select>
                                <select name="E_especie_id" value={formData.E_especie_id} onChange={handleInputChange} required>
                                    <option value="">Selecciona una especie</option>
                                    {especies.map((especie) => (
                                        <option key={especie.id} value={especie.id}>
                                            {especie.nombre_especie}
                                        </option>
                                    ))}
                                </select>
                                <br />
                               <button type="submit"  className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Mascota</button>
                            </div>
                        </form>
                    </div>
                    <br />
                    <h3><b><i>Lista de Mascotas</i></b></h3>
                    <br />
                    <div className='container'>
                        <ul>
                            {mascotas.map((mascota) => (
                                <li key={mascota.id}>
                                    {mascota.nombre} - Edad: {mascota.edad} - Usuario: {usuarios.find((usuario) => usuario.id === mascota.usuario_id)?.name} - 
                                    Especie: {especies.find((especie) => especie.id === mascota.E_especie_id)?.nombre_especie}
                                    <button className="editar-button" onClick={() => handleEdit(mascota.id, mascota.nombre, mascota.edad, mascota.usuario_id, mascota.E_especie_id)}>Editar</button>
                                    <button className="eliminar-button" onClick={() => handleDelete(mascota.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </center>
            </div>
        </>
    );
};

export default MascotasCrud;
