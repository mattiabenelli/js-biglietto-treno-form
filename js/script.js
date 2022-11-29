const buttonSubmit = document.getElementById('button-submit');

buttonSubmit.addEventListener('click', function(){
    let name_surname  = document.getElementById('name').value
    console.log(name_surname)

    let chilometri  = document.getElementById('km').value
    console.log(chilometri)

    let eta  = document.getElementById('age').value
    console.log(eta)

    let price = chilometri * 0.21;
    console.log(`il prezzo non scontato è ${price}`);
    if(eta == 'minorenne' ){
        price = price - (price * 0.4);
        price = price.toFixed(2);
        console.log(`il prezzo scontato del 40% è ${price} €`);
    }
    else if(eta == 'over_65'){
        price = price - (price * 0.8);
        price = price.toFixed(2);
        console.log(`il prezzo scontato del 80% è ${price} €`);
    }
    else{
        price = price.toFixed(2);
        console.log(`il biglietto costa ${price} €`);    
    }
    document.getElementById("ticket-price").innerHTML = price + "$";
    document.getElementById("name_surname").innerHTML = name_surname ;
});

