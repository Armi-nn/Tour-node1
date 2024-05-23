import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Delete() {
  const [inp, setInp] = useState();
  const handelSubmit = () => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + `api/v1/tours/${inp}`,
          {
            method: "DELETE",
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
    <Box>
      <Box component={"form"} noValidate onSubmit={handelSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding:'50px 0px 0px 0px'
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
            <Typography>Id Number :</Typography>
            <input
              type="number"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding:"20px"
          }}
        >
          <Button
            sx={{
              padding: "10px",
              border: "1px solid",
            }}
            type="submit"
          >
            Delete product
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
    </Box>
  );
}
