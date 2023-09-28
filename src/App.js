import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import ManyProducts from './components/ManyProducts';
import AddProduct from './components/AddProduct';
import Accueil from './components/Accueil'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    })
    setProducts(products.filter((product) => product.id !== id))
  }

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  }

  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    const newProduct = await res.json()
    setProducts([...products, newProduct])
  }

  const updateProduct = async (productUpdate) => {
    const id = productUpdate.id
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productUpdate)
    })
    const data = await res.json()
    setProducts(products.map((product) => product.id === id ? {...product, data} : product))
  }

  const [showAddProduct, setShowAddProduct] = useState(false)
  
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/products' element={
            <>
            <div className="container">
              <Header onAdd={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
              {showAddProduct && <AddProduct onAdd={addProduct}/>}
            </div>
              {products.length > 0 ? (<ManyProducts products = {products} onDeleteMany={deleteProduct} onUpdateMany={updateProduct}/>) : ('No products')}
            </>
          }/>
        </Routes>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
