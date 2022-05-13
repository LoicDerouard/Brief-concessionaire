// import { useState, useEffect } from 'react';
// import "./main.css";


// export default function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [query, setQuery] = useState("")



//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         let actualData = await response.json();
//         setData(actualData.products);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getData()
//   }, []);

//   return <div className='App'>
//     <h1>API Posts</h1>
//     {loading && <div>A moment please...</div>}
//     {error && (
//       <div>{`There is a problem fetching the post data - ${error}`}</div>
//       )}
//       <input placeholder='Enter Post Title' onChange={event => setQuery(event.target.value)} />
//     <ul>
//       {data &&
//         data.filter(post => {
//           if (query === '') {
//             return post;
//           } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//             return post;
//           }
//         }).map(({ id, title, description, thumbnail, price }) => (
//           <li key={id}>
//             <img src={thumbnail} />
//             <h3>{title}</h3>
//             <p>{description}</p>
              

//             <p>{price}</p>
//           </li>
//         ))}
//     </ul>




    
//   </div>
// }
