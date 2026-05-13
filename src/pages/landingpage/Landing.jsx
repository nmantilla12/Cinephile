import React from 'react';

const Landing = () => {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', color: 'white' }}>
      <h1 style={{ fontSize: '3rem', color: '#00d1ff' }}>BIENVENIDO A CINEPHILE</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        Tu plataforma favorita para descubrir el mejor cine.
      </p>
      <button style={{ 
        marginTop: '30px', 
        padding: '12px 24px', 
        backgroundColor: '#00d1ff', 
        border: 'none', 
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer' 
      }}>
        Explorar Cartelera
      </button>
    </div>
  );
};

export default Landing; // <--- ESTO arregla el error de la línea 3 del router