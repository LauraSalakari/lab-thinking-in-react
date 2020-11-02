import React from 'react'
import data from "../data.json"
import "./App.css"
import FilterableProductTable from './components/FilterableProductTable'


export default function App() {
  return (
    <div>
      <FilterableProductTable products={data} />
    </div>
  )
}
