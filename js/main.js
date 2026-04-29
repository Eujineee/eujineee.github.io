// Flash 방지: DOM 파싱 전에 저장된 테마 복원
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.remove('dark');
  else document.documentElement.classList.add('dark');
})();

// ─────────────────────────────────────────────────────────────────────────────
// 📁 이미지 파일 위치 규칙
//
//  images/
//  ├── thumb/          ← 카드 썸네일 (권장: 800×500px)
//  │   ├── alipay.png
//  │   ├── familycomko.png
//  │   ├── ai-image.png
//  │   ├── landing-event.png
//  │   ├── bulk-register.png
//  │   ├── ai-search.png
//  │   ├── channel-talk.png
//  │   ├── contract.png
//  │   └── ck-renewal.png
//  │
//  └── screenshots/    ← 상세 모달 갤러리 (권장: 1200×800px)
//      ├── alipay/
//      │   ├── alipay-01.png   ← 결제 화면
//      │   ├── alipay-02.png   ← 어드민 주문 목록
//      │   ├── alipay-03.png   ← 수수료 설정 UI
//      │   └── alipay-04.png   ← 환불/취소 플로우
//      ├── familycomko/
//      │   ├── familycomko-01.png  ← 메인
//      │   ├── familycomko-02.png  ← 마이페이지
//      │   ├── familycomko-03.png  ← 고객센터
//      │   └── familycomko-04.png  ← 관리자
//      ├── ai-image/
//      │   ├── ai-image-01.png ← 자동생성 결과
//      │   └── ai-image-02.png ← 배경제거 결과
//      ├── landing-event/
//      │   ├── landing-event-01.png ← 관리자 설정
//      │   ├── landing-event-02.png ← 컴코 이벤트 결과
//      │   └── landing-event-03.png ← 패밀리컴코 이벤트 결과
//      ├── bulk-register/
//      │   ├── bulk-register-01.png ← 승인/등록 리스트
//      │   ├── bulk-register-02.png ← 상세 미리보기
//      │   └── bulk-register-03.png ← 협력사 요청 화면
//      ├── ai-search/
//      │   └── ai-search-01.png    ← 검색 아키텍처
//      ├── channel-talk/
//      │   ├── channel-talk-01.png ← 도입 전
//      │   ├── channel-talk-02.png ← 커스터마이징 후
//      │   └── channel-talk-03.png ← AI 상담 화면
//      ├── contract/
//      │   ├── contract-01.png ← 서명 화면
//      │   ├── contract-02.png ← 계약서 미리보기
//      │   └── contract-03.png ← 관리자 목록
//      └── ck-renewal/
//          ├── ck-renewal-01.png ← UI 수정 전
//          ├── ck-renewal-02.png ← UI 수정 후
//          └── ck-renewal-03.png ← 배너 자동 매핑 모달
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "alipay",
    title: "Alipay · UnionPay PG 연동",
    period: "2025",
    role: "단독 수행",
    color: "blue",
    icon: "💳",
    is_featured: true,
    tech_stack: ["PHP", "MySQL", "jQuery", "AronHub API", "Alipay", "UnionPay"],
    thumbnail: "images/thumb/alipay.png",
    screenshots: [
      { src: "images/screenshots/alipay/alipay-01.png", caption: "결제 화면 (Alipay · UnionPay 동일)" },
      { src: "images/screenshots/alipay/alipay-02.png", caption: "서명 페이지" },
      { src: "images/screenshots/alipay/alipay-03.png", caption: "UnionPay 이동 화면" },
      { src: "images/screenshots/alipay/alipay-04.png", caption: "[관리자] 충전 관리페이지" },
    ],
    summary: "중국 현지 결제 수단을 레거시 PHP 플랫폼에 완전 통합. 7개 엣지케이스 단계적 추적·해결.",
    highlights: [
      "멱등 콜백 처리로 중복 지급 원천 차단",
      "SELECT FOR UPDATE 행 잠금 기반 동시성 제어",
      "결제 시점 환율·수수료 스냅샷 저장 — 사후 정산 추적 가능",
      "환율 10분 윈도우 고정 (한국수출입은행 API 10분 단위 배치)",
      "기업별 5단계 수수료 분배 구조 DB 기반으로 고도화",
      "세션 유실·팝업 차단 등 7개 엣지케이스 단계적 추적·해결",
      "facade 패턴 + IIFE 외부 파일 분리로 내부 API 경로 은닉",
    ],
    description: "초기 구현체를 넘겨받아 아키텍처 재설계부터 안정성 확보까지 전 구간을 단독 담당했습니다. 단일 파일에 뒤섞인 로직을 common/ 모듈로 분리하고, 하드코딩 수수료 상수를 기업별 DB 기반으로 전환했습니다. 전용 주문 테이블도 공통 테이블로 마이그레이션해 다른 결제 수단과 통합 정산이 가능하도록 했습니다.",
  },
  {
    id: "familycomko",
    title: "패밀리컴코 B2C 플랫폼 런칭",
    period: "2024.02 – 05",
    role: "풀스택 개발",
    color: "purple",
    icon: "🏪",
    is_featured: true,
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "jQuery", "Template Engine"],
    thumbnail: "images/thumb/familycomko.png",
    screenshots: [
      { src: "images/screenshots/familycomko/familycomko-01.png", caption: "메인" },
      { src: "images/screenshots/familycomko/familycomko-02.png", caption: "마이페이지 주문 상세" },
      { src: "images/screenshots/familycomko/familycomko-03.png", caption: "마이페이지 후기 상세" },
      { src: "images/screenshots/familycomko/familycomko-04.png", caption: "[관리자] 메인 페이지 수정" },
      { src: "images/screenshots/familycomko/familycomko-05.png", caption: "[관리자] 후기 상세" },
    ],
    summary: "B2B → B2C 전환을 위한 신규 커머스 플랫폼을 Zero-to-One으로 단독 설계·개발·런칭.",
    highlights: [
      "DB 설계부터 서비스 프론트·관리자 백오피스까지 3개월 내 단독 완성",
      "메인·마이페이지(주문/포인트/배송지)·고객센터 전 영역 구현",
      "관리자 UI 직접 설계 — 코드 수정 없이 모든 콘텐츠 동적 제어",
      "MySQL + MSSQL 이종 DB 환경 대량 데이터 정합성 유지",
      "하드코딩 배제 원칙 — 모든 요소를 관리자에서 제어 가능한 구조",
    ],
    description: "B2B 중심이던 비즈니스의 B2C 전환 시점에 기술적 기반을 마련했습니다. '모든 콘텐츠는 관리자에서 코드 수정 없이 제어 가능해야 한다'는 원칙을 설계 전반에 적용했습니다.",
  },
  {
    id: "ai-image",
    title: "AI 이미지 자동생성 시스템",
    period: "2025",
    role: "단독 수행",
    color: "green",
    icon: "🤖",
    is_featured: true,
    tech_stack: ["Python", "FastAPI", "OpenAI API", "Docker", "Image Processing"],
    thumbnail: "images/thumb/ai-image.png",
    screenshots: [
      { src: "images/screenshots/ai-image/ai-image-01.png", caption: "이벤트 상세페이지 템플릿 미리보기" },
      { src: "images/screenshots/ai-image/ai-image-02.png", caption: "이벤트 상품 등록" },
      { src: "images/screenshots/ai-image/ai-image-03.png", caption: "이벤트 상세페이지 텍스트 삽입" },
    ],
    summary: "Python FastAPI 기반 이벤트 배너 자동생성 + 배경제거 — 디자인 업무 효율 80% 향상.",
    highlights: [
      "이벤트 배너 자동생성으로 디자인 업무 효율 80% 향상",
      "배경제거 알고리즘 최적화 및 이미지 처리 파이프라인 구축",
      "Docker 컨테이너 환경에서 FastAPI 기반 마이크로서비스 구현",
      "기존 PHP 시스템과 Python 서비스 간 seamless 연동",
    ],
    description: "기존에는 디자이너가 이벤트마다 배너를 수작업으로 제작했습니다. Python FastAPI로 이미지 자동생성·배경제거 파이프라인을 구축하고, 기존 PHP 관리자 시스템과 연동해 관리자에서 바로 배너를 생성할 수 있는 구조로 만들었습니다. Docker 컨테이너로 Python 서비스를 분리해 PHP 시스템에 영향 없이 독립적으로 운영됩니다. 결과적으로 디자인 업무 효율이 80% 향상됐습니다.",
  },
  {
    id: "landing-event",
    title: "랜딩 이벤트 통합 자동화",
    period: "2024.11",
    role: "단독 수행",
    color: "orange",
    icon: "🔁",
    is_featured: false,
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "jQuery", "JavaScript"],
    thumbnail: "images/thumb/landing-event.png",
    screenshots: [
      { src: "images/screenshots/landing-event/landing-event-01.png", caption: "컴퓨터코리아 이벤트 페이지" },
      { src: "images/screenshots/landing-event/landing-event-02.png", caption: "[관리자] 컴퓨터코리아 랜딩 수정" },
      { src: "images/screenshots/landing-event/landing-event-03.png", caption: "[관리자] 컴퓨터코리아 랜딩 상품 정렬" },
      { src: "images/screenshots/landing-event/landing-event-04.png", caption: "[관리자] 컴퓨터코리아 랜딩 상품 등록 / 수정" },
    ],
    summary: "하드코딩 이벤트 제작을 배경·상품·레이아웃 설정만으로 즉시 생성되는 템플릿 엔진으로 전환.",
    highlights: [
      "이벤트 페이지 제작 리드타임 대폭 단축",
      "운영팀이 개발자 없이 독립 대응 가능한 구조 구축",
      "쿠키 기반 → DB 설정 기반 레이아웃 제어로 일관성 확보",
      "썸네일형·리스트형·기본형 관리자 자유 선택 및 고정",
      "복지몰 전 영역(리스트·상세·타임딜·메인) 최종 혜택가 실시간 연동",
    ],
    description: "매번 코드를 수정해야 했던 이벤트 페이지 제작 방식을 구조적으로 전환했습니다. 관리자에서 배경·상품·레이아웃을 설정하면 페이지가 즉시 생성되고, 드래그&드롭으로 섹션 순서를 제어할 수 있습니다. 동시에 복지몰(패밀리컴코) 전 영역에 할인율·쿠폰이 합산된 최종 혜택가를 실시간으로 노출하는 로직도 통합했습니다. 이 두 작업을 하나의 프로젝트로 묶어 단독으로 완성했습니다.",
  },
  {
    id: "bulk-register",
    title: "상품 일괄 등록 프로세스",
    period: "2024.05 – 06",
    role: "단독 수행",
    color: "blue",
    icon: "⚡",
    is_featured: false,
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "jQuery", "Excel Parsing"],
    thumbnail: "images/thumb/bulk-register.png",
    screenshots: [
      { src: "images/screenshots/bulk-register/bulk-register-01.png", caption: "[협력사] 상품 일괄 등록" },
      { src: "images/screenshots/bulk-register/bulk-register-02.png", caption: "[관리자] 상품 일괄 등록 내역" },
      { src: "images/screenshots/bulk-register/bulk-register-03.png", caption: "제조사 코드 조회 팝업" },
      { src: "images/screenshots/bulk-register/bulk-register-04.png", caption: "엑셀 업로드 예시" },
    ],
    summary: "수동 등록을 엑셀 업로드 + 코드 검색 팝업으로 대체. 실수를 구조적으로 막는 설계.",
    highlights: [
      "엑셀 파일 파싱 → 유효성 검증 → 미리보기 → 일괄 INSERT/UPDATE 파이프라인",
      "제조사·카테고리 코드 검색 팝업 — 엑셀 작성 시점부터 오입력 구조적 차단",
      "3단계 검증 (업로드 → 미리보기 → 승인 후 반영) — 잘못된 데이터의 실서버 반영 원천 차단",
      "Stored Procedure 기반 조회 최적화 — 대량 데이터 처리 시 성능 안정화",
      "MySQL + MSSQL 이종 DB 대용량 트랜잭션 안정 처리",
      "Sequence Diagram 기반 전체 아키텍처 직접 설계",
    ],
    description: "'어떻게 하면 사람이 실수를 못 하게 만들까'를 설계에 녹인 프로젝트입니다. 담당자가 엑셀을 작성하는 시점부터 제조사·카테고리 코드를 직접 검색해 자동 입력되도록 설계해, 오입력 가능성을 구조적으로 제거했습니다. 업로드 후에도 바로 DB에 반영하지 않고 미리보기 → 유효성 검사 → 승인의 3단계를 거치게 해 잘못된 데이터가 실서버에 올라가기 전에 차단하는 안전망을 만들었습니다. 조회 성능은 Stored Procedure로 최적화했습니다.",
  },
  {
    id: "ai-search",
    title: "AI 검색 고도화",
    period: "2025",
    role: "PHP - Python 연동 및 풀스택 개발",
    color: "purple",
    icon: "🔍",
    is_featured: false,
    tech_stack: ["Python", "Vector DB", "Dify LLM", "OpenAI API", "FastAPI"],
    thumbnail: "images/thumb/ai-search.png",
    screenshots: [
      { src: "images/screenshots/ai-search/ai-search-01.png", caption: "의미 기반 검색 시스템" },
    ],
    summary: "Vector DB + Dify LLM으로 의미 기반 검색 구축. OCR 시스템 아키텍처 설계.",
    highlights: [
      "Vector DB 기반 의미 검색으로 키워드 불일치 검색 실패 개선",
      "Dify LLM API 연동 — 동의어·유의어 기반 검색 커버리지 확장",
      "OpenAI Vision API 활용 상품 이미지 OCR 시스템 아키텍처 설계",
      "기존 PHP 시스템과 Python 마이크로서비스 간 seamless 연동",
    ],
    description: "키워드가 정확히 일치하지 않아도 의미적으로 연관된 상품을 찾을 수 있는 검색 시스템을 구축했습니다. Vector DB에 상품 데이터를 임베딩하고, Dify LLM으로 검색어를 동의어·유의어로 확장하는 방식입니다. 기존 PHP 쇼핑몰과 Python 마이크로서비스를 연동하는 구조를 설계했고, OpenAI Vision API를 활용한 상품 이미지 OCR 시스템 아키텍처도 함께 설계했습니다.",
  },
  {
    id: "channel-talk",
    title: "채널톡 AI 상담 도입",
    period: "2023.08",
    role: "단독 수행",
    color: "green",
    icon: "💬",
    is_featured: false,
    tech_stack: ["PHP", "MySQL", "jQuery", "RESTful API", "채널톡"],
    thumbnail: "images/thumb/channel-talk.png",
    screenshots: [
      { src: "images/screenshots/channel-talk/channel-talk-01.png", caption: "플로팅 -> 사이드 커스터마이징" },
      { src: "images/screenshots/channel-talk/channel-talk-02.png", caption: "AI 상담(AI톡) 화면" },
      { src: "images/screenshots/channel-talk/channel-talk-03.png", caption: "채널톡 초기 세팅 매뉴얼 작성" },
    ],
    summary: "채널톡 AI톡 연동으로 24/7 자동 응대 체계 마련. CS팀 독립 운영 매뉴얼 직접 작성.",
    highlights: [
      "채널톡 API 분석 후 기존 서비스와 충돌 없이 AI톡 구축",
      "24/7 자동 응대 체계 마련 — CS 처리 효율 개선",
      "상담원 연결과 AI 상담 간 전환 로직 구현",
      "CS팀 독립 운영을 위한 PPT 매뉴얼 직접 작성·배포",
    ],
    description: "채널톡의 방대한 API 문서를 단기간에 분석해 기존 서비스와 충돌 없이 연동했습니다. 단순 설치가 아니라 사용자 진입 시점에 맞게 채팅방 초기화 로직을 커스터마이징하고, AI 상담과 상담원 연결 간 전환 흐름을 직접 설계했습니다. 개발에서 그치지 않고 CS팀이 직접 운영할 수 있도록 세부 기능을 정리한 PPT 매뉴얼을 작성·배포해 개발자 의존도를 낮췄습니다.",
  },
  {
    id: "contract",
    title: "물품공급계약서 접근 제어",
    period: "2024.07",
    role: "단독 수행",
    color: "orange",
    icon: "🔒",
    is_featured: false,
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "Template Engine", "PDF 생성"],
    thumbnail: "images/thumb/contract.png",
    screenshots: [
      { src: "images/screenshots/contract/contract-01.png", caption: "[협력사] 계약서 공지 팝업" },
      { src: "images/screenshots/contract/contract-02.png", caption: "[협력사] 계약서 미리보기" },
      { src: "images/screenshots/contract/contract-03.png", caption: "[관리자] 계약 현황 리스트" },
      { src: "images/screenshots/contract/contract-04.png", caption: "[관리자] 약관 변경 관리" },
    ],
    summary: "미서명 협력사 서비스 이용 100% 차단. 전자서명 + PDF 생성까지 계약 전 과정을 시스템화.",
    highlights: [
      "로그인·서비스 이용 시 서명 여부 실시간 체크 → 미서명 시 서비스 접근 차단",
      "미서명 협력사 서비스 접근 100% 차단 실현",
      "전자서명 데이터를 계약서 내용과 함께 PDF로 생성·저장 — 법적 효력 있는 계약 문서 자동 발행",
      "정책 변경 시 관리자가 신규 버전 계약서 등록 가능한 가변 구조",
      "협력사 전체 계약 현황 대시보드 구축",
      "MSSQL(협력사 정보) + MySQL(계약 상태) 이종 DB 유기적 연동",
    ],
    description: "전 협력사 계약 체결 의무화 정책을 기술로 구현했습니다. 단순 동의 체크박스가 아니라 실제 전자서명을 받아 계약서 내용과 함께 PDF로 생성·저장하는 구조라 구현 난이도가 높았습니다. 미서명 상태에서는 어떤 서비스도 이용 불가능하도록 접근 제어 로직을 설계했고, 향후 계약 내용이 바뀌어도 관리자가 신규 버전을 직접 등록할 수 있는 가변 구조로 만들었습니다.",
  },
  {
    id: "ck-renewal",
    title: "컴퓨터코리아 리뉴얼",
    period: "2024.01 – 02",
    role: "단독 수행",
    color: "blue",
    icon: "🔄",
    is_featured: false,
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "jQuery"],
    thumbnail: "images/thumb/ck-renewal.png",
    screenshots: [
      { src: "images/screenshots/ck-renewal/ck-renewal-01.png", caption: "메인 이벤트 배너" },
      { src: "images/screenshots/ck-renewal/ck-renewal-02.png", caption: "[관리자] 이벤트 관리 UI 수정" },
      { src: "images/screenshots/ck-renewal/ck-renewal-03.png", caption: "[관리자]배너 자동 매핑 모달" },
    ],
    summary: "배너 관리 프로세스 제거·자동화. 데이터 자동 매핑으로 수동 오입력 원천 차단.",
    highlights: [
      "비효율적인 관리자-메인 연동 중간 단계 제거",
      "배너 등록 시 상품·이벤트 검색 → 메타데이터 자동 입력",
      "코드 수정 없이 신규 배너 타입 수용하는 확장 가능한 DB 구조",
      "모듈화된 UI 구조로 유지보수 용이성 확보",
    ],
    description: "컴퓨터코리아 메인 UI를 개편하면서 단순 디자인 변경에 그치지 않고 운영 비효율을 함께 제거했습니다. 기존에는 배너 등록 시 상품·이벤트 정보를 수동으로 입력해 오입력이 잦았는데, 검색 모달에서 선택하면 메타데이터가 자동으로 입력되는 구조로 바꿨습니다. DB 스키마도 확장 가능하게 개편해 이후 신규 배너 타입이 추가돼도 코드 수정이 필요 없는 구조를 만들었습니다.",
  },
];

