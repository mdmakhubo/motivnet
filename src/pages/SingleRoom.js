import React, { Component } from "react";
import defaultBcg from "../images/room-25.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to skillss
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      sector1,
      sector2,
      sector3,
      sector4,
      extras,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to skills
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Sectors</h3>
              <h6>{sector1}</h6>
              <h6>{sector2}</h6>
              <h6>{sector3}</h6>
              <h6>{sector4}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Our Property Investment Strategy is </h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
