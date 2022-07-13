var switchThemeBtn = document.querySelector(".switch_btn");

var currTheme = 'light';

function switchTheme() {
    let isLigthTheme = currTheme === 'light';
    document.body.setAttribute("class", isLigthTheme ? 'dark_theme' : 'light_theme');
    currTheme = isLigthTheme ? 'dark' : 'light';
}

switchThemeBtn.addEventListener("click",()=>{
    switchTheme();
},false);