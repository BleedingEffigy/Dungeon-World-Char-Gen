import Head from 'next/head'
import Image from 'next/image'
import { React, useState} from 'react'


export default function TestHome() {
const [charClass, setCharClass] = useState('')
const [name, setName] = useState('')
const [stats, setStats] = useState(new Map())
const [steps, setSteps] = useState(0)
const [race, setRace] = useState('')

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
                                <select class="mt-8 ml-2 rounded border-2" name="class" id="class" 
                                onChange={(e) => setCharClass(e.target.value)}
                                value={charClass}>
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
                            <label htmlFor="race">Race:</label>
                            <input class="mt-2 ml-4 mr-2 rounded p-4 border border-indigo-400 bg-indigo-200" id="race" name="race" type="radio" value="Elf" required
                                    onChange={e => setRace(e.target.value)}></input>Elf
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
                    <label>Eyes:</label>
                    <select className="" name="eyes" id="eyes">
                        <option value=""> Tormented Eyes </option>
                    </select>
                    </div>
                    <div>
                    <label>Body:</label>
                    <select className="" name="body" id="body">
                        <option> Mighty Thews </option>
                    </select>
                    </div>
                    <div>
                    <label>Tattoos:</label>
                    <select className="" name="tattoos" id="tattoos">
                        <option> Strange Tattoos </option>
                    </select>
                    </div>
                    <div>
                    <label>Clothes:</label>
                    <select className="" name="clothes" id="clothes">
                        <option> Scraps </option>
                    </select>
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
                    <input type="radio" id="chaotic" name='alignment' value='chaotic' />
                    <label htmlFor="chaotic" >Chaotic</label>
                    <div>You eschew a convention of the civilized world.</div>
                    </div>
                    <div>
                    <input type="radio" id="neutral" name='alignment' value='neutral'/>
                    <label htmlFor="neutral" id="neutral" name='neutral' >Neutral</label>
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
                    {
                        steps == 8 &&
                        <form onSubmit={() => setSteps(steps+1)}>

                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 9 &&
                        <form onSubmit={() => setSteps(steps+1)}>

                            <button className='' onClick={() => setSteps(steps-1)}>
                                Back
                            </button>
                            <input type='submit' value='submit'></input>
                        </form>
                    }
                    {
                        steps == 10 &&
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
                    <span>Looks: </span><br/>
                    <span>Max Hp: Base dmg:</span><br/>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </div>
        </div>
        
    )
}
