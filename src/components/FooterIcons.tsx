// import React from 'react'
import youtubeIcon from '../assets/youtube-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import pinterestIcon from '../assets/pinterest-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import discordIcon from '../assets/discord-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'

const FooterIcons = () => {
  return (
    <div className="flex flex-row justify-between">
      <img src={youtubeIcon} alt="" />
      <img src={instagramIcon} alt="" />
      <img src={pinterestIcon} alt="" />
      <img src={twitterIcon} alt="" />
      <img src={facebookIcon} alt="" />
      <img src={discordIcon} alt="" />
      <img src={linkedinIcon} alt="" />
    </div>
  )
}

export default FooterIcons
