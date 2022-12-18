import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { publicRequest } from "../requesMethod";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const RemoveBtn = styled(Remove)`
  cursor: pointer;
`
const AddBtn = styled(Add)`
  cursor: pointer;
`

const Product = () => {
  
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch (error) {
        
      }
    }
    getProduct()
  }, [id])

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity })
    );
  };

  return (
    <Container>
      <Navbar />
      {Object.keys(product).length > 0 ? (
        <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>{`${product.price} ₫`}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color.length > 0 ? product.color.map((item, i) => (
                <FilterColor color={item} key={i} />
              )) : null}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveBtn onClick={() => quantity > 1 && setQuantity(quantity - 1)}/>
              <Amount>{quantity}</Amount>
              <AddBtn onClick={() =>  setQuantity(quantity + 1)} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      ) : null}
    </Container>
  );
};

export default Product;
