import {
  FavoriteBorder,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { Rating } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  z-index: 3;
  text-align: start;
  margin-left: 10px;
`;

const Container = styled(Link)`
  flex: 1;
  text-decoration: none;
  text-align: center;
  display: block;
  height: 60vh;
  width: 100%;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  border-radius: 10px;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 40%;
  width: 60%;
  z-index: 2;
  margin-top: 10px;
  ${mobile({height: "40vh", width: "100%"})}
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 16px;
`
const PriceWraper = styled.div`
  display: flex;
  margin-top: 30px;
`
const PriceShow = styled.p`
  font-weight: 700;
  line-height: 1.1;
  color: #d70018;
  color: ${(props) => props.direction === "through" && "#333"};
  font-size: 16px;
  font-size: ${(props) => props.direction === "through" && "14px"};
`
const PriceThrough = styled.p`
  display: inline-block;
  margin: 0 0 0 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: line-through;
  color: #707070;
  position: relative;
  top: 1px;
`

const Rate = styled(Rating)`
  font-size: 16px!important;
  margin-top: 10px;
`

const WishList = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  width: calc(100% - 20px);
  justify-content: right;
`

const Text = styled.p`
  font-size: 14px;
  margin-right: 10px;
`

const Favorate = styled(FavoriteBorder)`
  font-size: 20px!important;
  fill: red!important;
`

const Promotional = styled.div`
  position: absolute;
  top: 0px;
  left: -4px;
  color: #e01020;
  background-color: currentColor;
  padding-right: 4px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 4px;
  padding-right: 10px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    border-top: 3px solid currentColor;
    border-left: 3px solid transparent;
    filter: brightness(60%);
    z-index: 2;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    margin-left: 8px;
    color: white;
  }
`

const Description = styled.div`
    width: auto;
    display: flex;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #e5e7eb;
    background: #f3f4f6;
    align-items: flex-start;
    margin-top: 12px;
    margin-left: 0;
    margin-right: 10px;
    font-size: 12px;
    line-height: 1.5;
    text-transform: none;
    overflow: hidden;

    p {
      display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
`

const Product = ({ item }) => {
  return (
    <Container to={`/product/${item._id}`}>
      <Image src={item.img} />
      <Info>
        <Title>Realme C35 4GB 128GB</Title>
        <PriceWraper>
          <PriceShow>3.450.000 ₫</PriceShow>
          <PriceThrough>3.990.000 ₫</PriceThrough>
        </PriceWraper>
        <Description>
          <p>Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và cnjsnjcalkdjcljjdccadcscdc</p>
        </Description>
        <Rate
          name="read-only"
          value={5}
          readOnly
        />
        <WishList>
          <Text>Yeu Thich</Text>
          <Favorate />
        </WishList>
      </Info>
      <Promotional>
        <p>Giảm 18%</p>
      </Promotional>
    </Container>
  );
};

export default Product;
