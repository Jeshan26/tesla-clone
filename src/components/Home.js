import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      
      <Section 
        title = "Model S"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"

      />
      <Section 
        title = "Model Y"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"

      />
      <Section 
        title = "Model 3"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"

      />
      <Section 
        title = "Model X"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Lowest Cost Solar Panels in America"
        description = "Money Back Gurantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />

    <Section 
        title = "Solar for New Roofs"
        description = "Solar roof cost less than a new roof Plus Solar Panels"
        backgroundImg = "solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section 
        title = "Accessories"
        description = ""
        backgroundImg = "accessories.jpg"
        leftBtnText = "Shop Now"
      />

    </Container>
  )
}

export default Home

const Container = styled.div`
height : 100vh;
// background-color: lightblue;
`
