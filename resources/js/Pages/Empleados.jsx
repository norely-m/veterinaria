
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../css/style.css';

import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';



import { Link } from '@inertiajs/react';

const EmpleadosCrud = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        contraseña: '',
        fecha_contratacion: '',
        R_idRol: '',
    });
    const [roles, setRoles] = useState([]);
    const [empleados, setEmpleados] = useState([]);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchEmpleados();
        fetchRoles();
    }, []);

    const fetchEmpleados = async () => {
        try {
            const response = await axios.get('/api/empleados');
            setEmpleados(response.data);
        } catch (error) {
            console.error('Error al obtener empleados:', error);
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await axios.get('/api/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error al obtener roles:', error);
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
                await axios.put(`/api/empleados/${editingId}`, formData);
            } else {
                await axios.post('/api/empleados', formData);
            }
            setFormData({ nombre: '', telefono: '', correo: '', contraseña: '', fecha_contratacion: '', R_idRol: '' });
            setEditingId(null);
            fetchEmpleados();
        } catch (error) {
            console.error('Error al guardar el empleado:', error);
        }
    };

    const handleEdit = (empleado) => {
        setEditingId(empleado.id);
        setFormData({
            nombre: empleado.nombre,
            telefono: empleado.telefono,
            correo: empleado.correo,
            contraseña: '',
            fecha_contratacion: empleado.fecha_contratacion,
            R_idRol: empleado.R_idRol,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/empleados/${id}`);
            fetchEmpleados();
        } catch (error) {
            console.error('Error al eliminar el empleado:', error);
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
            <h2><b>Gestión de Empleados</b></h2>
            <br />
            <center>

                <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleInputChange} required />
                        <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleInputChange} required />
                        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleInputChange} required />
                        <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleInputChange} />
                        <input type="date" name="fecha_contratacion" value={formData.fecha_contratacion} onChange={handleInputChange} required />
                        <select name="R_idRol" value={formData.R_idRol} onChange={handleInputChange} required>
                            <option value="">Seleccione un Rol</option>
                            {roles.map((rol) => (
                                <option key={rol.id} value={rol.id}>
                                    {rol.nombre_rol}
                                </option>
                            ))}
                        </select>
                        <br />
                        <button type="submit" className="submit-button">{editingId ? 'Actualizar' : 'Crear'} Empleado</button>
                    </div>
                </form>
                </div>
                
                <br />

                <h3><b><i>Lista de Empleados</i></b></h3>
                <br />
                <div className='container'>
                    <ul>
                        {empleados.map((empleado) => (
                            <li key={empleado.id}>
                                {empleado.nombre} - {empleado.telefono} - {empleado.correo} -{empleado.contraseña} - {empleado.fecha_contratacion}- {empleado.rol?.nombre_rol}
                                <button type="submit" className="editar-button" onClick={() => handleEdit(empleado)}>Editar</button>
                                <button type="submit" className="eliminar-button" onClick={() => handleDelete(empleado.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </div>
             </center>
        </div>
       
        
        </>
    );
};
export default EmpleadosCrud;