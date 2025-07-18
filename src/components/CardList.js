import React from 'react'
import Card from './Card'
const CardList = ({robots}) => {


    return(
    <section>
      {
        robots.map((user,index)=> {
        return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    })
      }
    </section>

    );
}

export default CardList