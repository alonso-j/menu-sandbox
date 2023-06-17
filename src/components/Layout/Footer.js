function Footer() {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour <= currHour && currHour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you here between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
