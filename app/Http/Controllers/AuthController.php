<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller{
    //

    public function index(Request $request){
        return view("user.login");
    }

    public function redirectToIndex(){
        return \redirect()->route("Login");
    }
}
