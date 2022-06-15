function addrecords(){
let table = document.getElementById("display");
let row1 = table.insertRow(1);
let cell1 = row1.insertCell(0);
let cell2 = row1.insertCell(1);
let cell3 = row1.insertCell(2);
let cell4 = row1.insertCell(3);
let cell5 = row1.insertCell(4);
let cell6 = row1.insertCell(5);
let cell7 = row1.insertCell(6);
let cell8 = row1.insertCell(7);
cell1.innerHTML = "1";
cell2.innerHTML = "Jhone";
cell3.innerHTML = "Doe";
cell4.innerHTML = "jhone.doe@gmail.com";
cell5.innerHTML = "20"
cell6.innerHTML = "Mumbai";
cell7.innerHTML = "Maharashtra";
cell8.innerHTML = "India";

let row2 = table.insertRow(2);
let cell11 = row2.insertCell(0);
let cell12 = row2.insertCell(1);
let cell13 = row2.insertCell(2);
let cell14 = row2.insertCell(3);
let cell15 = row2.insertCell(4);
let cell16 = row2.insertCell(5);
let cell17 = row2.insertCell(6);
let cell18 = row2.insertCell(7);
cell11.innerHTML = "2";
cell12.innerHTML = "Bob";
cell13.innerHTML = "Roy";
cell14.innerHTML = "bob.roy@gmail.com";
cell15.innerHTML = "25";
cell16.innerHTML = "Panji";
cell17.innerHTML = "Goa";
cell18.innerHTML = "India";

let row3 = table.insertRow(3);
let cell21 = row3.insertCell(0);
let cell22 = row3.insertCell(1);
let cell23 = row3.insertCell(2);
let cell24 = row3.insertCell(3);
let cell25 = row3.insertCell(4);
let cell26 = row3.insertCell(5);
let cell27 = row3.insertCell(6);
let cell28 = row3.insertCell(7);
cell21.innerHTML = "3";
cell22.innerHTML = "Alice";
cell23.innerHTML = "Raje";
cell24.innerHTML = "alice.raje@gmail.com";
cell25.innerHTML = "44";
cell26.innerHTML = "ponda";
cell27.innerHTML = "Goa";
cell28.innerHTML = "India";

let row4 = table.insertRow(4);
let cell31 = row4.insertCell(0);
let cell32 = row4.insertCell(1);
let cell33 = row4.insertCell(2);
let cell34 = row4.insertCell(3);
let cell35 = row4.insertCell(4);
let cell36 = row4.insertCell(5);
let cell37 = row4.insertCell(6);
let cell38 = row4.insertCell(7);
cell31.innerHTML = "4";
cell32.innerHTML = "Saiprasad";
cell33.innerHTML = "Ghatage";
cell34.innerHTML = "ghatage.sai@gmail.com";
cell35.innerHTML = "25";
cell36.innerHTML = "Kolhapur";
cell37.innerHTML = "Maharashtra";
cell38.innerHTML = "India";

let row5 = table.insertRow(5);
let cell41 = row5.insertCell(0);
let cell42 = row5.insertCell(1);
let cell43 = row5.insertCell(2);
let cell44 = row5.insertCell(3);
let cell45 = row5.insertCell(4);
let cell46 = row5.insertCell(5);
let cell47 = row5.insertCell(6);
let cell48 = row5.insertCell(7);
cell41.innerHTML = "5";
cell42.innerHTML = "Riya";
cell43.innerHTML = "kulkarni";
cell44.innerHTML = "riya.kulkarni@gmail.com";
cell45.innerHTML = "30";
cell46.innerHTML = "San Diego";
cell47.innerHTML = "California";
cell48.innerHTML = "America";

}


let row=6;
function save(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let user = document.getElementById("user").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    if(fname=='')
    {
        document.getElementById("error_fname").innerHTML = "! Please enter First name.";
        return false;
    }
    if(fname.length<=2){
        document.getElementById("error_fname").innerHTML = "! First name should have atleast 2 characters.";
        return false;
   }
   if(!isNaN(fname)){
        document.getElementById("error_fname").innerHTML = "! First name should have only characters.";
        return false;
    }
    if(lname=='')
    {
        document.getElementById("error_lname").innerHTML = "! Please enter Last name.";
        return false;
    }
    if(lname.length<3){
        document.getElementById("error_lname").innerHTML = "! Last name should have atleast 2 characters.";
        return false;
   }
  
   if(!isNaN(lname)){
        document.getElementById("error_lname").innerHTML = "! Last name should have only characters.";
        return false;
    }
    if(user=='')
    {
        document.getElementById("error_user").innerHTML = "! Please enter Email.";
        return false;
    }
    if(user.indexOf('@') <= 0){
        document.getElementById("error_user").innerHTML = "! Please include @ correctly.";
        return false;
    }
    if((user.charAt(user.length-4)!='.') && (user.charAt(user.length-3)!='.')){
        document.getElementById("error_user").innerHTML = "! Please check the position of dot(.).";
        return false;
    }
    if(country=='')
    {
        document.getElementById("error_country").innerHTML = "! Select country.";
        return false;
    }
    if(state=='')
    {
        document.getElementById("error_state").innerHTML = "! Select country.";
        return false;
    }
    if(city=='')
    {
        document.getElementById("error_city").innerHTML = "! Select country.";
        return false;
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
    let cell8 = newRow.insertCell(7);


    cell1.innerHTML = row;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = user;
    cell5.innerHTML = age;
    cell6.innerHTML =  city;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

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

function ageValidation() {
    let x = document.getElementById("age").value;
    let text;
    if (isNaN(x) || x < 18 || x > 100) {
      text = "Age should be between 18 to 100 years";
    } else {
      text = "Input OK";
    }
    document.getElementById("error_age").innerHTML = " User's age should be between 18 and 100.";
}

  function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;

	return true;
}

