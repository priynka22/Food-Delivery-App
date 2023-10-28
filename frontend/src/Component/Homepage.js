import { useNavigate } from "react-router-dom";
import Homepic from "./Images/Homepic.jpg";
import scooter from "./Images/scooter.gif";
import food from "./Images/food.gif";
import verified from "./Images/verified.gif";
import fish from './Images/fish.jpeg';
import biryani from './Images/biryani.jpeg';
import kebab from './Images/kebab.jpeg';


const Homepage = () => {

  const navigate = useNavigate();

  return (
    <>
      
      <div className="position-relative fs-2">
        <img src={Homepic} className="img-fluid w-100 bg-img" alt="HomePage" />
        <div className="position-absolute img-div">
          <h1>Fastest <span className="fontColor">Delivery</span> and Easy Pickup</h1>
          
          <p>Get 50% off on your first order</p>
          <button type="button" className="btn btn-outline-danger opacity-75 rounded-pill mt-3" onClick={() => navigate("/Menu")}>
            View Menu
          </button>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <div className="container  p-5">
              <img src={scooter} className="imgIcon" alt="delivery" />
              <h6>Fastest Delivery</h6>
              <p>
                Everything you order at Foodie will be quickly delivered to your door.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="container  p-5">
              <img src={verified} className="imgIcon" alt="delivery" />
              <h6>100% Quality</h6>
              <p>
                We use only the best ingredients to cook the tasty fresh food for you.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="container  p-5">
              <img src={food} className="imgIcon" alt="delivery" />
              <h6>Diverse Menu</h6>
              <p>
                In our menu you’ll find a wide variety of dishes, desserts, and drinks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h4>Top Rated Meals</h4>
        <div className="row mt-5">
          <div className="col">
            <img src={biryani} className="img-fluid  imgMeal" alt="biryani"></img>
          </div>
          <div className="col">
            <img src={fish} className="img-fluid imgMeal" alt="fish"></img>
          </div>
          <div className="col">
            <img src={kebab} className="img-fluid imgMeal" alt="kebab"></img>
          </div>
        </div>
      </div>

      <div className=" bg-body-secondary lowerSection p-5 width-100 fs-5 text-center">
          <h2 className="text-center p-3">Best food delivery services</h2>
          <p className="p-3">Lorem ipsum dolor sit amet. Qui aliquam minima qui deserunt reprehenderit et
           consequatur excepturi et quia omnis ut dolorum galisum aut ipsam reprehenderit ut minus magnam. Ad 
           officiis quisquam est pariatur beatae sit fugiat cumque hic consequatur aliquid ut laboriosam voluptate 
           id laboriosam nihil est repellendus quisquam.</p>
          <button type="button" class="btn btn-outline-danger opacity-75">Download App</button>
      </div>

      
  
    </>
  );
};

export default Homepage;
