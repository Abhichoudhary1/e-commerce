import React, { useEffect, useState } from 'react'
import product from './product'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentmounted = true
    useEffect(() => {
        const getproducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentmounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentmounted = false;
            }

        }
        getproducts()
    }, [])

    const Loading = () => {
        return (
            <>
                ...Loading
            </>
        )
    }
    const Showproducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center ">
                    <div className="btn btn-outline-dark me-2">All</div>
                    <div className="btn btn-outline-dark me-2">Men's clothing</div>
                    <div className="btn btn-outline-dark me-2">Women's clothing</div>
                    <div className="btn btn-outline-dark me-2">children clothing</div>
                    <div className="btn btn-outline-dark me-2"> clothing</div>
                </div>

                {
            filter.map((Product) => {
                return (
                    <>
                        <div class="col-md-3 mb-4">
                            <div className='card h-100 text-center p-5' key={Product.id}>
                            <img src={Product.image} class="card-img-top" alt={Product.title} height="250px"/>
                                <div class="card-body">
                                    <h5 class="card-title mb-0">{Product.title.substring(0,12)}</h5>
                                    <p class="card-text lead fw-bold">${Product.price}</p>
                                    <NavLink to={`/Products/${Product.id}`} className='btn btn-outline-dark'>buy now</NavLink>
                                </div>
                            </div>
                          
                        </div>
    
    
    
                    </>
                )
            })
        }
            </>
        )
        
    
    }

  
    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className="col-12 mb-5"><h1 className='display-6 fw-bolder text-center'>latest products</h1></div>
            </div>

            <div className='row justify-content-center'>
                {loading ? <Loading /> : <Showproducts />}
            </div>
        </div>


    )
}

export default Products
