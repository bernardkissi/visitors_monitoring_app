<?php

declare(strict_types=1);

namespace App\Traits;

use Illuminate\Http\Request;

/*
route_path: users.index, users.store, users.update
actions: index, store, update
permissions : view_users, create_users, update_users, delete_users
*/

trait Authorizable
{
    private array $abilities = [];

    /**
     * Override of callAction to perform the authorization before
     *
     * @param string $method
     * @param $parameters
     * @return mixed
     */
    public function callAction($method, $parameters)
    {
        if ($ability = $this->getAbility()) {
            $this->authorize($ability);
        }

        return parent::callAction($method, $parameters);
    }

    /**
     * Generate the ability name from the action
     *
     * @param string $method
     * @return string|null
     */
    public function getAbility(string $method = null): ?string
    {
        $routeName =  Request::route()->getName();
        $action = collect($this->getAbilities())->first(fn ($value, $key) => $key === $routeName);
        return $action;
    }

    /**
     * Returns all abilities
     *
     * @return array
     */
    private function getAbilities(): ?array
    {
        return $this->abilities ?? null;
    }

    /**
     * Sets the abilities
     *
     * @param $abilities
     * @return void
     */
    public function setAbilities($abilities)
    {
        $this->abilities = $abilities;
    }
}
