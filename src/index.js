import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let attributeList = [
	{"label": "Title1", "value": "Value1"},
	{"label": "Title1", "value": "Value1"},
	{"label": "Title1", "value": "Value1"}
]
var style = {
	height: "688px",
	width: "100%"
}

let mirador_config = {
	"id":"mirador_viewer",
	"buildPath":"/assets/",
	"i18nPath":"",
	"imagesPath":"",
	"data":[{"manifestUri":"https://img.cloud.lib.vt.edu/iawa/Ms1998_022_Young/Ms1998_022_Box3/Ms1998_022_B3_Folder2/Ms1998_022_B003_F002_004_Pro_Ph/manifest.json"}],
	"windowObjects":[{"loadedManifest":"https://img.cloud.lib.vt.edu/iawa/Ms1998_022_Young/Ms1998_022_Box3/Ms1998_022_B3_Folder2/Ms1998_022_B003_F002_004_Pro_Ph/manifest.json","viewType":"ImageView"}],
	"showAddFromURLBox": false
}

const Row = ({label, value}) => {
	return (
		<tr>
			<td>label</td>
			<td>value</td>
		</tr>
	)
}
const Table = ({rows}) => {
	return (
		<table>
			<tbody>
				<tr>
					<th>Attribute Label</th>
					<th>Attribute Values</th>
				</tr>
				{rows.map(
					(row, i) => <Row key={i} label={row.label} value={row.value} />
				)}
			</tbody>
		</table>
	)
}

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
			<div>
				<div id="mirador_viewer" style={style}></div>
				<div><Table rows={attributeList} /></div>
			</div>
		)
	}
}
ReactDOM.render(
	<Viewer config={mirador_config} />, 
	document.getElementById('root')
);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
