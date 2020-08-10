import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class UserOrder extends Component {
    state = {
        orders: []
    }

    render() {
        const { status, created_date, name, amount } = this.props.order[0];
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" style={{ width: "15rem", marginBottom: "15px" }}>
                    <div className="card-body mx-auto">
                        <h5 className="card-title">Status: <span style={{color:"red"}}>{status}</span></h5>
                        <p className="card-text">Date Ordered: {moment(created_date).format('DD-MMM-YYYY')}</p>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Amount: {amount.$numberDecimal}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserOrder;


