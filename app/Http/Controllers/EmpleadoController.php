<?php

namespace App\Http\Controllers;
use App\Models\Empleados;
use Illuminate\Http\Request;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Empleados::with('rol')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'telefono' => 'required|string|max:15',
            'correo' => 'required|string|email|max:255|unique:empleados',
            'contraseña' => 'required|string|min:8',
            'fecha_contratacion' => 'required|date',
            'R_idRol' => 'required|exists:roles,id',
        ]);

        $request['contraseña'] = Hash::make($request['contraseña']);
        return Empleados::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $empleado = Empleados::findOrFail($id);

        $request->validate([
            'nombre' => 'required|string|max:255',
            'telefono' => 'required|string|max:15',
            'correo' => 'required|string|email|max:255|unique:empleados,correo,' . $empleado->id,
            'contraseña' => 'nullable|string|min:8',
            'fecha_contratacion' => 'required|date',
            'R_idRol' => 'required|exists:roles,id',
        ]);

        if ($request->filled('contraseña')) {
            $request['contraseña'] = Hash::make($request['contraseña']);
        }

        $empleado->update($request->except(['contraseña']) + ($request->filled('contraseña') ? ['contraseña' => $request['contraseña']] : []));

        return $empleado;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $empleado = Empleados::findOrFail($id);
        $empleado->delete();

        return response()->json(['message' => 'Empleado eliminado']);
    }
}
