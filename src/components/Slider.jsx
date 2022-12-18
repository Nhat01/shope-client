import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts, sliderItems } from "../data";
import { mobile } from "../responsive";
import Product from "./Popular";
import SwiperCore ,{ Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useSwiperRef from "../utils/useSwiperRef";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 20px;
  background-color: red;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const SlideTest = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 100%;
  border-radius: 10px;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

const SwiperTest = styled(Swiper)`
  height: 100%;
  overflow: unset;
`
const Title = styled.h2`
  color: black;
  margin: 10px 0;
`;
const Slider = () => {
  SwiperCore.use([Navigation , Autoplay]);
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
      <div>
        <Title>Các Sản phẩm nổi bật</Title>
        <Container>
          <Arrow direction="left">
            <ArrowBackIosOutlined ref={prevElRef}/>
          </Arrow>
          <SwiperTest
            spaceBetween={20}
            slidesPerView={5}
            navigation={{ 
              prevEl,
              nextEl
            }}
            autoplay={{delay: 3000}}
          >
            {popularProducts.map((item) => (
              <SlideTest key={item.id}>
                <Product item={item}  />
              </SlideTest>
            ))}
          </SwiperTest>
          <Arrow direction="right">
            <ArrowForwardIosOutlined ref={nextElRef}/>
          </Arrow>
        </Container>
      </div>
  );
};

export default Slider;
