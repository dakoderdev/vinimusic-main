const USER_STORAGE_KEY = "loggedInUser"
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

const lista = document.getElementById("listaProductos")
let productosMostrados = 9

function renderProductos(listaProductos = productos) {
  if (!lista) return
  lista.innerHTML = ""
  listaProductos.slice(0, productosMostrados).forEach((prod) => {
    const id = productos.indexOf(prod) + 1
    const col = document.createElement("div")
    col.classList.add("col-md-4")
    col.innerHTML = `
      <div class="card h-100 bg-black text-light producto-card" data-id="${id}">
        <div class="card-img-wrapper">
          <img src="public/${prod.img}" class="card-img-top producto-img" alt="${prod.nombre}">
          <div class="card-overlay">
            <div class="genre-tags">
              ${prod.generos
                .slice(0, 2)
                .map((g) => `<span class="genre-tag">${g}</span>`)
                .join("")}
            </div>
          </div>
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-artist">${prod.artista}</p>
            <p class="card-precio card-text">$${prod.precio.toLocaleString()}</p>
          </div>
          <button class="btn btn-primary fw-semibold mt-2 py-2 agregar" data-id="${id}">Agregar al carrito</button>
        </div>
      </div>
    `
    lista.appendChild(col)
  })
  const verMasBtn = document.getElementById("verMasBtn")
  if (verMasBtn) {
    verMasBtn.style.display = productosMostrados >= listaProductos.length ? "none" : "block"
  }
}

renderProductos()

function clickCard(e) {
  const target = e.target
  const productCard = target.closest(".card")
  if (target.classList.contains("agregar")) {
    e.stopPropagation()
    agregarAlCarrito(Number(target.dataset.id))
  } else if (productCard && !target.classList.contains("agregar")) {
    abrirDetalle(productCard.dataset.id)
  }
}
document.addEventListener("click", clickCard)

function agregarAlCarrito(id) {
  const productoBase = productos[id - 1]
  if (!productoBase) return
  const item = carrito.find((p) => p.id === id)
  if (item) {
    item.cantidad++
  } else {
    carrito.push({ ...productoBase, id, cantidad: 1 })
  }
  mostrarCarrito()
  localStorage.setItem("carrito", JSON.stringify(carrito))
  animarCarrito()
}

function abrirDetalle(id) {
  if (!id) return
  window.location.href = `details.html?id=${id}`
}

const form = document.getElementById("loginForm")
const error = document.getElementById("loginError")
const loginButton = document.getElementById("loginButton")
const bootstrap = window.bootstrap

function loginSubmit(e) {
  e.preventDefault()
  const user = document.getElementById("usuario").value.trim()
  const pass = document.getElementById("clave").value.trim()
  if (!user || !pass) {
    error.textContent = "Debes ingresar usuario y contraseña."
    return
  }
  localStorage.setItem(USER_STORAGE_KEY, user)
  error.textContent = ""
  const modalElement = document.getElementById("loginModal")
  const modal = bootstrap.Modal.getInstance(modalElement)
  modal.hide()
}
form.addEventListener("submit", loginSubmit)

const contenedor = document.getElementById("carritoLista")

function mostrarCarrito() {
  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-center'>Tu carrito está vacío.</p>"
    return
  }
  let total = 0
  let html = `
    <table class="table table-dark table-striped text-center align-middle">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
  `
  carrito.forEach((item) => {
    const subtotal = item.precio * item.cantidad
    total += subtotal
    html += `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>$${item.precio.toLocaleString()}</td>
        <td>$${subtotal.toLocaleString()}</td>
      </tr>
    `
  })
  html += `
      </tbody>
    </table>
    <h4 class="text-end mt-3">$${total.toLocaleString()}</h4>
  `
  contenedor.innerHTML = html
}
mostrarCarrito()

const carritoButton = document.getElementById("carritoButton")

function animarCarrito() {
  carritoButton.classList.add("carrito-jump")
  setTimeout(() => carritoButton.classList.remove("carrito-jump"), 600)
}

