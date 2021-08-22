// first function bonus part for 0 count
function updateProduct(product, isIncreasing) {
    const productCost = document.getElementById(product + '-cost');

    const productInnerText = productCost.innerText;

    if (increase == true) {
        productCost.innerText = '0'
    }
    calculateTotal();
}

document.getElementById('memory-base').addEventListener('click', function () {

    updateProduct('memory', true);
})
document.getElementById('storage-base').addEventListener('click', function () {

    updateProduct('storage', true);
})
document.getElementById('delivery-base').addEventListener('click', function () {

    updateProduct('delivery', true);
})


// function for innertext
function balance(product) {
    const productCost = document.getElementById(product + '-cost');

    const productInnerText = productCost.innerText;

    return productInnerText;
}

// function for total calculation

function calculateTotal() {

    const bestPrice = document.getElementById('best-price');

    const best = bestPrice.innerText;

    const memoryDiffer = balance('memory');

    const storageDiffer = balance('storage');

    const deliveryChargeDiffer = balance('delivery');

    const subTotal = parseInt(memoryDiffer) + parseInt(storageDiffer) + parseInt(deliveryChargeDiffer) + parseInt(best);

    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = subTotal;

    const totalFirst = document.getElementById('total-first');

    totalFirst.innerText = subTotal;

    document.getElementById('button-area').addEventListener('click', function () {


        const total = document.getElementById('total-first');

        const totalAmount = parseInt(total.innerText) * 0.2;

        const inputArea = document.getElementById('input-area');

        const inputValue = inputArea.value;

        if (inputValue == 'stevekaku') {
            const afterDiscount = parseInt(total.innerText) - totalAmount;

            total.innerText = afterDiscount;

        }

        inputArea.value = '';
    })
}

// second function second bonus part for 180 count

function extraStorage(product, storage) {

    const productCost = document.getElementById(product + '-cost');

    const extra = productCost.innerText;

    if (storage == true) {
        productCost.innerText = '180'
    }
    calculateTotal();
}


document.getElementById('memory-extend').addEventListener('click', function () {

    extraStorage('memory', true);
})
document.getElementById('storage1-extend').addEventListener('click', function () {

    extraStorage('storage', true);
})



// function  third for bonus marking

function ssdCard(product, increasing) {

    const storageCost = document.getElementById(product + '-cost');

    if (increasing == true) {
        storageCost.innerText = '100';
    }
    else {
        storageCost.innerText = '20';
    }
    calculateTotal();
}

document.getElementById('storage2-extend').addEventListener('click', function () {

    ssdCard('storage', true);
})

// for 20 count
document.getElementById('charge-base').addEventListener('click', function () {


    ssdCard('delivery', false);
});