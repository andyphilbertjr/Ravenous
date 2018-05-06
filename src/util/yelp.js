const apiKey = '5J4OfbgPYRCalsmtC6JCZRA_yHkV5VCbS3gF7L_88045IW9phOTektOZ4L7pn98GlHXw7AqcFgKLJ9PkE9kSBnrRMGBM9uCwFITB63tfmmF4MPzE09tllTvjrILuWnYx'

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}}&location=${location}&sort_by=${sortBy}`,
    {
        headers: {
             Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json()
    }).then(jsonResponse => {
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url, 
                name: business.name, 
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count 
            }))
        }
    });
    }
}

export default Yelp