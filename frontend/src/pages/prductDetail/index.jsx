import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [products, setProducts] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + `api/v1/tours/${id}`
        );
        const data = await res.json();
        setProducts(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  },[]);
  return (
    <Box sx={{
        display:"flex",
        flexDirection:'column',
        gap:'10px',
        border:'1px solid black',
        padding:'20px',
        margin:'20px 40px'
    }}>
      <Typography>name : {products?.name}</Typography>
      <Typography>price : {products?.price}</Typography>
      <Typography>duration : {products?.duration}</Typography>
      <Typography>maxGroupSize : {products?.maxGroupSize}</Typography>
      <Typography>difficulty : {products?.difficulty}</Typography>
      <Typography>ratingsAverage : {products?.ratingsAverage}</Typography>
      <Typography>ratingsQuantity : {products?.ratingsQuantity}</Typography>
      <Typography>summary : {products?.summary}</Typography>
      <Typography>description : {products?.description}</Typography>
    </Box>
  );
}
