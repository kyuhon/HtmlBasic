function unLoad(){
    const id_pattern = /^[\w]{3,}$/;    // [\w]는 영문자,숫자,_만 입력 가능 {3,} 3글자이상가능
    const pwdPattern = /^[\w]{6,10}$/; //영문자와 6숫자 6_10
    
    const ID = document.querySelector("#id");
    const PW1 = document.querySelector("#pw1");
    const PW2 = document.querySelector("#pw2");

    inputID.addEventListener("blur",()=>validate(ID, id_pattern,"영문자, 숫자, _만 입력 가능"));
    inputPW1.addEventListener("blur",()=>validate(PW1, pwdPattern,"영문자와 6숫자 6_10"));
    inputPW2.addEventListener("blur",()=>validate(PW2, pwdPattern,"영문자와 6숫자 6_10"));
}