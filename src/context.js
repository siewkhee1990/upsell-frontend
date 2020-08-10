import React, { Component } from 'react';
import ListingService from "./Services/ListingServices";

const ListingContext = React.createContext();
//Provider 
//Consumer 

class ListingProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [], //set initial state
            filter: null
        }
    }

    //function to fetch data from backend server 
    componentDidMount() {
        ListingService.findAll().then(data => {
            this.setState({
                listings: data //reset the listings state to data fetched 
            })
        })
    }

    render() {
        return (
            <ListingContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </ListingContext.Provider>
        );
    }
}

const ListingConsumer = ListingContext.Consumer;

export { ListingProvider, ListingConsumer };