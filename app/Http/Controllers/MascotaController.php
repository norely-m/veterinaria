<?php

namespace App\Http\Controllers;
use App\Models\Mascotas;
use Illuminate\Http\Request;

class MascotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Mascotas::all();
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
            'edad' => 'required|integer', 
            'usuario_id' => 'required|exists:usuarios,id',
            'E_especie_id' => 'required|exists:especies,id',
        ]);
        return Mascotas::create($request->all());
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
        $request->validate([
            'nombre' => 'required|string|max:255',
            'edad' => 'required|integer',
            'usuario_id' => 'required|exists:usuarios,id', 
            'E_especie_id' => 'required|exists:especies,id',
        ]);
        $mascota = Mascotas::findOrFail($id);
        $mascota->update($request->all());
        return $mascota;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mascota = Mascotas::findOrFail($id);
        $mascota->delete();
        return response()->json(['message' => 'Mascota eliminada']);
    }
}
