
import { TwitterCard } from './TwitterCard.jsx'
import "./TwitterCard.css"

const users = [
  {
     name: "Miguel Angel Zamora",
     username : "midudev",
     isFollowing : true,
     img : "https://unavatar.io/telegram/midudev",
  },
  {
     name: "Jose Pacola",
     username : "jesepa92",
     isFollowing : false,
     img : "https://unavatar.io/telegram/jesepa92",
  },
  {
     name: "Lola Flores",
     username : "lola",
     isFollowing : true,
     img : "https://unavatar.io/telegram/lola",
  },

]



export const App = () => {
  return (
    <div>
     {
      users.map( ({name , username , isFollowing , img}) => {

        return (
       
          <TwitterCard 
          name={name} 
          username={username} 
          initialisFollowing={isFollowing}
          imgSrc={img}
          key={username}>
          </TwitterCard>)
      }
       
      )

     }
    </div>
  )
}




 
  
  



