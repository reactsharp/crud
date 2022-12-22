import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { storeProducts } from './Products';
import { Link, useNavigate } from "react-router-dom";
import { ProductConsumer } from '../context';
function Home() {

    let history = useNavigate();

    const haldleEdit = (id, title, price, company, info) => {

        localStorage.setItem('id', id);
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('company', company);
        localStorage.setItem('info', info);
    }

    const haldleDelete = (id) => {

        var index = storeProducts.map(function (e) {
            return e.id;
        }).indexOf(id);

        storeProducts.splice(index, 1);

        history('/');

    }


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeProducts && storeProducts.length > 0 ?
                            storeProducts.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.company}</td>
                                        <td>{item.info}</td>

                                        <td>
                                            <Link to={`edit`}><Button onClick={() => haldleEdit(item.id, item.title, item.price, item.company, item.info)}>Edit</Button></Link>
                                            <Button onClick={() => haldleDelete(item.id)}>Delete</Button>
                                            <ProductConsumer>
                                                {value => (
                                                    <Button

                                                        onClick={() => {
                                                            value.addToCart(item.id);
                                                        }}
                                                    >

                                                        Add to Cart

                                                    </Button>
                                                )}
                                            </ProductConsumer>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Products"
                    }
                </tbody>
            </Table>

            <Link to="/create">
                <Button size='lg'>Create</Button>
            </Link>
        </>
    )
}

export default Home
