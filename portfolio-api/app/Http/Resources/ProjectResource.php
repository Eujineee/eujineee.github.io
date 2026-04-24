<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'title'       => $this->title,
            'description' => $this->description,
            'tech_stack'  => $this->tech_stack,
            'github_url'  => $this->github_url,
            'demo_url'    => $this->demo_url,
            'thumbnail'   => $this->thumbnail,
            'is_featured' => $this->is_featured,
        ];
    }
}
