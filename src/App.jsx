import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api' 
import { Container, Typography, Button } from '@mui/material';
import './App.css'; // Assuming you have some custom CSS for styling

const MapContainer = () => {
  const mapStyles = {
    height: '300px',
    width: '80%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {/* Add markers, polygons, or other features as needed */}
      </GoogleMap>
    </LoadScript>
  );
};

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="md" className="landing-container">
        <Typography variant="h1" component="div" gutterBottom>
          Welcome to My Map App
        </Typography>
        <Typography variant="h5" component="div" paragraph>
          Explore our amazing locations below!
        </Typography>
        <MapContainer />
        <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default App;
