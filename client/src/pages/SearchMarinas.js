import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import axios from 'axios';
// import '.client/utils/api.js'

const SearchMarinas = () => {
    
    const [marinas, setMarinas] = useState([])
    const [search, setSearch] = useState('')
    console.log(marinas)

    useEffect(() => {
        axios.get('https://api.marinas.com//v1/points/search?')
            .then(res => {
                setMarinas(res.data);
            }).catch(err => console.log(err, 'error in setMarinas useEffect'))
    }, [search])

    const handleChange = async e => {
        setSearch(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };






    return (
        <div>
            <Jumbotron fluid className='text-light bg-primary'>
                <Container>
                    <h1>Search for a Marina</h1>
                    <Form /*onSubmit={handleFormSubmit}*/>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    /*value={searchInput}*/
                                    onChange={handleChange}
                                    onKeyPress={handleKeypress}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a Marina'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='dark' size='lg'>
                                    Click to Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default SearchMarinas
