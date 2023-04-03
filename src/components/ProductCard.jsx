import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className=' hover:border-pink-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2'>
   <img onClick={()=>window.location=`detail/${item.id}`} className='h-32 object-cover' src={item?.image} alt=''/>
   <div className='font-bold h-16 text-center'>{(item?.title).substring(0,30)}</div>
   <div className='text-center'>{(item?.description).substring(0,45)}...</div>
   <div className='font-bold text-lg' >{item?.price}$</div>
   <button className='bg-blue-600 w-full p-2 rounded lg text-white'>SEPETE EKLE</button>
    </div>
  )
}

export default ProductCard