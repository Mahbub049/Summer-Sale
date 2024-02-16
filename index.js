const cards = document.getElementsByClassName('card');
let totalPrice = 0;
for(const card of cards){
    card.addEventListener('click', function(){
        const itemName = card.querySelector('h3').innerText;
        const items = document.getElementById('items');
        const li = document.createElement('li');
        li.innerText = itemName;
        items.appendChild(li);
        
        const itemPrice = parseFloat(card.querySelector('span').innerText.split(" ")[1]);
        totalPrice = totalPrice + itemPrice;

        const totalPriceElement = document.getElementById('totalPrice');
        totalPriceElement.innerText = totalPrice;

        
    })
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const couponCode = document.getElementById('input-field');
    const correctedCode = couponCode.value.split(" ").join('').toUpperCase();
    // console.log(correctedCode);
    if(totalPrice>=200){
        if(correctedCode === "SELL200"){
            const discountPrice = document.getElementById('discountPrice');
            const discount = totalPrice * 0.2;
            discountPrice.innerText = discount.toFixed(2);

            const Total = document.getElementById('total');
            const total = totalPrice - discount;
            Total.innerText = total.toFixed(2);
            
            couponCode.value = '';
        }
        else{
            alert("Please provide correct coupon code");
            couponCode.value = '';
        }
    }
    else{
        alert("Please add more item")
    }
})

// document.getElementById('purchase-btn').removeAttribute('onclick');
document.getElementById('purchase-btn').addEventListener('click', function(event){
    if(totalPrice>0){
        const btn = document.getElementById('my_modal_5');
        btn.showModal();
    }
})

document.getElementById('goHome').addEventListener('click', function(){
    totalPrice = 0;
})