import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div>
      <Stack>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "48px",
              gap: "12px",
              height: "48px",
              margin: "0 20px",
            }}
          />
        </Link>
        <Stack
          style={{
            direction: "row",
            gap: "14px",
            fontSize: "14px",
            alignItems: "flex-end",
          }}
        >
          <Link
            to="/home"
            style={{
              color: "3A1212",
              textDecoration: "none",
              //borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>{" "}
          <a
            href="#excercise"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercise
          </a>
        </Stack>
      </Stack>
    </div>
  );
}
export default Navbar;
