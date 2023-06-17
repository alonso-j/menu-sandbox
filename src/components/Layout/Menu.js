import PropTypes from "prop-types";
import Pizza from "../Pizza";

export default function Menu({ data }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {data.length > 0 ? (
        <ul className="pizzas">
          {data.map((pizza) => (
            <Pizza key={pizza.name} product={pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

Menu.propTypes = {
  data: PropTypes.object.isRequired,
};
