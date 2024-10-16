import React, { useEffect, useState } from 'react'
import Cards from '../Components/Cards'
import { useNavigate } from 'react-router-dom'
import {ADDTOCART} from '../Action'
import { useDispatch } from 'react-redux'
export default function Home() {
      const [data,setData]=useState([])
      const dispatch=useDispatch()
      const navigate=useNavigate();
      useEffect(() => {
          try {
              fetch("https://dummyjson.com/products").then((res) => {
                  return res.json();
              }).then((data) => {
                  setData(data.products);
                  console.log(data)
              })
          } catch (error) {
              console.log(error)
          }
      }, [data])
      //view now....
      const viewPage=(images,id,title,description,category,price,rating)=>{
        navigate("/product",{
            state:{
                img:images,
                id:id,
                title:title,
                desc:description,
                category:category,
                price:price,
                rating:rating
            }
        })
        
      }
  return (
   <>
    <div>
    <h2 className='text-center my-4'>Top Categories to choose from</h2>
    <div className="col-lg-4 m-2 mx-4 gap-3 d-flex">
    <Cards  title="Cosmetics"
       img="card1.webp" 
    text=" Some quick cosmetics products for women beauty or women wear and enjoy the offers"
          button="Tap for more"/>
   
    <Cards
       title="Watches"
       img="card3.webp" 
    text="Stylish Boy's And Men's Watch with Premium Quality Collection Branded Waterproof Best Selling NEW ARRIVAL Latest Digital Watch.  "
          button="Tap for more"
    />
     <Cards
       title="Jewellery"
       img="card2.webp" 
    text="It has beautiful jewellery set along with necklace and earrings wear"
          button="Tap for more"
    />
     <Cards
       title="Shoes"
       img="card4.webp" 
    text="This shoes stylish fashionable and comfort"
          button="Tap for more"
    />
    </div>
    <div className='container mt-5'>
        <div className='row'>
        {data.map((item)=>(
            <div className='col-lg-4'>
            <img src={item.images[0]} style={{ height: "300px", width: "100%" }} alt="" />
                <h2><b>ID:</b>{item.id}</h2>
                <h4><b>Title:</b>{item.title}</h4>
                <p><b>Discription:</b>{item.description}</p>
                <h5><b>Categories:</b>{item.category}</h5>
                <h3><b>Price</b>{item.price}$</h3>
                <p><i>Rating</i>{item.rating}</p>
                <button className="btn btn-outline-primary" type="submit" onClick={()=>viewPage(
                    item.images[0],item.id,item.title,item.description,item.category,item.price,item.rating
                )}>
                      View now
                    </button>
                    <button className="btn btn-outline-primary mx-1" type="submit" onClick={()=>dispatch(
                        ADDTOCART({
                            id:item.id,
                            title:item.title
                        })
                    )}>
                      Add to cart
                    </button>
            </div>
        ))}
        </div>
     </div> 
    </div>
    </>
   
)
}