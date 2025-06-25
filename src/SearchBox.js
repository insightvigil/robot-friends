import React from 'react'

const SearchBox = ({searchfield,searchChange}) => {
    
    return (
        < section className="pa2 tc">
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type ='search' 
            placeholder='search robots'
            onChange={searchChange}/>
        </section>
    );

}

export default SearchBox