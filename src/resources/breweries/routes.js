const express = require("express");

const breweriesRouter = express.Router();

let breweriesDB = [
  {
    id: 9094,
    obdb_id: "bnaf-llc-austin",
    name: "Bnaf, LLC",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Austin",
    state: "Texas",
    county_province: null,
    postal_code: "78727-7602",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 9180,
    obdb_id: "boulder-beer-co-boulder",
    name: "Boulder Beer Co",
    brewery_type: "regional",
    street: "2880 Wilderness Pl",
    address_2: null,
    address_3: null,
    city: "Boulder",
    state: "Colorado",
    county_province: null,
    postal_code: "80301-5401",
    country: "United States",
    longitude: "-105.2480158",
    latitude: "40.026439",
    phone: null,
    website_url: null,
    updated_at: "2018-08-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 9754,
    obdb_id: "clermont-brewing-company-clermont",
    name: "Clermont Brewing Company",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Clermont",
    state: "Florida",
    county_province: null,
    postal_code: "34711-2108",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 10186,
    obdb_id: "dimensional-brewing-co-dubuque",
    name: "Dimensional Brewing Co.",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Dubuque",
    state: "Iowa",
    county_province: null,
    postal_code: "52001",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: "http://www.dimensionalbrewing.com",
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 10217,
    obdb_id: "dixie-brewing-co-inc-new-orleans",
    name: "Dixie Brewing Co Inc.",
    brewery_type: "contract",
    street: "6221 S Claiborne Ave Ste 101",
    address_2: null,
    address_3: null,
    city: "New Orleans",
    state: "Louisiana",
    county_province: null,
    postal_code: "70125-4191",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "5048228711",
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 10486,
    obdb_id: "epidemic-ales-concord",
    name: "Epidemic Ales",
    brewery_type: "micro",
    street: "150 Mason Circle Stes I&J",
    address_2: null,
    address_3: null,
    city: "Concord",
    state: "California",
    county_province: null,
    postal_code: "94520",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "9255668850",
    website_url: "http://www.epidemicales.com",
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 11039,
    obdb_id: "goose-island-philadelphia-philadelphia",
    name: "Goose Island Philadelphia",
    brewery_type: "brewpub",
    street: "1002 Canal St",
    address_2: null,
    address_3: null,
    city: "Philadelphia",
    state: "Pennsylvania",
    county_province: null,
    postal_code: "19123",
    country: "United States",
    longitude: "-75.13506341",
    latitude: "39.9648491",
    phone: null,
    website_url: null,
    updated_at: "2018-08-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 11235,
    obdb_id: "grits-brewing-chamblee",
    name: "GRITS Brewing",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Chamblee",
    state: "Georgia",
    county_province: null,
    postal_code: "30341-2024",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 11767,
    obdb_id: "ironbark-brewery-jackson",
    name: "Ironbark Brewery",
    brewery_type: "micro",
    street: "2610 Kibby Rd",
    address_2: null,
    address_3: null,
    city: "Jackson",
    state: "Michigan",
    county_province: null,
    postal_code: "49203-4908",
    country: "United States",
    longitude: "-84.43762976",
    latitude: "42.2188971",
    phone: "5177487988",
    website_url: null,
    updated_at: "2018-08-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 11968,
    obdb_id: "king-fox-brewery-hialeah",
    name: "King Fox Brewery",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Hialeah",
    state: "Florida",
    county_province: null,
    postal_code: "33014-5231",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 12023,
    obdb_id: "la-funke-brewing-bulverde",
    name: "La Funke Brewing",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Bulverde",
    state: "Texas",
    county_province: null,
    postal_code: "78163-4156",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "2104602083",
    website_url: "http://www.lafunke.com",
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 12294,
    obdb_id: "long-way-brewing-radford",
    name: "Long Way Brewing",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Radford",
    state: "Virginia",
    county_province: null,
    postal_code: "24141-1403",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 12459,
    obdb_id: "mallory-brewing-houston",
    name: "Mallory Brewing",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Houston",
    state: "Texas",
    county_province: null,
    postal_code: "77018",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 12202,
    obdb_id: "lincoln-avenue-brewery-pittsburgh",
    name: "Lincoln Avenue Brewery",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Pittsburgh",
    state: "Pennsylvania",
    county_province: null,
    postal_code: "15202",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "4124274078",
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 13018,
    obdb_id: "northwoods-brewing-co-northwood",
    name: "Northwoods Brewing Co",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Northwood",
    state: "New Hampshire",
    county_province: null,
    postal_code: "3261",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "2073516983",
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 12705,
    obdb_id: "mobtown-brewing-co-baltimore",
    name: "Mobtown Brewing Co",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Baltimore",
    state: "Maryland",
    county_province: null,
    postal_code: "21224-4716",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "4104198312",
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 14347,
    obdb_id: "ska-brewing-durango",
    name: "SKA Brewing",
    brewery_type: "regional",
    street: "225 Girard, Bodo Park",
    address_2: null,
    address_3: null,
    city: "Durango",
    state: "Colorado",
    county_province: null,
    postal_code: "81303-6827",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-08-11T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 14417,
    obdb_id: "snow-belt-brew-chardon",
    name: "Snow Belt Brew",
    brewery_type: "micro",
    street: "9511 Kile Rd",
    address_2: null,
    address_3: null,
    city: "Chardon",
    state: "Ohio",
    county_province: null,
    postal_code: "44024",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 12773,
    obdb_id: "mosaic-brewing-lancaster",
    name: "Mosaic Brewing",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Lancaster",
    state: "Ohio",
    county_province: null,
    postal_code: "43130-4308",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "6149402500",
    website_url: "http://www.double.edge.beer",
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
  {
    id: 14677,
    obdb_id: "straight-shot-brewing-poquoson",
    name: "Straight Shot Brewing",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Poquoson",
    state: "Virginia",
    county_province: null,
    postal_code: "23662-0000",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2018-07-24T00:00:00.000Z",
    created_at: "2018-07-24T00:00:00.000Z",
  },
];

//Get breweries and filter by type
breweriesRouter.get("/", (req, res) => {
  const { brewery_type } = req.query;
  let response = null;

  if (brewery_type) {
    const filteredBreweries = breweriesDB.filter(
      brewery => brewery.brewery_type === brewery_type
    );
    response = filteredBreweries.length
      ? filteredBreweries
      : "Cant find breweries of that type!";
  } else {
    response = breweriesDB;
  }

  res.json({ breweries: response });
});

//Post endpoint
breweriesRouter.post("/", (req, res) => {
  const newBrewery = req.body;

  breweriesDB = [...breweriesDB, newBrewery];

  res.json({ brewery: newBrewery });
});

//Delete endpoint
breweriesRouter.delete("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);

  const brewery = breweriesDB.find(brewery => brewery.id === id);

  if (brewery) {
    breweriesDB = breweriesDB.filter(brewery => brewery.id !== id);
    res.json({ deletedBrewery: brewery });
  } else {
    res.json({ deletedBrewery: "Breweries does not exist!" });
  }
});

