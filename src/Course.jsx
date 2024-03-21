import React from 'react'

function Course({ course }) {
  
  const {id,title,description,price,image} =course;
    return (
    <div className='course'>
       <div>
        <img src={image} width={250} height={150}/>
        <div className='course-title'><h4>{title}</h4></div>
        <div className='course-desc'><p>{description}</p></div>
        <div className='course-price'><h3>{price}₺</h3></div>

       </div>
       
    </div>
  )
}

export default Course