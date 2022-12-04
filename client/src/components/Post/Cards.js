import { Row, Col } from "reactstrap";
import Blog from "./Blog.js"
import bg1 from "../images/bg/bg1.jpg";
import bg2 from "../images/bg/bg2.jpg";
import bg3 from "../images/bg/bg3.jpg";
import bg4 from "../images/bg/bg4.jpg";
import "./Card.css"

  
  const BlogData = [
    {
      image: bg1,
      title: "트레이딩 기초",
      subtitle: "유영신",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg2,
      title: "트레이딩 하는법",
      subtitle: "배운식",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg3,
      title: "꿀팁",
      subtitle: "오호건",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg4,
      title: "Simple Trading",
      subtitle: "윤세호",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
  ];
  
  const Cards = () => {
    return (
        <Row className="card-row">
          {BlogData.map((blg, index) => (
            // <Col sm="6" lg="6" xl="3" key={index}>
              <Blog
                key={index}
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            // </Col>
          ))}
        </Row>
    )};

export default Cards;