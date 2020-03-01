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

	listTrx(){
		const code = document.getElementById('itemCode').value;
		const url = `${API_URL}/api/trx/`;
		return axios.post(url, {itemCode: code}).then(response => response.data)
		}

	componentDidMount() {
        var  self  =  this;
        this.listTrx().then(function (result) {
			self.setState({ trx: result.data})
			return(
				<div>
					
				</div>
			)
            });
		}
		
	handleSubmit = event => {
		event.preventDefault();
		this.componentDidMount();
		};

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
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