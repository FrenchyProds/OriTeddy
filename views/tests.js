function orderTeddies() {
    
    confirmOrder.addEventListener('click', function() {

    let product_id = localStorage;
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let address = document.getElementById('address');
    let city = document.getElementById('city');
    let email = document.getElementById('email');
    let contact = { firstName, lastName, address, city, email };

      fetch('urlAPI', {
          method: 'POST',
          body: JSON.stringify(product_id, contact)
      }).then(function(response) {
          return response.json();
      })
         if (!response.json) {
            window.alert('Merci pour votre commande ! Vous allez être redirigé vers la page de confirmation dans quelques secondes')
         } else {
            window.alert("Un souci s'est produit, merci de bien vouloir réessayer")
         }
    })
  }

////////////////////////////////////////////

  let confirmOrder = document.getElementById('submitOrder');

  function orderTeddies() {
      confirmOrder.addEventListener('click', function() {
      let product_id = localStorage;
        fetch('urlAPI', {
            method: 'POST',
            body: JSON.stringify(product_id)
        }).then(function(response) {
            return response.json();
        })
           console.log(orderTeddies);
      })
    }
  
  
  function postData(event) {
      event.preventDefault();
  
      let firstName = document.getElementById('firstName');
      let lastName = document.getElementById('lastName');
      let address = document.getElementById('address');
      let city = document.getElementById('city');
      let email = document.getElementById('email');
  
      let contact = { firstName, lastName, address, city, email };
  
      console.log(contact);
  
      fetch('urlAPI', {
          method: 'POST',
          body: JSON.stringify(contact)
      }).then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err)) 
      if (err === false) {
          window.alert('Merci pour votre commande ! Vous allez être redirigé vers la page de confirmation dans quelques secondes')
      } else {
          window.alert("Un souci s'est produit, merci de bien vouloir réessayer")
      }
  
  }
  

  textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border-color: rgba(229, 103, 23, 0.8);
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px rgba(229, 103, 23, 0.6);
    outline: 0 none;
}


let emptyButton = document.getElementById('emptyCart');

function emptyCart() {
        localStorage.clear();
        location.reload();
    }