const header_text = document.querySelector(".header-text");

const changeColor = (e) =>{
    e.target.style.color = '#540a99'
    alert("client js file(s) are being served!");
}

header_text.addEventListener("click",changeColor);