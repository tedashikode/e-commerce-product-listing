import React from 'react'
import Button from './Button'

const Search = () => {
    function searchProducts() {
        console.log("searching...");
    }

    return (
        <div>
            <Button btnName={"Search"} handleClick={() => searchProducts()}/>
        </div>
    )
}

export default Search
