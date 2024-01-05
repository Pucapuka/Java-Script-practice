class Carrinho{
    constructor(itens, qtd, total){
        this.itens = itens;
        this.qtd = qtd;
        this.total = total;
    }

    addItem(item){
      let contador = 0;

        for(let itemC in this.itens){
            if(this.itens[itemC].id == item.id){
                this.itens[itemC].qtd += item.qtd;
                contador = 1;
            }
        }
        this.qtd += item.qtd;
        this.total += item.valor*item.qtd;
        this.itens.push(item);
    }

    removerItem(item){

        for(let itemC in this.itens){
            if(this.itens[itemC].id == item.id){
               
                let obj = this.itens[itemC];
                let index = this.itens.findIndex(function(obj){return obj.id == item.id});
            
                this.qtd -= this.itens[itemC].qtd;
                this.total -= this.itens[itemC].valor * this.itens[itemC].qtd;

                this.itens.splice(index,1);
            }

        }


    }

}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "camião",
        qtd: 1,
        valor: 20
    },
    {
        id: 2,
        nome: "pião",
        qtd: 3,
        valor: 3
    }
], 4, 9);

console.log(carrinho);
carrinho.addItem({id:3, nome:"boneca", qtd:3, valor:5});
console.log(carrinho);
carrinho.removerItem({id:1, nome:"camião", qtd:1, valor:20});
console.log(carrinho);
