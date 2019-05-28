import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Viewer from './Viewer'
import Table from './Table'
import * as serviceWorker from './serviceWorker';

let attributeList = [
  {"name": "Tags", "values": ["Awards"]},
  {"name": "Source", "values": ["Please consult the Guide to the Lorraine Rudoff Architectural Collection for more information."]},
  {"name": "Date", "values": ["1980-03-27"]},
  {"name": "Rights", "values": ["Permission to publish material from the Certificate and program for YWCA Leader Luncheon VI, March 27, 1980 (Ms1990-025) must be obtained from University Libraries Special Collections, Virginia Tech."]},
  {"name": "Language", "values": ["en"]},
  {"name": "Type", "values": ["Documents"]},
  {"name": "Identifier", "values": ["Ms1990_025_Per_Awd_B001_F001_006"]},
  {"name": "Location", "values": ["Los Angeles, California"]},
  {"name": "Belongs to", "values": ["Ms1990-025, Box 1, Folder 1", "Ms1990-025"]},
  {"name": "Bibliographic citation", "values": ["Researchers wishing to cite this collection should include the following information: - Special Collections, Virginia Polytechnic Institute and State University, Blacksburg, Va."]},
  {"name": "Rights holder", "values":["Special Collections, University Libraries, Virginia Tech"]}
]


let mirador_config = {
	"id":"mirador_viewer",
	"buildPath":"/assets/",
	"i18nPath":"",
	"imagesPath":"",
	"data":[{"manifestUri":"https://img.cloud.lib.vt.edu/iawa/Ms1990_025_Rudoff/Ms1990_025_Box1/Ms1990_025_Box1_Folder1/Ms1990_025_Per_Awd_B001_F001_006/manifest.json"}],
	"windowObjects":[{"loadedManifest":"https://img.cloud.lib.vt.edu/iawa/Ms1990_025_Rudoff/Ms1990_025_Box1/Ms1990_025_Box1_Folder1/Ms1990_025_Per_Awd_B001_F001_006/manifest.json","viewType":"ImageView"}],
	"showAddFromURLBox": false
}

ReactDOM.render(
	<Viewer config={mirador_config} />, 
	document.getElementById('mirador_frame'));
ReactDOM.render(
	<Table rows={attributeList} />,
	document.getElementById('metadata_table')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
