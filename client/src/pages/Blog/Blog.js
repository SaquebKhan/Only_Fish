import React from 'react';
import { Form, Button, Container } from "react-bootstrap"

const Blog = () => {
  return (
    <div>
      <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="Text" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="Text" row="3" placeholder="Body" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  );
}

export default Blog;