// ─── Projects 데이터 (하드코딩) ─────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Alipay · UnionPay PG 연동",
    description: "중국 현지 결제 수단을 레거시 PHP 플랫폼에 완전 통합. 멱등 콜백·행 잠금 기반 동시성 제어·환율 스냅샷 등 결제 안정성 설계 전 구간 단독 담당. 7개 엣지케이스 단계적 추적·해결.",
    tech_stack: ["PHP", "MySQL", "jQuery", "AronHub API", "Alipay", "UnionPay"],
    icon: "💳",
    color: "blue",
    is_featured: true,
  },
  {
    title: "패밀리컴코 B2C 플랫폼 런칭",
    description: "B2B 중심 비즈니스의 B2C 전환을 위한 신규 커머스 플랫폼을 Zero-to-One으로 단독 설계·개발·런칭. DB 설계부터 메인·마이페이지·고객센터·관리자 백오피스까지 3개월 내 완성.",
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "jQuery", "Template Engine"],
    icon: "🏪",
    color: "purple",
    is_featured: true,
  },
  {
    title: "AI 이미지 자동생성 시스템",
    description: "Python FastAPI 기반 이벤트 배너 자동생성 + 배경제거 기능 개발. 마케팅 디자인 업무 효율 80% 향상. 기존 수작업 프로세스를 AI 파이프라인으로 완전 대체.",
    tech_stack: ["Python", "FastAPI", "OpenAI API", "Docker", "Image Processing"],
    icon: "🤖",
    color: "green",
    is_featured: true,
  },
  {
    title: "랜딩 이벤트 통합 자동화",
    description: "하드코딩 기반 이벤트 페이지 제작을 배경·상품·레이아웃 설정만으로 즉시 생성되는 템플릿 엔진으로 전환. 운영팀이 개발자 없이 독립 대응 가능한 구조로 리드타임 대폭 단축.",
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "jQuery", "JavaScript"],
    icon: "🔁",
    color: "orange",
  },
  {
    title: "상품 일괄 등록 프로세스",
    description: "수동 등록을 엑셀 업로드 + 코드 검색 팝업으로 대체. '실수를 구조적으로 막는' 설계로 오입력 원천 차단 및 등록 업무 시간 획기적 단축.",
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "jQuery", "Excel Parsing"],
    icon: "⚡",
    color: "blue",
  },
  {
    title: "AI 검색 고도화 (Vector DB + LLM)",
    description: "Vector DB + Dify LLM 연동으로 의미 기반 검색 구축. 키워드 불일치로 인한 검색 실패 개선, 동의어·유의어 포함 검색 커버리지 확장. OpenAI Vision API 활용 OCR 시스템 아키텍처 설계.",
    tech_stack: ["Python", "Vector DB", "Dify LLM", "OpenAI API", "FastAPI"],
    icon: "🔍",
    color: "purple",
  },
  {
    title: "컴퓨터코리아 채널톡 AI 상담",
    description: "채널톡 AI톡 연동으로 24/7 자동 응대 체계 마련. 방대한 API 문서를 단기간 분석해 기존 서비스와 충돌 없이 구축. CS팀 독립 운영을 위한 PPT 매뉴얼 직접 작성·배포.",
    tech_stack: ["PHP", "MySQL", "jQuery", "RESTful API", "채널톡"],
    icon: "💬",
    color: "green",
  },
  {
    title: "물품공급계약서 접근 제어 시스템",
    description: "미서명 협력사 서비스 이용 100% 차단 로직 구현. 비즈니스 정책을 예외 상황 없이 시스템으로 강제. 가변 계약서 관리 구조 + 협력사 현황 대시보드 구축. MSSQL·MySQL 이종 DB 연동.",
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "Template Engine"],
    icon: "🔒",
    color: "orange",
  },
  {
    title: "컴퓨터코리아 리뉴얼",
    description: "비효율적인 배너·콘텐츠 관리 프로세스 제거. 데이터 자동 매핑 모달로 수동 오입력 원천 차단. 코드 수정 없이 신규 배너 타입을 수용하는 확장 가능한 DB 구조로 개편.",
    tech_stack: ["PHP", "CodeIgniter3", "MySQL", "MSSQL", "jQuery"],
    icon: "🔄",
    color: "blue",
  },
];

const COLOR_MAP = {
  blue:   { border: "hover:border-blue-700",   badge: "bg-blue-950 text-blue-400",   dot: "text-blue-400",   featured: "bg-blue-600" },
  purple: { border: "hover:border-purple-700", badge: "bg-purple-950 text-purple-400", dot: "text-purple-400", featured: "bg-purple-600" },
  green:  { border: "hover:border-green-700",  badge: "bg-green-950 text-green-400",  dot: "text-green-400",  featured: "bg-green-600" },
  orange: { border: "hover:border-orange-700", badge: "bg-orange-950 text-orange-400", dot: "text-orange-400", featured: "bg-orange-600" },
};

// ─── 렌더링 ──────────────────────────────────────────────────────────────────
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PROJECTS.map((p, i) => {
    const c = COLOR_MAP[p.color] || COLOR_MAP.blue;
    const techBadges = (p.tech_stack || [])
      .map(t => `<span class="skill-badge">${esc(t)}</span>`)
      .join('');
    const featuredBadge = p.is_featured
      ? `<span class="absolute top-3 right-3 px-2 py-0.5 text-xs ${c.featured} text-white rounded-full font-medium">Featured</span>`
      : '';

    return `
      <div class="project-card relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800
                  ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20
                  animate-fade-in"
           style="animation-delay:${i * 80}ms">
        <div class="relative p-8 pb-4 flex items-center justify-between">
          <span class="text-4xl">${p.icon}</span>
          ${featuredBadge}
        </div>
        <div class="px-6 pb-6">
          <h3 class="text-lg font-semibold text-white mb-2">${esc(p.title)}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">${esc(p.description)}</p>
          <div class="flex flex-wrap gap-2">${techBadges}</div>
        </div>
      </div>`;
  }).join('');
}

// XSS 방어
function esc(str) {
  if (str == null) return '';
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str)));
  return d.innerHTML;
}

// ─── Navbar 스크롤 효과 ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── 모바일 메뉴 토글 ────────────────────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ─── Scroll-reveal ───────────────────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('section').forEach(section => {
  section.classList.add('section-hidden');
  observer.observe(section);
});

// ─── 초기화 ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderProjects);
