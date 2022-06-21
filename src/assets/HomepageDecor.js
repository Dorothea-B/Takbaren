import React from "react"
import styled from "styled-components/macro"

import  leaf1  from './Leaves/leaf_1.svg'
import  leaf2  from './Leaves/leaf_2.svg'
import  leaf3  from './Leaves/leaf_3.svg'


const Leaf1 = styled.div`
width: 20rem;
height: 20rem;
background-image: url(${leaf1});
background-size: contain;
position: absolute;
`
const Leaf2 = styled.div`
width: 20rem;
height: 20rem;
background-image: url(${leaf2});
background-size: contain;
position: absolute;
`
const Leaf3 = styled.div`
width: 20rem;
height: 20rem;
background-image: url(${leaf3});
background-size: contain;
position: absolute;
`

const HomepageDecor = () => {


    return (
        <>
        <Leaf1 />
        <Leaf2 />
        <Leaf3 />
        </>

    )
}
export default HomepageDecor;