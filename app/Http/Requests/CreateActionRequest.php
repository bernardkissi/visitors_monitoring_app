<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateActionRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'action_performed' => 'required|string',
            'action_performed_detail' => 'required|string',
            'visitor_id' => 'required|exists:visitors,id',
            'user_id' => 'required|exists:users,id',
        ];
    }
}
