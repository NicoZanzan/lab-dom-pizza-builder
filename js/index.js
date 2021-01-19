// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};



// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMush => {
      if (state.mushrooms) {
        oneMush.style.visibility = 'visible';
      } else {
        oneMush.style.visibility = 'hidden';
      }
    });
  }
  // Iteration 1: set the visibility of `<section class="mushroom">`


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(oneGreen => {
      if (state.greenPeppers) {
        oneGreen.style.visibility = 'visible';
      } else {
        oneGreen.style.visibility = 'hidden';
      }
    });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceTest = document.querySelectorAll('.sauce')
  sauceTest.forEach(whiteSauce => {
    if (!state.whiteSauce) {
      whiteSauce.classList.add('sauce-white')
    } else {
      whiteSauce.classList.remove('sauce-white')
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustTest = document.querySelectorAll('.crust')
  crustTest.forEach(glutenFreeCrust => {
    if (!state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free')
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free')
    }
  })
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector(".btn-pepperoni").classList.add('active')
    } else {
    document.querySelector(".btn-pepperoni").classList.remove('active')
    }
  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add('active')
    } else {
    document.querySelector(".btn-mushrooms").classList.remove('active')
    }
  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add('active')
    } else {
    document.querySelector(".btn-green-peppers").classList.remove('active')
    }
  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add('active')
    } else {
    document.querySelector(".btn-sauce").classList.remove('active')
    }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add('active')
    } else {
    document.querySelector(".btn-crust").classList.remove('active')
    }
}
  

// function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`	  // Iteration 4: change the HTML of `<aside class="panel price">`
//   /* let totalPrice = basePrice + (state.pepperoni && ingredients.pepperoni.price)
//   + (state.greenPeppers && ingredients.greenPeppers.price)
//   + (state.mushrooms && ingredients.mushrooms.price)
//   + (state.whiteSauce && ingredients.whiteSauce.price)
//   + (state.glutenFreeCrust && ingredients.glutenFreeCrust.price); */
//   const listItems = document.getElementsByClassName('panel price' )
//   const listItems = pricePanel[0].getElementsByTagName('li');
//   console.log(listItems)
//   let totalPrice = 10;
//   let counter = 0;
//   for(let ingredient in ingredients) {
//       if (state[ingredient] === true) {
//         totalPrice += ingredients[ingredient].price;
//         listItems[counter].style.display = 'block';
//       } else {
//         listItems[counter].style.display = 'none';
//       }
//       counter++;
//   }
//   const displayedPrice = pricePanel[0].getElementsByTagName('strong');
//   displayedPrice[0].innerText = '$' + totalPrice;
// }	

// renderEverything();

//or 
// function renderPrice() {
//   const elem = document.querySelectorAll('.price > ul > li');
// console.log(elem);
// console.log(elem[0])
// if (state.pepperoni == false) elem[0].style.display ='none'
// else elem[0].style.display = 'block'
// if (state.mushrooms == false) elem[1].style.display ='none'
// else elem[1].style.display = 'block'
// if (state.greenPeppers == false) elem[2].style.display ='none'
// else elem[2].style.display = 'block'
// if (state.whiteSauce == false) elem[3].style.display ='none'
// else elem[3].style.display = 'block'
// if (state.glutenFreeCrust == false) elem[4].style.display ='none'
// else elem[4].style.display = 'block'
// sum = basePrice + ingredients.pepperoni.price*state.pepperoni + ingredients.mushrooms.price*state.mushrooms + ingredients.greenPeppers.price*state.greenPeppers + ingredients.whiteSauce.price*state.whiteSauce + ingredients.glutenFreeCrust.price*state.glutenFreeCrust
// console.log(sum)
// const total = document.querySelector('.price > strong')
// total.innerHTML = `$${sum}`

// function renderPrice() {
//   let price = basePrice
//   let list = ''

//   for (let ingredient in state) {
//     console.log(ingredients[ingredient])
//     if (state[ingredient]) {
//       list += `<li>$ ${ingredients[ingredient].price} ${ingrediens[ingredient].name}</li>`
//       price += ingredients[ingreidnet].price
//     }
   
//   }
//   document.querySelector('.panel.price ul').innerHTML = list;
//   document.querySelector('.panel.price strong').innerText = `$${sum}`
// }
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});