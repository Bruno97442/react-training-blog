import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getLinkPath } from '../Routing';
import './ArticlesList.css';
import './Animation.css';

const Article = ({ cors, min }) => {
    let { t, b } = cors
    const { title, body } = cors
    const footerStyle = {
        bottom: 0, left: 0, right: 0,
        height: "40%",
        background: "linear-gradient(transparent, rgb(255, 255, 255) 60%)"
    }
    return (
        <article className="shadow article" style={{ height: "100%", maxHeight: "50vh" }}>
            <Card style={{ height: "100%", position: "relative" }}>
            <Link tabIndex="-1" className="text-decoration-none" to={getLinkPath('articles')+`/${cors.id}-${cors?.title?.match(/^\w+\s\w+\s\w*/)[0].replace(/\s/g, '-')}`}>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>{body.substr(0, 18) + "..."}</Card.Text>
                </Card.Body>
                <div className="position-absolute d-flex align-items-end justify-content-end p-2" style={footerStyle}>
                    <Button variant='outline-primary'className='btn-hover' >Read more <i className="bi bi-chevron-right"></i></Button>
                </div>
                </Link> 
            </Card>
        </article>
    );
};

export default Article;
