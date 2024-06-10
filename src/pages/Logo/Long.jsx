import React, { useEffect, useState } from 'react'
import './Long.scss'
import { getAllProducts } from '../../api/product.api'
import { Card } from '../../components/Card/Card'

export const Long = () => {
    const [goods, setGoods] = useState([])

    const getProducts = async () => {
        const data = await getAllProducts()
        setGoods(data);
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <section className="products">
                <div className="container grid grid__col-4">
                    {goods?.map((product) => (
                        <Card
                            key={product.id}
                            src={product.thumbnailUrl} 
                            alt={product.title} 
                            title={product.title}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Long;
