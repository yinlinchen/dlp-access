/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollection = /* GraphQL */ `
  mutation CreateCollection($input: CreateCollectionInput!) {
    createCollection(input: $input) {
      id
      title
      identifier
      description
      creator
      source
      circa
      start_date
      end_date
      subject
      location
      rights_statement
      language
      related_url
      provenance
      belongs_to
      bibliographic_citation
      rights_holder
      custom_key
      collection_category
      visibility
      thumbnail_path
      parent_collection
      display_date
      create_date
      modified_date
      heirarchy_path
      collectionmap_id
      ownerinfo
      explicit
      collectionmap {
        id
        collection_id
        map_object
        create_date
        modified_date
        collection {
          id
          title
          identifier
          description
          creator
          source
          circa
          start_date
          end_date
          subject
          location
          rights_statement
          language
          related_url
          provenance
          belongs_to
          bibliographic_citation
          rights_holder
          custom_key
          collection_category
          visibility
          thumbnail_path
          parent_collection
          display_date
          create_date
          modified_date
          heirarchy_path
          collectionmap_id
          ownerinfo
          explicit
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      archives {
        items {
          id
          title
          identifier
          description
          tags
          creator
          source
          circa
          start_date
          end_date
          subject
          rights_statement
          language
          resource_type
          belongs_to
          location
          medium
          bibliographic_citation
          rights_holder
          format
          related_url
          provenance
          repository
          reference
          contributor
          custom_key
          parent_collection
          item_category
          visibility
          thumbnail_path
          manifest_url
          heirarchy_path
          manifest_file_characterization
          display_date
          create_date
          modified_date
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection($input: UpdateCollectionInput!) {
    updateCollection(input: $input) {
      id
      title
      identifier
      description
      creator
      source
      circa
      start_date
      end_date
      subject
      location
      rights_statement
      language
      related_url
      provenance
      belongs_to
      bibliographic_citation
      rights_holder
      custom_key
      collection_category
      visibility
      thumbnail_path
      parent_collection
      display_date
      create_date
      modified_date
      heirarchy_path
      collectionmap_id
      ownerinfo
      explicit
      collectionmap {
        id
        collection_id
        map_object
        create_date
        modified_date
        collection {
          id
          title
          identifier
          description
          creator
          source
          circa
          start_date
          end_date
          subject
          location
          rights_statement
          language
          related_url
          provenance
          belongs_to
          bibliographic_citation
          rights_holder
          custom_key
          collection_category
          visibility
          thumbnail_path
          parent_collection
          display_date
          create_date
          modified_date
          heirarchy_path
          collectionmap_id
          ownerinfo
          explicit
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      archives {
        items {
          id
          title
          identifier
          description
          tags
          creator
          source
          circa
          start_date
          end_date
          subject
          rights_statement
          language
          resource_type
          belongs_to
          location
          medium
          bibliographic_citation
          rights_holder
          format
          related_url
          provenance
          repository
          reference
          contributor
          custom_key
          parent_collection
          item_category
          visibility
          thumbnail_path
          manifest_url
          heirarchy_path
          manifest_file_characterization
          display_date
          create_date
          modified_date
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection($input: DeleteCollectionInput!) {
    deleteCollection(input: $input) {
      id
      title
      identifier
      description
      creator
      source
      circa
      start_date
      end_date
      subject
      location
      rights_statement
      language
      related_url
      provenance
      belongs_to
      bibliographic_citation
      rights_holder
      custom_key
      collection_category
      visibility
      thumbnail_path
      parent_collection
      display_date
      create_date
      modified_date
      heirarchy_path
      collectionmap_id
      ownerinfo
      explicit
      collectionmap {
        id
        collection_id
        map_object
        create_date
        modified_date
        collection {
          id
          title
          identifier
          description
          creator
          source
          circa
          start_date
          end_date
          subject
          location
          rights_statement
          language
          related_url
          provenance
          belongs_to
          bibliographic_citation
          rights_holder
          custom_key
          collection_category
          visibility
          thumbnail_path
          parent_collection
          display_date
          create_date
          modified_date
          heirarchy_path
          collectionmap_id
          ownerinfo
          explicit
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      archives {
        items {
          id
          title
          identifier
          description
          tags
          creator
          source
          circa
          start_date
          end_date
          subject
          rights_statement
          language
          resource_type
          belongs_to
          location
          medium
          bibliographic_citation
          rights_holder
          format
          related_url
          provenance
          repository
          reference
          contributor
          custom_key
          parent_collection
          item_category
          visibility
          thumbnail_path
          manifest_url
          heirarchy_path
          manifest_file_characterization
          display_date
          create_date
          modified_date
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createCollectionmap = /* GraphQL */ `
  mutation CreateCollectionmap($input: CreateCollectionmapInput!) {
    createCollectionmap(input: $input) {
      id
      collection_id
      map_object
      create_date
      modified_date
      collection {
        id
        title
        identifier
        description
        creator
        source
        circa
        start_date
        end_date
        subject
        location
        rights_statement
        language
        related_url
        provenance
        belongs_to
        bibliographic_citation
        rights_holder
        custom_key
        collection_category
        visibility
        thumbnail_path
        parent_collection
        display_date
        create_date
        modified_date
        heirarchy_path
        collectionmap_id
        ownerinfo
        explicit
        collectionmap {
          id
          collection_id
          map_object
          create_date
          modified_date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        archives {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCollectionmap = /* GraphQL */ `
  mutation UpdateCollectionmap($input: UpdateCollectionmapInput!) {
    updateCollectionmap(input: $input) {
      id
      collection_id
      map_object
      create_date
      modified_date
      collection {
        id
        title
        identifier
        description
        creator
        source
        circa
        start_date
        end_date
        subject
        location
        rights_statement
        language
        related_url
        provenance
        belongs_to
        bibliographic_citation
        rights_holder
        custom_key
        collection_category
        visibility
        thumbnail_path
        parent_collection
        display_date
        create_date
        modified_date
        heirarchy_path
        collectionmap_id
        ownerinfo
        explicit
        collectionmap {
          id
          collection_id
          map_object
          create_date
          modified_date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        archives {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCollectionmap = /* GraphQL */ `
  mutation DeleteCollectionmap($input: DeleteCollectionmapInput!) {
    deleteCollectionmap(input: $input) {
      id
      collection_id
      map_object
      create_date
      modified_date
      collection {
        id
        title
        identifier
        description
        creator
        source
        circa
        start_date
        end_date
        subject
        location
        rights_statement
        language
        related_url
        provenance
        belongs_to
        bibliographic_citation
        rights_holder
        custom_key
        collection_category
        visibility
        thumbnail_path
        parent_collection
        display_date
        create_date
        modified_date
        heirarchy_path
        collectionmap_id
        ownerinfo
        explicit
        collectionmap {
          id
          collection_id
          map_object
          create_date
          modified_date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        archives {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const createArchive = /* GraphQL */ `
  mutation CreateArchive($input: CreateArchiveInput!) {
    createArchive(input: $input) {
      id
      title
      identifier
      description
      tags
      creator
      source
      circa
      start_date
      end_date
      subject
      rights_statement
      language
      resource_type
      belongs_to
      location
      medium
      bibliographic_citation
      rights_holder
      format
      related_url
      provenance
      repository
      reference
      contributor
      custom_key
      parent_collection
      item_category
      visibility
      thumbnail_path
      manifest_url
      heirarchy_path
      manifest_file_characterization
      display_date
      create_date
      modified_date
      collection {
        id
        title
        identifier
        description
        creator
        source
        circa
        start_date
        end_date
        subject
        location
        rights_statement
        language
        related_url
        provenance
        belongs_to
        bibliographic_citation
        rights_holder
        custom_key
        collection_category
        visibility
        thumbnail_path
        parent_collection
        display_date
        create_date
        modified_date
        heirarchy_path
        collectionmap_id
        ownerinfo
        explicit
        collectionmap {
          id
          collection_id
          map_object
          create_date
          modified_date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        archives {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateArchive = /* GraphQL */ `
  mutation UpdateArchive($input: UpdateArchiveInput!) {
    updateArchive(input: $input) {
      id
      title
      identifier
      description
      tags
      creator
      source
      circa
      start_date
      end_date
      subject
      rights_statement
      language
      resource_type
      belongs_to
      location
      medium
      bibliographic_citation
      rights_holder
      format
      related_url
      provenance
      repository
      reference
      contributor
      custom_key
      parent_collection
      item_category
      visibility
      thumbnail_path
      manifest_url
      heirarchy_path
      manifest_file_characterization
      display_date
      create_date
      modified_date
      collection {
        id
        title
        identifier
        description
        creator
        source
        circa
        start_date
        end_date
        subject
        location
        rights_statement
        language
        related_url
        provenance
        belongs_to
        bibliographic_citation
        rights_holder
        custom_key
        collection_category
        visibility
        thumbnail_path
        parent_collection
        display_date
        create_date
        modified_date
        heirarchy_path
        collectionmap_id
        ownerinfo
        explicit
        collectionmap {
          id
          collection_id
          map_object
          create_date
          modified_date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        archives {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteArchive = /* GraphQL */ `
  mutation DeleteArchive($input: DeleteArchiveInput!) {
    deleteArchive(input: $input) {
      id
      title
      identifier
      description
      tags
      creator
      source
      circa
      start_date
      end_date
      subject
      rights_statement
      language
      resource_type
      belongs_to
      location
      medium
      bibliographic_citation
      rights_holder
      format
      related_url
      provenance
      repository
      reference
      contributor
      custom_key
      parent_collection
      item_category
      visibility
      thumbnail_path
      manifest_url
      heirarchy_path
      manifest_file_characterization
      display_date
      create_date
      modified_date
      collection {
        id
        title
        identifier
        description
        creator
        source
        circa
        start_date
        end_date
        subject
        location
        rights_statement
        language
        related_url
        provenance
        belongs_to
        bibliographic_citation
        rights_holder
        custom_key
        collection_category
        visibility
        thumbnail_path
        parent_collection
        display_date
        create_date
        modified_date
        heirarchy_path
        collectionmap_id
        ownerinfo
        explicit
        collectionmap {
          id
          collection_id
          map_object
          create_date
          modified_date
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        archives {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSite = /* GraphQL */ `
  mutation CreateSite($input: CreateSiteInput!) {
    createSite(input: $input) {
      id
      groups
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      homePage
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const updateSite = /* GraphQL */ `
  mutation UpdateSite($input: UpdateSiteInput!) {
    updateSite(input: $input) {
      id
      groups
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      homePage
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite($input: DeleteSiteInput!) {
    deleteSite(input: $input) {
      id
      groups
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      homePage
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const createHistory = /* GraphQL */ `
  mutation CreateHistory($input: CreateHistoryInput!) {
    createHistory(input: $input) {
      id
      groups
      userEmail
      siteID
      event
      createdAt
      updatedAt
    }
  }
`;
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory($input: UpdateHistoryInput!) {
    updateHistory(input: $input) {
      id
      groups
      userEmail
      siteID
      event
      createdAt
      updatedAt
    }
  }
`;
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory($input: DeleteHistoryInput!) {
    deleteHistory(input: $input) {
      id
      groups
      userEmail
      siteID
      event
      createdAt
      updatedAt
    }
  }
`;
