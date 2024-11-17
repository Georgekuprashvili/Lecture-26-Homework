let number = 1;
async function getProducts() {
  try {
    let data = await fetch(`https://fakestoreapi.com/products/${number}`);
    let products = await data.json();
    console.log(products);
    let p = document.createElement("p");
    p.textContent = products.title;
    document.body.appendChild(p);
  } catch (error) {
    console.error("dazianebulia");
  }
}
let button = document.getElementById("button");

button.addEventListener("click", () => {
  getProducts();
  number++;
});

