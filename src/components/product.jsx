import React, { use, useEffect, useState } from 'react'
import axios from 'axios'


const Product = ({corzinaImg,imgEditInp,h2EditInp,deleteBtn,priceEditInp,AdminModeBTN,changeBtn,filter,title,filters,filterButton,search,section,article,img,h2,button,price,btnAddProduct,closeClass,buttonClass,inputClass,titleClass,modalBoxClass,modalClass,cartModalClass,cartContentClass,cartHeaderClass,cartTitleClass,cartCloseClass,cartListClass,cartItemClass,cartImageClass,cartInfoClass,cartNameClass,cartPriceClass,cartQuantityClass,cartMinusClass,cartCountClass,cartPlusClass,cartFooterClass,cartTotalClass,cartTotalPriceClass,cartOrderButtonClass}) => {    
  const API_products = 'https://6ab8dbd7f84897980b7246ba.mockapi.io/shop/shop';

    // const API_products = 'https://fakestoreapi.com/products';

    const [IDX, setIDX] = useState(null);
    const [modal, setModal] = useState(false);
    const [products, setProducts] = useState([])

    // Api FUNC

    const getProducts = async () =>{
        try {
            const response = await axios.get(API_products);
            console.log(response.data)
            setProducts(response.data)
        } catch (error) {
            console.error(error);
            
        }
    }

    // mewProduct

    const newProdcut = async (newProduct)=>{
        try {
          const response = await axios.post(API_products, newProduct);
          setProducts([...products, response.data]);
          } catch (error) {
            console.error(error);
        
            }
    }

const addProductCart = (prodcut) =>{
  const productExists = addToCartProduct.find((e) => e.id === prodcut.id)

  if (productExists) {
    return
  } else {
    setAddToCartProduct([...addToCartProduct, {...prodcut, quantity:1}])
  }
}

    // ADD PRODUCT

    function addProduct() {

        if (imgProduct === '') {
            alert('error')
        }else  if (nameProduct === ''){
            alert('error')
        }else  if (priceProduct === ''){
            alert('error')
        }else{
            
        const newProductt = {
        image: imgProduct,
        title: nameProduct,
        price: priceProduct
        }

        newProdcut(newProductt);
        setNameProduct('')
        setPriceProduct('')
        setImgProduct('')
        }
    }

    // delProduct

    const delProduct = async (id) => {
      
      try {
      await axios.delete(`${API_products}/${id}`)
      setProducts(products.filter(e => e.id !== id))
      } 
    catch (error) {
        console.error(error);
    }
  }


  //   const delProduct = async (id) => {
      
  //     try {
  //     await axios.delete(`${API_products}/${id}`)
  //     getProducts();
  //     } 
  //   catch (error) {
  //       console.error(error);
  //   }
  // }

    // EditProduct

    const editProduct = async (IDX) =>{
      try {
      const response = await axios.put(`${API_products}/${IDX}`, {
        image: imageURL,
        title: titleProduct,
        price: priceProductt,
      })
      setProducts(products.map((e)=> e.id == IDX ? response.data : e)) 
      } catch (error) {
        console.error(error);
      }
    };


    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [imgProduct, setImgProduct] = useState("");


    const [adminPswrd, setAdminPswrd] = useState("admin444")
    const [admin, setAdmin] = useState(false)
    const [user, setUser] = useState(true)


     function confirmADM (){
      if (prompt('admin444') === adminPswrd) {
        setAdmin(true)
        setUser(false)
      }else{
        alert('ERROR!')
        alert('password: admin444')
      }
    }

    // edit product
    
    const [modalEdit, setModalEdit] = useState(false)
    const [imageURL, setImageURL] = useState("")
    const [titleProduct, setTitleProduct] = useState("")
    const [priceProductt, setPriceProductt] = useState("")

    function changeModal(IDX) {
    const product = products.find(e => e.id === IDX)

    setIDX(product.id)
    setImageURL(product.image)
    setTitleProduct(product.title)
    setPriceProductt(product.price)  
  };

    const [corzinaSVG, setCorzinaSVG] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    
    const [addToCartProduct, setAddToCartProduct] = useState([]);
    
    let totalPrice = 0

    addToCartProduct.forEach((e)=>{
      totalPrice = Math.round((totalPrice + Number(e.price) * e.quantity) * 100) / 100
    })


    const [searchProduct, setSearchProduct] = useState('');

    const filterProducts = products.filter(product =>{
      return product.title.toLowerCase().includes(searchProduct.toLowerCase())
    })
    
    useEffect(()=>{
        getProducts()
  }, []);

  return (
    <>

    <h2 className={title}>All Products</h2>
    <div className={filter}>
    
    <input
        className={search}
        onChange={(e) => setSearchProduct(e.target.value)}
        type="text"
        placeholder="Search products..."
    />

    <div className={filters}>

        <button className={filterButton}
        onClick={() => setCategory('All')}>
            All
        </button>

        <button className={filterButton}
        onClick={() => setCategory('Fruits')}>
            Fruits
        </button>

        <button className={filterButton}
        onClick={() => setCategory('Vegetables')}>
            Vegetables
        </button>

        <button className={filterButton}
        onClick={() => setCategory('Dairy')}>
            Dairy
        </button>

        <button className={filterButton} 
        onClick={() => setCategory('Bakery')}>
            Bakery
        </button>

        <button className={filterButton}
        onClick={() => setCategory('Drinks')}>
            Drinks
        </button>
        <button className={filterButton}
        onClick={() => setCategory('Snacks')}>
          Snacks
        </button>

      {user &&
      <button className={AdminModeBTN}

      onClick={()=>{confirmADM()}}
      >
        Admin Mode
      </button>
      }

    {admin && 
    <button 
    onClick={() => setModal(true)}
    className={btnAddProduct}>
    Add Product
    </button>
    }
    </div>

</div>


    <section className={section}>
    {filterProducts.map((e)=>(
    <article className={article} key={e.id}>
      {admin &&
      <button className={changeBtn}
      
      onClick={()=>{
      setModalEdit(true)
      changeModal(e.id)
      }}
      >
        change
      </button> 
      }
      {admin &&
      <button className={deleteBtn}
      
      onClick={()=>{
      delProduct(e.id)
      }}
      >
        delete
      </button> 
      }

            <img className={img} src={e.image} alt={e.title} />

            <h2 className={h2}>{e.title}</h2>

            <p className={price}>Price: ${e.price}</p>

            <button 
            onClick={()=>{setCorzinaSVG(true) 
              addProductCart(e);
            }}
            className={button}>Add to shop</button>
    </article>
    ))}
    </section>

    {/* Modal Add */}

    {modal && 
    <div className={modalClass}>

      <div className={modalBoxClass}>

        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className={titleClass}>
            Add Product
          </h2>

          <button
        className={closeClass}
        onClick={()=>{setModal(false)}}  
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Product name
          </label>

          <input
            type="text"
            onChange={(e)=>{setNameProduct(e.target.value)}}
            placeholder="Enter product name"
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Price
          </label>

          <input
          onChange={(e)=>{setPriceProduct(e.target.value)}}
            type="number"
            placeholder="Enter price"
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Image URL
          </label>

          <input
          onChange={(e)=>{setImgProduct(e.target.value)}}
            type="url"
            placeholder="Enter image URL"
            className={inputClass}
          />
        </div>
 
        <button
        
        onClick={()=>{
        addProduct()
        setModal(false)
        }}
        className={buttonClass}>
          Add Product
        </button>
        

      </div>

    </div>
    }


 {modalEdit &&
 <section className={modalClass}>
  <div className={modalBoxClass}>
  <article className={article} key={IDX}>

            <input value={imageURL} className={imgEditInp} 
            onChange={(e)=> setImageURL(e.target.value)}
            type="text" />
            
            <input value={titleProduct} className={h2EditInp} 
            onChange={(e)=> setTitleProduct(e.target.value)}
            type="text" />
            
            <input value={priceProductt} className={priceEditInp} 
            onChange={(e)=> setPriceProductt(e.target.value)}
            type="number" />
            
            <button 
            onClick={()=>{editProduct(IDX)
              setModalEdit(false)
            }}
            className={button}>Edit Product</button>
            <button className='cursor-pointer mt-1.5 text-red-600 text-[14px] hover:underline'
            onClick={()=>{setModalEdit(false)}}>CANCEL</button>
    </article>
    </div>
    </section>
 }


 {/* Корзина */}

{corzinaSVG && 
<svg onClick={()=>{setCartOpen(true)}} className={corzinaImg} width="220" height="220" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFB018"/>

  <path
    d="M35 35H45L50 65H88L94 43H48"
    fill="none"
    stroke="#000"
    stroke-width="5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <circle cx="57" cy="78" r="4" fill="#000"/>
  <circle cx="82" cy="78" r="4" fill="#000"/>

  <circle cx="98" cy="22" r="15" fill="#FF0000"/>

  <path
    d="M98 14V23"
    stroke="#fff"
    stroke-width="4"
    stroke-linecap="round"
  />
  <circle cx="98" cy="29" r="2.5" fill="#fff"/>
</svg>
}


  {/* Corzina  */}
  
  {cartOpen && 
  <div className={cartModalClass}>
  <div className={cartContentClass}>

    <div className={cartHeaderClass}>
      <h2 className={cartTitleClass}>Корзина</h2>
      <button className={cartCloseClass}
      onClick={()=>{setCartOpen(false)}}
      >×</button>
    </div>

    <div className={cartListClass}>

    {addToCartProduct.map((e)=>(
      
      <div className={cartItemClass} key={e.id}>
        <img className={cartImageClass} src={e.image} alt={e.title} />

        <div className={cartInfoClass}>
          <h3 className={cartNameClass}>{e.title}</h3>
          <p className={cartPriceClass}>{e.price}</p>
        </div>

        <div className={cartQuantityClass}>
          <button className={cartMinusClass}
           onClick={()=>{
  if (e.quantity === 1) {
    
    const cartItems = addToCartProduct.filter(item => item.id !== e.id)
    
    setAddToCartProduct(cartItems)

   if (cartItems.length === 0){
    setCorzinaSVG(false)
    setCartOpen(false)
   }

}else {
  e.quantity--
  setAddToCartProduct([...addToCartProduct])
}
  }}
          >−</button>
          <span className={cartCountClass}>{e.quantity}</span>
          <button className={cartPlusClass} 
           onClick={()=>{
  e.quantity++
  setAddToCartProduct([...addToCartProduct])
 }}>+</button>
        </div>
      </div>
    ))}

    </div>

    <div className={cartFooterClass}>
      <div className={cartTotalClass}>Итого</div>
      <div className={cartTotalPriceClass}>{totalPrice}</div>
    </div>

    <button className={cartOrderButtonClass}>Оформить заказ</button>

  </div>
</div>  
  
}
    </>




  )
}

export default Product