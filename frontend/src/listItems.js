import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            items: [],
            };
        }

    getItems() {
        const url = `${API_URL}/api/items/`;
        return axios.get(url).then(response => response.data);
        }

    componentDidMount() {
        var  self  =  this;
        this.getItems().then(function (result) {
            console.log(result.data);
            self.setState({ items: result.data})
            });
        }

    render() {

        return (
            <div>
                <table className="table">
                <thead key="thead">
                <tr>
                    <th>Item Code</th>
                    <th>Name</th>
                    <th>Discription</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {this.state.items.map(c =>
                    <tr key={c.pk}>
                    <td>{c.itemCode}</td>
                    <td>{c.name}</td>
                    <td>{c.description}</td>
                    <td>{c.qty}</td>
                    </tr>)}
                </tbody>
                </table>
            </div>
            );
        }
    }
export default ItemList;