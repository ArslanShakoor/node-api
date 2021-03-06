import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import * as actions from '../../actions/restaurant';

class RestaurantList extends Component {
  componentDidMount() {
    this.props.listRestaurant();
    window.scrollTo(0, 0);
  }
  description(str) {
    if (str) {
      return str.substring(0, 110);
    }
  }
  render() {
    if (this.props.restaurant.length > 3) {
      return _.map(this.props.restaurant, rest => {
        return (
          <div className="col-md-3 col-sm-6 col-xs-12" key={rest._id}>
            <Link
              to={`/restaurant/detail/${rest._id}/${rest.name}/${rest.avg}`}
            >
              <div className="restaurant-block">
                <div className="restaurant-name">{rest.name}</div>
                <div className="type">{rest.type}</div>
                <div className="review-decor">
                  <p>{this.description(rest.description)}</p>
                </div>
                <div className="rating">
                  <ReactStars count={5} size={20} value={4} edit={false} />
                </div>
              </div>
            </Link>
          </div>
        );
      });
    } else {
      return <div className="loader" />;
    }
  }
}
function mapStateToProps({ restaurant }) {
  console.log(restaurant);
  return {
    restaurant
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);
