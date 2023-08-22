<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogLogin extends FormRequest
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
            'accountName'=>'required',
            'password'=>['required',
                        'min:8']
        ];
    }
    public function messages()
    {
        return [
            'required' => ':attribute không được bỏ trống',
            'min'=>':attribute ít nhất 8 kí tự'
            ];
    }
    public function attributes()
    {
        return [
            'accountName'=>'Tên tài khoản',
            'password'=>'Mật khẩu'
        ];
    }
}