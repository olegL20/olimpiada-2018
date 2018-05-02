<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class RoleMiddleware
{
    /**
     * How to use
     *  Route::group([
     *       'middleware' => 'role:admin',
     *  ], function () { // secure routes });
     *
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        $user = JWTAuth::parseToken()->authenticate();

        if ($user->role !== $role) {
            return response()->json([
                'message' => 'Access denied',
                'data' => null
            ], 401);
        }

        return $next($request);
    }
}
