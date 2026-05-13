import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: '100px 20px', textAlign: 'center', color: 'white' }}>
      <h1>Contacto</h1>
      <p>¿Tienes alguna duda sobre Cinephile? ¡Escríbenos!</p>
      
      <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '20px auto' }}>
        <input type="text" placeholder="Tu nombre" style={{ padding: '10px' }} />
        <input type="email" placeholder="Tu correo" style={{ padding: '10px' }} />
        <textarea placeholder="Tu mensaje" style={{ padding: '10px', height: '100px' }}></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#00d1ff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact; // Esto es lo que el Router estaba pidiendo a gritos