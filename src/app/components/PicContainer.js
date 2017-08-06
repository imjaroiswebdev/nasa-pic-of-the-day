import React, { Component } from 'react';
import PicCard from './PicCard';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { API_KEY } from '../../.constants.local.js'

class PicContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			picInfo: []
		}
	}

	componentWillMount() {
		const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';

		axios.get(END_POINT + API_KEY)
			.then(response => {
				this.setState({
					picInfo: response.data
				})
			})
			.catch((err) => {
				console.log(`${err}
					Fetching data error ocurred.
				`)
			})

	}

	render () {

		const { picInfo } = this.state;
		return (
			<div>
				<Header />
				<PicCard data={picInfo} />
				<Footer />
			</div>
		)
	}
}

export default PicContainer;