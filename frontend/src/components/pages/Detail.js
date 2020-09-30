import React, { Component } from 'react';
import BookDetail from '../elements/BookDetail';
import SearchBar from '../elements/SearchBar';
import ReviewCard from '../elements/ReviewCard';


export default class Detail extends Component{
    book = {
      isbn: '564-135468464',
      title: 'Book 1',
      author: 'Author 1',
      thumbnail: 'https://picsum.photos/150/150?random=1',
      likeSum: 34,
      description: 'vhejbvnjebvjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfevjhebvjhebvjhebvjhebvjebvjebvjfebjfbvjdfhvddfkjnvkdfnv dfvn dfvndhvdhbvdhfbvdhfbvdhfbvdhfbvdhfvbdhfvbdhfvbdhvbdhvbdhbvdfhvbdfhvdfvjdfnvjdfhvdjfvdjvhbdjvhbdfjvbdvdv',
      rating: 8.5,
    }
    review = {
        title: 'Great Book',
        rating: 8,
        text: 'jkdsnkjsndkvjnskvnskdjvnsdkjvnsdkjvnskjdvnskdjvnsdjvnskvjnskdvnksjdvnskjdvsjvnsdnkvskndskjdvnsdjnksjdvnskjdvsjvnsdnkvskndskjdvnsdjnksjdvnskjdvsjvnsdnkvskndskjdvnsdjnksjdvnskjdvsjvnsdnkvskndskjdvnsdjnksjdvnskjdvsjvnsdnkvskndskjdvnsdjkvnsdvnsknvskjdnvskndv',
        user: 'User1',
        date: '23/07/2001',
    }
    render() {
        return (
          <React.Fragment>
            <header>
              <div className="search_bar_detail">
                <SearchBar/>
              </div>
            </header>
            <section className = "detailPage">
                <BookDetail book={this.book}/>
                <h5 className="review_section">Reviews</h5>
                <div className = "reviewCards">
                    <ReviewCard review={this.review}/>
                </div>
            </section>
          </React.Fragment>
        );
      }
}