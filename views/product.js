const urlAPI = "http://localhost:3000/api/teddies";
const teddyAppend = document.getElementById("product-pull");
const teddyColorAppend = document.getElementById("teddy-colors");


async function getTeddies() {
    let response = await fetch(urlAPI);
    let data = await response.json()
    .then((data) => {
        data.forEach((teddy) => {
            const { name, _id, colors, price, description, imageUrl } = teddy
            let id = `${_id}`;
            
            if(window.location.href.indexOf(id) > -1) 
            {
                teddyAppend.innerHTML +=
                    `<div class="teddyImport">
                        <h3 class="teddyName">${name}</h3>
                            <ul class="teddyInfo">
                                <li id="description">Description : <br />${description}</li>
                                <li id="price">Prix: ${price/100}€</li> 
                            </ul> 
                            <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                            <div class="quantityDiv">
                                <label for="quantityInput">Combien d'oursons voulez-vous ajouter à votre panier ?</label><br />
                                <input step="number" placeholder="Quantité désirée" 
                                    class="quantity-input" id="quantityInput" 
                                    name="quantityInput" type="number" min="1" max="99">
                                </input>
                            </div>

                            <div class="checkout" id="addBtn">
                                <button 
                                    type="button"
                                    id="panier";
                                    click="
                                    class="btn btn-default";">
                                    Ajouter au panier
                                </button>
                                <i class="fas fa-shopping-cart icon-card"></i>
                            </div>
                        </div>`;

                        const panier = document.getElementById("panier");

                for (let i = 0; i < colors.length; i++) {
                    teddyColorAppend.innerHTML +=
                    `<option value="${colors[i]}" selected="selected">${colors[i]} / </option>`;
                }
                    
                    panier.addEventListener('click', function(e) {
                        
                    var value = document.querySelector('select').value;

                    var quantity = document.getElementById('quantityInput').value;

                    if (quantity < 1) { 
                        
                        window.alert ("Merci de bien vouloir ajouter au minimum 1 ourson à votre panier");
                    
                    } else {

                    console.log(localStorage);

                        var cart = {
                            "id" : id,
                            "name" : name,
                            "price" : price/100,
                            "color" : value,
                            "quantity" : quantity,
                            "imageURL" : imageUrl
                        }

                        var cartItems = JSON.parse(localStorage.getItem('teddyCart')) || [];

                        if (localStorage.getItem('teddyCart') === null) {

                            localStorage.setItem("teddyCart", JSON.stringify(cartItems));

                        } else {
                            
                                    cartItems.push(cart);
                            }   

                            localStorage.setItem("teddyCart", JSON.stringify(cartItems));  
                        } 
                 });
             }
        })
    })
    return data;
}


window.onload = () => {
    getTeddies();
}











  





