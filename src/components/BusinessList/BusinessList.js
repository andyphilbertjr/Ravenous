import React from 'react'
import '/Users/owner/Desktop/Projects/ravenous/src/components/Business/Business.js'
import Business from '../Business/Business'
import '/Users/owner/Desktop/Projects/ravenous/src/components/BusinessList/BusinessList.css'

class BusinessList extends React.Component{
    render(){
        return(
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                        return <Business business={business} key={business.id}/>
                        })
                }
            </div>
        )
    }
}

export default BusinessList