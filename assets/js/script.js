const products = [
  {
    id: "everyday-tote",
    name: "Everyday Tote",
    type: "Tote Bag",
    price: "Rp289.000",
    tag: "best",
    badge: "BEST SELLER",
    image: "./assets/products/produk (1).jpeg",
    description:
      "Tote serbaguna untuk membawa semua kebutuhan harianmu. Lapang, ringan, dan siap menemani dari pagi sampai malam.",
  },
  {
    id: "mini-loop",
    name: "Mini Loop",
    type: "Shoulder Bag",
    price: "Rp239.000",
    tag: "new",
    badge: "NEW",
    image: "./assets/products/produk (2).jpeg",
    description:
      "Ukuran ringkas dengan tali yang nyaman. Pas untuk hari-hari ketika kamu hanya perlu membawa yang penting.",
  },
  {
    id: "campus-carry",
    name: "Campus Carry",
    type: "Backpack",
    price: "Rp329.000",
    tag: "best",
    badge: "BEST SELLER",
    image: "./assets/products/produk (3).jpeg",
    description:
      "Backpack fungsional dengan ruang khusus untuk barang esensial. Dibuat untuk langkah yang selalu bergerak.",
  },
  {
    id: "pumpkin-pouch",
    name: "Pumpkin Pouch",
    type: "Mini Pouch",
    price: "Rp119.000",
    tag: "seasonal",
    badge: "HALLOWEEN",
    image: "./assets/products/produk (4).jpeg",
    description:
      "Pouch kecil berkarakter untuk menyimpan benda-benda kecilmu. Edisi terbatas Halloween.",
  },
  {
    id: "weekend-sling",
    name: "Weekend Sling",
    type: "Sling Bag",
    price: "Rp259.000",
    tag: "new",
    badge: "NEW",
    image: "./assets/products/produk (5).jpeg",
    description:
      "Sling bag ringan yang mengikuti ritme akhir pekanmu. Praktis dipakai dan mudah dipadukan.",
  },
  {
    id: "moss-tote",
    name: "Moss Market Tote",
    type: "Tote Bag",
    price: "Rp269.000",
    tag: "all",
    badge: "",
    image: "./assets/products/produk (6).jpeg",
    description:
      "Tote dengan bentuk klasik dan ruang lega. Pilihan ideal untuk belanja atau aktivitas sehari-hari.",
  },
  {
    id: "boo-box",
    name: "Boo Box Bag",
    type: "Crossbody Bag",
    price: "Rp279.000",
    tag: "seasonal",
    badge: "HALLOWEEN",
    image: "./assets/products/produk (7).jpeg",
    description:
      "Crossbody bag dengan siluet unik dari koleksi Halloween Edit. Bawa sisi playful-mu ke mana saja.",
  },
  {
    id: "daily-pouch",
    name: "Daily Pouch",
    type: "Mini Pouch",
    price: "Rp99.000",
    tag: "all",
    badge: "",
    image: "./assets/products/produk (8).jpeg",
    description:
      "Pouch simpel untuk merapikan barang kecil di dalam tas. Kecil, berguna, dan selalu siap.",
  },
];
function renderProducts(filter = "all") {
  const grid = document.querySelector("#product-grid");
  if (!grid) return;
  grid.innerHTML = products
    .filter((p) => filter === "all" || p.tag === filter)
    .map(
      (p) =>
        `<a class="product-card" href="product-detail.html?id=${p.id}"><div class="product-photo">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}<img src="${p.image}" alt="${p.name}"></div><div class="product-meta"><div><p class="product-name">${p.name}</p><p class="product-type">${p.type}</p></div><p class="product-price">${p.price}</p></div></a>`,
    )
    .join("");
}
renderProducts();

const catalogueGrid = document.querySelector("#catalogue-grid");
if (catalogueGrid) {
  catalogueGrid.innerHTML = products
    .map(
      (p) =>
        `<a class="product-card" href="product-detail.html?id=${p.id}"><div class="product-photo">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}<img src="${p.image}" alt="${p.name}"></div><div class="product-meta"><div><p class="product-name">${p.name}</p><p class="product-type">${p.type}</p></div><p class="product-price">${p.price}</p></div></a>`,
    )
    .join("");
  document.querySelector("#catalogue-count").textContent =
    `${String(products.length).padStart(2, "0")} PRODUK`;
}
document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  }),
);
const menu = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".nav");
if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));
const data =
  products.find(
    (p) => p.id === new URLSearchParams(location.search).get("id"),
  ) || products[0];
if (document.querySelector("#detail-name")) {
  document.title = `${data.name} — BAGIE`;
  ["name", "price", "description", "tag"].forEach(
    (key) =>
      (document.querySelector(`#detail-${key}`).textContent =
        key === "tag"
          ? data.tag === "seasonal"
            ? "HALLOWEEN EDIT"
            : "BAGIE COLLECTION"
          : data[key]),
  );
  const image = document.querySelector("#detail-image");
  image.src = data.image;
  image.alt = data.name;
}
document.querySelectorAll(".swatch").forEach((s) =>
  s.addEventListener("click", () => {
    document.querySelector(".swatch.active").classList.remove("active");
    s.classList.add("active");
  }),
);
