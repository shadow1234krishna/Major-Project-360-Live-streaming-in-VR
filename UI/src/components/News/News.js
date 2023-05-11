import {React, useEffect, useRef} from 'react';
import $ from 'jquery';
import Navbar from '../Navbar/Navbar';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { actionTypes, useStateValue } from "../../store";
import Rnd from "./rnd.jpg";
import Rnds from "./rnds.jpg";
import mess from "./messi.jpeg";
import mes from "./mess.jpg";
import mbp from "./mbap.jpeg";
import mbps from "./mbps.jpg";
import mrm from "./mrm.jpeg";
import mrms from "./mrms.jpg";
import "./News.css";



const News = () => {
    const hoverRef = useRef(null);

    const [, , removeCookie] = useCookies(["jwt"]);
    const [, dispatch] = useStateValue();
    const navigate = useNavigate();
    const logout = () => {
      removeCookie("jwt");
      dispatch({ type: actionTypes.SET_TOKEN, value: null });
      navigate("/login");
    };
    useEffect(() => {
        const $hover = $(hoverRef.current);
        $hover.mouseleave(() => {
          $hover.removeClass("hover");
        });
      }, []);

  return (
    <>
    <Navbar logout={logout} />

    <div className='news'>


  
    <div ref={hoverRef} className="hoverable-element">
    <div className='nope'>
    <figure class="snip1208">
  <img src={Rnd} alt="sample66" />
  <div class="date"><span class="day">28</span><span class="month">Oct</span></div><i class="ion-film-marker"></i>
  <figcaption>
    <h3>RONALDO TO LEAVE UNITED</h3>
    <p>
    Cristiano Ronaldo is to leave Manchester United by mutual agreement, with immediate effect.    </p>
    <button>Read More</button>
  </figcaption>
</figure>
<div className='taas'>
<img src={Rnds} alt="Ronaldo" class="ronaldo"/>
<div class="taas-content">
<p>The club thanks him for his immense contribution across two spells at Old Trafford, scoring 145 goals in 346 appearances, and wishes him and his family well for the future.

Everyone at Manchester United remains focused on continuing the team’s progress under Erik ten Hag and working together to deliver success on the pitch.</p></div>
</div>
</div>
<div className='nope'>
<figure class="snip1208 hover">
  <img src={mess} alt="sample9" />
  <div class="date"><span class="day">17</span><span class="month">Nov</span></div><i class="ion-headphone"> </i>
  <figcaption>
    <h3>Messi equals Ronaldo</h3>
    <p>
    Messi equals Ronaldo at 495, Haaland's record 32, Mbappe's all-time 139: Stats    </p>
    <button>Read More</button>
  </figcaption>
</figure>
<div className='taas'>
<img src={mes} alt="Ronaldo" class="ronaldo"/>
<div class="taas-content">
<p>A tumultuous weekend of football saw every table topper of Europe's top five leagues drop points, barring PSG. For the second match in a row, Arsenal gave away a two-goal lead and ended up taking just a point against West Ham United. Their rivals for the league title, Manchester City, maintained their winning run against Leicester City. They are now just four points behind Arsenal, having played a game less.</p></div>
</div>
</div>

<div className='nope'>
<figure class="snip1208">
  <img src={mbp} alt="sample6" />
  <div class="date"><span class="day">01</span><span class="month">Dec</span></div><i class="ion-checkmark"> </i>
  <figcaption>
    <h3>Kylian Mbappé breaks another record</h3>
    <p>
    Kylian Mbappé's goal in the Parisians' 3-1 win over Lens on Saturday evening made him the sole top scorer in Paris Saint-Germain's Ligue 1 history with 139 goals.    </p>
    <button>Read More</button>
  </figcaption>
</figure>
<div className='taas'>
<img src={mbps} alt="Ronaldo" class="ronaldo"/>
<div class="taas-content">
<p>He's breaking records one after the other. Kylian Mbappé, whose goal helped Paris Saint-Germain take the lead against RC Lens this Saturday evening at the Parc des Princes (3-1), scored his 139th goal in Ligue 1 with Paris. The French international had already set a record for the number of goals scored in all competitions, but now he is making even more history for the Rouge et Bleu.</p></div>
</div>
</div>

<div className='nope'>
<figure class="snip1208">
  <img src={mrm} alt="sample7" />
  <div class="date"><span class="day">05</span><span class="month">Sep</span></div><i class="ion-checkmark"> </i>
  <figcaption>
    <h3>PSG Beat Saudi All Star XI 5-4</h3>
    <p>
    PSG Beat Saudi All Star XI 5-4 as Lionel Messi, Kylian Mbappe and Cristiano Ronaldo All Score   </p>
    <button>Read More</button>
  </figcaption>
</figure>
<span>&#8594;</span>
<div className='taas'>
<img src={mrms} alt="Ronaldo" class="ronaldo"/>
<div class="taas-content">
<p>Cristiano Ronaldo steadied himself before scoring from the penalty spot for his first goal in Saudi Arabia against a Paris Saint-Germain team featuring his old foe Lionel Messi.</p></div>
</div>
</div>
</div>
</div>
    </>
  )
}

export default News;