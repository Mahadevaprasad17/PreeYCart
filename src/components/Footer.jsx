export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 PREEYCART. ALL RIGHTS RESERVED</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#000', padding: '20px', textAlign: 'center'
  },
  text: {
    color: '#fff', fontFamily: 'Poppins, sans-serif', margin: 0
  }
};