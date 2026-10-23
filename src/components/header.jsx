import React from 'react'


const Header = ({header, svg, nav, ul, li, a, burger}) => {
  return (
    <>
    <header className={header}>
     <svg className={svg}
  width="180"
  height="50"
  viewBox="0 0 180 50"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="DENSHOP"
>
  <text
    x="0"
    y="35"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32"
    font-weight="800"
    letter-spacing="-1"
    fill="#111111"
  >
    DEN
  </text>

  <text
    x="76"
    y="35"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32"
    font-weight="800"
    letter-spacing="-1"
    fill="#6C5CE7"
  >
    SHOP
  </text>
     </svg>
     <nav className={nav}>
     <svg className={burger} width="32" height="32" viewBox="0 0 32 32"
     fill="none" xmlns="http://www.w3.org/2000/svg">

  <path
    d="M5 8H27"
    stroke="#6C5CE7"
    stroke-width="3"
    stroke-linecap="round"
  />

  <path
    d="M5 16H27"
    stroke="#6C5CE7"
    stroke-width="3"
    stroke-linecap="round"
  />

  <path
    d="M5 24H27"
    stroke="#6C5CE7"
    stroke-width="3"
    stroke-linecap="round"
  />

     </svg>
        <ul className={ul}>
            <li className={li}><a className={a} href="#">Главная</a></li>
            <li className={li}><a className={a} href="#">Магазин</a></li>
            <li className={li}><a className={a} href="#">О нас</a></li>
            <li className={li}><a className={a} href="#">Контакты</a></li>
            <li className={li}><a className={a} href="#">Товары</a></li>
        </ul>
     </nav>
    </header>
    </>
  )
}

export default Header