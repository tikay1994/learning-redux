import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./style.scss";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">
          <button className="btn-photo btn-success">Add new photo</button>
        </Link>
      </Container>
    </div>
  );
}

export default MainPage;
