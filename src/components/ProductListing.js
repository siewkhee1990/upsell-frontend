import React, { Component} from 'react';
import Product from './Product';
import { ListingConsumer } from '../context';
import Example from './Modal/example';

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showExample: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <h1> Product Listings</h1>
                        <div className="row">
                            <ListingConsumer>
                                {value => {
                                    return value.listings.filter(listing => !this.props.filter || listing.category === this.props.filter).map(listing => {
                                        return <Product
                                            key={listing._id}
                                            listing={[listing]}
                                        />
                                    })
                                }}
                            </ListingConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductListing;
