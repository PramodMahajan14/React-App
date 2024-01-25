import { Flex, Grid, Box } from "@chakra-ui/react";
import AboutProduct from "./compoenets/AboutProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedPrudct] = useState({});
  const [Loader, setLoader] = useState(false);
  console.log(id);
  const FetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
      });
      const res = await response.json();
      setSelectedPrudct(res);

      console.log("ok");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  //   let Rate = selectedProduct.rating.rate;

  return (
    <>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AboutProduct
              title={selectedProduct.title}
              category={selectedProduct.category}
              description={selectedProduct.description}
              price={selectedProduct.price}
              image={selectedProduct.image}
              rating={selectedProduct.rating}
              isLoading={true}
            />
          </div>
        </Grid>
      </Flex>
    </>
  );
};
export default About;
