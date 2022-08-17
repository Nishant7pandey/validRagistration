function validate () {
    let firstnameInput =document.getElementById('firstname').value
    let lastnameInput =document.getElementById('lastname').value
    let emailInput =document.getElementById('email').value
    let cityInput =document.getElementById('city').value
    let stateInput =document.getElementById('state').value
    let zipInput =document.getElementById('zip').value
    let tncInput =document.getElementById('tnc').checked

    let error = false

    //console.log(firstnameInput , lastnameInput , emailInput , cityInput , stateInput ,zipInput, tncInput)
    if(firstnameInput){
        document.getElementById("first-name-valid").style.display = 'block'
        document.getElementById("first-name-invalid").style.display = 'none'
    }
    else{
        document.getElementById("first-name-invalid").style.display = 'block'
        document.getElementById("first-name-valid").style.display = 'none'
        error = true
    }

    if(lastnameInput){
        document.getElementById("last-name-valid").style.display = 'block'
        document.getElementById("last-name-invalid").style.display = 'none'
    }
    else{
        document.getElementById("last-name-invalid").style.display = 'block'
        document.getElementById("last-name-valid").style.display = 'none'
        error = true
    }

    if(emailInput && emailInput.includes('@') & emailInput.includes('.') && emailInput.lastIndexOf('.') + 4 >= emailInput.length){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    if(cityInput && cityInput.length >= 3){
        document.getElementById("city-valid").style.display = 'block'
        document.getElementById("city-invalid").style.display = 'none'
    }
    else{
        document.getElementById("city-invalid").style.display = 'block'
        document.getElementById("city-valid").style.display = 'none'
        error = true
    }
    
    if(zipInput && zipInput.length == 6 && parseInt(zipInput)){
        document.getElementById("zip-valid").style.display = 'block'
        document.getElementById("zip-invalid").style.display = 'none'
    }
    else{
        document.getElementById("zip-invalid").style.display = 'block'
        document.getElementById("zip-valid").style.display = 'none'
        error = true
    }

    if(stateInput != 'none'){
        document.getElementById('state-valid').style.display ='block'
        document.getElementById('state-invalid').style.display ='none'
    }
    else{
        document.getElementById('state-invalid').style.display ='block'
        document.getElementById('state-valid').style.display ='none'
        error = true
    }
    if(tncInput){
        document.getElementById("tnc-invalid").style.display = "none"
    }
    else{
        document.getElementById('tnc-invalid').style.display = "block"
        error = true
    }

    if(!error){
        alert(' you fill registration form successfully');
        document.getElementById('firstname').value = ""
        document.getElementById('lastname').value = ""
        document.getElementById('city').value = ""
        document.getElementById('state').value = "none"
        document.getElementById('zip').value = ""
        document.getElementById('email').value = ""
        document.getElementById('tnc').checked = false

        document.getElementById("first-name-valid").style.display = 'none'
        document.getElementById("last-name-valid").style.display = 'none'
        document.getElementById("city-valid").style.display = 'none'
        document.getElementById("state-valid").style.display = 'none'
        document.getElementById("zip-valid").style.display = 'none'
        document.getElementById("email-valid").style.display = 'none'
        
    }
}
 