const btnCart = document.getElementById('cart');
const btnClose = document.querySelector('.close');
const modal = document.querySelector('.modal');

const rows = modal.querySelectorAll('.row');
const total = modal.querySelector('.modal-sum');

const modalOpen = () => {
    modal.classList.toggle('modal--close');
}


btnCart.addEventListener('click', () => {
    modalOpen();
    getFullPrice();
});
btnClose.addEventListener('click', modalOpen);

modal.addEventListener('click', (event) => {
    if (event.target == modal) modalOpen();
});

const getFullPrice = () => {
    let fullPrice = 0;
    rows.forEach(row => {
        let priceBlock = row.querySelector('.numb-price');
        fullPrice += parseInt(priceBlock.innerHTML);
    })
    total.innerHTML = fullPrice;
}

rows.forEach(row => {
    console.log(row);
    let newPrice;

    const priceBlock = row.querySelector('.numb-price');
    let price = parseInt(priceBlock.innerHTML);
    const countBlock = row.querySelector('.count');
    let count = parseInt(countBlock.innerHTML);

    const btnMinus = row.querySelector('.minus');
    const btnPlus = row.querySelector('.plus');
    
    const getNewPrice = (count, price) => {
        newPrice = count * price;
        priceBlock.innerHTML = newPrice;
        getFullPrice()
    }

    btnPlus.addEventListener('click', () => {
        count++
        countBlock.innerHTML = count;
        getNewPrice(count, price);
    })

    btnMinus.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countBlock.innerHTML = count
            getNewPrice(count, price)
        }
    })

})
    
    
 


 



 
