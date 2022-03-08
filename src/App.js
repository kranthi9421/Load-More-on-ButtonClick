import React,{useState,useEffect} from 'react';
import axios from 'axios';


function App() {


const [posts,setPosts] = useState([])
const [getMore,setGetMore] = useState(3)


useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res=>{
    setPosts(res.data)
  })
},[])


const handleMore = ()=>{
   setGetMore(prevMore => prevMore + 3)
}

  return (
    <div>
       {posts.slice(0,getMore).map((item,i)=>{
         return(
           <div>
              <h3>{item.id}</h3>
             <h2>{item.title}</h2>
             <h4>{item.body}</h4>
           </div>
             

         )
       })}
       <button onClick={handleMore}>Load More</button>
    </div>
  )
}

export default App