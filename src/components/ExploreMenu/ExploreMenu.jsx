import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
// import PropTypes from "prop-types";

const ExploreMenu = ({ onCatergory, onSetCatergory }) => {
  console.log(onCatergory, onSetCatergory);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Discover the best food from our menu. We have a wide variety of dishes
        to choose from.{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                onSetCatergory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={onCatergory === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
// ExploreMenu.propTypes = {
//   onCatergory: PropTypes.string.isRequired,
//   onSetCatergory: PropTypes.func.isRequired,
// };
export default ExploreMenu;
