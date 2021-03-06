import React, {Component} from 'react'
import AdriftInTheHarborDetails from './adrift-in-the-harbor-details'
import EpitomeInvocationDetails from './epitome-invocation-details'
import Navbar from './details-components/navbar'
import WanderlustInvocationDetails from './wanderlust-invocation-details'
import BeginnersWishDetails from './beginners-wish-details'

export default function Details(props) {
  const { selectedDetail, backToHome } = props
  const pages = {
    'adrift-in-the-harbor': <AdriftInTheHarborDetails/>,
    'epitome-invocation': <EpitomeInvocationDetails/>,
    'wanderlust-invocation': <WanderlustInvocationDetails/>,
    'beginners-wish': <BeginnersWishDetails/>
  }
  return (
    <>
    <Navbar
    backToHome={backToHome}
    />
    {pages[selectedDetail]}
    </>
  )
}
