import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ListingService from "../Services/ListingServices";
import AuthService from "../Services/AuthServices";
import moment from 'moment';

class PubUserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: this.props.match.params.userID,
            users: null,
            listings: [],
            filter: null
        };
    }

    componentDidMount() {
        AuthService.findByID(this.state.userID)
            .then(results => {
                // console.log(results)
                this.setState({
                    users: results
                }, () => {
                    this.getListingsByID();
                })
            })
    }

    getListingsByID = () => {
        ListingService.findByUserID(this.state.userID)
            .then(results => {
                this.setState({
                    listings: results
                })
            })
    }

    render() {
        console.log(this.props)
        return (
            this.state.users &&
            <div className="container-fluid py-5 ">
                <div className="row">
                    <div className="col-3">
                        <div className="container justify-content-center">
                            <div style={{ marginLeft: '80px', marginTop: '75px' }}>
                                <img style={{ width: "150px", height: "150px", borderRadius: "80px" }}
                                    src="https://i.ibb.co/djkcPvD/blank-profile-picture-973460-640.png" />
                            </div>

                            <div style={{ marginLeft: '85px', marginTop: '20px' }}>
                                <h4>{this.state.users.username}</h4>
                                <h5>date joined: </h5>
                                <h6>{moment(this.state.users.created_date).format('DD-MMM-YYYY')}</h6>
                                <h5>email: </h5>
                                <h6>{this.state.users.email}</h6>
                            </div>

                        </div>

                    </div>

                    <div className="col-9">
                        <div className="container">
                            <h1> User's Listings</h1>
                            <div className="row">
                                {this.state.listings.filter(listing => !this.props.filter || listing.category === this.props.filter).map(listing =>
                                    <Product
                                        key={listing._id}
                                        listing={[listing]}
                                    />
                                )}
                            </div>
                        </div>

                    </div>

                </div>

            </div>




        );
    }
}

export default PubUserProfile;

