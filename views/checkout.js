const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || []; 

const buttonDown = document.getElementById('down');

const postUrlAPI = "http://localhost:3000/api/teddies/order";

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

                let buttonsUp = document.querySelectorAll('.btn-up');
                buttonsUp.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Bouton non fonctionnel pour le moment !", "Promis, le développeur y travaille", "error")
                });                
             });

             let buttonsDown = document.querySelectorAll('.btn-down');
                buttonsDown.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Bouton non fonctionnel pour le moment !", "Promis, le développeur y travaille", "error")
                });                
             });

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



    let confirmOrder = document.getElementById('submitOrder');
    let product_id = localStorage;

    console.log (product_id);
    
    function orderTeddies() {
        confirmOrder.addEventListener('click', (event) => {

            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let address = document.getElementById('address').value;
            let city = document.getElementById('city').value;
            let email = document.getElementById('email').value;
            let contact = { firstName, lastName, address, city, email };

            console.log(contact);

            fetch(postUrlAPI, {
                method: 'POST',
                body: JSON.stringify(product_id, contact)
            }).then(function(response) {
                console.log(response);
                return response.json();
            })
                if (!response.json) {
                    window.alert("Un souci s'est produit, merci de bien vouloir réessayer")
                } else {
                    window.alert('Merci pour votre commande ! Vous allez être redirigé vers la page de confirmation dans quelques secondes')
                    confirmOrder.addEventListener('click', function() {
                        window.open('confirmed-page.html');
                    });
                }
            })
        }
 




