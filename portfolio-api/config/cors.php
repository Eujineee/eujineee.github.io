<?php

return [
    'paths' => ['api/*'],

    'allowed_methods' => ['GET', 'OPTIONS'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    | 로컬 개발: '*' (전체 허용)
    |
    | Oracle 서버 배포 후 아래처럼 교체:
    |   'allowed_origins' => ['https://eujineee.github.io'],
    |
    | 여러 도메인 허용 시:
    |   'allowed_origins' => ['https://eujineee.github.io', 'https://other.domain.com'],
    */
    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['Content-Type', 'Accept'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
