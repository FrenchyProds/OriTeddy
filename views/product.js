const urlAPI = "http://localhost:3000/api/teddies";
const teddyAppend = document.getElementById("product-pull");
const teddyColorAppend = document.getElementById("teddy-colors");
const panier = document.getElementById("panier");

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

                            <div class="checkout" id="test">
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

                localStorage.clear();
                localStorage.setItem('name', name);
                localStorage.setItem('price', price);
                localStorage.setItem('id', _id);

                for (let i = 0; i < colors.length; i++) {
                    teddyColorAppend.innerHTML +=
                    `<option value="" id="">${colors[i]} / </option>`;
                    console.log(colors);
                
                

                localStorage.setItem('color', colors);
                }
             }
        })
    })
    return data;
}

window.onload = () => {
    getTeddies();
}











  





