/* eslint-disable react/prop-types */
import { useState } from 'react'


export const TwitterCard = ({ username , name , initialisFollowing ,imgSrc}) => {

    const [isFollowing , setLike ] = useState(initialisFollowing)
 
    const text = isFollowing ?"Following":"Follow"
    const btnClass = isFollowing ? "following" : ""
    
    const handleClick = () =>  setLike(!isFollowing)
    
   
    return (
    <article>
            <img src={imgSrc} alt="" />
            <div className='container'>
              <strong>{username}</strong>
              <span>{name}</span>
            </div>
            <button className={`${btnClass}`} onClick={handleClick}> 
              <span className='follow-text'>{text}</span>
              <span className='unfollow'>Unfollow!</span>
            </button>
    </article>
  

  )
}