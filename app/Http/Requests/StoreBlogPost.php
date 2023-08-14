<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogPost extends FormRequest
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
            'fullName'=>'required|max:500',
            'studentCode'=>$this->studentCode,
            'department'=>$this->department,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'permission' => $this->permission
        ];
    }
}