let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if(typeof(firstName)=="string"&&firstName!=="")

{
    console.log(firstName)
}
else
{
    if(typeof(firstName)!=="string")
    {
        alert("First Name value must be of type string")
    }
    if(firstName==="")
    {
        alert("First Name must not be undefined")
    }
}


// Provide solution code here for Validating LastName
if(typeof(lastName)==="string")
{
    console.log(lastName)
}
else
{
    alert("Last Name value must be of type string")
}


// Provide solution code here for Validating Age
if(typeof(age)==="number" && age>18 && age<60)
{
    console.log(age)
}
else{
    if(age===0)
    {
        alert("Age value must be defined")
    }
    else if(age>60||age<18)
    {
        alert("Age value must be between 18 and 60")

        if(typeof(age)!=="number")
        {
            alert("Age should be of type number")
        }
    }
}

// Provide solution code here for Validating isMarried
if(typeof(isMarried)==="boolean"){
    console.log(isMarried)
}
else{
    alert("is Married should be of type boolean")
}


// Provide solution code here for Validating City
if(typeof(city)==="string")
{
    console.log(city)
}
else
{
    alert("City should be of type string")
}


// Provide solution code here for Validating State
if(typeof(state)==="string"){
    console.log(state)
}
else{
    alert("State should be of type string")
}


// Provide solution code here for Validating Postal Code
if(typeof(postalCode)==="string"&&postalCode!=="")
{
    console.log(postalCode)
}
else if(typeof(postalCode)!=="string")
{
    alert("Postal code should be of type string")

if(postalCode==="")
    {
        alert("Postal code value must not be undefined")
    }
}