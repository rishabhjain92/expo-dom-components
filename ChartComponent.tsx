'use dom'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'

export default function DOMComponent({
  name,
}: {
  name: string
  dom: import('expo/dom').DOMProps
}) {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'My Pie Chart'
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'A', y: 30 },
          { name: 'B', y: 20 },
          { name: 'C', y: 50 }
        ]
      }
    ]
  }

  return (
    <div style={{width: 300, height: 300}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}