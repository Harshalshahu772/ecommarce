document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { image: "assets/favourite-1.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/Fashion1.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/Fashion2.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/fashion3.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/fashion7.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/fashion5.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/fashion6.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/fashion8.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },
        { image: "assets/Fashion/fashion9.jpg", title: "new barand", price: "$19.99", description: "Super slim and comfy jeans. High-quality denim fabric." },

    ];

    const container = document.querySelector(".container-c");

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h1>${product.title}</h1>
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
            <p><button>Add to Cart</button></p>
        `;
        container.appendChild(card);
    });
});




function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }