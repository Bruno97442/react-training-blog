import React, { useEffect, useState } from 'react';
import { Form, FloatingLabel, Button } from "react-bootstrap";
import './ArticlesList.css';

const SearchBar = ({ onInputChange, value }) => {
    const placeholder = "Type your search... !"
    const [showClearBtn, setShowClearBtn] = useState(false)

    const clearBtnStyle = {
        position:"absolute",
        right:"10px",
        top:"50%",
        transform: "translate(0, -50%)"
        
    }
    function inputHandler(e) {
        onInputChange(e.target.value)
    }

    function clearSearchHandler() {
        onInputChange("")
    }

    useEffect(() =>
        setShowClearBtn(value !== "")
        , [value])
    return (
        <section className='marginSearchBar'>
            <Form className='my-3'>
                <Form.Group>
                    <FloatingLabel controlId='searchInput' label={placeholder}>
                        {showClearBtn && <Button variant='outline-secondary' tabIndex="2" onClick={clearSearchHandler} style={clearBtnStyle}>Clear</Button>}
                        <Form.Control type='text' placeholder={placeholder} tabIndex="1" value={value} onChange={inputHandler} />
                    </FloatingLabel>
                </Form.Group>
            </Form>
        </section>
    );
};

export default SearchBar;
