import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{user.name}</Card.Title>
        <Card.Body style={{ padding: "1rem 0", height: "12rem" }}>
          <Card.Text>
            <i class="fa-solid fa-envelope"></i>
            {user.email}
          </Card.Text>
          <Card.Text>
            <i class="fa-solid fa-phone-flip"></i>
            {user.phone}
          </Card.Text>
          <Card.Text>
            <i class="fa-solid fa-globe"></i>
            {user.website}
          </Card.Text>
          <Card.Text>
            <i class="fa-solid fa-location-dot"></i>
            {user.address.city}
          </Card.Text>
        </Card.Body>
        <Link style={{ textDecoration: "none" }} to={`/${user.id}`}>
          <Button variant="primary">Show Full Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default User;
