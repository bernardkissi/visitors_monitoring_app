<?php

namespace Database\Seeders;

use App\Models\Visitor;
use Illuminate\Database\Seeder;

class VisitorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $days = \rand(2,9);
       Visitor::factory()->count(50)->create([
          'created_at' => now()->subMonths($v=rand(2,9)),
          'visited_at' => now()->subMonths($v)
        ]);
    }
}
