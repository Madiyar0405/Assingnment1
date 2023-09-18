// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = []; // Initialize an empty cart array to store items

    // Function to update the cart display
    const updateCart = () => {
        // Clear the current cart display
        cartItems.innerHTML = '';
        let total = 0;

        // Loop through items in the cart and display them
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <a href="#" class="remove-item" data-index="${i}">Remove</a>
            `;

            cartItems.appendChild(cartItem);
            total += item.price;
        }

        // Update the total
        cartTotal.innerText = `$${total.toFixed(2)}`;
    };

    // Function to add items to the cart
    const addToCart = (productName, productPrice, productImage) => {
        cart.push({ name: productName, price: productPrice, image: productImage });
        updateCart();
    };

    // Function to remove items from the cart
    const removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    // Event delegation to handle removing items from the cart
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const indexToRemove = e.target.getAttribute('data-index');
            removeFromCart(indexToRemove);
        }
    });

    // Example usage (You can add or remove items as needed)
    addToCart('Product 1', 19.99, 'product1.jpg');
    addToCart('Product 2', 24.99, 'product2.jpg');
    // Remove items by calling removeFromCart(index) as needed
});
