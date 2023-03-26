
const cartEl = document.querySelectorAll(".user-product");
console.log(cartEl);

cartEl.forEach(product => product.addEventListener("click", event => {
 if (event.target.tagName !== "I"){
     return;
 } else {
    console.log(event.target.parentNode.remove());
 }
}));

document.querySelector(".cart-elems__clear").addEventListener("click", () => cartEl.forEach(product => product.remove()));
