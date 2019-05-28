import React from 'react';
import './Viewer.css';

class Viewer extends React.Component {

	componentDidMount() {
  	var script = document.createElement('script')
  	this.setState({"id": "viewer"})
  	script.src = "mirador.js";
  	document.getElementsByTagName('head')[0].appendChild(script)
  	var link = document.createElement('link')
  	link.rel = "stylesheet"
  	link.href= "mirador-combined.min.css"
  	document.getElementsByTagName('head')[0].appendChild(link)
  	var config = this.props.config
  	window.onload = function() {
  		window.Mirador(config)
		}
	}

	render() {

		return (
			<div id="mirador_viewer"></div>
		)
	}
}

export default Viewer;