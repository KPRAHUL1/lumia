import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import Winterimages from "./Winterimages"; // Assuming it's for displaying Winter products
import Summerimage from "./Summerimage"; // Assuming it's for displaying Summer products

const TransitionContainer = styled("div")(({ theme }) => ({
  transition: "opacity 0.3s ease, height 0.3s ease",
  opacity: 0,
  height: 0,
  overflow: "hidden",
  "&.active": {
    opacity: 1,
    height: "auto",
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      <TransitionContainer className={value === index ? "active" : ""}>
        {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </TransitionContainer>
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [winterProducts, setWinterProducts] = useState([]);
  const [summerProducts, setSummerProducts] = useState([]);

  const fetchProducts = async (season) => {
    try {
      const response = await fetch(`/api/products?season=${season}`);
      const data = await response.json();
      if (season === "winter") {
        setWinterProducts(data);
      } else {
        setSummerProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (value === 0) {
      fetchProducts("winter");
    } else {
      fetchProducts("summer");
    }
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="WINTER" />
          <Tab label="SUMMER" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        {/* Pass the winter products to Winterimages component */}
        <Winterimages products={winterProducts} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Pass the summer products to Summerimage component */}
        <Summerimage products={summerProducts} />
      </CustomTabPanel>
    </Box>
  );
}
