class TheDarkMode {

    constructor(target, option){
        this.darkKey = 'dark7';
        this.lightKey = 'light7';

        this.target = {
            element: target,
            dom: null,
            type: null
        };

        this.option = { ...option }
        this.key = 'darkmode'
        this.stateDark = this.lightKey

        this.defaultOption = {
            duration: 1,
        }

        this.init()
    }

    init(){
        // affect this to obj to avoid conflict inside DOM
        let obj = this

        // set all option on document loaded
        document.addEventListener('DOMContentLoaded', async function(event) {
            if(obj.target.element){
                obj.body = this.body;

                await obj.setBtnSetting();
                obj.setOption();
                await obj.setLocalStorage();
            }else{
                throw 'target must be set on init TheDarkMode';
            }

        })
    }

    // set event listener to block selected
    setBtnSetting(){
        let obj = this;
        obj.target.dom = document.querySelector(obj.target.element)

        if(obj.target.dom){
            obj.target.type = obj.target.dom.getAttribute('type');

            obj.target.dom.addEventListener('click', function(e){
                e.stopPropagation();
    
                // call switcher function depending on state
                console.log(obj.stateDark, 'test')
                obj.stateDark == obj.lightKey ? obj.toDark() : obj.toLight()
            })
        }else{
            throw obj.target + ' not found';
        }
    }

    // set option
    setOption(){
        this.body.style.transitionDuration = `${this.option.duration ?? this.defaultOption.duration}s`
    }

    // setLocalStorage
    async setLocalStorage(){
        let state = await localStorage.getItem(this.key); // get state from storage
        this.stateDark = state ? state : this.lightKey; // set state of dark mode
        this.stateDark == this.lightKey ? this.toLight() : this.toDark(); // toggle mode depending state
    }

    // toggle to dark or light mode
    async toggle(){
        this.body.classList.contains(this.darkKey) ? this.toLight() : this.toDark();
    }

    // switch to dark mode
    async toDark(){
        await localStorage.setItem(this.key, this.darkKey);
        this.stateDark = this.darkKey;
        if(this.body.classList.contains(this.lightKey)) this.body.classList.remove(this.lightKey)
        this.body.classList.add(this.darkKey);
        this.target.dom.checked = true;
        
    }

    // switch to light mode
    async toLight(){
        await localStorage.setItem(this.key, this.lightKey);
        this.stateDark = this.lightKey;
        if(this.body.classList.contains(this.darkKey)) this.body.classList.remove(this.darkKey)
        this.body.classList.add(this.lightKey);
        this.target.dom.checked = false;
    }
}

// export default TheDarkMode