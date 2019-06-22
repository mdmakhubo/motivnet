import React, { Component } from "react";
import { FaBlackTie, FaTools, FaPaintRoller, FaHome } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBlackTie />,
        title: "Professional Services.",
        info1: "• Construction",
        info2: "• Accommodation units",
        info3: "• Cleaning and Gardening",
        info4: "• Food and beverage services",
        info5: "• Entertainment"
      },
      {
        icon: <FaTools />,
        title: "Engineering Services",
        info1: "• Mechanical and Electrical",
        info2: "• Solar, Wind and Boiler",
        info3: "• Tiler and Roofer",
        info4: "• Plumber and Painter",
        info5: "• CCTV and Alarm Systems"
      },
      {
        icon: <FaPaintRoller />,
        title: "Maintenance Services",
        info1: "• Cleaning and Hygiene",
        info2: "• Catering",
        info3: "• Security",
        info4: "• Landscaping and garden services",
        info5: "• Laundry services"
      },
      {
        icon: <FaHome />,
        title: "Property Management",
        info1: "• Property portfolio management",
        info2: "• Leasing and acquisitions",
        info3: "• Rental administration",
        info4: "• Utility management"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title
          title="services"
          subtitle=" MotivNet was first established in 2004. We had many ups and downs as
            we grew. MotivNet is now a newly proven arm of our group."
          subtitle2=" We offer outstanding opportunities for individuals seeking to go all-out and flourish in the engineering, cleaning, security and facility management industry, focusing on their professional as well as personal development. Our distinctive environment offers careers that are exciting, challenging and rewarding. We motivate our people to learn, experiment and grow – to create and fulfil
            new opportunities for both their own personal benefit and the company’s.
 "
        />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info1}</p>
                <p>{item.info2}</p>
                <p>{item.info3}</p>
                <p>{item.info4}</p>
                <p>{item.info5}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
