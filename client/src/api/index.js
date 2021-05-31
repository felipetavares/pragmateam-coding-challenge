function parseProductInfo(jsonResponse) {
    
}

function parseProductListing(jsonResponse) {
    
}

function fetchInformation() {
  products.forEach(id => {
    fetch(`http://localhost:8081/temperature/${id}`)
      .then((response) => response.json())
          .then(parseServerInformation);
  });

    // setTemperatures((prevItems) => ({
    //   ...prevItems, [id]: response,
    // }))
}
