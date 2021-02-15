import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Red social de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId ={categoryId} />
    </Layout>
  )
}