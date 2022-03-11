class GenSym{
    constructor(){
        this.num = 0;
    }

    gensymf(character){
        const ch = character.charAt(0);
        return (ch + this.num++).toString();
    }
}