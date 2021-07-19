import React from 'react';
import api from "../utils/api";

class Home extends component {
  state={
    result:{}, 
    search:""
  };

searchMovies = query => {
  api.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};


// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>
  
//       </p>
//     </div>
//   );
// }

render() {
  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card
            heading={this.state.result.Title || "Search for a Movie to Begin"}
          >
            {this.state.result.Title ? (
              <MovieDetail
                title={this.state.result.name}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Home;