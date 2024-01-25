import { useEffect, useState } from "react";
import { Text, Image, Box, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./AboutProduct.css";
const Product = ({
  image,
  imageAlt,
  title,
  category,
  price,
  rating,
  id,
  Skeletonloading,
}) => {
  const [isLoaded, setIsLoaded] = useState(Skeletonloading);
  const [Rate, setRate] = useState(rating);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10000);
  }, []);

  return (
    <>
      <Stack p={{ base: "0 2rem" }}>
        <Skeleton isLoaded={isLoaded}>
          {" "}
          <Link to={`/home/${id}`}>
            <Box className="imgcontainer">
              <Image
                objectFit="cover"
                src={image}
                className="productImg"
                alt={imageAlt}
              />
            </Box>
          </Link>
        </Skeleton>

        <Box display="Flex" justifyContent={"space-between"}>
          <SkeletonText skeletonHeight="4" display="Flex" isLoaded={isLoaded}>
            {" "}
            <Text color="teal.600" textTransform="uppercase">
              {category}
            </Text>{" "}
          </SkeletonText>
          <SkeletonText skeletonHeight="4" display="Flex" isLoaded={isLoaded}>
            {" "}
            <Rating
              name="half-rating-read"
              defaultValue={Rate}
              precision={0.5}
              readOnly
            />
          </SkeletonText>
        </Box>

        <Box display="Flex" justifyContent={"space-between"}>
          {" "}
          <SkeletonText
            skeletonHeight="3"
            width="110px"
            display="Flex"
            isLoaded={isLoaded}
          >
            {" "}
            <Text color="teal.300" size="md" textTransform="capitalize">
              {title}
            </Text>
          </SkeletonText>
          <SkeletonText skeletonHeight="4" display="Flex" isLoaded={isLoaded}>
            {" "}
            <Text> {price}</Text>
          </SkeletonText>
        </Box>
      </Stack>
    </>
  );
};

export default Product;
