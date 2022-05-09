const button = document.querySelector(".top_menu_contact_me_button");
button.onclick = () =>{
    window.location.href = "mailto:shailygoel31@gmail.com";
}
const button2 = document.querySelector(".mobile_menu_contact_me_button");
button2.onclick = () =>{
    window.location.href = "mailto:shailygoel31@gmail.com";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector(".hamburger").onclick = ()=>{
    const mobile_items = document.querySelector(".mobile-items");
    if(mobile_items.classList.contains("active")){
        mobile_items.classList.remove("active");
        mobile_items.style.left = "-100%";
    }else{
        mobile_items.classList.add("active");
        mobile_items.style.left = "0";
    }
}