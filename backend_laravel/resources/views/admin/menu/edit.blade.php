{{-- 
	File:
	Author:
	Date:
	Purpose:
	--}}
	@extends('admin.main')
	<script src="/template/ckeditor/ckeditor.js"></script>
@section('head')

@endsection
@section('content')
	<form action="" method="POST">
		<div class="card-body">
			<div class="form-group">
				<label for="menu">Tên danh mục</label>
				<input type="text" class="form-control" name="name" id="menu" value="{{ $menu->name }}" placeholder="Nhập tên danh mục">
			</div>

			<div class="form-group">
				<label for="">Danh mục</label>
				<select name="parent_id" id="" class="form-control">
					<option value="0" {{$menu->parent_id == 0 ? 'selected' : '' }}>Danh mục cha</option>
					@foreach($menus as  $menuParent)
					<option value="{{$menuParent->id}}" {{$menuParent->id == $menu->parent_id ? 'selected' : '' }}>{{$menuParent->name}}</option>
					@endforeach
				</select>
			</div>

			<div class="form-group">
				<label for="description">Mô tả</label>
				<textarea class="form-control" name="description" id="description">{{ $menu->description }}</textarea>
			</div>

			<div class="form-group">
				<label for="content">Mô tả chi tiết</label>
				<textarea class="form-control" name="content" id="content" >{{ $menu->content }}</textarea>
			</div>
		
			<div class="form-group">
				<label for="content">Kích hoạt</label>
				<div class="custom-control custom-radio">
					<input class="form-group-input" type="radio" name="active" id="active" 
					value="1" {{$menu->active == 1 ? 'checked=""' : ''  }}>
					<label for="active">Có</label> 
				</div>

				<div class="custom-control custom-radio">
					<input class="form-group-input" type="radio" name="active" id="nonactive" {{$menu->active == 0 ? 'checked=""' : ''  }} value="0" >
					<label for="nonactive">Không</label> 
				</div>
				
			</div>
		</div>
		<div class="card-footer">
		<button type="submit" class="btn btn-primary">Cập nhật danh mục</button>
		</div>
		@csrf
	</form>
@endsection

@section('footer')
	<script>
		// Replace the <textarea id="editor1"> with a CKEditor 4
		// instance, using default configuration.
		CKEDITOR.replace( 'content' );
	</script>
@endsection