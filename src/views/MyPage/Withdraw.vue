<template>
  <TextHeader title="회원 탈퇴"/>
  <div class="container">
    <div class="content-wrapper">
      <img src="@/assets/lv2.png" class="image1">
      <h5 class="check1">회원 탈퇴를 하시기 전에 아래 내용을 꼭 확인하시기 바랍니다.</h5>
    </div>
  </div>
  <div class="box">
    <div class="container">
      <div class="content-wrapper">
        <img src="@/assets/qna_list.png" class="image2 mt-2">
        <h6 class="check2">홈페이지를 탈퇴하실 경우, 개인정보 일체가 즉시 삭제됩니다. <br>
          다만, 삭제 이력(아이디, 회원번호, 소속센터, 삭제자, 삭제일시 등)은 3개월 이내로 보존할 수 있습니다.</h6>
      </div>
    </div>
  </div>

  <div class="button-container">
    <div class="text-center mt-3 mb-4">
      <HighlightButton text="탈퇴하기" class="ms-3" @click="openWithdrawModal" />
    </div>
  </div>

  <WithdrawModal :isOpen="isWithdrawModalOpen" @close="isWithdrawModalOpen = false" @confirm="handleWithdrawConfirm" />
</template>

<script setup>
import { ref } from 'vue';
import TextHeader from '@/components/Common/TextHeader.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import WithdrawModal from '@/views/MyPage/WithdrawModal.vue';
import memberAPI from '@/apis/memberAPI';

const isWithdrawModalOpen = ref(false);

const openWithdrawModal = () => {
  isWithdrawModalOpen.value = true;
};

const handleWithdrawConfirm = async () => {
  isWithdrawModalOpen.value = false;
  // 탈퇴 후 필요한 추가 처리 (예: 로그아웃, 페이지 이동 등)
  // 예를 들어:
  // this.$router.push('/login');
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.check2{
  line-height: 28px;
}

.content-wrapper {
  display: flex;
}

.image1 {
  width: 20px; 
  height: 20px;
}

.image2 {
  width: 10px; 
  height: 5px;
}

.check1 {
  font-weight: bold;
  margin: 0;
}

.box {
  border: 1px solid gainsboro;
  margin-top: 25px;
  padding: 20px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>
