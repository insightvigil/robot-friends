import React from 'react'

const Card = ({name, email, id}) => {
    return(
        <section className='tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5'>
                <img alt="robot" src={"https://robohash.org/"+ id + "?200x200"}/>
            <section>
                <h2>{name}</h2>
                <p>{email}</p>
            </section>
         </section>
    );
}

export default Card;