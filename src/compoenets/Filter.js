import "../App.css";
import Product from "./Product";
import Card from "./Card";
const Filter = ({ id, searchInput, filteredData, currentProduct, isLoad }) => {
  return (
    <>
      {searchInput.length > 1 ? (
        filteredData.length === 0 ? (
          <Card id={id} />
        ) : (
          filteredData.map((p) => {
            return <Product key={p.id} {...p} Skeletonloading={isLoad} />;
          })
        )
      ) : currentProduct.length === 0 ? (
        <Card />
      ) : (
        currentProduct.map((p) => {
          return <Product key={p.id} {...p} Skeletonloading={isLoad} />;
        })
      )}
    </>
  );
};
export default Filter;
