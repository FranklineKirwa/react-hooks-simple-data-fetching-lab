// create your App component here
import React,{useState,useEffect} from "react";

export default function App(){

    const[image, setImage]=useState(null);
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setImage(data.message);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the dog image:', error);
                setLoading(false);
              });

    }, []);
if(loading){
    return <p>Loading ...</p>;
}
return <img src={image} alt="A Random Dog"/>;
};

