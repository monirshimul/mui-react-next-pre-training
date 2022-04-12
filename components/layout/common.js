import React, { Fragment } from 'react'
import Nav from './nav'
import Footer from './footer'
import { Grid } from '@mui/material'
const common = props => {
  return (
    <Fragment>
            <Nav/>
            <div>
            {props.children}
            </div>
                
            <Footer/>
        </Fragment>
  )
}

export default common