const vaciarButton = document.getElementById("vaciar")
const comprarButton = document.getElementById("comprar")

function vaciarCarrito() {
  localStorage.removeItem("carrito")
  location.reload()
}
vaciarButton.addEventListener("click", vaciarCarrito)
comprarButton.addEventListener("click", vaciarCarrito)

function renderCarousel() {
  const carouselInner = document.getElementById("carouselInner")
  const carouselIndicators = document.getElementById("carouselIndicators")
  if (!carouselInner || !carouselIndicators) return

  let destacados = productos.filter((p) => p.destacado)
  destacados = destacados.sort(() => Math.random() - 0.5).slice(0, 5)

  carouselInner.innerHTML = ""
  carouselIndicators.innerHTML = ""

  destacados.forEach((prod, index) => {
    const id = productos.indexOf(prod) + 1
    const slide = document.createElement("a")
    slide.href = `details.html?id=${id}`
    slide.className = `carousel-item ${index === 0 ? "active" : ""}`
    slide.innerHTML = `
      <img src="public/${prod.img}" class="d-block w-100 img-carousel" alt="${prod.nombre}">
      <div class="carousel-caption">
        <div class="carousel-genre-badge">${prod.generos[0]}</div>
        <span><strong>${prod.nombre}</strong> - ${prod.artista}</span>
      </div>
    `
    carouselInner.appendChild(slide)
    const indicator = document.createElement("button")
    indicator.type = "button"
    indicator.setAttribute("data-bs-target", "#carouselExample")
    indicator.setAttribute("data-bs-slide-to", index)
    if (index === 0) indicator.className = "active"
    carouselIndicators.appendChild(indicator)
  })

  const carouselElement = document.getElementById("carouselExample")
  new bootstrap.Carousel(carouselElement, { interval: 4000, ride: "carousel" })
}
renderCarousel()

const verMasBtn = document.getElementById("verMasBtn")

function aplicarFiltroActivo() {
  const activo = document.querySelector(".btn-filtro.activo")
  const generoSeleccionado = activo ? activo.dataset.genero : "todos"
  let productosFiltrados
  if (generoSeleccionado === "todos") {
    productosFiltrados = productos
  } else {
    productosFiltrados = productos.filter((p) =>
      p.generos.some(
        (g) => g.toLowerCase().replaceAll("-", "-").trim() === generoSeleccionado
      )
    )
  }
  renderProductos(productosFiltrados)
}

if (verMasBtn) {
  verMasBtn.addEventListener("click", () => {
    productosMostrados += 9
    aplicarFiltroActivo()
  })
}

const contenedorFiltros = document.getElementById("filtrosGenero")

const todosLosGeneros = productos.flatMap((p) =>
  p.generos.map((g) => g.toLowerCase().trim())
)

const conteo = {}
for (const genero of todosLosGeneros) {
  conteo[genero] = (conteo[genero] || 0) + 1
}

const generosOrdenados = Object.entries(conteo)
  .sort((a, b) => b[1] - a[1])
  .map(([genero]) => genero)

let generosUnicos = ["todos", ...generosOrdenados.slice(0, 10)]


contenedorFiltros.innerHTML = generosUnicos
  .map(
    (genero, i) => `
      <button class="btn-filtro ${i === 0 ? "activo" : ""}" data-genero="${genero}">
        ${genero.charAt(0).toUpperCase() + genero.slice(1)}
      </button>
    `
  )
  .join("")

const botonesFiltro = document.querySelectorAll(".btn-filtro")

botonesFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("activo"))
    btn.classList.add("activo")
    const generoSeleccionado = btn.dataset.genero
    let productosFiltrados
    if (generoSeleccionado === "todos") {
      productosFiltrados = productos
    } else {
      productosFiltrados = productos.filter((p) =>
        p.generos.some(
          (g) => g.toLowerCase().replaceAll("-", "-").trim() === generoSeleccionado
        )
      )
    }
    renderProductos(productosFiltrados)
  })
})

renderProductos(productos)
