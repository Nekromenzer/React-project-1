import React from 'react'
import Title from '../common/titleCom/title'
import Card from './card'

function Index () {
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
      <Card
        title='Title 1'
        imageUrl='https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'
        description='uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv'
        order='true'
      />
      <Card
        title='title 2'
        imageUrl='https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'
        description='uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv'
        order='false'
      />
      <Card
        title='Title 3'
        imageUrl='https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'
        description='uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv'
        order='true'
      />
    </div>
  )
}

export default Index
