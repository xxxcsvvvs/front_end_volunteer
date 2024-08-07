import axios from "axios";

//회원정보 찾기
function getMemberInfo() {
    return axios.get(
        '/Member/get_member_info'
    );
}

//아이디 찾기
function findId(data) {
    /* 매개변수 데이터
        {
            memberName: '이름',
            email: '이메일'
        }
    */
    return axios.get(
        '/Member/find_Id',
        {params: data}
    );
}

//비밀번호 찾기
function findPw(data) {
    return axios.get(
        '/Member/find_password',
        {params: data}
    );
}


//회원 탈퇴
function deleteMember(data) {
    return axios.patch(
        '/Member/member_withdraw'

    )
}

// 회원 정보 가져오기
function getMemberName(data) {
    return axios.get(
        "/Member/get_member_info"
        )
}

// 비밀번호 변경
function changePw(data) {
    const params = new URLSearchParams();
params.append('oldPassword', data.oldPassword);
params.append('newPassword', data.newPassword);

return axios.patch('/Member/change_password', params);
}


export default {
    getMemberInfo,
    findId,
    findPw,
    deleteMember,
    getMemberName,
    changePw

}