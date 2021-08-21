const memoryOne = document.getElementById('first-memory');
const memoryTwo = document.getElementById('second-memory');
const storageOne = document.getElementById('first-storage');
const storageTwo = document.getElementById('second-storage');
const storageThree = document.getElementById('third-storage');
const deliveryOne = document.getElementById('first-delivery');
const deliveryTwo = document.getElementById('second-delivery');
const totalPrice = document.getElementById('total-price');
const basePrice = document.getElementById('base-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const promoCode = document.getElementById('promo-code');
const apply = document.getElementById('apply');



// memoryOne
memoryOne.addEventListener('click', function () {
    memoryOne.value = '0';
    const memoryOneNumber = Number(memoryOne.value);
    extraMemoryCost.innerText = memoryOneNumber;
    updateValues();

})
// memoryTwo 
memoryTwo.addEventListener('click', function () {
    memoryTwo.value = '180';
    const memoryTwoNumber = Number(memoryTwo.value);
    extraMemoryCost.innerText = memoryTwoNumber;
    updateValues();
})

// storageOne
storageOne.addEventListener('click', function () {
    storageOne.value = '0';
    const storageOneNumber = Number(storageOne.value);
    extraStorageCost.innerText = storageOneNumber;
    updateValues()
})

// storageTwo
storageTwo.addEventListener('click', function () {
    storageTwo.value = '100';
    const storageTwoNumber = Number(storageTwo.value);
    extraStorageCost.innerText = storageTwoNumber;
    updateValues()
})

// storageThree
storageThree.addEventListener('click', function () {
    storageThree.value = '180';
    const storageThreeNumber = Number(storageThree.value);
    extraStorageCost.innerText = storageThreeNumber;
    updateValues()
})


// Delivery option 1 
deliveryOne.addEventListener('click', function () {
    deliveryOne.value = '0';
    const deliveryOneNumber = Number(deliveryOne.value);
    deliveryCharge.innerText = deliveryOneNumber;
    updateValues()
})

// second delivery (fast delivery)
deliveryTwo.addEventListener('click', function () {
    deliveryTwo.value = '20';
    const deliveryTwoNumber = Number(deliveryTwo.value);
    deliveryCharge.innerText = deliveryTwoNumber;
    updateValues()
})
// updatig total cost 
function updateValues() {

    const basePricing = parseInt(basePrice.innerText);
    const memoryCostingTotal = parseInt(extraMemoryCost.innerText);
    const storageCostingTotal = parseInt(extraStorageCost.innerText)
    const deliveryChargeTotal = parseInt(deliveryCharge.innerText);
    totalPrice.innerText = basePricing + memoryCostingTotal + storageCostingTotal + deliveryChargeTotal;
}

// promoCode.addEventListener('click', function(){
//     console.log('promo code')
// })
