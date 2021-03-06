// Récupération du localStorage
const checkoutItems = JSON.parse(localStorage.getItem('orderIsConfirmed')) || []; 

let textZone = document.getElementById('confirmationInfo');

// Création du contenu HTML && intégration du contenu du localStorage
textZone.innerHTML += 
`
<h2> Merci beaucoup pour votre commande !</h2>
<h3 class="recap"> Voici le récapitulatif</h3>
<h3>Identifiant de commande : <br /><span class="importedInfo">${checkoutItems.getOrderId}</span></h3>
<h3>Prix total de la commande : <br /><span class="importedInfo">${checkoutItems.getTotalCost}</span></h3>
<p>Vous recevrez également un email d'ici quelques minutes récapitulant votre commande.</p>
<p>Oriteddy vous remercie une fois de plus et vous souhaîte une magnifique journée.</p>
`;