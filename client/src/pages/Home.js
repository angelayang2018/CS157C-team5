import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faNewspaper,
  faQuestion,
  faHandHoldingDollar,
  faHandshakeAngle
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="home">
      <img
        className="storeimage"
        src="https://i.ibb.co/vHGn1p5/storeimage.png"
        alt="storeimage"
        border="0"
      />

      <div className="info">
        <section>
          <div className="stats">
            <p className="number" data-count="2100">
              <b>2,100</b>
            </p>
            <p>students served monthly</p>
          </div>
          <div className="stats">
            <p className="number" data-count="25500">
              <b>25,500</b>
            </p>
            <p>students served in the year 2021 - 2022</p>
          </div>

          <div className="stats">
            <p className="number" data-count="22">
              <b>22%</b>
            </p>
            <p>
              increase of students served since our first whole year opening
            </p>
          </div>
        </section>
        <a
          href="https://leahspantry.org/programs/the-nutrition-pantry-program/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.ibb.co/HKxwwg1/Gold-Cert-Leahs-Pantry.png"
            alt="Gold-Cert-Leahs-Pantry"
            border="0"
          />{" "}
        </a>
      </div>
      <div className="info">
        <section>
          <h1 className="heading">Get the food and nutrition you need</h1>
          <br />
          <br />
          <br />
          <br />
          <p className="intro">
            The Spartan Food Pantry is a walk-in, full-service, staffed, food
            assistance program offering non-perishable goods, fresh produce, and
            refrigerated items to eligible students. Learn how the pantry got
            started.
          </p>
        </section>

        <section>
          <div className="cardinfo">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <div>
              <h2>Order in advance</h2>
              <p>
                See if you are eligible to use the pantry. Order in advance and
                see what is available in store online.{" "}
                <Link to="/orders">Learn more.</Link>
              </p>
            </div>
          </div>

          <div className="cardinfo">
            <FontAwesomeIcon icon={faNewspaper} />
            <div>
              <h2>Apply to Calfresh</h2>
              <p>
                Request CalFresh sign up assistance with an SJSU Cares Basic
                Needs Coordinator.{" "}
                <a href="https://www.sjsu.edu/sjsucares/get-assistance/calfresh.php">
                  Learn more!
                </a>
              </p>
            </div>
          </div>
          <div className="cardinfo">
            <FontAwesomeIcon icon={faQuestion} />
            <div>
              <h2>Need Help?</h2>
              <p>
                Have a question? Stop by the pantry or send us a message.{" "}
                <Link to="/contact">Contact us.</Link>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="info hours">
        <section>
          <h2>Spring Eligibility</h2>
          <p>Currently enrolled in Spring courses</p>
          <p>Currently experiencing hunger/food insecurity</p>
          <p>
            Must have an annual income of $30,268 or less (no documentation
            required)
          </p>
          <p>
            Income limits are set by US Government at 235% of the Federal
            Poverty Line. $2,522 monthly for individuals of a household of 1;
            add $889 per additional household member. Please ask if you have
            questions.
          </p>
          <p>
            Must bring your Tower ID & reusable bag(s) every time you visit the
            pantry
          </p>
          <h2>Come Visit Us</h2>
          <h3>Spring 2023 Hours</h3>
          <p>Monday & Friday: 10 AM - 5PM</p>
          <p>Tuesday -Thursday: 10AM - 6PM</p>
          <h3>Location</h3>
          <p>
            Diaz Compean Student Union (exterior entrance across from
            Engineering Rotunda)
          </p>
          <Link to="/orders">
            <button>See what's in stock</button>
          </Link>
        </section>
        <section>
          <img
            src="https://i.ibb.co/RS5kWFj/staffpic.jpg"
            alt="staffpic"
            border="0"
          ></img>
        </section>
      </div>

      <div className="resourcehome">
        <h2>Check out some of our resources</h2>
        <Link to="/resources">
          <button>Resources</button>
        </Link>
      </div>

      <div className="newstories">
        <h2>News Stories</h2>
      </div>

      <div className="help">
        <h2>We Need Your Help</h2>
        <div className="helpimg">
          <div className = "helpcontainer">
            <img
              src="https://i.ibb.co/qp8JKkP/pantrydonate.jpg"
              alt="pantrydonate"
            />
            <h2><FontAwesomeIcon icon={faHandshakeAngle} /> Volunteer</h2>
          </div>
          <div className = "helpcontainer">
            <img
              src="https://i.ibb.co/VYyfZXx/pantryopening.jpg"
              alt="pantryopening"
            />
            <h2><FontAwesomeIcon icon={faHandHoldingDollar} /> Donate</h2>
          </div>
        </div>
      </div>

      <div className="instagramPictures">
        <h2>Join our team of volunteers or become a donator!</h2>

        <div className="imageList">
          {itemData.map((item) => (
            <a href="https://www.instagram.com/sjsucaresbasicneeds/">
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://i.ibb.co/gjZcq1M/donator5.png",
    title: "Pantry Donators 5",
  },
  {
    img: "https://i.ibb.co/N7G8MG8/donator9.png",
    title: "Pantry workers at San Pedro",
  },
  {
    img: "https://i.ibb.co/FY3FzGR/donator10.png",
    title: "Burrito Giveaway",
  },
  {
    img: "https://i.ibb.co/JsLQTRZ/donator4.png",
    title: "Pantry Donators 4",
  },
  {
    img: "https://i.ibb.co/SfTVD3H/donator11.png",
    title: "Pantry artwork",
  },
  {
    img: "https://i.ibb.co/HhT1TzK/donator8.png",
    title: "Pantry volunteers",
  },
  {
    img: "https://i.ibb.co/H4bn8L7/donator7.png",
    title: "Thank you!",
  },
  {
    img: "https://i.ibb.co/wy0ZTxk/donator2.png",
    title: "Pantry Volunteers Vegetable",
  },
  {
    img: "https://i.ibb.co/fGZJvbh/donator3.png",
    title: "Pantry Donators 3",
  },

  {
    img: "https://i.ibb.co/dKQ07RC/donator6.png",
    title: "Pantry Donators 6",
  },
];
