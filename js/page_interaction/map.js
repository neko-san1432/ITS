document.getElementById('profile_banner').addEventListener('click',()=>{
    document.getElementById("user_profile").style.display="flex";
})
document.getElementById('close_userprof').addEventListener('click',()=>{
    document.getElementById("user_profile").style.display="none";
})
document.getElementById('logout_client').addEventListener('click',()=>{
    document.getElementById("login").style.display="flex";
})
