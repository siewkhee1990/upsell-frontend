import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';

const BACKEND_URL_LISTINGS_CREATE = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002/listings/create';


class Sell extends Component {
        constructor(props) {
            super(props);
        this.state = {
            image_url: '',
            name: '',
            category: '',
            decription: '',
            quantity: 0,
            price:0,
            meetup: '',
            condition: '',
            listings: []
        }
            
    }

        handleChange = (event) => {
            this.setState({[event.target.id] : event.target.value})
        }
    
        handleSubmit = (event) => {
            event.preventDefault();
            
            fetch(BACKEND_URL_LISTINGS_CREATE, {
                body: JSON.stringify({
                    image_url: this.state.image_url,
                    name: this.state.name,
                    category: this.state.category,
                    description: this.state.description,
                    quantity: this.state.quantity,
                    price: this.state.price,
                    meetup: this.state.meetup,
                    condition: this.state.condition
                 }
                ),
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                }
              }).then(createdListing => {
                return createdListing.json();
              }).then(jsonedListing => {
                  console.log(jsonedListing)
                this.setState({
                    listings: [jsonedListing, ...this.state.listings],
                    //reset the form
                    image_url: '',
                    name: '',
                    category: '',
                    decription: '',
                    quantity: 0,
                    price:0,
                    meetup: '',
                    condition: '' 
                 
                })
                    // return <Redirect to='/' />
               
              }).catch(error => {
                console.log(error);
              });    
    
            
        }

    
  

    render() { 
        const {image_url, name, category, description, quantity, price, meetup, condition} = this.state;

        return (  
            <React.Fragment>
            <div className="col-9 mx-auto col-md-6 col-lg-6 my-5">  
                <h3>Upload Item To Sell</h3>
                <br />
                <br />
                
                <form onSubmit={this.handleSubmit}> 
                        <div className="form-group">
                            <label htmlFor="image_url">Image_URL</label>
                            <input className="form-control border border-danger" type="text"  value={image_url} id="image_url" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control border border-danger" type="text" value={name}  id="name" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input className="form-control border border-danger" type="text" value={category}  id="category" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" className="form-control border border-danger" name="description" id="description" rows="5" value={description} onChange={this.handleChange}></textarea>
                        </div>


                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input className="form-control border border-danger" type="text" value={quantity}  id="quantity" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input className="form-control border border-danger" type="number" step="0.01"  value={price} id="price" onChange={this.handleChange} />
                        </div>
                    

                        <div className="form-group ">
                            <label htmlFor="meetup">Meet up</label>
                            <input className="form-control border border-danger" type="text" value={meetup}  id="meetup" onChange={this.handleChange}/>
                        </div>  


                        <div className="form-group ">
                            <label htmlFor="condition">Condition</label>
                            <input className="form-control border border-danger" type="text" value={condition}  id="condition" placeholder="new or old" onChange={this.handleChange}/>
                        </div>  
                    
                    <button className="btn btn-danger" type="submit">Submit</button>              
                </form>
                
            </div>
            </React.Fragment>
           
        );
    }
}
 
export default Sell;


