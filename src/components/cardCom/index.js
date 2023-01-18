import React from 'react'
import Title from '../common/titleCom/title'
import Card from './card'

function Index () {
  const data = [
    {
      title: 'Title 1 dawd',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg',
      description:
        'uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv',
      order: false
    },
    {
      title: 'Title 2',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg',
      description:
        'uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv',
      order: true
    },
    {
      title: 'Title 3',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg',
      description:
        'uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv',
      order: false
    }
  ]
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px'
      }}
    >
      <Title title='Project 2' />
      {data.map((item, idx) => (
        <Card
          title={item.title}
          imageUrl={item.imageUrl}
          description={item.description}
          order={item.order}
          key={idx}
        />
      ))}
    </div>
  )
}

export default Index
