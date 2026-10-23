function showDetails(product) {
    let price = "Price details coming soon";
    let description = "Discover more from Apple.";
    let image = "image/iphone.webp";
    if (product === "Mac") {
        image = "image/mac.webp";
    } else if (product === "Accessories") {
        image = "image/apple-accessories.jpg";
    } else if (product === "iPad") {
        image = "image/ipad.jpg";
    } else if (product === "Apple Watch") {
        image = "image/applewatch.webp";
    } else if (product === "AirPods") {
        image = "image/airpods.jpg";
    } else if (product === "HomePod") {
        image = "image/homepod.webp";
    } else if (product === "Apple TV 4k") {
        image = "image/appletv.jpg";
    } else if (product === "Apple Pencil") {
        image = "image/Apple-Pencil.jpg";
    } else if (product === "AirPods") {
        price = "Price model ke hisaab se";
        description = "Enjoy wireless audio, clear calls and a comfortable listening experience.";
    } else if (product === "Apple Watch") {
        price = "Price model ke hisaab se";
        description = "Track your activity, workouts and daily health metrics.";
    } else if (product === "HomePod") {
        price = "Price model ke hisaab se";
        description = "Enjoy immersive sound and smart home features.";
    } else if (product === "Apple TV 4K") {
        price = "Price model ke hisaab se";
        description = "Enjoy movies, shows and entertainment on your TV.";
    } else if (product === "Apple Pencil") {
        price = "Price model ke hisaab se";
        description = "Write, draw and take notes with Apple Pencil.";
    }


    if (product === "iPhone") {
        price = "Starting from ₹299900.00";
        description = "Explore iPhone with an amazing camera and powerful performance.";
    } else if (product === "Mac") {
        price = "Starting from ₹399900.00";
        description = "Discover Mac for work, creativity and everyday use.";
    } else if (product === "Accessories") {
        price = "Starting from ₹42900.00";
        description = "Explore keyboards, mice, cables and more Apple accessories.";
    } else if (product === "iPad") {
        price = "Starting from ₹42900.00";
        description = "Explore iPad for creativity, learning and entertainment.";
    } else if (product === "AirPods") {
        price = "Starting from ₹14900.00";
        description = "Enjoy wireless audio and clear sound";
    } else if (product === "Apple Watch") {
        price = "Starting from ₹25,000";
        description = "Track workout and daily activity";
    } else if (product === "HomePod") {
        price = "Starting from ₹39900.00";
        description = "Enjoy amazing sound at home";
    } else if (product === "Apple TV 4k") {
        price = "Starting from ₹39900.00";
        description = "Enjoy movies and show on your TV";
    } else if (product === "Apple Pencil") {
        price = "Starting from ₹11,900";
        description = "Write, drow and take notes"
    }




    document.getElementById("popup-title").textContent = product;
    document.getElementById("popup-image").src = image;
    document.getElementById("popup-description").textContent = description;
    document.getElementById("popup-price").textContent = price;

    document.getElementById("product-popup").style.display = "flex";
}

function closeDetails() {
    document.getElementById("product-popup").style.display = "none";
}

function buyNow() {
    const product = document.getElementById("popup-title").textContent.trim();

    if (product === "iPhone") {
        window.location.href = "iphone.html";
    } else if (product === "Mac") {
        window.location.href = "mac.html";
    } else if (product === "iPad") {
        window.location.href = "iPad.html";
    } else if (product === "Apple Watch") {
        window.location.href = "AppleWatch.html";
    } else if (product === "AirPods") {
        window.location.href = "AirPod.html";
    } else if (product === "HomePod") {
        window.location.href = "HomePod.html";
    } else if (product === "Apple TV 4k") {
        window.location.href = "AppleTV4k.html";
    } else if (product === "Accessories") {
        window.location.href = "Accessories.html";
    } else if (product === "Apple Pencil") {
        window.location.href = "ApplePencil.html";
    }
}

let cart = JSON.parse(localStorage.getItem("appleStoreCart")) || [];

function updateCartCount() {
    const countElement = document.getElementById("cart-count");

    if (countElement) {
        countElement.textContent = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }
}

function addToCart() {
    const title = document.getElementById("popup-title");
    const priceElement = document.getElementById("popup-price");

    if (!title || !priceElement) {
        alert("Product details nahi mili!");
        return;
    }

    const name = title.textContent.trim();
    const price = Number(
        priceElement.textContent.replace(/[^\d.]/g, "")
    );

    if (!name || !Number.isFinite(price) || price <= 0) {
        alert("Product ki price check karo!");
        return;
    }

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("appleStoreCart", JSON.stringify(cart));
    updateCartCount();

    alert(name + " cart mein add ho gaya! 🛒");
}

document.addEventListener("DOMContentLoaded", updateCartCount);