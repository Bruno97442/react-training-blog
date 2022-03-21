import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import "./Animation.css";

const About = () => {
  return (
    <section className="cAbout p-5">
      <h1 className="text-center">Whazzah</h1>
      <Container fluid>
        <Row className="g-2 justify-content-center pb-5">
          <Col sm="12" md="5">
            <img src="/images/author.jpg" className="author-image w-100 border" />
          </Col>
          <Col sm="12" md="7" className="d-flex flex-column justify-content-md-center border">
            <p className="p-1 p-md-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem expedita quae officiis ut dignissimos iure mollitia molestiae placeat rerum fuga, neque recusandae eveniet laudantium! Dolore eaque eius animi quod nostrum.
            </p>
            <p className="p-1 p-md-2">

              Ullam esse suscipit laudantium quas consequatur deserunt blanditiis. Id cupiditate temporibus eius iste, harum repellendus tempora est sit eum veniam modi repellat, labore ab illum perspiciatis, doloremque facere voluptas consequuntur.
              Facere, cumque. Aut dolor exercitationem doloribus rerum ullam? Odio ex eaque asperiores ipsam harum, dolor iste? Dolorem assumenda voluptates, quasi dolores sequi maxime adipisci dolorum tempore labore? Dolorem, at enim.<br />
              Expedita illo a nemo quam obcaecati repudiandae, itaque ut veniam, enim aperiam unde iure fugiat molestiae maxime quae! Consectetur placeat sequi doloremque est vel ipsam sit perferendis? Omnis, odit enim!<br />
              Est, praesentium iste! Eligendi earum recusandae deserunt voluptatem quos facere autem expedita iure aliquid, cupiditate cum aliquam atque error. Est neque vero corrupti veniam animi voluptatem in doloribus assumenda rem.<br />
              Inventore explicabo facere nulla repellendus dicta in repudiandae sunt tenetur veniam maiores, ex quo nisi, excepturi a quia voluptates praesentium. Corporis aperiam quia impedit facilis quas! Earum nam libero harum.

            </p>
          </Col>

        </Row>
      </Container>

    </section>
  );
};

export default About;
