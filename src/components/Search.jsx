import React from 'react'

const Search = () => {
    function searchProducts() {
        console.log("searching...");
    }

    return (
        <div>
            <form action="">
                <div>
                    
                </div>
                <input 
                    className="py-2 px-4 border rounded-3xl hover:bg-sky-500 hover:placeholder-slate-950"
                    name="Search"   
                    type="search" 
                    placeholder="Search"
                />
            </form>
        </div>
    )
}

export default Search
