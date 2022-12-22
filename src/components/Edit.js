import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storeProducts } from './Products';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
function Edit() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [info, setInfo] = useState('');
    const [id, setID] = useState('');

    let history = useNavigate();

    var index = storeProducts.map(function (e) {
        return e.id;
    }).indexOf(id);

    const handleUpdate = (e) => {
        e.preventDefault();

        let a = storeProducts[index];

        console.log(a);

        a.title = title;
        a.price = price;
        a.company = company;
        a.info = info;

        history('/');

    }

    useEffect(() => {
        setID(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setPrice(localStorage.getItem('price'))
        setCompany(localStorage.getItem('company'))
        setInfo(localStorage.getItem('info'))

    }, []);

    return (
        <>
            <Form className='d-grid gap-2' style={{ margin: "15em" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder='Enter Title' value={title} required onChange={(e) => setTitle(e.target.value)}></Form.Control>
                    <Form.Control type="text" placeholder='Enter Price' value={price} required onChange={(e) => setPrice(e.target.value)}></Form.Control>
                    <Form.Control type="text" placeholder='Enter Company' value={company} required onChange={(e) => setCompany(e.target.value)}></Form.Control>
                    <Form.Control type="text" placeholder='Enter Info' value={info} required onChange={(e) => setInfo(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleUpdate(e)} type="submit">Update</Button>
            </Form>
        </>
    )
}

export default Edit
