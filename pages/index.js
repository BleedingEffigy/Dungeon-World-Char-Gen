import Head from 'next/head'
import Image from 'next/image'
import { React, useState} from 'react'


export default function Home() {
const [progress, setProgress] = useState(0)
const [charClass, setCharClass] = useState('')

  return (
    <div>
      <Head>
          <title>Dungeon World Character Gen</title>
          <meta name="description" content="A generator for the Dungeon World SRD" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex justify-center flex-wrap">
        <div className="flex-col pb-3 w-full text-4xl">
          <h1>Dungeon World Character Generator</h1>
        </div>
        <div className="flex-col pb-12">
          <form>
            <label htmlFor="class">Class: </label>
            <select name="class" id="class">
              <option value="barbarian"></option>
              <option value="bard"></option>
              <option value="ranger"></option>
            </select>

          </form>
        </div>
      </div>
    </div>
  )
}
