import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductDetail, addToCart } from '../api/productApi'
import { useCart } from '../context/CartContext'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateCartCount } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)

  useEffect(() => {
    getProductDetail(id).then(product => {
      setProduct(product)
      setSelectedColor(product.options.colors[0]?.code)
      setSelectedStorage(product.options.storages[0]?.code)
    })
  }, [id])

  const handleAddToCart = async () => {
    await addToCart({
        id,
        colorCode: selectedColor,
        storageCode: selectedStorage
    })
    updateCartCount()
  }

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <button onClick={() => navigate('/')}>← Back to list</button>

      <div>
        <div>
          <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
        </div>

        <div>
          <h1>{product.brand} {product.model}</h1>
          <p>{product.price} €</p>

          <h2>Specifications</h2>
          <ul>
            <li>CPU: {product.cpu}</li>
            <li>RAM: {product.ram}</li>
            <li>OS: {product.os}</li>
            <li>Screen: {product.displayResolution}</li>
            <li>Battery: {product.battery}</li>
            <li>Cameras: {product.primaryCamera.join(', ')}</li>
            <li>Dimensions: {product.dimentions}</li>
            <li>Weight: {product.weight}</li>
          </ul>

          <h2>Options</h2>
          <div>
            <p>Storage:</p>
            {product.options.storages.map(storage => (
              <button
                key={storage.code}
                onClick={() => setSelectedStorage(storage.code)}
                style={{ fontWeight: selectedStorage === storage.code ? 'bold' : 'normal' }}
              >
                {storage.name}
              </button>
            ))}
          </div>

          <div>
            <p>Color:</p>
            {product.options.colors.map(color => (
              <button
                key={color.code}
                onClick={() => setSelectedColor(color.code)}
                style={{ fontWeight: selectedColor === color.code ? 'bold' : 'normal' }}
              >
                {color.name}
              </button>
            ))}
          </div>

          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage