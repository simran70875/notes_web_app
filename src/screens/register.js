import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Add registration logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Username:', username);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('Password:', password);
    
    // After successful registration logic
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '8px' }}>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <label style={{ marginBottom: '8px' }}>
            Phone:
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <label style={{ marginBottom: '8px' }}>
            Address:
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <label style={{ marginBottom: '8px' }}>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <label style={{ marginBottom: '16px' }}>
            Confirm Password:
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
          </label>
          <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
            Register
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '14px' }}>
          Already have an account? <a href="/" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
