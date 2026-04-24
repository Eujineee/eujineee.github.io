<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::query()
            ->whereNotNull('published_at')
            ->orderByDesc('is_featured')
            ->orderBy('order')
            ->get();

        return response()->json([
            'data' => ProjectResource::collection($projects),
            'meta' => ['total' => $projects->count()],
        ]);
    }
}
