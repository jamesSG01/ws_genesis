<?php

namespace  App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Menu\CreateFormRequest;
use Illuminate\Http\Request;
use App\Http\Services\Menu\MenuService;

class MenuController extends Controller
{   
    protected $menuService;

    function create() {
        return view('admin.menu.add', [
            'title' => 'Thêm Danh Mục mới',
        ]);
    }

    public function store(CreateFormRequest $request) {
        dd($request->input());
    }
}
