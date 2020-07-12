import React from 'react';
import './App.css';
import { TextContext } from './textContext';
import MyComponent from './components/MyComponent';

class Context extends React.Component {
	constructor() {
		super();
		this.onChangeText = () => {
			this.setState(prevState => ({
				textContext: prevState.textContext === 'before' ? 'after' : 'before'
			}))
		}

		this.state = {
			textContext: 'before',
			onChangeText: this.onChangeText,
		}
	}

	render() {
		return (
			<TextContext.Provider value={this.state}>
				<MyComponent />
			</TextContext.Provider>

		);
	}
}

export default Context;