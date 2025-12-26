function addToCart(name, basePrice, id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let size = document.getElementById(id).value;
    let price = size == "1000" ? basePrice * 2 : basePrice;
    let label = size == "1000" ? "1kg" : "500g";

    let item = cart.find(p => p.name === name && p.size === label);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, size: label, price, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let div = document.getElementById("cartItems");
    let total = 0;
    if (!div) return;

    div.innerHTML = "";

    cart.forEach(i => {
        let sub = i.price * i.qty;
        total += sub;
        div.innerHTML += `
            <div class="cart-item">
                <h3>${i.name}</h3>
                <p>Pack: ${i.size}</p>
                <p>Price: ₹${i.price}</p>
                <p>Quantity: ${i.qty}</p>
                <p><b>Subtotal: ₹${sub}</b></p>
            </div>`;
    });

    document.getElementById("totalPrice").innerText = "Total: ₹" + total;
}

function buyNow() {
    alert("Order placed successfully!");
    localStorage.clear();
    window.location.href = "index.html";
}

loadCart();

