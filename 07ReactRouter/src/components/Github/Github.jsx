import React, { useState , useEffect} from 'react'

function Github() {

    const [Data, setData] = useState([])

    useEffect(() => {
        fetch('http://api.github.com/users/Dhruvi2209')
        .then(resp => resp.json())
        .then(data => setData(data))
        console.log(Data)
      }, [])
    
      
  return (
    <div className='text-center bg-red-500 text-white text-3xl p-10'>Github followers: {Data.followers}
        <div className='flex flex-col'>
        <img src={Data.avatar_url} alt='Git pic' width={300} />
        <div>
            {Data.bio}
        </div>
        <div>
        <p>{Data.html_url}</p>
        </div>
        </div>
    </div>
  )
}

export default Github