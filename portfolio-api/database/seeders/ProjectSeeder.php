<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title'        => 'Portfolio Website',
                'description'  => 'GitHub Pages로 배포한 개인 포트폴리오. Laravel API와 연동하여 프로젝트 데이터를 동적으로 표시합니다.',
                'tech_stack'   => ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'GitHub Pages'],
                'github_url'   => 'https://github.com/eujineee/eujineee.github.io',
                'demo_url'     => 'https://eujineee.github.io',
                'thumbnail'    => null,
                'is_featured'  => true,
                'order'        => 1,
                'published_at' => Carbon::now(),
            ],
            [
                'title'        => 'Portfolio API',
                'description'  => 'Laravel 12 기반 RESTful API 서버. Oracle Cloud 무료 인스턴스에 배포하여 포트폴리오 데이터를 제공합니다.',
                'tech_stack'   => ['Laravel', 'PHP 8.3', 'MySQL', 'Oracle Cloud'],
                'github_url'   => 'https://github.com/eujineee/portfolio-api',
                'demo_url'     => null,
                'thumbnail'    => null,
                'is_featured'  => true,
                'order'        => 2,
                'published_at' => Carbon::now(),
            ],
            [
                'title'        => 'Sample Project',
                'description'  => '샘플 프로젝트입니다. Seeder에서 실제 프로젝트 정보로 교체해주세요.',
                'tech_stack'   => ['Vue.js', 'Laravel', 'MySQL'],
                'github_url'   => null,
                'demo_url'     => null,
                'thumbnail'    => null,
                'is_featured'  => false,
                'order'        => 3,
                'published_at' => Carbon::now(),
            ],
        ];

        foreach ($projects as $data) {
            Project::create($data);
        }
    }
}
