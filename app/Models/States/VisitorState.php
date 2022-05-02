<?php
namespace App\Models\States;

use Spatie\ModelStates\State;
use Spatie\ModelStates\StateConfig;

abstract class VisitorState extends State
{
    abstract public function color(): string;

    public static function config(): StateConfig
    {
        return parent::config()
            ->default(Pending::class)
            ->allowTransition(Pending::class, Called::class)
            ->allowTransition(Called::class, Visited::class)
            ->allowTransition(Visited::class, Called::class)
            ->allowTransition(Pending::class, Visited::class)
        ;
    }
}
