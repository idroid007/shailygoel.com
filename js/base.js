const button = document.querySelector(".top_menu_contact_me_button");
button.onclick = () =>{
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