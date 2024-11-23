<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\EspeciesController;
use App\Http\Controllers\RazaController;
use App\Http\Controllers\MascotaController;
use App\Http\Controllers\EstatusController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\CitaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('usuarios', UsuariosController::class);
Route::get('usuarios', [UsuariosController::class, 'index']);
Route::post('usuarios', [UsuariosController::class, 'store']);
Route::put('usuarios/{id}', [UsuariosController::class, 'update']);
Route::delete('usuarios/{id}', [UsuariosController::class, 'destroy']);

Route::apiResource('servicios', ServicioController::class);
Route::post('servicios', [ServicioController::class, 'store']);
Route::put('servicios/{id}', [ServicioController::class, 'update']);
Route::delete('servicios/{id}', [ServicioController::class, 'destroy']);


Route::apiResource('especies', EspeciesController::class);
Route::get('especies', [EspeciesController::class, 'index']);
Route::post('especies', [EspeciesController::class, 'store']);
Route::put('especies/{id}', [EspeciesController::class, 'update']);
Route::delete('especies/{id}', [EspeciesController::class, 'destroy']);

// Route::post('razas', [RazaController::class, 'store']);
// Route::put('razas/{id}', [RazaController::class, 'update']);
// Route::delete('razas/{id}', [RazaController::class, 'destroy']);

Route::post('razas', [RazaController::class, 'store']);
Route::put('razas/{id}', [RazaController::class, 'update']);
Route::delete('razas/{id}', [RazaController::class, 'destroy']);
Route::get('razas', [RazaController::class, 'index']); // Ruta para obtener todas las razas
Route::get('especies', [EspecieController::class, 'index']); // Ruta para obtener todas las especies 


Route::get('mascotas', [MascotaController::class, 'index']);
Route::post('mascotas', [MascotaController::class, 'store']);
Route::put('mascotas/{id}', [MascotaController::class, 'update']);
Route::delete('mascotas/{id}', [MascotaController::class, 'destroy']);

Route::get('estatus', [EstatusController::class, 'index']);
Route::post('estatus', [EstatusController::class, 'store']);
Route::put('estatus/{id}', [EstatusController::class, 'update']);
Route::delete('estatus/{id}', [EstatusController::class, 'destroy']);

Route::get('roles', [RolController::class, 'index']);
Route::post('roles', [RolController::class, 'store']);
Route::put('roles/{id}', [RolController::class, 'update']);
Route::delete('roles/{id}', [RolController::class, 'destroy']);

Route::get('empleados', [EmpleadoController::class, 'index']);
Route::post('empleados', [EmpleadoController::class, 'store']);
Route::put('empleados/{id}', [EmpleadoController::class, 'update']);
Route::delete('empleados/{id}', [EmpleadoController::class, 'destroy']);

Route::get('citas', [CitaController::class, 'index']);
Route::post('citas', [CitaController::class, 'store']);
Route::put('citas/{id}', [CitaController::class, 'update']);
Route::delete('citas/{id}', [CitaController::class, 'destroy']);