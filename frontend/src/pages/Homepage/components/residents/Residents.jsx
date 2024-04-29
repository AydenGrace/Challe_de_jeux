/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Residents.module.scss";
import Catcard from "./components/Catcard";
import CatList from "../../../../datas/cats.json";
import Slider from "react-slick";
import Button from "./../../../../components/Buttons";

export default function Residents({ togglePage }) {
  const settings = {
    className: "slider variable-width",
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    variableWidth: true,
  };
  return (
    <section
      id="Residents"
      className={`w-100 d-flex flex-column ${styles.Residents} align-items-center`}
    >
      <h2>Nos Résidents</h2>
      <div className={`${styles.slider}`}>
        <Slider {...settings}>
          {CatList.Cats.map((cat, i) => (
            <Catcard key={`Cat_${i}`} cat={cat} />
          ))}
        </Slider>
      </div>
      <Button
        message="Rencontrez les !"
        isDark={true}
        handleClick={() => togglePage(3)}
      />
    </section>
  );
}
