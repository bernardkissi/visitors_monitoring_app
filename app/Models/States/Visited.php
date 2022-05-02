<?php

declare(strict_types=1);

namespace App\Models\States;

use App\Models\States\VisitorState;

class Visited extends VisitorState
{
    /**
     * Property name of this state in DB
     *
     * @var string
     */
    public static $name = 'visited';

    /**
     * Returns the paid state of an order
     *
     * @return string
     */
    public function color(): string
    {
        return 'green';
    }
}
