import React from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function FilterableProductTable(props) {

    const [products, setProducts] = useState(props.products);
    const [filteredProducts, setFiltered] = useState(props.products);

    return (
        <div>
            <SearchBar />
            <ProductTable products={filteredProducts} />
        </div>
    )
}
