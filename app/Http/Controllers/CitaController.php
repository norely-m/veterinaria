<?php

namespace App\Http\Controllers;
use App\Models\Citas;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Citas::with(['estatus', 'mascota', 'empleado'])->get();
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
            'fecha' => 'required|date',
            'hora' => 'required|date_format:H:i',
            'motivo' => 'required|string|max:255',
            'estatus_id' => 'required|exists:estatus,id',
            'mascota_id' => 'required|exists:mascotas,id',
            'E_empleado_id' => 'required|exists:empleados,id',
        ]);

        return Citas::create($request->all());
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
        $cita = Citas::findOrFail($id);

        $request->validate([
            'fecha' => 'required|date',
            'hora' => 'required|date_format:H:i',
            'motivo' => 'required|string|max:255',
            'estatus_id' => 'required|exists:estatus,id',
            'mascota_id' => 'required|exists:mascotas,id',
            'E_empleado_id' => 'required|exists:empleados,id',
        ]);

        $cita->update($request->all());
        return $cita;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cita = Citas::findOrFail($id);
        $cita->delete();

        return response()->json(['message' => 'Cita eliminada']);
    }
}
