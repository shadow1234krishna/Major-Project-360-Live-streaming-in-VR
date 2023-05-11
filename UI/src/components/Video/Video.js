import {React,useState,useEffect} from 'react';
import"./Video.css";
import  "../Hero/Hero";






export function Stream() {

 
    const [state, setState] = useState({
		datas: [],
			DataisLoaded: false

	});

	useEffect(()=>{
		fetch(
`http://127.0.0.1/api/streams/matches?format=json`)
			.then((res) => res.json())
			.then((json) => {
				setState({
					datas: json,
					DataisLoaded: true
				});
			})
	});

    const { DataisLoaded, datas } = state;
    if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

   

          return (
           

         <>
         {/* <Navbar/> */}
         
          <div className = "Stream-app">
          
             {
                     datas.map((data) => (
<><h1 className='text'>Match_id:{data.id}</h1>
  <h2 className='desc'>
 {data.description}
  </h2>
   
          <div className="Streaming">
            <iframe title ="Streaming" 
             src={data.embed_code} autoplay
              width={1000} height={520}   allow="autoplay;encrypted-media" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen 
              ></iframe></div>
        </>
     
         
                     ))
}
</div>
              </>

                     
          );
                     
}
      
export default Stream;

