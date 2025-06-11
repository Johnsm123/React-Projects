import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src="image.jpg" alt="" className="home__image" />

          <div className="home__row">
            <Product
              id="1"
              title="Blue bag"
              price={30}
              rating={5}
              image="ecommerce.webp"
            />
            <Product
              id="2"
              title="Red bag"
              price={20}
              rating={4}
              image="test1.webp"
            />
          </div>

          <div className="home__row">
            <Product
              id="3"
              title="Black bag"
              price={25}
              rating={3}
              image="test2.webp"
            />
            <Product
              id="4"
              title="White bag"
              price={15}
              rating={2}
              image="test3.jpg"
            />
            <Product
              id="5"
              title="Green bag"
              price={18}
              rating={4}
              image="test4.avif"
            />
          </div>

          <div className="home__row">
            <Product
              id="6"
              title="Yellow bag"
              price={22}
              rating={5}
              image="test5.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
