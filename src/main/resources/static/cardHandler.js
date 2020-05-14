

function addCard(x) {
	
	var cardContainer = document.getElementById('cardContainer');
	var divCard = document.createElement('div');
	divCard.setAttribute('class', 'card');
	var divCardBody = document.createElement('div');	
	divCardBody.setAttribute('class', 'card-body');
	
	var titleH5 = document.createElement('h5');
	titleH5.setAttribute('class', 'card-title');
	titleH5.innerHTML = "temporary title";
	var cardContentP = document.createElement('p');
	cardContentP.setAttribute('class', 'card-text');
	
	if (!x)
	cardContentP.innerHTML = makeid(Math.random()*200);
	else cardContentP.innerHTML = x;
 
	var timeStamp = document.createElement('p');
	timeStamp.setAttribute('class', 'text-muted');
	
	
	timeStamp.innerHTML = "17:55";
	
	divCardBody.appendChild(titleH5);
	divCardBody.appendChild(cardContentP);
	divCardBody.appendChild(timeStamp);
	divCard.appendChild(divCardBody);
	cardContainer.appendChild(divCard);
	
}

function handlePaste (e) {
    var clipboardData, pastedData;

    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    // Do whatever with pasteddata
    addCard(pastedData);
}

document.getElementById('editableDiv').addEventListener('paste', handlePaste);

function makeid(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}