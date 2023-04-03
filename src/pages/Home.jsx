import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {productsAction} from  './../redux/actions/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
   const dispatch=useDispatch()
  const{products}=useSelector(state=>state.products)
  
 

  useEffect(()=>{
    dispatch(productsAction())
  },[dispatch])
  return (
    <div className='flex flex-wrap justify-center'>
      {
        products && products.map((item,index)=>(
          <ProductCard key={index}  item={item}/>
        ))
      }
    </div>
  )
}

export default Home