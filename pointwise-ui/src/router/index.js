import { createRouter, createWebHistory } from 'vue-router';

// 라우트 경로 설정 (예: 로그인 페이지)
const routes = [
  {
    path: '/login',  // 접속 URL
    name: 'login',    // 라우트 이름 (선택 사항)
    component: () => import('@/views/LoginView.vue')  // 방금 만든 Vue 파일 연결
  }
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;  // 다른 파일에서 사용할 수 있도록 내보내기
