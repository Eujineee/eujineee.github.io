<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'content',
        'thumbnail',
        'tech_stack',
        'github_url',
        'demo_url',
        'is_featured',
        'order',
        'published_at',
    ];

    protected $casts = [
        'tech_stack'   => 'array',
        'is_featured'  => 'boolean',
        'published_at' => 'datetime',
    ];
}
