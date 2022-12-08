import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
  import "./Blog.css"
  
  const Blog = (props) => {
    return (
      <Card className="blog_card">
        <CardImg className="blog_img"src={props.image} />
        <CardBody>
          <CardTitle tag="h3">{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText >{props.text}</CardText>
          <Button className="blog_button" color={props.color}>Read More</Button>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;
  