const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || []; 

const cartPrice = JSON.parse(localStorage.getItem('teddyCart', 'price')) || [];

console.log(cartPrice);

function teddyGet() {
    
    let title = document.querySelector('#checkoutTitle');

    let teddyContainer = document.getElementById('container');

    let finalCheckout = document.getElementById('finalCheckout');

    let priceCount = document.getElementsByClassName('TeddyTotalPrice-Amount');

    console.log(cartItems);

    if(!cartItems.length) {
        title.textContent = 'Votre panier est vide';

    } else {
        title.textContent = 'Votre panier :';

        cartItems.forEach(cartItem => {

            let totalPrice = (cartItem.quantity * cartItem.price);
            console.log(totalPrice);
            
            teddyContainer.innerHTML += `
                <div class="mainContainer">
                    <div class="teddyImg">
                        <img src="${cartItem.imageURL}" alt="Image de l'ours en peluche ${cartItem.name}"/>
                    </div>
                        <div class="teddyName">
                            <h2 class="teddyNameTitle">
                                ${cartItem.name}
                            </h2>
                        </div>

                        <div class="teddyColor">
                            <p> Couleur : ${cartItem.color} </p>
                        </div>

                        <div class="teddyQuantity">
                            <p> Quantité : ${cartItem.quantity} </p>
                        </div>

                        <div>
                            <p class="teddyPrice"> Prix unitaire : ${cartItem.price} € </p>
                        </div>
                    <div class="TeddyTotalPrice">
                        <h3 class="TeddyTotalPrice-Title">Prix total pour cet article :</h3>
                        <p><span class="TeddyTotalPrice-Amount">${cartItem.quantity * cartItem.price}</span> €</p>
                    </div>
                    <button type="button" class="deleteButton" id="btn-delete">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>`;
        });
        console.log(priceCount.length);
    }
}




