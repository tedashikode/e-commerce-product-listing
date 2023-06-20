import React from 'react'

const Search = ({handleClick}) => {
    
    return (
        <div className="py-2 px-4">
            <form action="">
                <span>
                    <input 
                        className="py-2 px-4 border rounded-3xl hover:bg-sky-500 hover:placeholder-slate-950"
                        name="Search"   
                        type="search" 
                        placeholder="Search"
                        onChange={handleClick}
                    />
                </span>
            </form>
        </div>
    )
}

export default Search
