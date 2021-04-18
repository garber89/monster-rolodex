import React from 'react';
import './Cardlist.css';
import { Cards } from '../Cards/Cards'

export const CardList = props => {
    console.log(props);
    return (
        <div className='cards'>
            {props.monsters.map(monster => (
                <Cards key={monster.id} monster={monster} />))}
        </div>
    )
}