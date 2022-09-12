import React from 'react'
import './Impact.css'
import Ruhango from '../Images/rugando.png'
import can from '../Images/can.png'
import lake from '../Images/Lake.png'
import HeaderNavbar from '../Top-Nav-Bar/Top-Nav-bar'

function Impact() {
  return (
    <div>
        <HeaderNavbar/>
        <div className='image-green'>
            <p id='green-para'>SEE OUR IMPACT IN RWANDA</p>
        </div>
        <div className='text-photos'>
            <div className='text-p-text'>
            <h2>RUHANGO DISTRICT</h2>
            <p>Ruhango, they used to fetch dirty water<br/> but they now have clean water. Life is<br/> now good. </p>
            </div>
            <img id='picture-impact' src={Ruhango} alt="" />
        </div>
        <div className='text-photos'>
        <img id='picture-impact' src={can} alt="" />
            <div className='text-p-text'>
            <h2>NYARUGURU DISTRICT</h2>
            <p>In nyaruguru they used to have a long queue<br/> waiting for water but now we provided onother<br/> tap water 
now there is no more long queue. </p>
            </div>
            
        </div>
        <div className='text-photos'>
            <div className='text-p-text'>
            <h2>RUGANDO SECTOR</h2>
            <p>Rugando people they used to fetch far from<br/> their home now we provided clean water and <br/>near them </p>
            </div>
            <img id='picture-impact' src={lake} alt="" />
        </div>
        <div>
          
        </div>

    </div>
  )
}

export default Impact