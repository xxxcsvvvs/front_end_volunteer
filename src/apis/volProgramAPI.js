import axios from "axios";

// 메인에 최신 봉사 프로그램 가져오기
function getRecentVolProgramToMain() {
    return axios.get(
        '/recent-volprograms'
    )
}

//봉사프로그램 목록가져오기
function getVolProgramList(searchIndex) {
    return axios.get(
        '/VolProgram/get_vol_program_list',
        {params: searchIndex}
    )
}
//봉사프로그램 상세정보 가져오기
function getVolProgramDetail(programNo) {
    return axios.get(
        `/VolProgram/get_vol_program_detail?programNo=${programNo}`
    );
}
//관심 봉사 목록 가져오기
function getInterestVolList(pageNo) {
    return axios.get(
        `/VolProgram/get_interest_program_list?pageNo=${pageNo}`,
    )
}
//관심 봉사 추가하기
function addInterestVolProgram(programNo) {
    return axios.post(
        `/VolProgram/add_interest_program?programNo=${programNo}`
    )
}
//관심 봉사 제거하기
function cancelInterestVolProgram(noList) {
    return axios.put(
        '/VolProgram/remove_interest_program',
        noList
    )
}
export default {
    getInterestVolList,
    cancelInterestVolProgram,
    getVolProgramList,
    getVolProgramDetail,
    addInterestVolProgram,
    getRecentVolProgramToMain
}