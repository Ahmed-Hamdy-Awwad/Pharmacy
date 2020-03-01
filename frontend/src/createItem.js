import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

class CreateItem extends Component {

	createItem(){
		const code = document.getElementById('itemCode').value;
		const name = document.getElementById('name').value;
		const desc = document.getElementById('desc').value;
		const qty = document.getElementById('qty').value;
		const url = `${API_URL}/api/items/`;
		return axios.post(url, {itemCode: code, name: name, desc: desc, qty: qty});}

	render(){
		return(
			<form onSubmit={this.createItem}>
				<label>Item Code</label>
				<input id='itemCode' type='text'></input>
				<label>Item Name</label>
				<input id='name' type='text'></input>
				<label>Item Description</label>
				<input id='desc' type='text'></input>
				<label>Item Quantity</label>
				<input id='qty' type='number'></input>
				<input type='submit' value='Submit'></input>
			</form>
		)
	}
}
export default CreateItem