<template>
  <div>
    <SearchEduPrgm/>
    <EduPrgmList>
      <template v-slot:right-side>
        <HighlightButton text="수정하기" class="mb-3" @click="showUpdateModal"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
        <NormalButton text="신청조회" @click="showApplicantModal"
          style="padding-top: 2px; padding-bottom: 2px; padding-left: 15px; padding-right: 15px;" />
      </template>
    </EduPrgmList>
    <EduPrgmFormTemplateSlot id="updateEduProgramModal" @buttonUpdate="updateEduProgram" @buttonDelete="deleteEduProgram"/>
    <Applicant id="applicant"/>
  </div>
</template>

<script setup>
import SearchEduPrgm from '@/components/SearchEduPrgm.vue';
import EduPrgmFormTemplateSlot from './EduPrgmFormTemplateSlot.vue'
import EduPrgmList from '@/components/EduPrgmList.vue';
import Applicant from '@/components/Applicant.vue';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';
import { onMounted, ref, provide } from "vue";
import { Modal } from "bootstrap";

let updateEduProgramModal = null;
let applicant = null;
let battachInput = null;
let imageInput = null;

onMounted(() => {
  updateEduProgramModal = new Modal(document.querySelector("#updateEduProgramModal"));
  applicant = new Modal(document.querySelector("#applicant"));
  battachInput = document.querySelector('#battachInput');
  imageInput = document.querySelector('#imageInput');
});

//하위컴포넌트(모달 등)에 데이터 전달
const providedData = ref({
  title: '',
  eduDate: [],
  eduTime: [],
  recruitCenter: '',
  recruitDate: [],
  recruitCnt: 0,
  city: 0,
  county: 0,
  eduPlace: '',
  mngName: '',
  mngTel: '',
  content: ''
});
provide('providedData', providedData);

function showUpdateModal() {
  battachInput.value = '';
  imageInput.value = '';
  updateEduProgramModal.show();
}
function showApplicantModal(){
  applicant.show();
}
function deleteEduProgram() {
  //프로그램 삭제 로직 작성
  updateEduProgramModal.hide();
}
function updateEduProgram() {
  const blankResult = isDataBlank(providedData.value);
  if(blankResult.isDataOk) {
    const validateResult = isDataValidate(providedData.value);
    if(validateResult.isDataOk) {
      //서버 전송하기 위한 데이터 세팅 작업해줘야함
      //데이터 세팅 작업이 끝난 후 API요청해야함
      alert('수정완료되었습니다!');
      updateEduProgramModal.hide();
    } else {
      const validateMsg = validateResult.validateMsgList.join('\n');
      alert(`잘못 입력된 정보가 있습니다.\n${validateMsg}`);
    }
  } else {
    const blankMsg = blankResult.noDataList.join(', ');
    alert(`누락된 내용이 있습니다.\n[ 누락된 항목 : ${blankMsg}]`);
  }
}
//공백 확인
function isDataBlank(data) {
  let isDataOk = true;
  let noDataList = [];
  if (data.title === '') {
    noDataList.push('제목');
    isDataOk = false;
  }
  if (data.eduDate.length !== 2) {
    noDataList.push('교육기간');
    isDataOk = false;
  }
  if (data.eduTime.length !== 2) {
    noDataList.push('교육시간');
    isDataOk = false;
  }
  if (data.recruitCenter === '') {
    noDataList.push('모집기관');
    isDataOk = false;
  }
  if (data.recruitDate.length !== 2) {
    noDataList.push('모집기간');
    isDataOk = false;
  }
  if (data.recruitCnt === '') {
    noDataList.push('모집인원');
    isDataOk = false;
  }
  if (data.county === 0) {
    noDataList.push('교육센터');
    isDataOk = false;
  }
  if (data.eduPlace === '') {
    noDataList.push('교육장소');
    isDataOk = false;
  }
  if (data.mngName === '') {
    noDataList.push('관리자 이름');
    isDataOk = false;
  }
  if (data.mngTel === '') {
    noDataList.push('부서 연락처');
    isDataOk = false;
  }
  if (data.content === '') {
    noDataList.push('내용');
    isDataOk = false;
  }
  return { isDataOk, noDataList };
}
//데이터가 논리적으로 맞는지 여부 확인
function isDataValidate(data) {
  let isDataOk = true;
  let validateMsgList = [];
  //봉사기간과 모집기간이 논리적으로 맞는지 (봉사기간이 모집기간보다 뒤에 있어야한다.)
  if(data.eduDate[0] < data.recruitDate[1]) {
    validateMsgList.push('교육 시작일이 모집 마감일보다 앞서있거나 두 기간이 겹쳐있습니다.');
    isDataOk = false;
  }
  if(data.eduTime[0].hours > data.eduTime[1].hours) {
    validateMsgList.push('교육 시작시간은 교육 종료시간 전으로 기입해야합니다.');
    isDataOk = false;
  }
  if(data.recruitCnt < 1) {
    validateMsgList.push('모집인원은 1명 이상으로 기입해야합니다.');
    isDataOk = false;
  }
  return { validateMsgList, isDataOk };
}
</script>

<style scoped>

</style>