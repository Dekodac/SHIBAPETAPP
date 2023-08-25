import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AccountPage() {
  const [userProfile, setUserProfile] = useState({});
  const token = localStorage.getItem('token'); 
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/account/', {
          headers: {
            Authorization: `Token ${token}`, // Use the retrieved token
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [token]); // Make sure to include token in the dependency array


  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Header as="h3" className="text-center">
              Account Information
            </Card.Header>
            <Card.Body>
              <p><strong>Username:</strong> {userProfile.username}</p>
              <p><strong>Email:</strong> {userProfile.email}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
