<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Visitor>
 */
class VisitorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'fullname' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->streetAddress(),
            'occupation' => $this->faker->jobTitle(),
            'age_range' => $this->faker->randomElement(['Below 20 years', '21-34 years', '35-44 years', 'above 45' ])[0],
            'service_attendance' => $this->faker->randomElement(['Sunday Service', 'Midweek']),
            'service_attendance_detail' => '',
            'get_here_option' => $this->faker->randomElement(['Radio', 'Church Handbill/Social Media']),
            'get_here_detail' => '',
            'membership' => $this->faker->randomElement(['yes', 'no']),
            'membership_detail' => '',
            'help_information' => $this->faker->randomElement(['Becoming born again', 'Joining a bible study'])[0],
            'help_information_detail' => '',
            'user_id' => 1,
            'visited_at' => '',
        ];
    }
}
