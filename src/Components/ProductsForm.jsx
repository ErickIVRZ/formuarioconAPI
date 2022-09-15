import React, { useState } from 'react';

const ProductsForm = () => {

  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [isAvailable,setIsAviable]=useState(false)


const submit=(e)=>{
  e.preventDefault();

  const newProduct={
    id:Date.now(),
    name:name,
    category:category,
    price:price,
    isAvailable:isAvailable
  }
  console.log(newProduct);
}



  return (
   <form onSubmit={submit}>
    <div className='input-container'>
    <label htmlFor="name">Name</label>
    <input type="text"
     id='name'
     value={name}
     onChange={e => setName(e.target.value)}     
     />
    </div>


    <div className='input-container'>
    <label htmlFor="category">Category</label>
    <input type="text"
     id='category'
     value={category}
     onChange={e => setCategory(e.target.value)}
      />

    </div>


    <div className='input-container'>
    <label htmlFor="price">Price</label>
    <input type="number"
     id='price' 
     value={price}
     onChange={e => setPrice(e.target.value)}
     />

    </div>

    <div className='input-container'>
    <label htmlFor="isAvailable">is Available</label>
    <input type="checkbox"
     id="isAvailable"
     checked={isAvailable}
     onChange={(e) => setIsAviable(e.target.checked)}
      />

    </div>
    

    <button>Create Product</button>
    <button type="button">Clear</button>


   </form>
  );
};

export default ProductsForm;