import React from "react";
import "./Body.css";

function Body() {
  return (
    // <div className="parent">
    //   <div className="div1">
    //     <img
    //       src="../../../assets/images/image-web-3-desktop.jpg"
    //       alt="Background image"
    //       className="image-desktop"
    //       srcset=""
    //     />
    //     <img
    //       src="../../../assets/images/image-web-3-mobile.jpg"
    //       className="image-mobile"
    //       alt="Background image"
    //       srcset=""
    //     />
    //   </div>
    //   <div class="div3">
    //     <h1>THe bright future of web 3</h1>{" "}
    //   </div>
    //   <div class="div4">
    //     {" "}
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
    //       veniam voluptatem doloribus cupiditate non. Tempore numquam beatae
    //       eveniet labore? Impedit, cumque. Autem nemo ex quas voluptatum
    //       laboriosam beatae omnis quis?
    //     </p>
    //     <button>Read More</button>
    //   </div>

    //   <div class="div2">
    //     <h1>News</h1>
    //     <div className="box">first</div>
    //     <div className="box">second</div>
    //     <div className="box">third</div>
    //   </div>

    //     <div className="div5">
    //       <img src="../../../assets/images/image-top-laptops.jpg" alt="laptops" />
    //       <div>
    //         <h1>01</h1>
    //         <h3></h3>
    //         <p></p>
    //       </div>
    //     </div>
    //     <div class='div6'>
    //       <img src="../../../assets/images/image-top-laptops.jpg" alt="" />
    //       <div>
    //         <h1>02</h1>
    //         <h3></h3>
    //         <p></p>
    //       </div>
    //     </div>
    //     <div className="div7">
    //       <img src="../../../assets/images/image-top-laptops.jpg" alt="" />
    //       <div>
    //         <h1>03</h1>
    //         <h3></h3>
    //         <p></p>
    //       </div>
    //     </div>

    // </div>

    /* <img
          src="../../../assets/images/image-web-3-desktop.jpg"
          alt="Background image"
          className="image-desktop"
          srcset=""
        />
        <img
          src="../../../assets/images/image-web-3-mobile.jpg"
          className="image-mobile"
          alt="Background image"
          srcset=""
        /> */

    <div class="parent">
      <div class="div1">
        <img
          src="../../../assets/images/image-web-3-desktop.jpg"
          alt="Background image"
          className="image-desktop"
          srcset=""
        />
        <img
          src="../../../assets/images/image-web-3-mobile.jpg"
          className="image-mobile"
          alt="Background image"
          srcset=""
        />
      </div>
      {/* News */}
      <div class="div2">news </div>

      {/* web 3 */}
      <div class="div3">
        <div class="div3-h1">
          <h1>THe bright future of web 3</h1>{" "}
        </div>
        <div class="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veniam voluptatem doloribus cupiditate non. Tempore
            numquam beatae eveniet labore? Impedit, cumque. Autem nemo ex quas
            voluptatum laboriosam beatae omnis quis?
          </p>
          <button>Read More</button>
        </div>
      </div>
      {/* <div class='div4'></div> */}

      <div class="div4">
        <div className="div4-sub">
          <img
            src="../../../assets/images/image-top-laptops.jpg"
            alt="laptops"
          />
          <div>
            <h1>Hello</h1>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              ipsum ab architecto ullam!
            </p>
          </div>
        </div>
        <div className="div4-sub">
          <img
            src="../../../assets/images/image-top-laptops.jpg"
            alt="laptops"
          />
          <div>
            <h1>Hello</h1>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              ipsum ab architecto ullam!
            </p>
          </div>
        </div>
        <div className="div4-sub">
          <img
            src="../../../assets/images/image-top-laptops.jpg"
            alt="laptops"
          />
          <div>
            <h1>Hello</h1>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              ipsum ab architecto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
