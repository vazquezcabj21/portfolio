import React from "react";
import "./Slider.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <ArrowRightIcon color = {'white'}/>: <ArrowLeftIcon color = 'white'/>}
    </button>
  );
}