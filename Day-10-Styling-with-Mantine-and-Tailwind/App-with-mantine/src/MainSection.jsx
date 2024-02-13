import React from 'react'
import { DisplayCard } from './Cards'
import { Grid } from '@mantine/core'

const MainSection = () => {
  return (
   <>
    <Grid>
      <Grid.Col span={4}><DisplayCard/></Grid.Col>
      <Grid.Col span={4}><DisplayCard/></Grid.Col>
      <Grid.Col span={4}><DisplayCard/></Grid.Col>
    </Grid>
   </>
  )
}

export default MainSection