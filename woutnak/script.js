//variable
const darkMode = document.getElementById('darkMode');
//event listener
darkMode.addEventListener('change', () =>{
    //change the theme of website
    document.body.classList.toggle('dark');
    //save to localStorage the theme mode
    if(document.body.classList.contains('dark')){
       localStorage.setItem('darkMode',darkMode)
           console.log('dark')
        do{
    console.log('it\'s dark')
    //document.body.classList.add('dark');
         }
         while(localStorage.getItem('darkMode') === true)

    }

});

