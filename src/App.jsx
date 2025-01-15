import { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

function App() {

  const [tours, SetTours] = useState([])
  const [isLoading, setLoading] = useState(true)
  

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=>tour.id!=id)
    SetTours(newTours)
  }

  const fetchUrl = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      // console.log(tours)
      SetTours(tours)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchUrl()
  },[])

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }

  if(tours.length === 0){
    return <main>
      <div className='title'>

        <h2>No tours left</h2>
        <button type='button' style={{marginTop: '2rem'}} className='btn' 
        onClick={()=>{fetchUrl()}}>Refresh</button>
      </div>
      </main>
  }


  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
