import React, { useEffect , useState} from 'react';
import { useLoaderData} from 'react-router-dom';


function Follower() {
    const data=useLoaderData()
   // const[data, setdata] = useState([])
    // useEffect(() => {
    //    fetch('https://api.github.com/users/rohit3325-cpu')
    //    .then(response => response.json())
    //    .then(data =>{
    //      console.log(data);
    //      setdata(data)
    //    })
    // }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github follower: {data.followers}
        <img  src={data.avatar_url} alt="Git picture" width={300} />
        </div>
  );
}

export default Follower

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rohit3325-cpu')
    return response.json()
}
