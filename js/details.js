// Página de detalle
const contenedorDetalle = document.getElementById("productoDetalle")

function conseguirId() {
  const params = new URLSearchParams(window.location.search)
  const id = parseInt(params.get("id"))
  return isNaN(id) ? null : id
}

function renderProducto() {
  const productId = conseguirId()
  const product = productos.find((p, index) => index + 1 === productId)

  if (!product) {
    contenedorDetalle.innerHTML = `
      <div class="col-12 text-center my-5">
        <h3 class="text-danger">Producto no encontrado.</h3>
        <p>El ID proporcionado en la URL no corresponde a ningún producto.</p>
      </div>
    `
    return
  }

  const genresHTML = (product.generos || [])
    .map((g) => `<span>${g}</span>`)
    .join("")

  const detailHTML = `
    <div class="detail-container">
      <div class="detail-image-wrapper">
        <img src="public/${product.img}" class="detail-product-image" alt="${product.nombre}">
      </div>
      <div class="detail-info-wrapper">
        <div class="detail-genres mb-3">${genresHTML}</div>
        <h1 class="detail-title">${product.nombre}</h1>
        <h2 class="detail-artist">${product.artista}</h2>
        <p class="detail-description">${product.descripcion}</p>
        
        <hr class="detail-divider my-2">

        <div class="detail-price-section">
          <div class="detail-price-label">Precio</div>
          <div class="detail-price">$${product.precio.toLocaleString("es-AR")}</div>
        </div>

        <button class="btn btn-primary btn-lg w-100 fw-semibold agregar detail-add-btn" data-id="${productId}">
          <span class="btn-icon"></span> Agregar al Carrito
        </button>
      </div>
    </div>
  `

  contenedorDetalle.innerHTML = detailHTML
  document.title = `${product.nombre} | Vinimusic`
}

function cargaDePaginaDetalle() {
  renderProducto()
  if (typeof mostrarCarrito === "function") {
    mostrarCarrito()
  }
}

document.addEventListener("DOMContentLoaded", cargaDePaginaDetalle)
