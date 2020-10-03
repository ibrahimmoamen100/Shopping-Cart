// function ready() {

//     const navItems = document.getElementsByClassName("nav-items")
//     const myUl = document.querySelector("ul")

//     for (var i = 0; i <= navItems.length - 1; i++) {
//         navItems[i].addEventListener("click", function (e) {
//             var textUlTarget = e.target.innerText
//             const newLI = document.createElement("li")
//             myUl.append(newLI)
//             newLI.append(textUlTarget)

//         })
//     }
// }

// #################################################################################

// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

// function ready() {
//   let removeButton = document.getElementsByClassName("remove_btn");
//   for (var i = 0; i < removeButton.length; i++) {
//     removeButton[i].addEventListener("click", removeButtonFunction);
//   }

//   let quantityValue = document.getElementsByClassName("quantity_inpt");
//   for (var i = 0; i < quantityValue.length; i++) {
//     quantityValue[i].addEventListener("change", updateCartTotal);
//   }
// }

// let addCartButton = document.getElementsByClassName("cart_btn");
// for (var i = 0; i < addCartButton.length; i++) {
//   addCartButton[i].addEventListener("click", addCartButtonFunction);
// }

// function removeButtonFunction(e) {
//   let removeButtonClicked = e.target;
//   removeButtonClicked.parentElement.parentElement.remove();
//   updateCartTotal();
// }

// function updateCartTotal(e) {
//   let quantitySelected = e.target;
//   let quantityNumber = parseInt(quantitySelected.value);
//   let productPrice = document.getElementsByClassName("price_section")[0];
//   let price = parseFloat(productPrice.innerText.replace("$", ""));
//   let total = 0;
//   total = total + quantityNumber * price;
//   productPrice.innerText = total + "$ ";
//   let TotalPriceDiv = document.getElementsByClassName("total_price_div")[0];
//   let totalPriceNumber = TotalPriceDiv.getElementsByClassName(
//     "total_price_number"
//   )[0];
//   // totalPriceNumber.innerText = "$" + total;
//   console.log(totalPriceNumber);
// }

// function addCartButtonFunction(e) {
//   let buttonClicked = e.target;

//   console.log(buttonClicked);
// }

//  ###################################################################

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeButton = document.getElementsByClassName("remove_btn");
  for (var i = 0; i < removeButton.length; i++) {
    button = removeButton[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInput = document.getElementsByClassName("quantity_inpt");
  for (var i = 0; i < quantityInput.length; i++) {
    input = quantityInput[i];
    input.addEventListener("change", quantityChange);
  }
  var addToCartButtons = document.getElementsByClassName("cart_btn");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

function addToCartClicked(e) {
  var button = e.target;
  var product = button.parentElement.parentElement;
  var priceElement = product.getElementsByClassName("price")[0];
  var imageElement = product.getElementsByClassName("img_product")[0];
  var titleElement = product.getElementsByClassName("title_product")[0];
  var price = priceElement.innerText;
  var imageSrc = imageElement.src;
  var title = titleElement.innerText;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart_row");
  var productAdded = document.getElementsByClassName("product_added")[0];
  var cartItemName = productAdded.getElementsByClassName("titless");
  for (var i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerText == title) {
      alert("this item is already add to the cart ");
      return;
    }
  }
  var cartRowContent = `
  <section class="title_img">
  <h4 class="titless">
${title}
  </h4>
  <img src="${imageSrc}" alt="" />
</section>
<section class="price_section">${price}</section>
<section class="quantity_section">
  <input type="number" id="quantity_input" class="quantity_inpt" value="1" />
  <button class="remove_btn">Remove</button>
</section>`;
  cartRow.innerHTML = cartRowContent;
  productAdded.insertBefore(cartRow, productAdded.children[1]);
  cartRow.getElementsByClassName("remove_btn")[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName("quantity_inpt")[0].addEventListener('change', quantityChange)
}

function quantityChange(e) {
  var input = e.target;
  console.log(input);
  if (input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function removeCartItem(e) {
  var buttonClicked = e.target;
  // console.log(buttonClicked);
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  let productAdded = document.getElementsByClassName("product_added")[0];
  let cartRows = productAdded.getElementsByClassName("cart_row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("price_section")[0];
    var quantityInput = cartRow.getElementsByClassName("quantity_inpt")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityInput.value;
    total = total + (price * quantity);
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total_price_number")[0].innerText = "$" + total
}



// function arrowFunction(a, b) {
//   var array = [a, b]
//   console.log(array)
// }
// arrowFunction("c", "d ")