import React from 'react'
import "./profile-card-ornek.scss"
import Stat from './stat';

const ProfileCardOrnek = (props) => {
  const {avatar, name, location, shot, followers, following} = props;
  
  const image = require(`../../assets/img/${avatar}`);

const profileBg = {backgroundImage: `url(${avatar})`};
  return (
  <div className='profile-card-ornek'>
      <div className='header' style={profileBg}>
      <div className='content'>
          <div className='avatar'>
              <h2>{name}</h2>
              <h4>{location}</h4>

              <div className='stats'>
                <Stat name="Shot" value={shot}/>
                <Stat name="Followers" value={followers}/>
                <Stat name="Following" value={following}/>


              </div>
          </div>


      </div>



      </div>
      

  </div>
  )
}

export default ProfileCardOrnek