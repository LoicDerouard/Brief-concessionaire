import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



export default function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState(null);


  useEffect( () => {
    getAllData() ;


},[]) ;

  const getAllData = () => {

    axios.get('bd/megatruck.json')
    .then(res => {
      const p = res.data;
      setData( p );

    });

  }
  return <div className='App'>
    <h1>Nos Camions</h1>
      <input placeholder='Recherche' onChange={event => setQuery(event.target.value)} />
    <ul>
      {data &&
        data.filter(post => {
          if (query === '') {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map(({ id, title, price, images }) => (
          <li key={id}>
            <img src={images} />
            <h3 className='titre'>{title}</h3>
            <p className='prix'>{price}</p>
          </li>
        ))}
    </ul>




    
  </div>
}
