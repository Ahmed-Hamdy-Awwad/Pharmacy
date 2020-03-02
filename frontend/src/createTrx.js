import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

class CreateTrx extends Component {

	createTrx(){
		const code = document.getElementById('itemCode').value;
		const type = document.getElementById('trxType').value;
		const qty = document.getElementById('qty').value;
		const url = `${API_URL}/api/createtrx/`;
		return axios.post(url, {itemCode: code, trxType: type, qty: qty});}

	render(){
		return(
			<form onSubmit={this.createTrx}>
				<label>Item Code</label>
				<input id='itemCode' type='text'></input>
				<label>Trx Type</label>
				<input id='trxType' type='text'></input>
				<label>Item Quantity</label>
				<input id='qty' type='number'></input>
				<input type='submit' value='Submit'></input>
			</form>
		)
	}
}
export default CreateTrx