mutation createCollection {
    createCollection(input:{
    	title: "Martha J. Crawford Design Papers, 1961-1974 (Ms1994-016)"
    	rights_statement: "Permission to publish material from the Ms1994_016_Crawford must be obtained from University Libraries Special Collections, Virginia Tech."
    	bibliographic_citation: "Researchers wishing to cite this collection should include the following information: Ms1994_016_Crawford - Special Collections, Virginia Polytechnic Institute and State University, Blacksburg, Va."
    	rights_holder: "Special Collections, University Libraries, Virginia Tech"
    	collection_category: "IAWA"
    	visibility: true
    	custom_key: "abcd"
    	thumbnail_path: "https://img.cloud.lib.vt.edu/iawa/Ms1994_016_Crawford/representative.jpg"
    	create_date: "09/25/2019"
    	modified_date: "09/25/2019"
	}) {
        id title rights_statement bibliographic_citation rights_holder collection_category visibility custom_key thumbnail_path create_date modified_date
    }
}