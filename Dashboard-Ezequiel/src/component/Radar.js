import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

const Radar = ({ data, keys, index }) => {
  return (
    <ResponsiveRadar data={data}
      keys={keys}
      indexBy={index}
      maxValue='auto'
      margin={{
        'top': 70,
        'right': 140,
        'bottom': 80,
        'left': 60
      }}
      curve='linearClosed'
      borderWidth={2}
      borderColor='inherit'
      gridLevels={5}
      gridShape='circular'
      gridLabelOffset={30}
      enableDots
      dotSize={8}
      dotColor='inherit'
      dotBorderWidth={0}
      dotBorderColor='#ffffff'
      enableDotLabel
      dotLabel='value'
      dotLabelYOffset={-12}
      colors='nivo'
      colorBy='key'
      fillOpacity={0}
      animate
      motionStiffness={90}
      motionDamping={15}
      isInteractive
      legends={[
        {
          'anchor': 'top-left',
          'direction': 'column',
          'translateX': -50,
          'translateY': -40,
          'itemWidth': 80,
          'itemHeight': 20,
          'itemTextColor': '#999',
          'symbolSize': 12,
          'symbolShape': 'circle',
          'effects': [
            {
              'on': 'hover',
              'style': {
                'itemTextColor': '#000'
              }
            }
          ]
        }
      ]}
    />
  )
}

export default Radar
