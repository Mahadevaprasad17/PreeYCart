export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>PreeYCart</h1>
      <img
        src="/shopping-cart-svgrepo-com.svg"
        alt="Cart"
        style={styles.cartImage}
      />
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', background: '#000'
  },
  logo: {
    color: '#fff', fontFamily: 'Poppins, sans-serif', margin: 0
  },
  cartImage: {
    width: '24px', height: '24px', cursor: 'pointer', filter: 'invert(1)'
  }
};
