export default function Hero() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>NEW COLLECTION</h1>
      <button style={styles.btn}>SHOP NOW</button>
    </div>
  );
}

const styles = {
  hero: {
    background: 'url(https://www.thechennaimobiles.com/_next/image?url=https%3A%2F%2Fapi.thechennaimobiles.com%2F1754978657036.jpg&w=1600&q=75) center/cover',
    height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
  },
  title: {
    color: '#ff0000', fontFamily: 'Poppins, sans-serif', fontSize: '3rem'

  },
  btn: {
    padding: '12px 30px', background: '#ff0000', color: '#fff', border: 'none', borderRadius: '10px', fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer'
  }
};
