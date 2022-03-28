import React from "react";
import { Card, Table } from "react-bootstrap";
import { useParams } from "react-router";

const UserProfile = ({ listOfUsers }) => {
  const { id } = useParams();
  const userId = Number(id);
  const user = listOfUsers.find((elem) => elem.id === userId);

  return (
    <div className="userProfile">
      <Card style={{ width: "50em" }}>
        <Table responsive striped bordered hover variant="dark">
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <th colspan={2}>General Information</th>
            </tr>
            <tr>
              <th>Full Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{user.website}</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th colspan={2}>Address</th>
            </tr>
            <tr>
              <th>Street</th>
              <td>{user.address.street}</td>
            </tr>
            <tr>
              <th>Suite</th>
              <td>{user.address.suite}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{user.address.city}</td>
            </tr>
            <tr>
              <th>Zipcode</th>
              <td>{user.address.zipcode}</td>
            </tr>
            <tr>
              <th>Geolocalisation</th>
              <td>
                Latitude: {user.address.geo.lat}, Longitude:{" "}
                {user.address.geo.lng}
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th colspan={2}>Company Information</th>
            </tr>
            <tr>
              <th>Company Name</th>
              <td>{user.company.name}</td>
            </tr>
            <tr>
              <th>Catch Phrase</th>
              <td>{user.company.catchPhrase}</td>
            </tr>
            <tr>
              <th>Business</th>
              <td>{user.company.bs}</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default UserProfile;
