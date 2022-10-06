<?php

namespace App\Http\Services\Menu;
use Illuminate\Support\Str;
use App\Models\Menu;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;


class MenuService extends Model {

	public function create($request) {
		try {
			Menu::create([
				'name' => (string) $request->input('name'),
				'parent_id' => (int) $request->input('parent_id'),
				'description' => (string) $request->input('description'),
				'content' => (string) $request->input('content'),
				'active' => (string) $request->input('active'),
				'slug' => Str::slug($request->input('name'), '-'),
			]);

			Session::flash('success', 'Tạo danh mục thành công');
		} catch(\Exception $err) {
			Session::flash('error', $err->getMessage());
			
			return false;
		}

		return true;
	}

	public function getParent() {
		return Menu::where('parent_id', '0')->get();
	}
}