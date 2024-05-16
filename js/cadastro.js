
const form = document.querySelector(".form-cadastro");

const IfirstName = document.querySelector("#firstName");
const IlastName = document.querySelector("#lastName");
const Iemail = document.querySelector("#email");
const Ipassword = document.querySelector("#password");
const Iaddress = document.querySelector("#address");
const Ineighborhood = document.querySelector("#neighborhood");
const Icomplement = document.querySelector("#complement");
const Icity = document.querySelector("#city");
const Iregion = document.querySelector("#region");
const Izipcode = document.querySelector("#zipcode");
const Inumber1 = document.querySelector("#number1");
const Inumber2 = document.querySelector("#number2");

function signin(data){
  const params = new URLSearchParams(data).toString();
  
  fetch("http://localhost:8080/customer/create-customer?" + params, {
    method: "POST",
  })
  .then(function (res) { 
    console.log(res);
    window.location.href = "main.html";
  })
  .catch(function (res) { console.log(res) })
}



function clean(){
  IfirstName.value = "";
  IlastName.value = "";
  Iemail.value = "";
  Ipassword.value = "";
  Iaddress.value = "";
  Ineighborhood.value = "";
  Icomplement.value = "";
  Icity.value = "";
  Iregion.value = "";
  Izipcode.value = "";
  Inumber1.value = "";
  Inumber2.value = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    firstName: IfirstName.value,
    lastName: IlastName.value,
    email: Iemail.value,
    password: Ipassword.value,
    address: Iaddress.value,
    neighborhood: Ineighborhood.value,
    complement: Icomplement.value,
    city: Icity.value,
    region: Iregion.value,
    zipcode: Izipcode.value,
    number1: Inumber1.value,
    number2: Inumber2.value
  };
  
  signin(data);
  clean();
  
});
