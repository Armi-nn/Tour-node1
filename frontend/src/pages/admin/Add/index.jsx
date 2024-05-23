import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
export default function Add() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [startDates, setStartDates] = useState();
  const handelSubmit = () => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "api/v1/tours",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              price: price,
              startDates: startDates,
            }),
          }
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <Box component={"form"} noValidate onSubmit={handelSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "50px 0px 30px 0px",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            border: "1px solid black",
            padding: "20px 0px",
            width: "350px",
            justifyContent: "center",
          }}
        >
          <Typography>Name :</Typography>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            type="text"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            border: "1px solid black",
            padding: "20px 0px",
            width: "350px",
            justifyContent: "center",
          }}
        >
          <Typography>Price :</Typography>
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price"
            type="number"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            border: "1px solid black",
            padding: "20px 0px",
            width: "350px",
            justifyContent: "center",
          }}
        >
          <Typography>startDates :</Typography>
          <input
            onChange={(e) => setStartDates(e.target.value)}
            placeholder="startDates"
            type="text"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Button
          sx={{
            padding: "10px",
            border: "1px solid",
          }}
          type="submit"
        >
          Add product
        </Button>
        <Button
          sx={{
            padding: "10px",
            border: "1px solid",
          }}
        >
          Back To Home
        </Button>
      </Box>
    </Box>
  );
}
