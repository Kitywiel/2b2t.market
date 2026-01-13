fetch("../out/errorhandeler.js")
  .then(() => {
    // Error handler loaded, now fetch the data
    return fetch("../server/data/top-sellers.json");
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const topSellersDiv = document.getElementById("topSellers"); // Corrected ID
    data.topSellers.forEach(seller => {
      const sellerElement = document.createElement("div");
      sellerElement.classList.add("seller"); // Optional: add a class for styling
      sellerElement.innerHTML = `
        <h1 class="top-seller-item-name">${seller.name}</h1>
        <h3 class="top-seller-type">${seller.badge}</h3>
        <h4 class="top-seller-category">${seller.category}</h4>
        <p class="top-seller-description">${seller.description}</p>
        <h2 class="top-seller-price">${seller.price}${"$"}</h2>
        <p class="top-seller-seller-name">${seller.seller}</p>
        `;
      topSellersDiv.appendChild(sellerElement);
    });
  })
  .catch(error => {
    if (typeof ClientErrorHandler !== 'undefined') {
      ClientErrorHandler(error);
    } else {
      console.error('Error:', error);
    }
  });