// fetch("../../OUT/errorhandeler.js")
//   .then(() => {
//     // Error handler loaded, now fetch the data
//     return fetch("../../server/data/top-sellers.json");
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     const topSellersDiv = document.getElementById("topSellers"); // Corrected ID
//     data.topSellers.forEach(seller => {
//       const sellerElement = document.createElement("div");
//       sellerElement.classList.add("seller"); // Optional: add a class for styling
//       sellerElement.innerHTML = `
//         <h3>${seller.name}</h3>
//         <h3>${seller.badge}</h3>
//         <h3>${seller.category}</h3>
//         <h3>${seller.description}</h3>
//         <h3>${seller.price}${"$"}</h3>
//         <h3>${seller.seller}</h3>
//         `;
//       topSellersDiv.appendChild(sellerElement);
//     });
//   })
//   .catch(error => {
//     if (typeof ClientErrorHandler !== 'undefined') {
//       ClientErrorHandler(error);
//     } else {
//       console.error('Error:', error);
//     }
//   });