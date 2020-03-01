import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

class ListTrx extends Component {

	constructor(props) {
        super(props);
        this.state  = {
            trx: [],
            };
        }

	list_trx(event){
		const code = document.getElementById('itemCode').value;
		const url = `${API_URL}/api/trx/`;
		console.log(code)
		return axios.post(url, {itemCode: code}).then(response => response.data)
	}

	componentDidMount() {
        var  self  =  this;
        this.list_trx().then(function (result) {
			self.setState({ trx: result.data})
			console.log(self.state.trx);
			return(
				<div>
					
				</div>
			)
            });
        }

	render(){
		return(
			<form onSubmit={this.list_trx}>
				<label>Item Code</label>
				<input id='itemCode' type='text'></input>
				<input type='submit' value='submit'></input>
				<div>
					<table className='table'>
						<thead key='thead'>
							<tr>
								<th>Trx Number</th>
								<th>Type</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							{this.state.trx.map(c => 
								<tr key={c.pk}>
									<td>{c.pk}</td>
									<td>{c.trxType}</td>
									<td>{c.qty}</td>
								</tr>)}
						</tbody>
					</table>
				</div>
			</form>
		)
	}
}
export default ListTrx