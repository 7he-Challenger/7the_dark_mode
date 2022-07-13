const get = (elt)  => document.getElementById(elt)

console.log(get("dark").value)

function getValue(val){
    if(val == "dark"){
        get('body').style.background = "black"
        get('body').style.color = "white"
    }
    else 
        get('body').style.background = "white"
    

    console.log(val)
}