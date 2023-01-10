import "./App.css";

import logo from "./imgs/Logo.png";

import afro from "./imgs/eventLogos/AFRO.png";
import club from "./imgs/eventLogos/club.png";
import hiphop from "./imgs/eventLogos/hiphop.png";
import oldSchool from "./imgs/eventLogos/oldSchool.png";
import hiphopNight from "./imgs/eventLogos/hiphopNight.png";

import podcast from './imgs/randomePictures/s.png'
import newyear from './imgs/randomePictures/2223.png'
import competition from './imgs/randomePictures/competition.png'

import competition_logo from './imgs/logos/competition_logo.png'
import howdy from './imgs/logos/howdy.png'
import oshi_1 from './imgs/logos/1.png'
import oshi_2 from './imgs/logos/2.png'
import oshi_3 from './imgs/logos/3.png'

import ig from './imgs/media/insta.png'
import gmail from './imgs/media/gmail.png'
import telegram from './imgs/media/telegram.png'

function App() {
    return (
        <div className='App'>
            <div className="nav_bar">
              <a className="nav_label" href="#about_me">ABOUT ME</a>
              <a className="nav_label" href="#footer">CONTACT</a>
              <a className="nav_label" href="https://www.instagram.com/maks.dushka/">WEB BY MKSDU</a>
            </div>
            <div className='frame_1'>
              <img src={logo} alt='' />
            </div>
            <label className='pfe_label'>PICTURES FOR EVENTS</label>
            <div className='frame_2'>
                <div className='row1'>
                    <img src={afro} alt=''></img>
                    <img src={club} alt=''></img>
                    <img src={hiphop} alt=''></img>
                </div>
                <div className='row2'>
                    <img src={oldSchool} alt=''></img>
                    <img src={hiphopNight} alt=''></img>
                </div>
            </div>
            <label className='pfe_label'>RANDOM PICTURES</label>
            <div className="random_pictures">
              <img src={podcast} alt=''></img>
              <img src={newyear} alt=''></img>
              <img src={competition} alt=''></img>
            </div>
            <label className='pfe_label'>WORK WITH LOGO</label>
            <div className="logos">
              <img src={competition_logo} alt=''></img>
              <img src={howdy} id='howdy' alt=''></img>
              <div className="oshi_logos">
                <img src={oshi_1} alt=''></img>
                <img src={oshi_2} alt=''></img>
                <img src={oshi_3} alt=''></img>
              </div>
            </div>
            <hr id='split_line'/>
            <div id="about_me">
              <h1>ARTYOM “SDRIX” DENISYUK GRAPHIC DESIGNER</h1>
              <h3>I am 18 years old from the city of Riga/Latvia. I have been working with Photoshop for over 8 years. I have experience of working with different artists, clubs and also developed my own design company.</h3>
            </div>
            <div id="footer">
              <div className="media_cont">
                <a className="media_link" href="https://www.instagram.com/shelovessdrix/"><img alt="" src={ig}></img></a>
                <a className="media_link" href="tg:@sdrix163"><img alt="" src={telegram}></img></a>
                <a className="media_link" href="mailto:lapefx@gmail.com"><img alt="" src={gmail}></img></a>
              </div>
              <a href="https://www.instagram.com/maks.dushka/" id="footer_sign">w-design by mksdu.</a>
            </div>
        </div>
    );
}

export default App;
