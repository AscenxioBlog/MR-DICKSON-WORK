import React, { createContext, useEffect, useState } from 'react'
import API_URL from '../../Config';

export const productsBox = createContext();

function ProductContext({children}) {
    let [products,setProducts] = useState([]);
    let [newArrivals,setNewArrivals] = useState([]);
    let [labProducts,setLabProducts] = useState([]);
    let [physicsProducts,setPhysicsProd] = useState([]);
    let [surgicalProducts,setSurgicalProd] = useState([]);
    let [hospitalProducts,setHospitalProd] = useState([]);
    let [chemistryProducts,setChemistryProd] = useState([]);
    



    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                // const res = await fetch(`${API_URL}/product`)
                const res = await fetch(`http://localhost:3600/product`);
                const data = await res.json();
                
                setProducts(data);
                console.log("Data:", data)

                                
               // 📌 Get the 13 most recently added products
                const recentProds = [...data]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 13);
                setNewArrivals(recentProds);
                console.log("Recent products:", recentProds);


                // filter for labProducts
                const labProds = data.filter(prod=>prod.category?.toLowerCase() === "lab");
                setLabProducts(labProds);
                console.log(labProds)

                // filter for hospitalProds 
                const hospitalProd = data.filter(prod=>prod.category?.toLowerCase() === "hospital");
                setHospitalProd(hospitalProd);
                console.log(hospitalProd)


                //filter for physics 
                const physicsProd = data.filter(prod=>prod.category?.toLowerCase() === "phsyics");
                setPhysicsProd(physicsProd);

                //filter for surgical 
                const surgicalProd = data.filter(prod=>prod.category?.toLowerCase() === "surgical");
                setSurgicalProd(surgicalProd);

                // filter for chemistry 
                const chemistryProd = data.filter(prod=>prod.category?.toLowerCase() === "chemistry");
                setChemistryProd(chemistryProd);
                

            } catch (error) {
                console.error("Error fetching products:", err);
            }
        }

        fetchProducts()
    },[])

  return (
    <productsBox.Provider value={{newArrivals, labProducts, physicsProducts, hospitalProducts, surgicalProducts, chemistryProducts}}>
        {children}
    </productsBox.Provider>
  )
}

export default ProductContext