import React from "react";
import axios from "axios";

// Static metadata
// export const metadata ={
//     title: "Home"
// }

// It will return
//Output: <head> <title>Home </title> </head>

// Dynamic Metadata

// export const generateMetaData = ({params,searchParams}) =>{
//     const product = getProduct(params.id);

//     return {
//         title: product.title
//     }
// }

//Output:
//   <head>
//<title>My unique Product</title>
//   </head>



const appStatus = () =>{
    // const res = fetch(`https://apidev.pramericalife.in/#/Enquiry/GetAllEnquiry`,
// {next:{revalidate:10}});    // it combines benefits of  SSR & SSG

// const data = res.json();
// res.then((data)=>{
//     console.log(data,"now data")
// })

// API call with Axios

// axios.get(`https://apidev.pramericalife.in/api/enquiry`,{
//     headers:{
//         'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTg3MmFkNzk0NTJmYTUwYjdiNzBmMjAiLCJlbWFpbCI6InRlc3QxQHByYW1lcmljYWxpZmUuaW4iLCJ1c2VybmFtZSI6InRlc3RfcHJhbWVyaWNhMSIsImlzVmVyaWZpZWQiOnRydWUsImlzQmxvY2tlZCI6ZmFsc2UsImZpcnN0TmFtZSI6IlRlc3QiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTE5VDA4OjEyOjQ5Ljc1MFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTE5VDA4OjEyOjQ5Ljc1MFoiLCJyb2xlcyI6WyJTdXBlciBBZG1pbiJdLCJ1c2VyR3JvdXAiOiJEUFN1cGVyQWRtaW4iLCJwYXJ0bmVyQ29kZSI6IlByYW1lcmljYSIsImlhdCI6MTY4Nzc3NjE3MiwiZXhwIjoxNjg3ODA0OTcyfQ.WCZ0l4fHzAaCSOlB-EkS50SFdQGOdbTjXcQpz_K-T7E`
//     }
// }).then(
//     (response) => {
//         var result = response.data;
//         console.log(result);
//     },
//     (error) => {
//         console.log(error);
//     }
// );
    return (

        <div>
            This is Application status inside dashboard.
        </div>
    )
}

export default appStatus;