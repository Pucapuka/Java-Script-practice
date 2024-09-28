function Heroi(nome, xp) {
    this.nome = nome;
    this.xp = xp;
    this.level = "";

    this.setLevel = function() {
        if (this.xp <= 1000) {
            this.level = "Ferro";
        } else if (this.xp >= 1001 && this.xp <= 2000) {
            this.level = "Bronze";
        } else if (this.xp >= 2001 && this.xp <= 5000) {
            this.level = "Prata";
        } else if (this.xp >= 5001 && this.xp <= 7000) {
            this.level = "Ouro";
        } else if (this.xp >= 7001 && this.xp <= 8000) {
            this.level = "Platina";
        } else if (this.xp >= 8001 && this.xp <= 9000) {
            this.level = "Ascendente";
        } else if (this.xp >= 9001 && this.xp <= 10000) {
            this.level = "Imortal";
        } else if (this.xp >= 10001) {
            this.level = "Radiante";
        } else {
            this.level = "Não existe um nível compatível para um herói de verdade";
        }
        return this.level;
    };
    this.setLevel();

    

}

let neo = new Heroi("Neo", 7000);

console.log(`O Herói de nome ${neo.nome} está no nível ${neo.level}`);
