import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    
    render() { 
          const {_id, image_url, name, price, condition } = this.props.listing[0];
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" style={{width:"15rem", marginBottom:"15px"}}>
                     <div 
                        className='img-container p-5 view overlay zoom' 
                        onClick={() => console.log('you clicked me on the image container')}>
                        <Link to={`${_id}/details`}>
                            <img src={image_url} alt='' className="card-img-top"/>
                        </Link>
                    </div>
                    <div className="card-body mx-auto">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price.$numberDecimal}</p>
                        <p className="card-text">{condition}</p>
                    <Link to={`/${_id}/buynow`}>
                        <button type='button' className="btn btn-danger">Buy Now</button>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Product;
