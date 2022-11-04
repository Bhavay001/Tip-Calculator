
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');


let numpeople = Number(numberOfPeople.innerText);

const calculateBill = () => {

let bill = Number(billTotalInput.value)

 
  let tipPercentage = Number(tipInput.value) / 100;

  let tipAmount = bill * tipPercentage;

  let totalBill = tipAmount + bill

  let perpersontotal = totalBill / numpeople;
  perpersontotal = perpersontotal.toFixed(2)

  perPersonTotal.innerText = `$ ${perpersontotal}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numpeople += 1;

  // update the DOM with the new number of people

  numberOfPeople.innerText = numpeople;

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {

  if (numpeople > 1) {
    // decrement the amount of people
    numpeople -= 1;
  }
  // update the DOM with the new number of people
  numberOfPeople.innerText = numpeople;

  // calculate the bill based on the new number of people
  calculateBill()
}