// src/CitasCrud.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import ApplicationLogo from '@/Components/ApplicationLogo';

import NavLink from '@/Components/NavLink';

import { Link } from '@inertiajs/react';




const CitasCrud = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        hora: '',
        motivo: '',
        estatus_id: '',
        mascota_id: '',
        E_empleado_id: '',
    });
    const [citas, setCitas] = useState([]);
    const [estatuses, setEstatuses] = useState([]);
    const [mascotas, setMascotas] = useState([]);
    const [empleados, setEmpleados] = useState([]);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [citasRes, estatusRes, mascotasRes, empleadosRes] = await Promise.all([
                axios.get('/api/citas'),
                axios.get('/api/estatus'),
                axios.get('/api/mascotas'),
                axios.get('/api/empleados'),
            ]);

            setCitas(citasRes.data);
            setEstatuses(estatusRes.data);
            setMascotas(mascotasRes.data);
            setEmpleados(empleadosRes.data);
        } catch (error) {
            console.error('Error al cargar datos:', error);
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
                await axios.put(`/api/citas/${editingId}`, formData);
            } else {
                await axios.post('/api/citas', formData);
            }
            setFormData({ fecha: '', hora: '', motivo: '', estatus_id: '', mascota_id: '', E_empleado_id: '' });
            setEditingId(null);
            fetchData();
        } catch (error) {
            console.error('Error al guardar la cita:', error);
        }
    };

    const handleEdit = (cita) => {
        setEditingId(cita.id);
        setFormData({
            fecha: cita.fecha,
            hora: cita.hora,
            motivo: cita.motivo,
            estatus_id: cita.estatus_id,
            mascota_id: cita.mascota_id,
            E_empleado_id: cita.E_empleado_id,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/citas/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error al eliminar la cita:', error);
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
                <h2><b>Gestión de Citas</b></h2>
                <br />

                <center>
                    <div className="form-container"> 
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="date"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="time"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="motivo"
                                    placeholder="Motivo"
                                    value={formData.motivo}
                                    onChange={handleInputChange}
                                    required
                                />
                                <select
                                    name="estatus_id"
                                    value={formData.estatus_id}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Seleccione un Estatus</option>
                                    {estatuses.map((estatus) => (
                                        <option key={estatus.id} value={estatus.id}>
                                            {estatus.nombre_estatus}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="mascota_id"
                                    value={formData.mascota_id}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Seleccione una Mascota</option>
                                    {mascotas.map((mascota) => (
                                        <option key={mascota.id} value={mascota.id}>
                                            {mascota.nombre}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="E_empleado_id"
                                    value={formData.E_empleado_id}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Seleccione un Empleado</option>
                                    {empleados.map((empleado) => (
                                        <option key={empleado.id} value={empleado.id}>
                                            {empleado.nombre}
                                        </option>
                                    ))}
                                </select>
                                <br />
                                <button type="submit" className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Cita</button>
                            </div>
                        </form>
                    </div>
                
                    <br />
                    <h3><b><i>Lista de Citas</i></b></h3>
                    <br />
                    <div className='container'>
                        <ul>
                            {citas.map((cita) => (
                                <li key={cita.id}>
                                    {`${cita.fecha} ${cita.hora} - ${cita.motivo}`}
                                    <button onClick={() => handleEdit(cita)}>Editar</button>
                                    <button onClick={() => handleDelete(cita.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </center>
            </div>
        </>
    );
};

export default CitasCrud;
