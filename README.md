  ---
  생성된 파일 구조                                                                                                                                                                                                                                                                                    
  
  portfolio-frontend/                                                                                                                                                                                                                                                                                 
  ├── index.html        ✅ 4개 섹션 (Hero/Skills/Experience/Projects)
  ├── css/style.css     ✅ 커스텀 스타일 (스크롤바, 카드, 애니메이션)                                                                                                                                                                                                                                 
  └── js/main.js        ✅ API fetch + 렌더링 + 스크롤 효과                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                      
  portfolio-api/                                                                                                                                                                                                                                                                                      
  ├── app/Models/Project.php                                                                                                                                                                                                                                                                          
  ├── app/Http/Controllers/Api/ProjectController.php        
  ├── app/Http/Resources/ProjectResource.php                                                                                                                                                                                                                                                          
  ├── config/cors.php
  ├── database/                                                                                                                                                                                                                                                                                       
  │   ├── migrations/2024_01_01_000000_create_projects_table.php
  │   └── seeders/{ProjectSeeder,DatabaseSeeder}.php                                                                                                                                                                                                                                                  
  └── routes/api.php
                                                                                                                                                                                                                                                                                                      
  ---                                                       
  실행 순서                                                                                                                                                                                                                                                                                           
                                                            
  1. Laravel 프로젝트 생성 (먼저 실행)
                                                                                                                                                                                                                                                                                                      
  composer create-project laravel/laravel portfolio-api
  cd portfolio-api                                                                                                                                                                                                                                                                                    
                                                            
  2. 위에서 생성한 파일들 복사                                                                                                                                                                                                                                                                        
  
  portfolio-api/ 안으로 각 파일을 덮어쓰면 됩니다.                                                                                                                                                                                                                                                    
                                                            
  3. .env 설정 (로컬은 SQLite로 간단히)                                                                                                                                                                                                                                                               
                                                            
  DB_CONNECTION=sqlite                                                                                                                                                                                                                                                                                
  # DB_DATABASE는 비워두면 database/database.sqlite 자동 사용
                                                                                                                                                                                                                                                                                                      
  4. 마이그레이션 + 시더                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                      
  touch database/database.sqlite                                                                                                                                                                                                                                                                      
  php artisan migrate                                       
  php artisan db:seed

  5. 로컬 서버 실행

  php artisan serve      # http://localhost:8000                                                                                                                                                                                                                                                      
  
  6. 프론트엔드 확인                                                                                                                                                                                                                                                                                  
                                                            
  portfolio-frontend/index.html을 브라우저로 열면 프로젝트 카드가 로딩됩니다.                                                                                                                                                                                                                         
  
  ---                                                                                                                                                                                                                                                                                                 
  GitHub Pages 배포 방법                                    

  # eujineee.github.io 레포에 portfolio-frontend 내용 push
  cd portfolio-frontend                                                                                                                                                                                                                                                                               
  git init
  git remote add origin https://github.com/eujineee/eujineee.github.io.git                                                                                                                                                                                                                            
  git add .                                                 
  git commit -m "init: portfolio site"                                                                                                                                                                                                                                                                
  git push -u origin main                                                                                                                                                                                                                                                                             
  
  Settings → Pages → Source: main 브랜치 루트(/) 선택하면 자동 배포됩니다.                                                                                                                                                                                                                            
                                                            
  ---                                                                                                                                                                                                                                                                                                 
  Oracle 서버 배포 후 할 일                                 
                                                                                                                                                                                                                                                                                                      
  1. js/main.js 첫 줄의 API_URL을 Oracle 서버 주소로 교체
  2. config/cors.php에서 '*'를 'https://eujineee.github.io'로 교체                                                                                                                                                                                                                                    
  3. .env에서 DB_CONNECTION=mysql로 전환 
