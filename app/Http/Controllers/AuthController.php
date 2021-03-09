<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class AuthController extends Controller{
    //

    public function index(Request $request){
        return view("user.login");
    }

    public function redirectToIndex(){
        return \redirect()->route("Login");
    }



    public function signup(Request $request){
        $validate = Validator::make($request->all(), [
            "name"  =>  "required|string",
            "email"  =>  "required|email|unique:users",
            "password"  =>  "required",
        ]);

        if ($validate->fails()){
            return response()->json([
                "message"   =>  $validate->errors(),
                "status"    =>  "validation-error"
            ], 401);
        }

        $user = \App\Models\User::create([
            "name"              =>  $request->name,
            "email"             =>  $request->email,
            "password"          =>  bcrypt($request->password),
            "remember_token"    =>  Str::random(80)
        ]);

        $user->save();

        $token = Str::random(80);
        $user->forceFill([
            "remember_token" =>  hash("sha256", $token)
        ])->save();


        $credentials = request(["email", "password"]);

        if(!Auth::guard('users')->attempt($credentials))
            return response()->json([
                'message' => 'Invalid email or password',
                'status' => 'error'
            ], 401);

        return response()->json([
            "message"   =>  $user->api_token,
            "status"    =>  "success"
        ]);
    }
}
