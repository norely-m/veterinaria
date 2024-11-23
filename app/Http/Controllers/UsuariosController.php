<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usuarios;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return usuarios::all();
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios,email',
            'password' => 'required|string|min:8',
            'phone' => 'nullable|string|max:15',
            'fecha_registro' => 'required|date',
        ]);

        $usuario = usuarios::create([
            'name' => $request->name,    
            'email' => $request->email,
            'password' => bcrypt($request->password),     
            'phone' => $request->phone,
            'fecha_registro' => $request->fecha_registro,
        ]);

        return response()->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return usuarios::findOrFail($id);
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
        $usuario = usuarios::findOrFail($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => "required|email|unique:usuarios,email,{$id}",
            'password' => 'nullable|string|min:8',
            'phone' => 'nullable|string|max:15',
            'fecha_registro' => 'required|date',
        ]);
        
        $usuario->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $usuario->password,
            'phone' => $request->phone,
            'fecha_registro' => $request->fecha_registro,
        ]);

        return response()->json($usuario);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usuario = usuarios::findOrFail($id);
        $usuario->delete();
        return response()->json(['message' => 'Usuario eliminado']);
    }
}
