let row=1;
function save(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let user = document.getElementById("user").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    if(!fname || !lname || !user || !city || !state || !country){
        alert("Please fill all the fields.")
        return;
    }

    let display = document.getElementById("display");
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);

    cell1.innerHTML = row;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = user;
    cell5.innerHTML = city;
    cell6.innerHTML =  state;
    cell7.innerHTML = country;

    row++;
}


function pop(country,state)
{
    var country = document.getElementById(country);
    var state = document.getElementById(state);

    state.innerHTML = "";

    if(country.value == "india")
    {
        var arr = ['maharashtra|Maharashtra','goa|Goa','delhi|Delhi'];
    }

    else if(country.value == "america"){
        var arr = ['california|California','new york|New York','new mexico|New Mexico'];
    }

    else if(country.value == "canada" ){
        var arr = ['alberta|Alberta','british columbia|British Colombia','manitoba|Manitoba'];
    }

    for(var option in arr)
    {
        var pair = arr[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        state.options.add(newoption);
    }

}

function popout(s1,city)
{
    var s1 = document.getElementById(s1);
    var city = document.getElementById(city);


    city.innerHTML = "";

    if(s1.value == "maharashtra")
    {
        var arr1 = ['mumbai|Mumbai','pune|Pune','kolhapur|Kolhapur'];
    }

    else if(s1.value == "goa"){
        var arr1 = ['panji|Panji','ponda|Ponda','margao|Margao'];
    }

    else if(s1.value == "delhi" ){
        var arr1 = ['mandoli|Mandoli','bankner|Bankner','alipur|Alipur'];
    }

    else if(s1.value == "california" ){
        var arr1 = ['san diego|San Diego','san jose|San Jose','	fresno|Fresno'];
    }

    else if(s1.value == "new york"){
        var arr1 = ['syracuse|Syracuse','albany|Albany','new rochelle|New Rochelle'];
    }

    else if(s1.value == "new mexico" ){
        var arr1 = ['las cruces|Las Cruces','rio rancho|Rio Rancho','albuquerque|Albuquerque'];
    }

    else if(s1.value == "alberta" ){
        var arr1 = ['calgary|Calgary','edmonton|Edmonton','	lethbridge|Lethbridge'];
    }

    else if(s1.value == "british colombia" ){
        var arr1 = ['vancouver|Vancouver','victoria|Victoria','	whistler|Whistler'];
    }

    else if(s1.value == "manitoba"){
        var arr1 = ['winnipeg|Winnipeg','brandon|Brandon','winkler|Winkler'];
    }

    for(var option in arr1)
    {
        var pair = arr1[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        city.options.add(newoption);
    }

}