const COLOR_MAP = {
  blue:   { border: "hover:border-blue-700",   featured: "bg-blue-600",   accent: "#3b82f6" },
  purple: { border: "hover:border-purple-700", featured: "bg-purple-600", accent: "#a855f7" },
  green:  { border: "hover:border-green-700",  featured: "bg-green-600",  accent: "#22c55e" },
  orange: { border: "hover:border-orange-700", featured: "bg-orange-600", accent: "#f97316" },
};

// ─── 카드 렌더링 ──────────────────────────────────────────────────────────────
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PROJECTS.map((p, i) => {
    const c = COLOR_MAP[p.color] || COLOR_MAP.blue;
    const techBadges = p.tech_stack.map(t => `<span class="skill-badge">${esc(t)}</span>`).join('');
    const featuredBadge = p.is_featured
      ? `<span class="absolute top-3 right-3 px-2 py-0.5 text-xs ${c.featured} text-white rounded-full font-medium z-10">Featured</span>`
      : '';

    return `
      <div class="project-card relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800
                  ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20
                  animate-fade-in cursor-pointer"
           style="animation-delay:${i * 80}ms"
           onclick="openModal('${p.id}')">
        <div class="relative overflow-hidden h-48">
          <img
            src="${p.thumbnail}"
            alt="${esc(p.title)} 썸네일"
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onerror="this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:linear-gradient(135deg,#1e293b,#0f172a)\'>${p.icon}</div>'"
          >
          ${featuredBadge}
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs text-gray-500">${p.period}</span>
            <span class="text-gray-700">·</span>
            <span class="text-xs text-gray-500">${p.role}</span>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">${esc(p.title)}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">${esc(p.summary)}</p>
          <div class="flex flex-wrap gap-2 mb-4">${techBadges}</div>
          <span class="text-xs text-blue-400">자세히 보기 →</span>
        </div>
      </div>`;
  }).join('');
}

