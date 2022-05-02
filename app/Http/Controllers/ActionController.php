<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateActionRequest;
use App\Models\Action;
use App\Models\States\Called;
use App\Models\States\Visited;
use App\Models\Visitor;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    public function index(Visitor $visitor)
    {
        return inertia('Action/Index', [
            'visitor' => $visitor,
            'actions' => $visitor->actions->load('user') ?? null,
        ]);
    }

    public function store(CreateActionRequest $request)
    {
        $action = Action::create($request->validated());
        $this->transistionAction($action);

        return redirect()->route('actions.visitor', $action->visitor->id)
            ->with('success', 'Action created successfully.');
    }

    private function transistionAction(Action $action)
    {
        if ($action->action_performed === 'called' && $action->visitor->state->canTransitionTo('called')) {
            $action->visitor->state->transitionTo('called');
        }
        if ($action->action_performed === 'visited' && $action->visitor->state->canTransitionTo('visited')) {
            $action->visitor->state->transitionTo('visited');
        }
    }
}
