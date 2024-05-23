import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          background: "aqua",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          padding:'0px 30px'
        }}
      >
        <Box>
          <Link to={"/"}>
            <Typography>Home</Typography>
          </Link>
        </Box>
        <Box sx={{
          display:"flex",
          gap:'20px'
        }}>
          <Link to={"delete-product"}>
            <Typography>Delete Tour</Typography>
          </Link>
          <Link to={"add-product"}>
            <Typography>Add Tour</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}
