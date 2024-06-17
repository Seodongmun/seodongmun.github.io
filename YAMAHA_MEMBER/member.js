const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userIdSpan");
const userPwd = document.querySelector("#userPwd");
const userPwdSpan = document.querySelector("#userPwdSpan");
const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckSpan = document.querySelector("#userPwdCheckSpan");
const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userNameSpan");
const userNumber = document.querySelector(".userNumber");
const userNumberSpan = document.querySelector("#userNumberSpan");

userId.addEventListener("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
  const check = regExp.test(userId.value);
  if (check) {
    userIdSpan.style.color = "blue";
    userIdSpan.innerHTML = "확인되었습니다";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML = "4~16의 영문 소문자나 숫자";
  }
});

userPwd.addEventListener("input", function () {
  const regExp = /^[!-~]{10,20}$/;
  const check = regExp.test(userPwd.value);
  if (check) {
    userPwdSpan.style.color = "blue";
    userPwdSpan.innerHTML = "확인되었습니다";
  } else {
    userPwdSpan.style.color = "red";
    userPwdSpan.innerHTML = "10~20자 영문 및 숫자 조합";
  }
});

userPwdCheck.addEventListener("input", function () {
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckSpan.style.color = "blue";
    userPwdCheckSpan.innerHTML = "확인되었습니다";
  } else {
    userPwdCheckSpan.style.color = "red";
    userPwdCheckSpan.innerHTML = "위의 비밀번호와 다릅니다";
  }
});

userName.addEventListener("input", function () {
  const regExp = /^[가-힣]+$/;
  const check = regExp.test(userName.value);
  if (check) {
    userNameSpan.style.color = "blue";
    userNameSpan.innerHTML = "확인되었습니다";
  } else {
    userNameSpan.style.color = "red";
    userNameSpan.innerHTML = "2자리 이상 한글 이름을 입력하세요";
  }
});

userNumber.addEventListener("input", function () {
  const regExp = /^[\d]{2,4}$/;
  const check = regExp.test(userNumber.value);
  if (check) {
    userNumberSpan.style.color = "blue";
    userNumberSpan.innerHTML = "확인되었습니다";
  } else {
    userNumberSpan.style.color = "red";
    userNumberSpan.innerHTML = "전화번호를 입력해 주세요";
  }
});
