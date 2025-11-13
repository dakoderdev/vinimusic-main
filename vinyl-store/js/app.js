// === ESTADO GLOBAL ===
let carrito = []
let openCartAfterLogin = false
let loggedUser = null

// === PRODUCTOS ===
let productosMostrados = 12

function renderProductos(listaProductos = productos) {
  const lista = document.getElementById("listaProductos")
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
          <button class="btn btn-primary fw-semibold mt-2 py-2 agregar" data-id="${id}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `
    lista.appendChild(col)
  })

  const verMasBtn = document.getElementById("verMasBtn")
  if (verMasBtn)
    verMasBtn.style.display = productosMostrados >= listaProductos.length ? "none" : "block"
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
  if (!loggedUser) {
    showLoginModal()
    openCartAfterLogin = () => agregarAlCarrito(id)
    return
  }

  const productoBase = productos[id - 1]
  if (!productoBase) return

  const item = carrito.find((p) => p.id === id)
  if (item) item.cantidad++
  else carrito.push({ ...productoBase, id, cantidad: 1 })

  mostrarCarrito()
  animarCarrito()

  const boton = document.querySelector(`.agregar[data-id="${id}"]`)
  if (boton) {
    const oldText = boton.innerHTML
    boton.innerHTML = "&check; Comprado"
    boton.classList.add("animando")
    boton.style.animation = "confirm-buy 1s ease"
    setTimeout(() => {
      boton.style.animation = ""
      boton.classList.remove("animando")
      boton.innerHTML = oldText
    }, 1000)
  }
}


function abrirDetalle(id) {
  if (id) window.location.href = `details.html?id=${id}`
}

// === LOGIN Y CARRITO ===
function isLogged() {
  return Boolean(loggedUser)
}

function showLoginModal() {
  const loginModalEl = document.getElementById("loginModal")
  const loginModalInstance = bootstrap.Modal.getOrCreateInstance(loginModalEl)
  loginModalInstance.show()
}

function handleCarritoClick(e) {
  e.preventDefault()

  const carritoButton = e.currentTarget
  const offcanvasEl = document.getElementById("offcanvas")
  const offcanvasInstance = offcanvasEl ? new bootstrap.Offcanvas(offcanvasEl) : null

  if (!isLogged()) {
    openCartAfterLogin = true
    showLoginModal()
    return
  }
  if (offcanvasInstance) offcanvasInstance.show()
}

const carritoButton = document.getElementById("carritoButton")
if (carritoButton) carritoButton.addEventListener("click", handleCarritoClick)

function handleLoginSubmit(e) {
  e.preventDefault()

  const form = e.currentTarget
  const user = document.getElementById("usuario").value.trim()
  const pass = document.getElementById("clave").value.trim()
  const error = document.getElementById("loginError")
  const loginModalEl = document.getElementById("loginModal")
  const offcanvasEl = document.getElementById("offcanvas")

  if (!user || !pass) {
    error.textContent = "Debes ingresar usuario y contraseña."
    return
  }

  loggedUser = user
  error.textContent = ""

  const loginModalInstance = bootstrap.Modal.getOrCreateInstance(loginModalEl)
  loginModalInstance.hide()

  // ✅ Support both "retry action" or "open cart"
  if (typeof openCartAfterLogin === "function") {
    openCartAfterLogin()
    openCartAfterLogin = false
  } else if (openCartAfterLogin && offcanvasEl) {
    const offcanvasInstance = new bootstrap.Offcanvas(offcanvasEl)
    offcanvasInstance.show()
    openCartAfterLogin = false
  }
}

const form = document.getElementById("loginForm")
if (form) form.addEventListener("submit", handleLoginSubmit)

function mostrarCarrito() {
  const contenedor = document.getElementById("carritoLista")
  if (!contenedor) return

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

function animarCarrito() {
  const carritoButton = document.getElementById("carritoButton")
  carritoButton.classList.add("carrito-jump")
  setTimeout(() => carritoButton.classList.remove("carrito-jump"), 600)
}

function requireLoginBefore(actionFn) {
  return (e) => {
    if (!isLogged()) {
      e.preventDefault()
      openCartAfterLogin = false
      showLoginModal()
      return
    }
    actionFn(e)
  }
}

function handleVaciarCarrito() {
  carrito = []
  mostrarCarrito()
}

const vaciarButton = document.getElementById("vaciar")
if (vaciarButton) vaciarButton.addEventListener("click", requireLoginBefore(handleVaciarCarrito))

function handleComprar() {
  carrito = []
  mostrarCarrito()
  const offcanvasEl = document.getElementById("offcanvas")
  const offcanvasInstance = offcanvasEl ? new bootstrap.Offcanvas(offcanvasEl) : null
  if (offcanvasInstance) offcanvasInstance.hide()
  alert("Compra simulada. Gracias por tu compra 🎉")
}

const comprarButton = document.getElementById("comprar")
if (comprarButton) comprarButton.addEventListener("click", requireLoginBefore(handleComprar))

// === CARRUSEL ===
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

// === FILTRO DE GÉNEROS ===
function aplicarFiltroActivo() {
  const activo = document.querySelector(".btn-filtro.activo")
  const generoSeleccionado = activo ? activo.dataset.genero : "todos"
  const productosFiltrados =
    generoSeleccionado === "todos"
      ? productos
      : productos.filter((p) =>
          p.generos.some(
            (g) => g.toLowerCase().replaceAll("-", "-").trim() === generoSeleccionado
          )
        )
  renderProductos(productosFiltrados)
}

function handleVerMasClick() {
  productosMostrados += 12
  aplicarFiltroActivo()
}

const verMasBtn = document.getElementById("verMasBtn")
if (verMasBtn) verMasBtn.addEventListener("click", handleVerMasClick)

function renderFiltros() {
  const contenedorFiltros = document.getElementById("filtrosGenero")
  const todosLosGeneros = productos.flatMap((p) =>
    p.generos.map((g) => g.toLowerCase().trim())
  )
  const conteo = {}
  for (const genero of todosLosGeneros) conteo[genero] = (conteo[genero] || 0) + 1

  const generosOrdenados = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .map(([genero]) => genero)

  const generosUnicos = ["todos", ...generosOrdenados.slice(0, 10)]
  contenedorFiltros.innerHTML = generosUnicos
    .map(
      (genero, i) => `
        <button class="btn-filtro ${i === 0 ? "activo" : ""}" data-genero="${genero}">
          ${genero.charAt(0).toUpperCase() + genero.slice(1)}
        </button>
      `
    )
    .join("")

  const botonesFiltro = contenedorFiltros.querySelectorAll(".btn-filtro")
  botonesFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
      botonesFiltro.forEach((b) => b.classList.remove("activo"))
      btn.classList.add("activo")

      const generoSeleccionado = btn.dataset.genero
      const productosFiltrados =
        generoSeleccionado === "todos"
          ? productos
          : productos.filter((p) =>
              p.generos.some(
                (g) => g.toLowerCase().replaceAll("-", "-").trim() === generoSeleccionado
              )
            )
      renderProductos(productosFiltrados)
    })
  })
}
renderFiltros()
