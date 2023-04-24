import React, { useEffect, useState } from 'react'
import './Card.css'

function Card() {
  let [cards, setcards] = useState([
    {
      id: 1, img: 'https://superheroetc.files.wordpress.com/2018/04/upgrade.png'
    },
    {
      id: 2, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/230c30d6-d647-4f08-8552-41ac4a689de3/dehj7w3-2133c3e1-cf7a-44c5-886f-0280960f15af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzMGMzMGQ2LWQ2NDctNGYwOC04NTUyLTQxYWM0YTY4OWRlM1wvZGVoajd3My0yMTMzYzNlMS1jZjdhLTQ0YzUtODg2Zi0wMjgwOTYwZjE1YWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IGH3wuS_jAlhOx_GEKLyR9msoiAEvgeoh7ooiaJLmT4'
    },
    {
      id: 3, img: 'https://www.pngkit.com/png/detail/352-3529042_firewall-ben-10-upgrade-heatblast.png'
    },
    { id: 4, img: 'https://static.wikia.nocookie.net/ben-10-list/images/7/7d/Gwen_10_Upgrade.png' },

    { id: 5, img: 'https://i.pinimg.com/originals/38/89/47/388947c11c14dc3a97c3625be5683a85.png' },
    { id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmush8buO1NvRXV6dQmsXqLWo6Gm7TEHYyg&usqp=CAU' },

    {
      id: 1, img: 'https://superheroetc.files.wordpress.com/2018/04/upgrade.png'
    },
    {
      id: 2, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/230c30d6-d647-4f08-8552-41ac4a689de3/dehj7w3-2133c3e1-cf7a-44c5-886f-0280960f15af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzMGMzMGQ2LWQ2NDctNGYwOC04NTUyLTQxYWM0YTY4OWRlM1wvZGVoajd3My0yMTMzYzNlMS1jZjdhLTQ0YzUtODg2Zi0wMjgwOTYwZjE1YWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IGH3wuS_jAlhOx_GEKLyR9msoiAEvgeoh7ooiaJLmT4'
    },
    {
      id: 3, img: 'https://www.pngkit.com/png/detail/352-3529042_firewall-ben-10-upgrade-heatblast.png'
    },
    { id: 4, img: 'https://static.wikia.nocookie.net/ben-10-list/images/7/7d/Gwen_10_Upgrade.png' },

    { id: 5, img: 'https://i.pinimg.com/originals/38/89/47/388947c11c14dc3a97c3625be5683a85.png' },
    { id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmush8buO1NvRXV6dQmsXqLWo6Gm7TEHYyg&usqp=CAU' },

  ])
  let [flip, setflip] = useState([])
  let [match, setmatch] = useState([])
  let [moves,setmoves]=useState(0)



  
  function flipcard(id, cardid) {
    console.log(cardid)


  if (flip.length < 2) {

      setflip([...flip, id])
    }
  }

  useEffect(()=>{

    
    if (cards[flip[0]].id !== cards[flip[1]].id){
      setflip([])
    }
  
    
    if(flip.length===2){
      setmoves(moves+1)
    }
    
    if (cards[flip[0]].id === cards[flip[1]].id) {
      setmatch([cards[flip[0]].id])
      // setcards(cards[flip[0]].match='matched')
      console.log(match)
      let newcards = cards.filter(item => {
        return item.id != match[0]
      })
      setcards(newcards)
    }
    
  },[match])
    
  return (
    <div className='containerparent'>
      <h1 className='move'>Moves:{moves}</h1>
      <div className='container'>
        {
          cards.map((card, id) => {
            return (
              <>
                <div className='img-container' key={card.id} onClick={() => { flipcard(id, card.id) }} >
                <div className='cardinner' style={{ transform: flip.includes(id) ? 'rotateY(180deg)' : 'none' }} >

                  <div className='cardfront'  style={{ transform: flip.includes(id) ? 'rotateY(180deg)' : 'rotateY(0deg)' }} >
                    <img src='https://aceplayingcards.com.au/wp-content/uploads/2018/12/seekers-card-back-400x400.jpg' alt="image" className='frontimage' />
                  </div>

                  <div className='cardback' style={{ transform: flip.includes(id) ? 'rotateY(0deg)' : 'rotateY(180deg)' }}>
                    <img src={card.img} alt="" className='backimage' />
                  </div>
                </div>

                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card


// style={{  transform : flip.includes(id)? 'rotateY(180deg)':''}}