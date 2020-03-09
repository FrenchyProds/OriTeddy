
const urlAPI = "http://localhost:3000/api/teddies";
const teddyAppend = document.getElementById("mainPage");

async function getTeddies() {
    let response = await fetch(urlAPI);
    let data = await response.json()
    .then((data) => {
        data.forEach((teddy) => {
            const { name, _id, colors, price, description, imageUrl } = teddy
            teddyAppend.innerHTML +=
            `<div class="${name}">
                <h3 class="teddyName">${name}</h3>
                <ul class="teddyInfo">
                    <li id="price">Prix: ${price/100}€</li> 
                </ul> 
                <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                <button onclick='location.href="product-page.html?id=${_id}"' type="button" id="btnCustom"><i class="fas fa-cog"></i>Personnaliser mon teddy</button>
            </div>`;
        })
    })
    return data;
}

window.onload = () => {
    getTeddies();
}