// ─── 모달 ────────────────────────────────────────────────────────────────────
let currentGalleryIdx = 0;
let currentScreenshots = [];

function openModal(id) {
  const p = PROJECTS.find(p => p.id === id);
  if (!p) return;

  currentScreenshots = p.screenshots || [];
  currentGalleryIdx = 0;

  const c = COLOR_MAP[p.color] || COLOR_MAP.blue;
  const techBadges = p.tech_stack.map(t => `<span class="skill-badge">${esc(t)}</span>`).join('');
  const highlights = p.highlights.map(h =>
    `<li class="flex gap-2 text-sm text-gray-400"><span style="color:${c.accent};margin-top:2px;flex-shrink:0">▸</span>${esc(h)}</li>`
  ).join('');

  const galleryHTML = currentScreenshots.length > 0 ? `
    <div class="mb-8">
      <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">스크린샷</h4>
      <div class="relative bg-gray-800 rounded-xl overflow-hidden mb-3">
        <img
          id="gallery-main"
          src="${currentScreenshots[0].src}"
          alt="${esc(currentScreenshots[0].caption)}"
          class="w-full object-contain max-h-96"
          onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:12rem;color:#4b5563;font-size:0.875rem\'>이미지를 준비 중입니다</div>'"
        >
        ${currentScreenshots.length > 1 ? `
          <button onclick="galleryPrev()" style="position:absolute;left:0.5rem;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:white;border-radius:9999px;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;font-size:1.25rem">‹</button>
          <button onclick="galleryNext()" style="position:absolute;right:0.5rem;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:white;border-radius:9999px;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;font-size:1.25rem">›</button>
        ` : ''}
      </div>
      <p id="gallery-caption" class="text-center text-xs text-gray-500 mb-3">${esc(currentScreenshots[0].caption)}</p>
      ${currentScreenshots.length > 1 ? `
        <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap">
          ${currentScreenshots.map((s, i) => `
            <button onclick="galleryGoto(${i})" id="gallery-thumb-${i}"
              style="width:4rem;height:2.5rem;border-radius:0.5rem;overflow:hidden;border:2px solid ${i===0?'#3b82f6':'transparent'};opacity:${i===0?'1':'0.5'};cursor:pointer;padding:0;background:none">
              <img src="${s.src}" style="width:100%;height:100%;object-fit:cover"
                onerror="this.parentElement.style.display='none'">
            </button>`).join('')}
        </div>
      ` : ''}
    </div>
  ` : '';

  document.getElementById('modal-content').innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1.5rem">
      <div>
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem">
          <span class="text-xs text-gray-500">${p.period}</span>
          <span class="text-gray-700">·</span>
          <span class="text-xs text-gray-500">${p.role}</span>
        </div>
        <h3 class="text-2xl font-bold text-white">${p.icon} ${esc(p.title)}</h3>
      </div>
      <button onclick="closeModal()" style="color:#6b7280;background:none;border:none;cursor:pointer;margin-left:1rem;flex-shrink:0" onmouseover="this.style.color='white'" onmouseout="this.style.color='#6b7280'">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="flex flex-wrap gap-2 mb-6">${techBadges}</div>
    ${galleryHTML}
    <div class="mb-6">
      <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">프로젝트 소개</h4>
      <p class="text-gray-300 text-sm leading-relaxed">${esc(p.description)}</p>
    </div>
    <div>
      <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">핵심 구현 · 성과</h4>
      <ul style="display:flex;flex-direction:column;gap:0.5rem">${highlights}</ul>
    </div>
  `;

  history.pushState(null, '', '#' + p.id);
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('modal-open'));
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('modal-open');
  setTimeout(() => overlay.classList.add('hidden'), 250);
  document.body.style.overflow = '';
  history.pushState(null, '', window.location.pathname);
}

function galleryGoto(idx) {
  if (!currentScreenshots[idx]) return;
  currentGalleryIdx = idx;
  document.getElementById('gallery-main').src = currentScreenshots[idx].src;
  document.getElementById('gallery-caption').textContent = currentScreenshots[idx].caption;
  currentScreenshots.forEach((_, i) => {
    const t = document.getElementById('gallery-thumb-' + i);
    if (t) {
      t.style.borderColor = i === idx ? '#3b82f6' : 'transparent';
      t.style.opacity = i === idx ? '1' : '0.5';
    }
  });
}
function galleryPrev() { galleryGoto((currentGalleryIdx - 1 + currentScreenshots.length) % currentScreenshots.length); }
function galleryNext() { galleryGoto((currentGalleryIdx + 1) % currentScreenshots.length); }

document.addEventListener('keydown', e => {
  const overlay = document.getElementById('modal-overlay');
  if (overlay.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') galleryPrev();
  if (e.key === 'ArrowRight') galleryNext();
});

function checkHash() {
  const hash = window.location.hash.slice(1);
  if (hash && PROJECTS.find(p => p.id === hash)) openModal(hash);
}

function esc(str) {
  if (str == null) return '';
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str)));
  return d.innerHTML;
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

// ─── 모바일 메뉴 ─────────────────────────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// ─── 전체 섹션 스냅 ──────────────────────────────────────────────────────────
(function () {
  const IDS = ['hero', 'about', 'experience', 'projects'];
  let idx = 0;
  let snapping = false;

  function getEls() { return IDS.map(id => document.getElementById(id)).filter(Boolean); }

  function snapTo(i) {
    const list = getEls();
    if (i < 0 || i >= list.length) return;
    snapping = true;
    idx = i;
    list[i].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { snapping = false; }, 900);
  }

  // 스크롤 위치 기반으로 현재 섹션 인덱스 추적
  window.addEventListener('scroll', () => {
    if (snapping) return;
    const mid = window.scrollY + window.innerHeight * 0.4;
    getEls().forEach((el, i) => { if (el.offsetTop <= mid) idx = i; });
  }, { passive: true });

  function nearBottom() {
    return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 120;
  }

  // 마우스 휠
  window.addEventListener('wheel', (e) => {
    if (snapping) { e.preventDefault(); return; }
    const len = getEls().length;
    if (e.deltaY < -20 && nearBottom()) {
      e.preventDefault(); snapTo(len - 1);
    } else if (e.deltaY > 20 && idx < len - 1) {
      e.preventDefault(); snapTo(idx + 1);
    } else if (e.deltaY < -20 && idx > 0) {
      e.preventDefault(); snapTo(idx - 1);
    }
  }, { passive: false });

  // 터치 (모바일)
  let touchY = 0;
  window.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove',  e => { if (snapping) e.preventDefault(); }, { passive: false });
  window.addEventListener('touchend',   e => {
    if (snapping) return;
    const diff = touchY - e.changedTouches[0].clientY;
    const len  = getEls().length;
    if (diff > 50)       { if (idx < len - 1) snapTo(idx + 1); }
    else if (diff < -50) { if (nearBottom()) snapTo(len - 1); else if (idx > 0) snapTo(idx - 1); }
  });
})();

// ─── Scroll-reveal ───────────────────────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('section-visible'); observer.unobserve(e.target); } }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('section').forEach(s => { s.classList.add('section-hidden'); observer.observe(s); });

// ─── 테마 ────────────────────────────────────────────────────────────────────
function updateThemeIcons(isDark) {
  const sun         = document.getElementById('icon-sun');
  const moon        = document.getElementById('icon-moon');
  const mobileLabel = document.getElementById('mobile-theme-label');
  if (sun)  sun.classList.toggle('hidden', !isDark);
  if (moon) moon.classList.toggle('hidden', isDark);
  if (mobileLabel) mobileLabel.textContent = isDark ? '☀ 라이트 모드' : '🌙 다크 모드';
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  updateThemeIcons(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  updateThemeIcons(document.documentElement.classList.contains('dark'));
  renderProjects();
  checkHash();
});
