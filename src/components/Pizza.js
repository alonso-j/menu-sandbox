import PropTypes from "prop-types";

export default function Pizza({ name, ingredients, route }) {
  return (
    <div>
      <img src={route} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
    </div>
  );
}

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
