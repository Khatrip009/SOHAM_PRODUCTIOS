export default function ProductModal({ open, onClose, product }) {
  if (!open || !product) return null
  const imgs = Array.isArray(product.images) && product.images.length ? product.images : ['images/placeholder.jpg']

  return (
    <div className={`modal ${open ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-images">
            <img src={imgs[0]} alt={product.name} className="modal-main-image" id="modalMainImg" />
            <div className="modal-thumbs">
              {imgs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  className={i === 0 ? 'active' : ''}
                  onClick={(e) => {
                    document.getElementById('modalMainImg').src = src
                    e.currentTarget.parentElement.querySelectorAll('img').forEach(x => x.classList.remove('active'))
                    e.currentTarget.classList.add('active')
                  }}
                />
              ))}
            </div>
          </div>
          <div className="modal-details">
            <h2>{product.name}</h2>
            <p><strong>Price:</strong> {product.price ?? '-'}</p>
            <p><strong>MOQ:</strong> {product.moq ?? '-'}</p>
            <p><strong>Fabric:</strong> {product.fabric ?? '-'}</p>
            <p><strong>Pattern:</strong> {product.pattern ?? '-'}</p>
            <p><strong>Size/Waist:</strong> {product.size ?? product.waist ?? '-'}</p>
            <p><strong>Occasion:</strong> {product.occasion ?? 'Daily Wear'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
