// At least 3 input fields strings and numbers

class Character{
    constructor(name, age, talent){
        this.name = name;
        this.age = age;
        this.talent = talent;
        this.height = Utility.GenHeight(this.age);
    }
    showOff(){
        return `${this.name} shows off their skill in ${this.talent}`
    }
}





// Majority of logic
class Main {
    
    constructor(){
        this.chars = [];
        document.querySelector("#addBtn").addEventListener("click", e=> this.add(e));

        document.querySelector("#displayBtn").addEventListener("click", e=> this.display(e));
    }
    
    // Form validation
    add(e){
        const name=document.querySelector("#name");
        const age=document.querySelector("#age");
        const talent=document.querySelector("#talent");
        if (name.checkValidity() && age.checkValidity() && talent.checkValidity()){
            e.preventDefault(); 
            let char = new Character(name.value, age.value, talent.value);
            this.chars.push(char)
        }
    }
    // Display button
    display(e){

    }   
}

(()=>{
    const main = new Main();
    }
)();