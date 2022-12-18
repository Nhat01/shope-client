import { Grid } from "@mui/material";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";
import {useEffect, useState} from "react"
import axios from "axios"

const Container = styled.div`
  margin-top: 20px;
`;
const Title = styled.h2`
  color: black;
  margin: 10px 0;
`;

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/products")
        setProducts(res.data)
      } catch (error) {
        
      }
    }
    getProducts();
  })
  return (
    <Container>
      <Title>Danh Sách Sản Phẩm</Title>
      <Grid container spacing={2}>
        {products && products.map((item, index) => (
          <Grid item lg={12/5} key={index}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
