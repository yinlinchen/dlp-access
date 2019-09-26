# Create a collection
```
mutation createCollection {
    createCollection(input:{
    	title: "Martha J. Crawford Design Papers, 1961-1974 (Ms1994-016)"
        identifier: "Ms1994_016_Crawford"
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
        id title identifier rights_statement bibliographic_citation rights_holder collection_category visibility custom_key thumbnail_path create_date modified_date
    }
}
```

# Create an item
```
mutation createArchive {
    createArchive(input:{
    	title: "[Abstract shapes], n.d. Pastel (Ms1994-016)"
        identifier: "Ms1994_016_F005_Per_Art_007"
    	rights_statement: "Permission to publish material from the Ms1994_016_Crawford must be obtained from University Libraries Special Collections, Virginia Tech."
    	bibliographic_citation: "Researchers wishing to cite this collection should include the following information: [Abstract shapes], n.d. Pastel (Ms1994-016) - Special Collections, Virginia Polytechnic Institute and State University, Blacksburg, Va."
    	rights_holder: "Special Collections, University Libraries, Virginia Tech"
    	item_category: "IAWA"
    	visibility: true
    	manifest_url: "https://img.cloud.lib.vt.edu/iawa/Ms1994_016_Crawford/Ms1994_016_Folder5/Ms1994_016_F005_Per_Art_007/manifest.json"
    	create_date: "09/25/2019"
    	modified_date: "09/25/2019"
    	archiveCollectionId: "1fbf6561-29fb-49a2-adcb-54d5b06146ee"
	}) {
        id title identifier rights_statement bibliographic_citation rights_holder item_category visibility manifest_url create_date modified_date 
    }
}
```

# Query a collection
```
query listCollection {
    listCollections {
        items {
            id
            title
            collection_category
            archives {
              items {
               id 
               title
              }
            }
        }
    }
}
```