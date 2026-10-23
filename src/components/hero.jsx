import React from 'react'

const Hero = ({main, svg, div, h2, p, a}) => {
  return (
    <>
    <main className={main}>
 
    <svg className={svg} width="600" height="430" viewBox="0 0 700 600" fill="none"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="700" y2="600">
      <stop stop-color="#F4FFF2"/>
      <stop offset="1" stop-color="#E7F8E4"/>
    </linearGradient>

    <linearGradient id="basket" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#FFBD55"/>
      <stop offset="1" stop-color="#E8952F"/>
    </linearGradient>

    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="12" stdDeviation="12"
                    flood-color="#173B1A" flood-opacity=".15"/>
    </filter>
  </defs>

  <rect width="700" height="600" rx="35" fill="url(#bg)"/>

  <circle cx="110" cy="110" r="65" fill="#D9F1D5"/>
  <circle cx="350" cy="500" r="90" fill="#DFF4D8"/>
  <circle cx="390" cy="105" r="35" fill="#FFF0C7"/>

  <g filter="url(#shadow)">

    <path
      d="M70 350 Q190 320 350 350 L325 495
         Q200 525 95 495 Z"
      fill="url(#basket)"
    />

    <path
      d="M105 355 Q205 215 315 355"
      stroke="#C97C25"
      stroke-width="15"
      fill="none"
      stroke-linecap="round"
    />

    <path d="M95 390 Q205 365 340 390"
          stroke="#D17F28" stroke-width="8"/>

    <path d="M100 430 Q205 405 335 430"
          stroke="#D17F28" stroke-width="7"/>

    <path
      d="M180 285 L180 165
         L230 140 L275 165
         L275 300 Z"
      fill="white"
    />

    <path
      d="M180 165 L230 140 L275 165
         L225 190 Z"
      fill="#DDEEDF"
    />

    <rect x="195" y="205" width="65" height="65"
          rx="10" fill="#76C66A"/>

    <path
      d="M215 240 Q228 210 240 240
         Q228 258 215 240Z"
      fill="white"
    />

    <path
      d="M275 350
         Q270 290 310 255
         Q350 225 382 260
         Q415 295 405 350Z"
      fill="#D99745"
    />

    <path
      d="M290 320 Q345 285 402 315
         L398 355 L285 355Z"
      fill="#F1BF70"
    />

    <path
      d="M320 275 Q335 285 350 275
         M355 265 Q370 275 385 265"
      stroke="#C27C32"
      stroke-width="7"
      stroke-linecap="round"
    />

    <path
      d="M105 325
         Q75 285 105 255
         Q135 225 165 255
         Q200 225 225 258
         Q250 295 220 330
         Q175 375 135 350Z"
      fill="#EF554C"
    />

    <path
      d="M155 250 Q170 215 205 210
         Q190 245 155 250Z"
      fill="#65AD58"
    />

    <path
      d="M155 250 Q155 225 165 210"
      stroke="#558F45"
      stroke-width="8"
      stroke-linecap="round"
    />

    <circle cx="315" cy="395" r="55" fill="#F5A13B"/>

    <circle cx="295" cy="375" r="6"
            fill="#FFC56D"/>

    <circle cx="335" cy="410" r="5"
            fill="#FFC56D"/>

    <path
      d="M315 342 Q330 315 355 320
         Q340 345 315 342Z"
      fill="#65AD58"
    />

    <g transform="translate(55 230)">

      <circle cx="50" cy="65" r="27" fill="#4FAE5B"/>
      <circle cx="82" cy="48" r="30" fill="#45A655"/>
      <circle cx="118" cy="65" r="27" fill="#52B260"/>

      <path
        d="M42 75 Q80 55 125 75
           L115 120 L50 120Z"
        fill="#4A9E52"
      />

      <path
        d="M65 110 L58 155
         M105 110 L105 155"
        stroke="#70AD50"
        stroke-width="17"
        stroke-linecap="round"
      />

    </g>

    <ellipse cx="140" cy="420" rx="30" ry="39" fill="#FFF9E8"/>
    <ellipse cx="195" cy="425" rx="30" ry="39" fill="#FFF9E8"/>
    <ellipse cx="250" cy="425" rx="30" ry="39" fill="#FFF9E8"/>

  </g>

  <path
    d="M370 175 Q400 140 430 165
       Q405 185 370 175Z"
    fill="#65AD58"
  />

  <path
    d="M55 175 Q85 145 110 170
       Q85 190 55 175Z"
    fill="#75BE67"
  />

     </svg>

     <div className={div}>
        <h2 className={h2}>Свежие продукты — каждый день</h2>
        <p className={p}>Покупайте любимые продукты быстро, удобно и с удовольствием.</p>
        <a className={a} href="#">Перейти к покупкам</a>
     </div>
    </main>
    </>
  )
}

export default Hero