//Patch
// change the keys with their updated version, keeping the ones that dont change
breweriesRouter.patch("/:id", (req, res) => {
  // //code for if the responseBrewery will never be null
  //   let { id } = req.params;
  //   id = Number(id);

  //   //   const brewery = breweriesDB.find(brewery => brewery.id === id);

  //   const updatedBrewery = req.body;
  //   let responseBrewery = null;

  //   breweriesDB = breweriesDB.map(brewery => {
  //     if (brewery.id === id) {
  //       responseBrewery = { ...brewery, ...updatedBrewery };
  //       return responseBrewery;
  //     } else {
  //       return brewery;
  //     }
  //   });
  //   res.json(updatedBrewery, responseBrewery);

  // //Code for if the responseBrewery could be there or null
  let { id } = req.params;
  id = Number(id);

  const brewery = breweriesDB.find(brewery => brewery.id === id);
  let responseBrewery = null;

  const updatedBrewery = req.body;
  if (brewery) {
    breweriesDB = breweriesDB.map(brewery => {
      if (brewery.id === id) {
        responseBrewery = { ...brewery, ...updatedBrewery };
        return responseBrewery;
      } else {
        return brewery;
      }
    });
  } else {
    responseBrewery = "Couldn't find brewery to update";
  }

  res.json({ updatedBrewery, responseBrewery });
});

module.exports = breweriesRouter;
