const products = [
  {
    id: 1,
    name: "SmartPhones",
    price: 10000,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487259_sd.jpg",
  },
  {
    id: 2,
    name: "Apple Airpords",
    price: 1500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrj5FnS9NSh2TJss_DhwcvbWW8drw_vPH1SHAH2m5AJSbY4rIKqZIoQmnklMZ_lqL2Io&usqp=CAU",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 999,
    image: "https://www.pngmart.com/files/13/Smartwatch-PNG-Pic.png",
  },
  {
    id: 4,
    name: "Backpack",
    price: 500,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.dkHSUova58tzZ1iUPA6LxgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
  },
  {
    id: 5,
    name: "Jackets",
    price: 1000,
    image:
      "https://th.bing.com/th/id/OIP.-uwXaUOEp0BMIHpaJiarEgHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 6,
    name: "Sneakers",
    price: 2500,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.C7zqY7kA1mllspShUhnBLgHaG1?pid=Api&P=0&h=180",
  },
  {
    id: 7,
    name: "T-Shirt",
    price: 300,
    image: "https://5.imimg.com/data5/LM/FE/MY-39044320/mens-denim-t-shirt.jpg",
  },
  {
    id: 8,
    name: "Jens",
    price: 700,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwQaB4_sCGQIxlD63EppVNCnL9NCdMlujHQ&s",
  },
  {
    id: 9,
    name: "Lamp",
    price: 450,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.xFo22VlPpZtPVVuw5JumEAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 10,
    name: "Computer",
    price: 12499,
    image:
      "https://m.media-amazon.com/images/I/71QtoB1MJIL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 11,
    name: "AC",
    price: 20000,
    image:
      "https://cdn.pixabay.com/photo/2021/09/08/07/20/air-conditioner-6605973_640.jpg",
  },
  {
    id: 12,
    name: "Laptop",
    price: 48000,
    image:
      "https://www.designinfo.in/wp-content/uploads/2023/10/HP-Laptop-15s-11th-Gen-Intel-Core-i5-1155G7-1.webp",
  },
  {
    id: 13,
    name: "Tablet",
    price: 13399,
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669031397/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/265565_ituyae.png",
  },
  {
    id: 14,
    name: "Smart TV",
    price: 60000,
    image:
      "https://m.media-amazon.com/images/I/71JQ3kUrR9L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 15,
    name: "Cricket Bat",
    price: 7999,
    image:
      "https://dkpcricketonline.com/cdn/shop/collections/image.heic?v=1744392198",
  },
  {
    id: 16,
    name: "Basketball",
    price: 399,
    image:
      "https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dwed95eba9/images/hi-res/74876E_SIDE.jpg?sw=1598&sh=1982&sm=cut&sfrm=jpg",
  },
  {
    id: 18,
    name: "Tennis Racket",
    price: 299,
    image: "https://5.imimg.com/data5/GN/YN/MY-3239865/teniss-bat-500x500.jpg",
  },
  {
    id: 19,
    name: "Running Shoes",
    price: 799,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.rklH8N2y4M7mibLCkxliPwHaDt?pid=Api&P=0&h=180",
  },
  {
    id: 20,
    name: "Cricket Ball",
    price: 16799,
    image:
      "https://nwscdn.com/media/catalog/product/cache/h900xw900/c/r/cricket-club-ball-family_1.jpg",
  },
  {
    id: 21,
    name: "Football",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYf5IMmgVS0OFoTZfrZwDjIsf3orTinmOzw&s",
  },
  {
    id: 22,
    name: "Volleyball",
    price: 699,
    image: "https://m.media-amazon.com/images/I/61pFab9tNeL.jpg",
  },
  {
    id: 23,
    name: "Glows",
    price: 1999,
    image:
      "https://sportsgoodsmarket.com/wp-content/uploads/2020/12/PRO-5-scaled.jpg",
  },
  {
    id: 24,
    name: "Cricket Bag",
    price: 899,
    image:
      "https://www.sstoncricket.com/wp-content/uploads/2023/04/Colt-Army-2-scaled.jpg",
  },
  {
    id: 25,
    name: "TNPSC Books",
    price: 699,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.jG09EAVGEuZCJch9YpmhXAAAAA?pid=ImgDet&w=184&h=143&c=7&dpr=1.3&o=7&rm=3",
  },
  {
    id: 26,
    name: "Note Book",
    price: 99,
    image:
      "https://m.media-amazon.com/images/I/718vM+75UNL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 27,
    name: "Accounting Book",
    price: 1250,
    image: "https://m.media-amazon.com/images/I/51Efz46NUML.jpg",
  },
  {
    id: 28,
    name: "History Book",
    price: 450,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.-S0K1UQCxcCSqeLJAsn8WgAAAA?pid=ImgDet&w=158&h=301&c=7&dpr=1.3&o=7&rm=3",
  },
  {
    id: 29,
    name: "Novel Book",
    price: 1200,
    image:
      "https://store.whitefalconpublishing.com/cdn/shop/files/TheEnglish_CoverHB_F_large.jpg?v=1718624085",
  },
  {
    id: 30,
    name: "Science Book",
    price: 399,
    image:
      "https://m.media-amazon.com/images/I/71lDUGfRa8L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 31,
    name: "Hoodie",
    price: 999,
    image:
      "https://www.davidgandywellwear.com/cdn/shop/products/Ultimate-Loopback-Hoodie-Black.jpg?v=1677258480&width=1946",
  },
  {
    id: 32,
    name: "Saree",
    price: 8000,
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/semi-soft-silk-pattu-saree-pattu-border-saree-2-378530579-jvodt.jpg",
  },
  {
    id: 33,
    name: "Shorts",
    price: 299,
    image: "https://m.media-amazon.com/images/I/61LKs361NjL.jpg",
  },
  {
    id: 34,
    name: "Lungi",
    price: 699,
    image: "https://m.media-amazon.com/images/I/61m6mdz32PL._UY1100_.jpg",
  },
  {
    id: 35,
    name: "Tops",
    price: 599,
    image:
      "https://womenfashionquotient.wordpress.com/wp-content/uploads/2015/01/stylish-kurtis-online.jpg",
  },
  {
    id: 36,
    name: "Curtains",
    price: 550,
    image:
      "https://decowindow.in/media/catalog/product/cache/9c5c0f05f03be2a2bfe530411f6cf51a/0/0/0065394-0020_1a_.jpg",
  },
  {
    id: 37,
    name: "Wall Clock",
    price: 999,
    image: "https://digital.hammacher.com/Items/86274/86274_1000x1000.jpg",
  },
  {
    id: 38,
    name: "Air Conditioning",
    price: 22999,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.vZke88jqJhCI3uZ_MBHAnwHaEJ?w=1000&h=560&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 39,
    name: "Sofa",
    price: 25999,
    image:
      "https://pchomedecor.com/cdn/shop/files/IMG-20231124-WA0163.jpg?v=1700813742",
  },
  {
    id: 40,
    name: "Table",
    price: 1800,
    image:
      "https://www.godrejinterio.com/imagestore/B2C/56101543SD00017/56101543SD00017_A2_1440x810.jpg",
  },
  {
    id: 41,
    name: "Fan",
    price: 999,
    image:
      "https://th.bing.com/th/id/OIP.cOsZsnblf-u2mtQ8Kh_eFwHaHa?w=216&h=215&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 42,
    name: "Steel Rack",
    price: 1899,
    image:
      "https://4.imimg.com/data4/AV/HJ/ANDROID-8711075/product-500x500.jpeg",
  },
  {
    id: 43,
    name: "Chain",
    price: 799,
    image:
      "https://inoxjewelry.in/cdn/shop/files/inox-jewelry-accessories-18k-gold-ion-plated-stainless-steel-4mm-curb-chain-33131942117491.jpg?v=1713747862",
  },
  {
    id: 44,
    name: "Earings",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaPPdmrkK9eEpUDbAX8oNYtM0aSeRgfOMTg&s",
  },
  {
    id: 45,
    name: "Gold Necklace",
    price: 55000,
    image:
      "https://www.chungathjewellery.com/media/catalog/product/cache/68d4aeb6f3ab656bf053a30e1b84b8a1/0/0/0000125990.png",
  },
  {
    id: 46,
    name: "Daimond Golusu",
    price: 77999,
    image:
      "https://www.darjewellery.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MjczNDI4NTgxNTUuanBn",
  },
  {
    id: 47,
    name: "Men's Bracelet",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/81e3mxxAnyL._SY695_.jpg",
  },
  {
    id: 48,
    name: "women's Bracelet",
    price: 1499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-v9cLWH2Z4Gh-lRh4KBfPtW60prOlFbf1CA&s",
  },
  {
    id: 49,
    name: "Gold Ring",
    price: 999,
    image:
      "https://cdn.shopify.com/s/files/1/0607/4813/6588/files/IMG20240824125616.png?v=1725155601",
  },
];

let cart = [];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("total");
const cartPanel = document.getElementById("cart");

function renderProducts() {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.innerHTML = `${item.name} x ${item.qty} - ₹${item.price * item.qty}`;
    cartItems.appendChild(div);
  });
  cartCount.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
  cartTotal.textContent = total;
}

function toggleCart() {
  cartPanel.classList.toggle("open");
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  toggleCart();
}

renderProducts();
