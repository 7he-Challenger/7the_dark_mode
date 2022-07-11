var corps=document.querySelector('body');
var label=document.querySelector('#label');
corps.style.backgroundColor="#EBEDEF";
label.style.color="#17202A"
function myFunction() {
    var etat=document.getElementById("customSwitch4").checked;
    
    if (etat==true)
          corps.style.backgroundColor="#EBEDEF";
        
    else      
          corps.style.backgroundColor="#17202A";
          label.style.backgroundColor="#EBEDEF" 


}
        