const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 15000, rating: 4.5 },
  { id: 2, name: "T-Shirt", category: "fashion", price: 700, rating: 4.2 },
  { id: 3, name: "Microwave", category: "home", price: 5000, rating: 4.7 },
  { id: 4, name: "Headphones", category: "electronics", price: 2000, rating: 4.0 }
];

const container = document.getElementById('productContainer');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');

function displayProducts(items) {
  container.innerHTML = "";
  items.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: ₹${p.price}</p>
        <p>Rating: ⭐${p.rating}</p>
      </div>
    `;
  });
}

function filterAndSort() {
  let filtered = [...products];

  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  if (sortBy.value === "priceLowHigh") filtered.sort((a,b)=>a.price-b.price);
  else if (sortBy.value === "priceHighLow") filtered.sort((a,b)=>b.price-a.price);
  else if (sortBy.value === "rating") filtered.sort((a,b)=>b.rating-a.rating);

  displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortBy.addEventListener('change', filterAndSort);

displayProducts(products);
