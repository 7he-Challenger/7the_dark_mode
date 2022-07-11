$(document).ready(function(){
   $("#darkSwitch").change(function(){
        if( $("#darkSwitch").is(":checked")){
            changeMode("dark");
        }else{
            changeMode("white");
        }
   })

   function changeMode(type){
    if(type == "white"){
        var toRemove = "dark";
        var toAdd = "white";
            document.getElementsByClassName('white-logo')[0].classList.add("showLogo");
            document.getElementsByClassName('white-logo')[0].classList.remove("hideLogo");

            document.getElementsByClassName('dark-logo')[0].classList.add("hideLogo");
            document.getElementsByClassName('dark-logo')[0].classList.remove("showLogo");
    }else{
        var toRemove = "white";
        var toAdd = "dark";
            document.getElementsByClassName('white-logo')[0].classList.remove("showLogo");
            document.getElementsByClassName('white-logo')[0].classList.add("hideLogo");
    
            document.getElementsByClassName('dark-logo')[0].classList.remove("hideLogo");
            document.getElementsByClassName('dark-logo')[0].classList.add("showLogo");
    }
    AllDarkEffect = document.getElementsByClassName('darkEffect');
    if(AllDarkEffect.length !=0){
        for (let i = 0; i < AllDarkEffect.length; i++) {
            AllDarkEffect[i].classList.remove(toRemove);
            AllDarkEffect[i].classList.add(toAdd);

            document.body.classList.remove("body-"+toRemove);
            document.body.classList.add("body-"+toAdd);
        }
    }
   }
})