import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storeProducts } from './Products';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
function Add() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [info, setInfo] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();

       const ids = uuid();

       let uniqueId = ids.slice(0,8);

       let a = title;
       let b = price;
       let c = company;
       let d = info;

       storeProducts.push({id:uniqueId, title:a, price:b, company:c, info:d });

       history('/');

    }
    return (
        <>
            <Form className='d-grid gap-2' style={{ margin: "15em" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder='Enter Title' required onChange={(e) => setTitle(e.target.value)}></Form.Control>
                    <Form.Control type="text" placeholder='Enter Price' required onChange={(e) => setPrice(e.target.value)}></Form.Control>
                    <Form.Control type="text" placeholder='Enter Company' required onChange={(e) => setCompany(e.target.value)}></Form.Control>
                    <Form.Control type="text" placeholder='Enter Info' required onChange={(e) => setInfo(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default Add
