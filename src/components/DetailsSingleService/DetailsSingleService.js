import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsSingleService = () => {
    const [singleServiceData, setSingleServiceData] = useState([]);


    useEffect(() => {
        fetch('./servicesdata.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    //const DetailsData = singleServiceData.filter(details => details.service_id === service_id)
    return (
        <div>
            <h2>fdg</h2>
        </div>
    );
};

export default DetailsSingleService;