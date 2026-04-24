// ─── API 설정 ────────────────────────────────────────────────────────────────
// 로컬 개발: http://localhost:8000/api/projects
// 운영 배포: Oracle 서버 주소로 교체
const API_URL = 'http://localhost:8000/api/projects';

// ─── Projects Fetch ──────────────────────────────────────────────────────────
async function fetchProjects() {
  const container = document.getElementById('projects-container');
  const loading   = document.getElementById('projects-loading');
  const errorBox  = document.getElementById('projects-error');
  const errorMsg  = document.getElementById('projects-error-msg');

  // 상태 초기화
  container.innerHTML = '';
  errorBox.classList.add('hidden');
  loading.classList.remove('hidden');

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    const projects = json.data ?? [];

    loading.classList.add('hidden');
    renderProjects(projects, container);
  } catch (err) {
    loading.classList.add('hidden');
    errorMsg.textContent = err.message || '알 수 없는 오류가 발생했습니다.';
    errorBox.classList.remove('hidden');
    console.error('[Projects] fetch 실패:', err);
  }
}

// ─── 렌더링 ──────────────────────────────────────────────────────────────────
function renderProjects(projects, container) {
  if (!projects.length) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16">
        <p class="text-4xl mb-4">📂</p>
        <p class="text-gray-500">등록된 프로젝트가 없습니다.</p>
      </div>`;
    return;
  }

  container.innerHTML = projects.map(project => projectCard(project)).join('');

  // 카드에 페이드인 애니메이션 적용
  container.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 80}ms`;
    card.classList.add('animate-fade-in');
  });
}

function projectCard(project) {
  const thumb = project.thumbnail
    ? `<img src="${esc(project.thumbnail)}" alt="${esc(project.title)}"
            class="w-full h-48 object-cover"
            onerror="this.replaceWith(thumbPlaceholder())">`
    : `<div class="project-thumb-placeholder">🚀</div>`;

  const techBadges = (project.tech_stack ?? [])
    .map(t => `<span class="skill-badge">${esc(t)}</span>`)
    .join('');

  const links = [
    project.github_url
      ? `<a href="${esc(project.github_url)}" target="_blank" rel="noopener noreferrer"
            class="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
           <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
           </svg>
           GitHub
         </a>`
      : '',
    project.demo_url
      ? `<a href="${esc(project.demo_url)}" target="_blank" rel="noopener noreferrer"
            class="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
           </svg>
           Demo
         </a>`
      : '',
  ].filter(Boolean).join('');

  const featuredBadge = project.is_featured
    ? `<span class="absolute top-3 right-3 px-2 py-0.5 text-xs bg-blue-600 text-white rounded-full font-medium">Featured</span>`
    : '';

  return `
    <div class="project-card relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800
                hover:border-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20">
      <div class="relative overflow-hidden">
        ${thumb}
        ${featuredBadge}
      </div>
      <div class="p-6">
        <h3 class="text-lg font-semibold text-white mb-2">${esc(project.title)}</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">${esc(project.description)}</p>
        <div class="flex flex-wrap gap-2 mb-4">${techBadges}</div>
        <div class="flex items-center gap-4">${links}</div>
      </div>
    </div>`;
}

function thumbPlaceholder() {
  const div = document.createElement('div');
  div.className = 'project-thumb-placeholder';
  div.textContent = '🚀';
  return div;
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
const mobileMenuBtn  = document.getElementById('mobile-menu-btn');
const mobileMenu     = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 닫기
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ─── Scroll-reveal 애니메이션 ────────────────────────────────────────────────
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
document.addEventListener('DOMContentLoaded', fetchProjects);
