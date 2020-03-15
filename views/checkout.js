const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || []; 

const buttonDown = document.getElementById('down');

const postUrlAPI = "http://localhost:3000/api/teddies/order";

const totalCartCost = document.getElementById('finalCheckout');

function teddyGet() {
    
    let title = document.querySelector('#checkoutTitle');

    let teddyContainer = document.getElementById('teddyContainer');

    let finalCheckout = 0;

    if(!cartItems.length) {

        title.textContent = 'Oups ! Votre panier est vide, merci de vous rendre à la page principale et séléctionner un teddy à personnaliser !';
                document.getElementById('viderPanier').style.display="none";
                document.getElementById('finalPrice').style.display="none";
                document.getElementById('container').style.paddingBottom="0";
                document.getElementById('container').style.minHeight="80vh";
                document.querySelector('#container').style.display="flex";
                document.querySelector('.hiddenOnForm').style.justifySelf="center";
                document.querySelector('.hiddenOnForm').style.margin='auto';

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


function emptyCart() {
        swal.setActionValue({confirm: false, cancel: true})
        swal({
            title: 'Êtes vous sur ?',
            text: "Vous ne pourrez pas faire machine arrière",
            icon: 'warning',
            buttons: {cancel: true, confirm: "Confirmer"},
            dangerMode: true,
        }).then((result) => {
            if (result.false) {
                swal('Vidage du panier annulé', '', 'success')
        } else {
                localStorage.clear();
                location.reload();
        }
    })
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
  

  
  
  
  let form = document.getElementById('postData');
  
function orderTeddies() {   

            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let address = document.getElementById('address').value;
            let city = document.getElementById('city').value;
            let email = document.getElementById('email').value;
            let contact = { firstName, lastName, address, city, email }; 

            const products = [];

            cartItems.forEach(item => {
                products.push(item.id);
            })

            const request = new Request(postUrlAPI, {
                method: 'POST',
                body: JSON.stringify({contact, products}),
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            });
    
                fetch(request)
                .then(response => response.json())
                .then( (response) => {
                    console.log(response.orderId);
                    console.log(contact);
                if (form.checkValidity() === false) {
                    swal("Oups ! Quelque chose ne va pas", "Merci de bien vouloir vérifier le formulaire et réessayer", "error");
                } else if (form.checkValidity() ===true) {
                    let getOrderId = response.orderId;
                    console.log(getOrderId);
                    let getTotalCost = totalCartCost.innerHTML;
                    localStorage.clear();
                    let orderRecap = { getOrderId, getTotalCost };
                    localStorage.setItem("orderIsConfirmed", JSON.stringify(orderRecap));
                    console.log(localStorage);
                    swal("Merci pour votre commande !", "Vous allez être redirigé vers la page de confirmation dans quelques secondes", "success");
                    setTimeout(function() {window.location = 'confirmed-page.html'; }, 3000);
                } 
            })
     }

                

             
           
        
        
 




