# eujineee.github.io

이유진의 개발자 포트폴리오 사이트입니다.
**[https://eujineee.github.io](https://eujineee.github.io)**

---

## 📁 파일 구조

```
eujineee.github.io/
├── index.html              # 메인 페이지 (Hero / About / Skills / Experience / Projects)
├── css/
│   └── style.css           # 커스텀 스타일 (스크롤바, 배지, 모달, 애니메이션)
├── js/
│   └── main.js             # 프로젝트 데이터 + 카드 렌더링 + 모달 + 갤러리
└── images/
    ├── thumb/              # 카드 썸네일 (권장: 800×500px)
    │   ├── alipay.png
    │   ├── familycomko.png
    │   ├── ai-image.png
    │   ├── landing-event.png
    │   ├── bulk-register.png
    │   ├── ai-search.png
    │   ├── channel-talk.png
    │   ├── contract.png
    │   └── ck-renewal.png
    └── screenshots/        # 모달 갤러리 이미지 (권장: 1200×800px)
        ├── alipay/
        │   ├── alipay-01.png
        │   ├── alipay-02.png
        │   ├── alipay-03.png
        │   └── alipay-04.png
        ├── familycomko/
        │   ├── familycomko-01.png
        │   ├── familycomko-02.png
        │   ├── familycomko-03.png
        │   └── familycomko-04.png
        ├── ai-image/
        │   ├── ai-image-01.png
        │   └── ai-image-02.png
        ├── landing-event/
        │   ├── landing-event-01.png
        │   ├── landing-event-02.png
        │   └── landing-event-03.png
        ├── bulk-register/
        │   ├── bulk-register-01.png
        │   ├── bulk-register-02.png
        │   └── bulk-register-03.png
        ├── ai-search/
        │   └── ai-search-01.png
        ├── channel-talk/
        │   ├── channel-talk-01.png
        │   ├── channel-talk-02.png
        │   └── channel-talk-03.png
        ├── contract/
        │   ├── contract-01.png
        │   ├── contract-02.png
        │   └── contract-03.png
        └── ck-renewal/
            ├── ck-renewal-01.png
            ├── ck-renewal-02.png
            └── ck-renewal-03.png
```

---

## 🖼️ 이미지 추가 방법

### 썸네일

`images/thumb/` 폴더에 프로젝트 ID와 동일한 파일명으로 넣으면 카드에 자동으로 표시됩니다.

```
images/thumb/alipay.png  →  Alipay 카드 썸네일
```

이미지가 없으면 프로젝트 아이콘 + 어두운 배경으로 자동 대체됩니다.

### 스크린샷 (모달 갤러리)

`images/screenshots/{프로젝트 ID}/` 폴더에 넣고, `js/main.js`의 해당 프로젝트 `screenshots` 배열에 추가하면 됩니다.

```js
screenshots: [
  { src: "images/screenshots/alipay/alipay-05.png", caption: "추가 화면 설명" },
],
```

- 이미지 개수 제한 없음 — 배열에 추가한 만큼 갤러리에 표시됨
- 이미지 없는 프로젝트는 갤러리 섹션 자체가 숨겨짐

---

## ✏️ 프로젝트 내용 수정 방법

`js/main.js` 상단의 `PROJECTS` 배열에서 각 프로젝트 항목을 수정합니다.

```js
{
  id: "alipay",               // URL 해시 식별자 (#alipay)
  title: "프로젝트 제목",
  period: "2025",
  role: "단독 수행",
  color: "blue",              // blue / purple / green / orange
  icon: "💳",
  is_featured: true,          // Featured 뱃지 표시 여부
  tech_stack: ["PHP", "MySQL"],
  thumbnail: "images/thumb/alipay.png",
  screenshots: [
    { src: "images/screenshots/alipay/alipay-01.png", caption: "화면 설명" },
  ],
  summary: "카드에 표시되는 한 줄 요약",
  highlights: [
    "모달에 표시되는 핵심 구현 항목",
  ],
  description: "모달에 표시되는 프로젝트 상세 설명",
},
```

---

## 🔗 모달 URL 공유

프로젝트 카드를 클릭하면 URL이 `https://eujineee.github.io/#alipay` 형태로 변경됩니다.
해당 URL로 직접 접근하면 모달이 자동으로 열립니다.

---

## ⌨️ 키보드 단축키

| 키 | 동작 |
|---|---|
| `ESC` | 모달 닫기 |
| `←` | 갤러리 이전 이미지 |
| `→` | 갤러리 다음 이미지 |

---

## 🚀 GitHub Pages 배포

```bash
git add .
git commit -m "update: 프로젝트 내용 업데이트"
git push
```

push 후 1~2분 내에 [https://eujineee.github.io](https://eujineee.github.io) 에 반영됩니다.
