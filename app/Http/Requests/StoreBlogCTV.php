<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogCTV extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'fullName'=>'required',
            'studentCode'=>'required|unique:collaborators,studentCode',
            'grade'=>'required',
            'email'=>'required|email|unique:collaborators,email',
            'phone'=>'required|min:10|max:11',
            'accountLink'=>'required',
            'aspiration1'=>'required'
        ];
    }
    public function attributes()
    {
        return [
            'fullName' => 'Họ và Tên',
            'grade'=>'Khoá',
            'phone'=>'Số điện thoại',
            'email'=>'Email',
            'studentCode'=>'Mã số sinh viên',
            'accountLink'=>'Link Facebook',
            'aspiration1'=>'Nguyện vọng 1'
        ];
    }
    public function messages()
    {
        return [
            'required' => ':attribute không được bỏ trống',
            'email.unique' => ":attribute đã được sử dụng đăng kí",
            'email.email'=>'email không hợp lệ',
            'studentCode.unique' => ':attribute đã đăng kí'
            ];
    }
}