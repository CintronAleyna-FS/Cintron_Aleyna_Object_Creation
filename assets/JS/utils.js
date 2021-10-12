class Utility{
    static GenHeight(num){
         let inchHeight = Math.floor(Math.random() * 10 + (num * 2))
         const inches = inchHeight % 12;
         const feet = (inchHeight - inches) / 12;
         return `${feet}'${inches}"`
    }
}