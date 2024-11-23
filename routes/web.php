<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

use App\Http\Controllers\ServicioController;
use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\EspeciesController;
use App\Http\Controllers\RazaController;
use App\Http\Controllers\EstatusController;
use App\Http\Controllers\CitaController;
use App\Http\Controllers\EmpleadoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//front
Route::get('/', function () {
    return Inertia::render('app',); 
});





///////////////////////////////////////////
// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/* Route::get('/usuarios', function () {
    return view('usuarios'); // Esta es la vista Blade que se cargará
}); */

Route::resource('usuarios', UsuariosController::class);
Route::resource('servicios', ServicioController::class);
Route::resource('especies', EspeciesController::class);
Route::resource('razas', RazaController::class);
Route::resource('estatus', EstatusController::class);

Route::get('/servicios', function () {
    return Inertia::render('Servicios');
})->middleware(['auth', 'verified'])->name('servicios');

Route::get('/usuarios', function () {
    return Inertia::render('Usuarios');
})->middleware(['auth', 'verified'])->name('usuarios');
//require __DIR__.'/auth.php';

Route::get('/especies', function () {
    return Inertia::render('Especies');
})->middleware(['auth', 'verified'])->name('especies');
//require __DIR__.'/auth.php';

Route::get('/razas', function () {
    return Inertia::render('Razas');
})->middleware(['auth', 'verified'])->name('razas');
//require __DIR__.'/auth.php';

Route::get('/estatus', function () {
    return Inertia::render('Estatus');
})->middleware(['auth', 'verified'])->name('estatus');

Route::get('/mascotas', function () {
    return Inertia::render('Mascotas');
})->middleware(['auth', 'verified'])->name('mascotas');

Route::get('/citas', function () {
    return Inertia::render('Citas');
})->middleware(['auth', 'verified'])->name('citas');

Route::get('/empleados', function () {
    return Inertia::render('Empleados');
})->middleware(['auth', 'verified'])->name('empleados');

Route::get('/roles', function () {
    return Inertia::render('Roles');
})->middleware(['auth', 'verified'])->name('roles');


require __DIR__.'/auth.php';
