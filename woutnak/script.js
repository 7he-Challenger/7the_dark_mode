//variable
const darkMode = document.getElementById('darkMode');
//event listener
darkMode.addEventListener('change', () =>{
    //change the theme of website
    document.body.classList.toggle('dark');
    //save to localStorage the theme mode
    if(document.body.classList.contains('dark')){
        console.log('dark')
    }else{
        console.log('light')
    }

});

