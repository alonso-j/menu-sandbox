import PropTypes from "prop-types";

export default function Pizza({ name, ingredients, route, price }) {
  return (
    <div className="pizza">
      <img src={route} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
