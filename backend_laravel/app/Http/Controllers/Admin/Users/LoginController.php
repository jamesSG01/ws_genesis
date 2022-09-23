<?php
/**
 * File: LoginController.php
 * Author: Huy Nguyen
 * Date: 8/9/2022
 * Purpose:
 */
namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{   

    // Added by Huy Nguyen on 8/9/2022
    public function index() {
        return view('admin.users.login', [
            'title' => 'Đăng nhập hệ thống',
        ]);   
    }

    // Added by Huy Nguyen on 8/9/2022
    public function store(Request $request) {
        $this->validate($request, [
            'email' => 'required|email:filter',
            'password' => 'required',
        
        ]);
     
        if (Auth::attempt(['email' => $request->input('email'),
            'password' => $request->input('password')], $request->input('remember'))) {
                
            return redirect()->route('admin');
        }
        
        $request->session()->flash('error', 'Email hoac password khong dung!');
        return redirect()->back();
    }
}
