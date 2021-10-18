import Head from 'next/head'
import Image from 'next/image'
import { React, useState} from 'react'

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/classes/barbarian')
    const data = await res.json()
    console.log(data)

  if (!data) {
    return {
      notFound: true,
    }
  }
    return {
        data 
    }
}

export default function TestHome() {
const [charClass, setCharClass] = useState('')
const [name, setName] = useState('')
const statsMap = {
    agi: '',
    str: '',
    wis: '',
    int: '',
    con: '',
    cha: '',
}
const [stats, setStats] = useState(statsMap)
const [steps, setSteps] = useState(0)
const [race, setRace] = useState('')
const [looks, setLooks] = useState({})
const [alignment, setAlignment] = useState('')
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
            <div className="flex flex-row">
                <div className="flex-col pb-12">
                    {
                        steps == 0 &&
                        <form onSubmit={() => setSteps(steps+1)}>
                            <label htmlFor="class">Class: 
                                <select className="mt-8 ml-2 rounded border-2" name="class" id="class" 
                                onChange={(e) => setCharClass(e.target.value)}
                                value={charClass}
                                required>
                                <option selected value=''>-- select a class --</option>
                                <option value="barbarian">barbarian</option>
                                <option value="bard">bard</option>
                                <option value="ranger">ranger</option>
                                </select>
                            </label>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>

                    }
                    {
                        steps == 1 &&
                        <form onSubmit={() => setSteps(steps+1)}>
                            <label htmlFor="name">Name: </label>
                            <input class="mt-2 ml-4 rounded p-4 border border-indigo-400 bg-indigo-200" id="name" name="name" type="text" autoComplete="name" required
                                    onChange={(e) => setName(e.target.value)}></input>
                            <br/>
                            <h2>Race: </h2>
                            
                            <input class="mt-2 ml-4 mr-2 rounded p-4 border border-indigo-400 bg-indigo-200" 
                                    type="radio" id="elf" name="race"  value="elf" required
                                    onChange={e => setRace(e.target.value)}></input>
                            <label htmlFor="race">Elf</label>
                            <br/>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 2 &&
                        <form onSubmit={() => setSteps(steps+1)}>
                            <label > Strength: </label> 
                            <select className="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                                onChange={(e) => setStats({...stats, 'str': e.target.value})}
                                value={stats.str}
                                required>
                                <option selected value="" >--</option>
                                <option value="8" selected>8</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                
                            </select>
                            <br/>
                            <label > Agility: </label> 
                            <select className="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                                onChange={(e) => setStats({...stats, 'agi': e.target.value})}
                                value={stats.agi}
                                required>
                                <option selected value="" >--</option>
                                <option value="8" selected>8</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                
                            </select>
                            <br/>
                            <label > Constitution: </label> 
                            <select className="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                                onChange={(e) => setStats({...stats, 'con': e.target.value})}
                                value={stats.con}
                                required>
                                <option selected value="" >--</option>
                                <option value="8" selected>8</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                
                            </select>
                            <br/>
                            <label > Intellect: </label> 
                            <select className="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                                onChange={(e) => setStats({...stats, 'int': e.target.value})}
                                value={stats.int}
                                required>
                                <option selected value="" >--</option>
                                <option value="8" selected>8</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                
                            </select>
                            <br/>
                            <label > Wisdom: </label> 
                            <select className="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                                onChange={(e) => setStats({...stats, 'wis': e.target.value})}
                                value={stats.wis}
                                required> 
                                <option selected value="" >--</option>
                                <option value="8" selected>8</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                
                            </select>
                            <br/>
                            <label > Charisma:  
                            <select className="mt-2 ml-2 rounded border-2" name="stats" id="stats"
                                onChange={(e) => setStats({...stats, 'cha': e.target.value})}
                                value={stats.cha}
                                required>
                                <option selected value="" >--</option>
                                <option value="8" >8</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                
                            </select></label>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 3 &&
                        <form onSubmit={() => setSteps(steps+1)}>
                            <div>
                                <div>
                                <label>Eyes:
                                <select className="" name="eyes" id="eyes" 
                                onChange={e => setLooks({...looks, 'eyes' : e.target.value})}
                                value={looks.eyes || ''}
                                required>
                                    <option selected value="" >--</option>
                                    <option value="Tormented Eyes" selected> Tormented Eyes </option>
                                </select></label>
                                </div>
                                <div>
                                <label>Body:
                                <select className="" name="body" id="body"
                                onChange={e => setLooks({...looks, 'body' : e.target.value})}
                                value={looks.body || ''}
                                >
                                    <option selected value="" >--</option>
                                    <option value="Mighty Thews" selected> Mighty Thews </option>
                                </select></label>
                                </div>
                                <div>
                                <label>Tattoos:
                                <select className="" name="tattoos" id="tattoos">
                                    <option selected value="" >--</option>
                                    <option value="Strange Tattoos" selected> Strange Tattoos </option>
                                </select></label>
                                </div>
                                <div>
                                <label>Clothes:
                                <select className="" name="clothes" id="clothes">
                                    <option selected value="" >--</option>
                                    <option value="Scraps" selected> Scraps </option>
                                </select></label>
                                </div>
                            </div>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 4 &&
                        <form onSubmit={() => setSteps(steps+1)}>
                            <div>
                             <h2>alignment</h2>
                                <div>
                                <input type="radio" id="chaotic" name='alignment' value='chaotic' 
                                onChange={e => setAlignment(e.target.value)}
                                value={alignment} />
                                <label htmlFor="chaotic" >Chaotic</label>
                                <div>You eschew a convention of the civilized world.</div>
                                </div>
                                <div>
                                <input type="radio" id="neutral" name='alignment' value='neutral'/>
                                <label htmlFor="neutral" >Neutral</label>
                                <div>Teach someone the ways of your people.</div>
                                </div>
                            </div>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 5 &&
                        <form onSubmit={() => setSteps(steps+1)}>

                            <div>
                                <div className="">load: 18</div>
                                <div className="">backpack: dungeon rations (5 uses, 1 weight), a dagger (hand, 1 weight), some token of where you’ve traveled or where you’re from</div>
                            </div>
              
                            <div>
                                <input type="radio" id="axe" name="weapon" value="axe" ></input>
                                <label htmlFor="">Axe (close, 1 weight)</label>
                                <input type="radio" id="2h-sword" name="weapon" value="2h-sword" ></input>
                                <label htmlFor="">Two handed sword (close, +1 damage, 2 weight)</label>
                
                            </div>
                            <div>
                                <input type="radio" id="gear" name="armor" value="gear" ></input>
                                <label htmlFor="">Gear</label>
                                <input type="radio" id="chainmail" name="armor" value="chainmail" ></input>
                                <label htmlFor="">Chainmail</label>
                            </div>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 6 &&
                        <form onSubmit={() => setSteps(steps+1)}>
                            <div className="w-1/2">
                            <h2 className="text-3xl">Skills</h2>
                            <ul className="list-inside bg-pink-200">
                            <li>
                            <p>
                                Herculean Appetites : Others may content themselves with just a taste of wine, or dominion over a servant
  
                            </p>
                            <div>
                        <label>pick two appetites</label>
                        <select className="" name="" id="" >
                        <option>Pure Destruction</option>
                        </select>
                    </div>
                    </li>
                    </ul>
                </div>
                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 7 &&
                        <form onSubmit={() => setSteps(steps+1)}>

                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                </div>
                <div className='flex-col pb-12'>
                    <span>Name:{name}</span><br/>
                    <span>Class: {charClass}</span><br/>
                    <span>Race: {race}</span><br/>
                    <span>Looks\n eyes: {looks?.eyes} </span><br/>
                    <span>Max Hp: Base dmg:</span><br/>
                    <span>Str: {stats.str} </span><br/>
                    <span>Agi: {stats.agi}</span><br/>
                    <span>Con: {stats.con}</span><br/>
                    <span>Int: {stats.int}</span><br/>
                    <span>Wil: {stats.wis}</span><br/>
                    <span>Cha: {stats.cha}</span><br/>
                    <span>Looks:</span><br/>
                </div>
            </div>
            </div>
        </div>
        
    )
}
