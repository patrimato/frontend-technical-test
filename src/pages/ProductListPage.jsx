import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../api/productApi'
import './ProductListPage.css'

function ProductListPage() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const filteredProducts = products.filter(product =>
    `${product.brand} ${product.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="plp-container">
      <input
        type="text"
        className="plp-search"
        placeholder="Search by brand or model"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="plp-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="plp-card" onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
            <p>{product.brand}</p>
            <p>{product.model}</p>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListPage