$('#login-btn').on('click',()=>{
    $('#login-form-bg').toggleClass('hidden');
})

$('#login-form-btn').on('submit',(event)=>{
    event.preventDefault();
    let inputId = $('#inputId').val();
    let inputPw = $('#inputPassword').val();
    let inputName = $('#inputName').val();
    let inputAge = $('#inputAge').val();

    if(inputId === "" || inputPw === "" || inputName === "" || inputId === ""){
        alert("빈칸이 존재합니다!");
    }else{
        $('#login-form-bg').toggleClass('hidden');
    }
})

$('#login-form-close-btn-btn').on('click',()=>{
    $('#login-form-bg').toggleClass('hidden');
})