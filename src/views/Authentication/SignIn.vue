<template>
  <TextHeader class="mb-3" title="로그인" />

  <div class="container">
    <!-- <h5 class="title">로그인</h5> -->

    <div class="mb-3">
      <label class="form-label" for="id">아이디</label>
      <input class="form-control" type="text" v-model="id" placeholder="아이디를 입력해 주세요" id="id">
      <small class="rewrite-msg" ref="idMsg">올바른 아이디를 입력해 주세요</small>
    </div>

    <div class="mb-3">
      <label class="form-label" for="password">비밀번호</label>
      <input class="form-control" type="password" v-model="password" placeholder="비밀번호를 입력해 주세요" id="password">
      <small class="rewrite-msg" ref="passwordMsg">올바른 비밀번호를 입력해 주세요</small>
    </div>

    <!-- Remember ID checkbox -->
    <div class="mb-3 form-check">
      <input class="form-check-input" type="checkbox" v-model="rememberId" id="rememberId">
      <label class="form-check-label" for="rememberId">아이디 저장하기</label>
    </div>

    <div class="mt-1 mb-3 text-center"> <!-- Center align content -->
      <a href="#" class="find-links" style="margin-right: 12px;">아이디 찾기</a>  | <!-- Apply find-links class for styling -->
      <a href="#" class="find-links" style="margin-left: 12px;">비밀번호 찾기</a> <!-- Apply find-links class for styling -->
    </div>

    <!-- Submit button -->
    <div class="mb-3">
      <button class="btn btn-primary btn-block" @click="login">확인</button>
    </div>
  </div>
</template>

<script setup>
import TextHeader from "@/components/Common/TextHeader.vue";
import { ref } from "vue";

const id = ref('');
const password = ref('');

//유효성, 로그인 성공 여부 메세지 출력
const idMsg = ref(null);
const passwordMsg = ref(null);

function login() {
  //공백 체크
  if(id.value.length === 0 || password.value.length === 0) {
    if(id.value.length === 0) {
      idMsg.value.classList.add('active');
      idMsg.value.innerHTML = '아이디를 입력해주세요.';
    } else {
      idMsg.value.classList.remove('active');
    }
    if(password.value.length === 0) {
      passwordMsg.value.classList.add('active');
      passwordMsg.value.innerHTML = '비밀번호를 입력해주세요.';
    } else {
      passwordMsg.value.classList.remove('active');
    }
  } else {
    idMsg.value.classList.remove('active');
    passwordMsg.value.classList.remove('active');
    //로그인 서버 통신
    if(true) { //만약 DB에서 일치하는 정보가 없을 경우
      passwordMsg.value.classList.add('active');
      passwordMsg.value.innerHTML = '아이디 및 비밀번호가 일치하지않습니다.';
    } else {
      //로그인 후처리
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
}

.title {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-weight: bold;
}

.form-label {
  font-weight: bold;
  color: #555;
}

.form-control {
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
}

.btn-primary {
  background-color: #ff7f0e;
  border-color: #ff7f0e;
}

.btn-primary:hover {
  background-color: #ff6300;
  border-color: #ff4500;
}

.rewrite-msg {
  font-size: 12px;
  color: red;
  display: none;
}

.active {
  display: block;
}

.form-check-input {
  margin-top: 0.3em;
}

.form-check-label {
  font-size: 13px;
}

.find-links {
  font-size: 13px; /* Adjust font size for the find links */
  text-decoration: none; /* Remove underline */
  color: #007bff; /* Set link color */
}

.text-center {
  text-align: center; /* Center align text */
  margin-top: 5px; /* Add some margin */
}
</style>
