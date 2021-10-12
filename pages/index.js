import Head from 'next/head'
import Image from 'next/image'
import { React, useState} from 'react'


export default function Home() {
const [progress, setProgress] = useState(0)
const [charClass, setCharClass] = useState('')
const [name, setName] = useState('')
const [stats, setStats] = useState(new Map())


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
            <label htmlFor="class">Class: 
            <select class="mt-8 ml-2 rounded border-2" name="class" id="class" 
              onChange={(e) => setCharClass(e.target.value)}
              value={charClass}>
              <option selected value=''>-- select a class --</option>
              <option value="barbarian">barbarian</option>
              <option value="bard">bard</option>
              <option value="ranger">ranger</option>
            </select>
            </label>
            <br/>
            { charClass != '' &&
            <div>
              <label htmlFor="name">Name: </label>
              <input class="mt-2 ml-4 rounded p-4 border border-indigo-400 bg-indigo-200" id="name" name="name" type="text" autoComplete="name" required></input>
              <br/>
              <label htmlFor="race">Race:</label>
              <input class="mt-2 ml-4 mr-2 rounded p-4 border border-indigo-400 bg-indigo-200" id="race" name="race" type="radio" value="Elf" required></input>Elf
              <br/>
              <label > Strength: </label> 
              <select class="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                onChange={(e) => setStats(stats.set('str', e.target.value))}
                value={stats.get('str')}>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="0">0</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                
              </select>
            <br/>
              <label > Agility: </label> 
              <select class="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                onChange={(e) => setStats(stats.set('agi', e.target.value))}
                value={stats.get('agi')}>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="0">0</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                
              </select>
            <br/>
              <label > Constitution: </label> 
              <select class="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                onChange={(e) => setStats(stats.set('con', e.target.value))}
                value={stats.get('con')}>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="0">0</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                
              </select>
            <br/>
              <label > Intellect: </label> 
              <select class="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                onChange={(e) => setStats(stats.set('int', e.target.value))}
                value={stats.get('int')}>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="0">0</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                
              </select>
            <br/>
              <label > Wisdom: </label> 
              <select class="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                onChange={(e) => setStats(stats.set('wis', e.target.value))}
                value={stats.get('wis')}> 
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="0">0</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                
              </select>
            <br/>
              <label > Charisma: </label> 
              <select class="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                onChange={(e) => setStats(stats.set('cha', e.target.value))}
                value={stats.get('cha')}>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="0">0</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                
              </select>
              <br/>
              <div class="inline-block">
                <button className="button m-2 p-4">reset</button>
                <button className="button m-2 p-4">next step</button>
              </div>
            </div>
            }

            { stats.size == 6 &&
              <div>
                The races
              </div>
            }

          </form>
        </div>
      </div>
    </div>
  )
}
