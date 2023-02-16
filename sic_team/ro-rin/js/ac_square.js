const takamiAvatar = document.querySelector(".takami_avatar")
console.log(takamiAvatar);

const closeBtn = document.querySelector(".btn_green")
console.log(closeBtn);

const avatarDetail = document.querySelector(".avtar_detail_screen")


takamiAvatar.addEventListener("click",()=>{
    avatarDetail.classList.remove("delete")
})

closeBtn.addEventListener("click",()=>{
    avatarDetail.classList.add("delete")
})