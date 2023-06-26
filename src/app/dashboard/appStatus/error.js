"use client";
import { useEffect } from "react";

 // error component must be client components

const Error = ( {error, reser}) =>{
    useEffect(()=>{
        console.log(errpr)
    },[error])

    return (
        <div>Something went wrong!!!
        <button onClick={()=> reset()}>Try Again </button>
        </div>
    )
}

export default Error;
