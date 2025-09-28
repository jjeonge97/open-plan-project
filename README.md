# open-plan-project

- 지원자 이름으로 사진 정보를 조회해 보여주는 모노레포 웹 프로젝트입니다.
  메인(/)에서 조회 버튼을 누르면, 결과 페이지(/result)에서 이미지와 메타 정보를 카드 형태로 보여줍니다.
  공용 UI 컴포넌트는 @open-plan/ui 패키지로 분리했고, Storybook으로 상태별 문서를 제공합니다.

## 🔗 링크

- GitHub: https://github.com/jjeonge97/open-plan-project
- 배포(Vercel): https://open-plan-project-web-blush.vercel.app

## ✨주요기능

- Turborepo + pnpm 기반 모노레포
- packages/ui 공용 UI 패키지 + Storybook 문서
- apps/web 실서비스 앱
- Axios + TanStack Query로 API 호출
- Zustand(persist) 로 새로고침 후에도 데이터 유지
- 디바운스/스로틀 + 로딩 애니메이션(Lottie/CSS) 버튼
- 라우트: 조회 전 "/", 조회 후 "/result"

## 🧱 프로젝트 구조

```
open-plan/
├─ apps/
│  ├─ web/
│  │  └─ src/
│  │     ├─ apis/
│  │     ├─ queries/
│  │     ├─ stores/
│  │     ├─ components/
│  │     ├─ hooks/
│  │     └─ pages/
│  └─ storybook/
│     └─ stories/
├─ packages/
│  └─ ui/
│     ├─ src/
│     │  ├─ Button.tsx
│     │  ├─ button.css
│     │  └─ index.ts
│     └─ dist/
├─ turbo.json
├─ pnpm-workspace.yaml
└─ eslint.config.mjs / .prettierrc
```

## 🧰 기술 스택

- TypeScript, Vite, Turborepo, pnpm, React, styled-components, Zustand, react-query, Storybook

## 🚀 실행 방법

### 1) 설치

```
pnpm install
```

### 2) 실행

```
# UI 패키지: 소스 변경 시 자동 빌드(watch)
pnpm --filter @open-plan/ui dev
# 웹앱: Vite 개발서버
pnpm --filter ./apps/web dev
# 스토리북
pnpm --filter ./apps/storybook dev
```

- UI 컴포넌트 변경 시 빌드가 필요합니다.

### 3) 빌드

```
# UI 패키지: 소스 변경 시 자동 빌드(watch)
pnpm --filter @open-plan/ui dev
# 웹앱: Vite 개발서버
pnpm --filter ./apps/web dev
# 스토리북
pnpm --filter ./apps/storybook dev
```

## 🧹 Lint & Format

```
pnpm lint
pnpm run lint:fix
pnpm format
pnpm format:check
```
