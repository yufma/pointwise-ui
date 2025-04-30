<template>
  <!-- HTML 템플릿 (화면 구조) -->
  <div class="login-page">
    <h1>로그인 페이지</h1>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
// JavaScript 로직
export default {
  methods: {
    login() {
      alert("로그인 버튼 클릭!");
    }
  }
}
</script>

<style scoped>
/* CSS 스타일 (scoped: 이 파일만 적용) */
.login-page {
  background-color: #f5f5f5;
  padding: 20px;
}
</style>
