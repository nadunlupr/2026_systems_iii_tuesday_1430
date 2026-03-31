import { useEffect, useState } from "react"

export default function ProductList() {

    const initialState = {
        products: []
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await res.json();
                console.log('product list: ', products);
                setState({...state, products})

            } catch (err) {
                console.log('server call failed: ', err)
            }
        }

        loadProducts();

    }, [])

    return (
        <div>
            <h1>Your product list goes here</h1>
            {
                state.products.map(product => <div>Some product</div>)
            }
        </div>
    )
}