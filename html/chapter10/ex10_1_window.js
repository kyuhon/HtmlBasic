function onLoad(){
      //객체찾기
      const btnopen = document.querySelector("#open");
      const btnclose = document.querySelector("#close");
      const idobj = document.querySelector("#userid");
      const pwdobj = document.querySelector("#pwd");

      //팝업윈도우 === window 핸들변수
      let win = null;

      //이벤트리스너등록및 핸들러처리
      btnopen.addEventListener("click",()=>{
        win = window.open("./ex10_1_1_formName.html","_blank","width=400, height=400, left=100, top=100");
        setTimeout(()=>{
            win.document.querySelector("#userid").value = idobj.value;
            win.document.querySelector("#pwd").value = pwdobj.value;
        },100);
      });
      btnclose.addEventListener("click",()=>{
        win.close();
    });


}