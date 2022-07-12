$(document).ready(function(){
    checkMode();
   $("#darkSwitch").change(function(){
        if( $("#darkSwitch").is(":checked")){
            changeMode("dark");
        }else{
            changeMode("white");
        }
   })

   function changeMode(type){
    if(type == "white"){
        setMode("DarkMode", "0", 1);
        var toRemove = "dark";
        var toAdd = "white";
            document.getElementsByClassName('white-logo')[0].classList.add("showLogo");
            document.getElementsByClassName('white-logo')[0].classList.remove("hideLogo");

            document.getElementsByClassName('dark-logo')[0].classList.add("hideLogo");
            document.getElementsByClassName('dark-logo')[0].classList.remove("showLogo");

            document.getElementsByClassName('container-opt')[0].style.border = "solid 1px black";
    }else{
        setMode("DarkMode", "1", 1);
        var toRemove = "white";
        var toAdd = "dark";
            document.getElementsByClassName('white-logo')[0].classList.remove("showLogo");
            document.getElementsByClassName('white-logo')[0].classList.add("hideLogo");
    
            document.getElementsByClassName('dark-logo')[0].classList.remove("hideLogo");
            document.getElementsByClassName('dark-logo')[0].classList.add("showLogo");
            document.getElementsByClassName('container-opt')[0].style.border = "solid 1px white";
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



   function setMode(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getMode(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkMode() {
    let darkMode = getMode("DarkMode");
    if (darkMode != "") {
        if(darkMode != "1"){
            changeMode("white");
            setMode("DarkMode", "0", 365);
        }else{
            $("#darkSwitch").attr('checked','checked')
            changeMode("dark");
            setMode("DarkMode", "1", 365);
        }
    } else {
        changeMode("white");
        setMode("DarkMode", "0", 365);
    }
  }
})