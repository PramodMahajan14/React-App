import { Flex, Grid, Box } from "@chakra-ui/react";
import Product from "./compoenets/Product.js";
import Pagination from "@mui/material/Pagination";
import { products } from "./Mock.js";
import { useEffect, useState } from "react";
import usePagination from "./compoenets/Pagination.js";
import { SearchIcon } from "@chakra-ui/icons";
import Filter from "./compoenets/Filter.js";

const Home = () => {
  const [Products, setProducts] = useState(products);
  const [currentpage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(6);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const FetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      const res = await response.json();
      console.log(res);

      setProducts(res);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  const indexOfLastProduct = currentpage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = Products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const count = Math.ceil(Products.length / productPerPage);
  const _DATA = usePagination(Products, productPerPage);

  const handleChange = (e, p) => {
    setCurrentPage(p);
    _DATA.jump(p);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);

    if (searchInput !== "") {
      const filteredData = Products.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(currentProduct);
    }
  };
  const filteredData = Products.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Box m="1">
        <div className="form_group has_search">
          <span className="searchicon">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="form_control"
            placeHolder="Search"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </Box>
      <Flex
        direction="column"
        justifyContent="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        minH="90vh"
      >
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
        >
          {/* {products.map((p) => (
            <Product key={p.id} {...p} Skeletonloading={false} />
          ))} */}
          <Filter
            searchInput={searchInput}
            filteredData={filteredData}
            currentProduct={currentProduct}
            isLoad={false}
          />
        </Grid>
        <div className="pagintion">
          {filteredData.length == 0 ? (
            <Pagination count={0} />
          ) : (
            <Pagination
              count={count}
              page={currentpage}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              sx={{
                margin: "auto",
                justifyContent: "center",
                // background: "orange",
              }}
            />
          )}
        </div>
      </Flex>
    </>
  );
};

export default Home;
// http://makeup-api.herokuapp.com/api/v1/products.json?brand="brand-name"
