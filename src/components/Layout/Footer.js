import Order from "../Order";

export default function Footer() {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour <= currHour && currHour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you here between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}
