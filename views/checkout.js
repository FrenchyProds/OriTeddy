const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || []; 

const buttonDown = document.getElementById('down');

function teddyGet() {
    
    let title = document.querySelector('#checkoutTitle');

    let teddyContainer = document.getElementById('teddyContainer');

    let totalCartCost = document.getElementById('finalCheckout');  

    let finalCheckout = 0;

    if(!cartItems.length) {

        title.textContent = 'Votre panier est vide, merci de vous rendre à la Page Principale et séléctionner un teddy à personnaliser !';

    } else {

        title.textContent = 'Votre panier :';

        cartItems.forEach(cartItem => {

            let totalPrice = (cartItem.quantity * cartItem.price);
            
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
                            <button 
                                type="button"
                                id="up";
                                class="btn-up">
                                <i class="fas fa-angle-up">
                                </i>
                            </button>
                            <p> Quantité : <span class="test">${cartItem.quantity}</span></p>
                            <button 
                                type="button"
                                id="down";
                                onclick="removeItem()";
                                class="btn-down">
                                <i class="fas fa-angle-down"></i>
                            </button>
                        </div>

                        <div class="teddyPrix">
                            <p class="teddyPrice"> Prix unitaire : ${cartItem.price} € </p>
                        </div>
                    <div class="TeddyTotalPrice">
                        <h3 class="TeddyTotalPrice-Title">Prix total pour cet article</h3>
                        <p><span class="TeddyTotalPrice-Amount">${cartItem.quantity * cartItem.price}</span> €</p>
                    </div>
                </div>`;  
                
                console.log(cartItem.quantity);

                let buttonsUp = document.querySelectorAll('.btn-up');
                console.log(buttonsUp);

        });
                const TeddiesTotalPrice = [...document.getElementsByClassName('TeddyTotalPrice-Amount')];

                TeddiesTotalPrice.forEach(teddy => {
                    let teddyTotalPrice = parseInt(teddy.innerHTML, 10);

                    finalCheckout += teddyTotalPrice;
                })

                

                totalCartCost.innerHTML = finalCheckout + ' €';
    }

}

function confirmCart() {
    document.getElementById("form").style.display="block";
    document.querySelector(".hiddenOnForm").style.display="none";
    document.querySelector('#container').style.backgroundColor="#f2f2f2";
}

function closeForm() {
    document.getElementById("form").style.display="none";
    document.querySelector(".hiddenOnForm").style.display="block";
    document.querySelector('#container').style.backgroundColor="rgb(228, 214, 214)";
  }





