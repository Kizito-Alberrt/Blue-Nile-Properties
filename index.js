let properties = [
    {
        county: 'nairobi',
        price: 'Kshs.50,000,000',
        status: 'rent',
        type: 'commercial',
        name:'Peacon Estate'
    },
    {
        county: 'busia',
        price: 'Kshs.4,500,000',
        status: 'sale',
        type: 'villa',
        name:'Silver Harbor'
    },
    {
        county: 'mombasa',
        price: 'KShs.450,000,000',
        status: 'sale',
        type: 'residential',
        name:'Rock Gardens II'
    },
    {
        county: 'kisumu',
        price: 'KShs.5,500,000',
        status: 'rent',
        type: 'villa',
        name:'Kings Serenity'
    }
]

function searchProperty() {
    let item = document.querySelector('#country').value
    let type = document.querySelector('#type').value
    let status = document.querySelector('#status').value

    
    let result = properties.filter(name => {
        return (name.county == item) && ((name.type == type) || (name.status == status))
    })


    if(result.length<1){
        document.getElementById('results').innerHTML = 'No results found'
        return;
    }


    result.forEach(value => {

        document.getElementById('results').innerHTML =
            `<div>
                <h4>Name: ${value.name}</h4>
                <ul>
                    <li>Location: ${value.county}</li>
                    <li>Status: For ${value.status}</li>
                    <li>Price: ${value.price}</li>
                    <li>Type: ${value.type}</li>
                </ul>
            </div>`;
    })
}