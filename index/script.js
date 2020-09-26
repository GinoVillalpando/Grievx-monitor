async function sync() {
  const response = await axios.get(
    "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080/"
  )
  .then((response) => {
    return response.data;
  })
  .then((html) => {

    // set variables that will parse the response.data as html
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let stockButton = doc.querySelectorAll(".btn-cart");

    // foreach loop that is checking if each button found with .btn-cart is available to check the text for add to cart
    stockButton.forEach( btn => {
      if (btn.innerText === "ADD TO CART") {
          console.log("in-stock", btn.innerText);
      } else {
          console.log("not in-stock", btn.innerText);
      }
    });
  });
}

setInterval(sync, 5000);
