export class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantify) {
        if (quantify > 0) {
            this.inStock += quantify
            alert("✅ Quantidade adicionada ao estoque.")
            console.log(`Estoque de "${this.name}": ${this.inStock}`)
        } else {
            alert("❌ Informe um valor maior que zero.")
        }
    }

    calculateDiscount(discount) {
        if (discount > 0  && discount <= 100) {
            const newPrice = this.price - (this.price * (discount / 100))
            alert(`💲 O preço do produto "${this.name}! com desconto de ${discount}% seria: R$: ${newPrice}`)
            console.log(`Valor de "${this.name}" com ${discount}% de desconto: ${newPrice}`)
        } else {
            alert(`❌ Informe um valor de desconto entre 1% a 100%`)
        }
    }
}