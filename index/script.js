async function sync() {
  const response = await axios.get(
    "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080/"
  )
  .then((response) => {
    return response.data;
  })
  .then((html) => {
    let parser = new DOMParser();

    console.log(html);

    let doc = parser.parseFromString(html, "text/html");

    let cartButton = doc.querySelector(".btn-cart");

      if (cartButton.outerText === "ADD TO CART") {
        cartButton.click();
      } else {
        console.log('Card is out of stock');
      }
  });
}

setInterval(sync, 5000);
