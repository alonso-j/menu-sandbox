import PropTypes from "prop-types";

export default function Pizza({ product }) {
  const { name, ingredients, photoName, price, soldOut } = product;

  if (soldOut) return null;

  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

Pizza.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    soldOut: PropTypes.number.isRequired,
  }),
};
