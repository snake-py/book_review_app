import React, { Component } from 'react';
import BookDetail from '../elements/BookDetail';
import SearchBar from '../elements/SearchBar';
import ReviewCard from '../elements/ReviewCard';
import AddReview from '../elements/addReview';

export default class Detail extends Component {
  constructor() {
      super();
      this.state = {
        review: false,
      };
      this.createReview=this.createReview.bind(this);
  }
  book = {
    isbn: '564-135468464',
    title: 'Book 1',
    author: 'Author 1',
    thumbnail: 'https://picsum.photos/300/300?random=1',
    likeSum: 34,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    rating: 8.5,
  };
  reviews = [{
    title: 'Great Book',
    rating: 8,
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    user: 'User1',
    date: '23/07/2001',
  },
  {
    title: 'Interesting!!',
    rating: 8,
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    user: 'User3',
    date: '23/07/2005',
  }
];
  createReview(){
    this.setState({
      review: !this.state.review,
    });
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container mt-5">
            <div className="search_bar_detail">
              <SearchBar />
            </div>
          </div>
        </header>
        <section className="container mt-5">
          <BookDetail book={this.book} />
          {/* //<div className = "row"> */}
          <h5 className="review_section">Reviews</h5>
          <button onClick={this.createReview}>Add a review</button>
          {/* </div> */}
          {(this.state.review)&&(<div className = "addReview">
                  <AddReview />
                </div>)}
          <div className="reviewCards">
          {this.reviews.map((review) => <ReviewCard review={review}/>)}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
