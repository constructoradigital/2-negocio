import React from 'react'
import {InfoSection}  from '../../components'
import Pricing from '../../components/Pricing/Pricing';
import {  homeObjThree } from '../HomePage/Data';

 const Home = () => {
    return (
        <>

            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home;