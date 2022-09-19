import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'



export const Brand = () =>{

    const [brands, setBrands] = useState()
    const [load, setLoad] = useState(false)


    const createBrand = async() =>{
        const title = document.getElementById('title-input').value;
        const city = document.getElementById('city-input').value;

        const response = await axios.post('http://localhost:3001/api/createBrand',{title:title, city:city})

        console.log(response)

        getBrands()
        
    }

    const getBrands = async () =>{
        const response = await axios.get('http://localhost:3001/api/brands')

        setBrands(response.data.brands)
    }



    useEffect(()=>{
        if(brands){
        setLoad(true)
        }
    },[brands])

    useEffect(()=>{
        getBrands()
    },[])


    if(load){
        console.log(brands)
    return (
        <div>
            <div>
                <input placeholder = "title" id = 'title-input'></input>
                <input placeholder = "city" id = 'city-input'></input>
                <button onClick = {() =>{createBrand()}}>Create Brand</button>
            </div> 
            <div className = 'flex-row-wrap'>
                {
                    brands.map((brand,index)=>{
                        return(
                            <div key = {index} className = 'brand-card'>
                                <div>{brand.title}</div>
                                <div>Located In:{brand.city}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
            }else{
                return(
                    <div>
                        <input placeholder = "title" id = 'title-input'></input>
                        <input placeholder = "city" id = 'city-input'></input>
                        <button onClick = {() =>{createBrand()}}>Create Brand</button>
                    </div> 
                )
            }
}