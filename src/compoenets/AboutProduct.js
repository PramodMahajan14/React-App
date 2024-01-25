import { Flex, Grid, Box } from "@chakra-ui/react";
import Card from "./Card";
import "./AboutProduct.css";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
const AboutProduct = ({
  title,
  category,
  description,
  price,
  image,
  isLoading,
  rating,
}) => {
  const [isLoad, setLoad] = useState(isLoading);
  return (
    <>
      <div className="container">
        <div className="heading-section">
          <h2>Product Details</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <Skeleton isLoaded={isLoad}>
                <div className="item">
                  <img style={{ height: "350px" }} src={image} />
                </div>
              </Skeleton>
            </div>
          </div>

          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{title}</div>
                <div className="reviews-counter">
                  <div className="rate">
                    <SkeletonText
                      skeletonHeight="4"
                      display="Flex"
                      isLoaded={isLoad}
                    >
                      <Rating
                        name="half-rating-read"
                        defaultValue={rating}
                        precision={0.5}
                        readOnly
                      />
                    </SkeletonText>
                  </div>
                  <SkeletonText
                    skeletonHeight="4"
                    width="30"
                    display="Flex"
                    isLoaded={isLoad}
                  >
                    <span>{category}</span>
                  </SkeletonText>
                </div>
                <div className="product-price-discount">
                  <SkeletonText
                    skeletonHeight="4"
                    display="Flex"
                    width="20"
                    isLoaded={isLoad}
                  >
                    {" "}
                    <span>${price}</span>
                  </SkeletonText>
                  <SkeletonText
                    skeletonHeight="4"
                    width="20"
                    display="Flex"
                    isLoaded={isLoad}
                  >
                    {" "}
                    <span className="line-through">${price + 12}</span>
                  </SkeletonText>
                </div>
              </div>
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="3"
                skeletonHeight="2"
                isLoaded={isLoad}
              >
                {" "}
                <p>{description}</p>
              </SkeletonText>

              <div className="product-count">
                <label for="size">
                  <SkeletonText noOfLines={1} width="25" isLoaded={isLoad}>
                    Quantity
                  </SkeletonText>
                </label>

                <form action="#" className="display-flex">
                  <Skeleton isLoaded={isLoad}>
                    {" "}
                    <div className="qtyminus">-</div>
                  </Skeleton>
                  <SkeletonText m="3" noOfLines={1} isLoaded={isLoad}>
                    {" "}
                    <input
                      type="text"
                      name="quantity"
                      value="1"
                      className="qty"
                    />
                  </SkeletonText>{" "}
                  <div className="qtyplus">+</div>
                </form>

                <a href="#" className="round-black-btn">
                  {" "}
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutProduct;
