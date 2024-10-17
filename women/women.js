fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
    })
    .then((json) => {
        const productList = document.getElementById("product-list");
        json.forEach((product) => {
            console.log(json);
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML =
                `<a><img src="${product.image}" alt="${product.title}">
                    <div>
                        <h2>${product.title}</h2>
                      
                        <p><strong>Price: $${product.price}</strong></p>
                        <p>Rate : ${product.rating.rate}</p></a>
                    </div>
                  
                `;
            productList.appendChild(productDiv);
        });
    })
    .catch((err) => console.error("Error fetching products:", err));
