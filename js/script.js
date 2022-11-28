const buttonSubmit = document.getElementById('button-submit');

buttonSubmit.addEventListener('click', function(){
    let input_tag  = document.getElementById('name');
    let value_input = input_tag.value;
    console.log(value_input)
});
buttonSubmit.addEventListener('click', function(){
    let input_tag  = document.getElementById('km');
    let value_input = input_tag.value;
    console.log(value_input)
});
buttonSubmit.addEventListener('click', function(){
    let input_tag  = document.getElementById('age');
    let value_input = input_tag.value;
    console.log(value_input)
});

buttonSubmit.addEventListener('click', function(){
    let price = document.getElementById('km').value * 0.21;
    console.log(`il prezzo non scontato è ${price}`);
    if(document.getElementById('age').value === "minorenne" ){
        price = price - (price * 0.4);
        price = price.toFixed(2);
        console.log(`il prezzo scontato del 40% è ${price} €`);
    }
    else if(document.getElementById('age').value === "over_65"){
        price = price - (price * 0.8);
        price = price.toFixed(2);
        console.log(`il prezzo scontato del 80% è ${price} €`);
    }
    else{
        price = price.toFixed(2);
        console.log(`il biglietto costa ${price} €`);    
    }
    document.getElementById("ticket-price").innerHTML = price + "$";
    document.getElementById("name-surname").innerHTML = name ;
});
