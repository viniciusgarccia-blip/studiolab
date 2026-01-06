import React from 'react';

export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'sans-serif' 
    }}>
      <h1>Garcia Studio Lab</h1>
      <p>Site em construção - O deploy funcionou!</p>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #333', 
        borderRadius: '8px',
        marginTop: '20px' 
      }}>
        <p>Aguardando integração dos componentes...</p>
      </div>
    </div>
  );
}
