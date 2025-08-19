export default function Products() {
  const productData = [
    {
      name: 'Vivo y56',
      image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1674897442329/0aec3779fb2446a318b53ee60efe4ba0.png'
    },
    {
      name: 'OnePlus',
      image: 'https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80'
    },
    {
      name: 'iPhone 16',
      image: 'https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg'
    },
    {
      name: 'iPhone 16',
      image: 'https://m.media-amazon.com/images/I/61135j8fPJL._UF1000,1000_QL80_.jpg'
    }
  ];

  return (
    <div style={styles.container}>
      {productData.map((product) => (
        <div key={product.name} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3 style={styles.name}>{product.name}</h3>
          <button style={styles.btn}>ADD TO CART</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', justifyContent: 'center', gap: '20px', padding: '50px', background: '#f5f5f5'
  },

  card: {
    borderRadius: '10px', background: '#fff', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },

  image: {
    width: '250px', height: '250px', objectFit: 'cover', marginBottom: '10px'
  },

  name: { 
    fontFamily: 'Poppins, sans-serif' 
  },

  btn: {
    background: '#ff0000', color: '#fff', padding: '8px 15px', border: 'none', fontFamily: 'Poppins, sans-serif', borderRadius: '5px', cursor: 'pointer'
  }
};
