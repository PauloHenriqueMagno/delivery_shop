const reduceTotal = (cart) => {
    let total = 0
    cart.forEach(prod => total += prod.price*prod.amount)
    return total
}

export default reduceTotal;