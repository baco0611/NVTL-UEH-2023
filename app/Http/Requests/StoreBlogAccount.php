<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogAccount extends FormRequest
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
            'studentCode'=>'required|unique:login,studentCode',
            'department'=>'required',
            'email'=>'required|email|unique:login,email',
            'phone'=>'required|min:10|max:11',
            'password'=>['required',
                        'min:8']
        ];
    }
    public function attributes()
    {
        return [
            'fullName' => 'Họ và Tên',
            'department'=>'Khoa',
            'phone'=>'Số điện thoại',
            'email'=>'Email',
            'studentCode'=>'Mã số sinh viên',
            'password'=>'Mật khẩu'
        ];
    }
    public function messages()
    {
        return [
            'required' => ':attribute không được bỏ trống',
            'password.min' => ':attribute ít nhất 8 kí tự',
            'email.unique' => ":attribute đã được sử dụng đăng kí",
            'email.email'=>'email không hợp lệ',
            'studentCode.unique' => ':attribute đã đăng kí',
            'phone.min'=>":attribute ít nhất 10 số",
            'phone.max'=>":attribute nhiều nhất 11 số"
            ];
    }
}