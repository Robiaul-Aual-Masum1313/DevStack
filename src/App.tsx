
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technology from './components/Technology'
import type { IstackData } from './type'


const feachedPromise = async () : Promise<IstackData[]> => {
  const res = await fetch('/data.json')
  const data  = await res.json()
  return data
}

function App() {


  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<p>Loading ....</p>}>
        <Technology  feachedPromise = {feachedPromise()}/>
      </Suspense>

    </>
  )
}

export default App
