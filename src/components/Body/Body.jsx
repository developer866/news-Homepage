import React from "react";
import "./Body.css";
// import "./index.css";

function Body() {
  return (
    <div class="parent">
      <div class="div1">
        <img
          src="/images/image-web-3-desktop.jpg"
          alt="Background image"
          className="image-desktop"
          srcset=""
        />
        <img
          src="/images/image-web-3-mobile.jpg"
          className="image-mobile"
          alt="Background image"
          srcset=""
        />
      </div>

      {/* web 3 */}
      <div class="div3">
        <div class="div3-h1">
          <h1>The Bright Future of Web 3.0?</h1>

          <div>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platform back into the hands of the people. But is it
              really fulfilling its Promise?
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      {/* News */}
      <div class="div2">
        <h1>New</h1>
        <div className="box">
          <h2>Hydrogen Vs Electric car</h2>
          <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
        </div>
        <div className="box">
          <h2>The Downside of AI Artistry</h2>
          <p>
            What are the possible adverse effects of on-demand AI image
            geneneration
          </p>
        </div>
        <div className="box">
          <h2>Is VC Funding Drying up?</h2>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>

      <div class="div4">
        <div className="div4-sub sub-div-1">
          <img src="/images/image-retro-pcs.jpg" alt="laptops" />
          <div className="div4-sub-details">
            <h1>01</h1>
            <h3>Reviving Retro PCS</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>

        <div className="div4-sub sub-div-2">
          <img src="/images/image-top-laptops.jpg" alt="laptops" />
          <div className="div4-sub-details">
            <h1>02</h1>
            <h3>Top 10 Laptopss of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="div4-sub sub-div-3">
          <img src="/images/image-gaming-growth.jpg" alt="laptops" />
          <div className="div4-sub-details">
            <h1>03</h1>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
