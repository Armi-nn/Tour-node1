import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "api/v1/tours"
        );
        const data = await res.json();
        setProducts(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const items = products?.map((e) => (
    <Link to={`/product-details/${e?.name?.split(" ").join("-")}/${e?.id}`}>
      
        <Box
          sx={{
            border: "1px solid black",
            padding: "40px",
            width: "300px",
            height: "200px",
            margin: "20px",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "70px",
          }}
        >
          <p>name: {e?.name}</p>
          <p>price: {e?.price}</p>
        </Box>
    </Link>
  ));
  return (
    <>
      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        margin:'20px 0px'
      }}>{items}</Box>
    </>
  );
}
