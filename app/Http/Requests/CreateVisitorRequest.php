<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateVisitorRequest extends FormRequest
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
            'fullname'=> 'required|string',
            'email' => 'required|email',
            'phone'=> 'required',
            'address'=> 'required',
            'occupation'=> 'required',
            'age_range' => 'required',
            'service_attendance'=> 'required',
            'service_attendance_detail'=> 'nullable',
            'get_here_option'=> 'required',
            'get_here_detail'=> 'nullable',
            'membership'=> 'required',
            'membership_detail'=> 'nullable',
            'help_information'=> 'required',
            'visited_at' => 'required',
            'help_information_detail'=> 'nullable',
            'user_id'=> 'nullable|exists:users,id',
        ];
    }

    /**
 * Prepare the data for validation.
 *
 * @return void
 */
    protected function prepareForValidation()
    {
        $this->merge([
            'age_range' => $this->age_range[0] ?? null,
            'service_attendance' => $this->service_attendance[0] ?? null,
            'get_here_option' => $this->get_here_option[0] ?? null,
            'membership' => $this->membership[0] ?? null,
            'help_information' => $this->help_information[0] ?? null,
        ]);
    }
}
