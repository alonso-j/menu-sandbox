import Pizza from "../Pizza";

function Menu({ items }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {items.map((pizza) => (
        <Pizza
          name={pizza.name}
          ingredients={pizza.ingredients}
          route={pizza.photoName}
          price={pizza.price}
        />
      ))}
    </main>
  );
}

export default Menu;
