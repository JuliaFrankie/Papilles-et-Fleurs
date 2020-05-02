//Home Featured Products
Array.from(document.querySelectorAll(".navigation-button")).forEach((item)=>{
    item.onclick=()=>{
item.parentElement.parentElement.classList.toggle("change");
    }
})
//end of Home//
//Gallery images
document.querySelector(".gallery").magnificPopUp("image", (a) => {enabled:true});

