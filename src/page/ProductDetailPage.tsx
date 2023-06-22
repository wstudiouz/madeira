import React, {ReactElement} from "react";
import SingleProduct from "../components/singleproduct";
import MainContainer from "../components/MainContainer";

const ProductDetailPage = (): ReactElement => {
  return (
    <MainContainer>
      <SingleProduct />
    </MainContainer>
  );
};
export default ProductDetailPage;
