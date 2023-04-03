import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/products'
import {CgMathMinus,CgMathPlus} from 'react-icons/cg'
import { productsCard } from '../redux/actions/card'

const Detail = () => {
  const [count,setConunt]=useState(0)
  const{id}=useParams();
  console.log("id",id)

  const dispatch= useDispatch();
  const {product}=useSelector(state => state.product)
  
  useEffect(()=>{
    dispatch(productsActionDetail(id))
  },[dispatch]) 

  console.log("product",product)
  const decrement=()=>{
    if(count >0){
      setConunt(count- 1)
    }

  }
  const increment=(stock)=>{
    if(count<=stock){
      setConunt(count+1)
    }
  }
  const addCard=()=>{
    dispatch( productsCard(id,count))
    dispatch({type:'DRAWER' ,payload:true})
  }
  return (
    <div className='w-full flex items-center   justify-center'flex >
      <img className='w-1/3' src={product?.image}/>
      <div className='w-2/3 space-y-5'>
        <div className='font-bold text-lg'>{product?.title}</div>
        <div className='opacity-70 '>{product?.description}</div>
        <div className='opacity-70 '> Category: {product?.category}</div>
        <div className='opacity-70 '>Rate: {product?.rating?.rate}  -  Stock: {product?.rating?.count}</div>
        <div className='font-bold text-lg'>Fiyat : {product?.price}$</div>
        <div className='flex items-center space-x-4'>
        <CgMathMinus onClick={decrement} className='cursor-pointer border rounded-lg p-1' size={30} />
        <span className='text-2xl'>{count}</span>
        <CgMathPlus onClick={()=>increment(product?.rating?.count)} className='cursor-pointer border rounded-lg p-1' size={30}/>
      
        </div>
        <button onClick={addCard} className='P-3 w-80 bg-indigo-600 text-center text-lg rounded-lg text-white'>Sepete Ekle</button>
      </div>
     
    </div>
  )
}

export default Detail