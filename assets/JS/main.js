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

        document.querySelector("#name").addEventListener("click", e=> this.clear(e));
    }
    clear(){
        document.querySelector("#confirm-msg").innerHTML = ""
    }
    add(e){
        const name=document.querySelector("#name");
        const age=document.querySelector("#age");
        const talent=document.querySelector("#talent");
        if (name.checkValidity() && age.checkValidity() && talent.checkValidity()){
            e.preventDefault(); 
            let char = new Character(name.value, age.value, talent.value);
            this.chars.push(char)
            document.querySelector("#confirm-msg").innerHTML = `A new character has been added!`
            document.querySelector("#confirm-msg").style.visibility = "visible";
        }
    }
    // Display button
    display(e){
        document.querySelector("#output").innerHTML = "";
        this.chars.forEach(char=>{
        
        for(let prop in char){
            let ul = document.querySelector("#output");
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${prop}: ${char[prop]} `));
            ul.appendChild(li);
            document.querySelector("#output").style.visibility = "visible";
        }
       })
    }   
}

(()=>{
    const main = new Main();
    }
)();