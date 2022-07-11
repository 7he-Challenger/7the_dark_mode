var switchThemeBtn = document.querySelector(".switch_btn");

var currTheme = 'light';

function switchTheme() {
    if(currTheme === 'light')
    {
        document.body.setAttribute("class","dark_theme");
        currTheme = 'dark';
    }
    else
    {
        document.body.setAttribute("class","light_theme");
        currTheme = 'light';
    }
}

switchThemeBtn.addEventListener("click",()=>{
    switchTheme();
},false);