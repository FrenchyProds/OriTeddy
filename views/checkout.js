const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || []; 

const cartPrice = JSON.parse(localStorage.getItem('teddyCart', 'price')) || [];

console.log(cartPrice);

function teddyGet() {
    
    let title = document.querySelector('#checkoutTitle');

    let teddyContainer = document.getElementById('teddyContainer');

    let finalCheckout = document.getElementById('finalCheckout');

    let priceCount = document.getElementsByClassName('TeddyTotalPrice-Amount');

    for (let i = 0; i < priceCount.length; i++) {

    }

    console.log(priceCount);

    console.log(cartItems);

    if(!cartItems.length) {

        title.textContent = 'Votre panier est vide, merci de vous rendre à la Page Principale et séléctionner un teddy à personnaliser !';

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
                    <label for="quantityInput">Vous souhaitez supprimer des oursons de votre panier ?</label><br />
                                <input step="number" placeholder="Quantité désirée" 
                                    class="quantity-delete" id="quantityDelete" 
                                    name="quantityDelete" type="number" min="1" max="${cartItem.quantity}">
                                </input>
                </div>`;     
        });
        console.log(priceCount.length);
    }
}




