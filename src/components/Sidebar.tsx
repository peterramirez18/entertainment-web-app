import { Link, useLocation } from "react-router-dom"

import { BookMarkNavIcon, HomeNavIvon, Logo, MoviesNavIcon, TvSeriesNavIcon } from "./Icons"
import Avatar from "../assets/image-avatar.png"
const Sidebar = () => {
  const menuItems = [
    { id: "home", name: "Home", icon: HomeNavIvon, link: '/' },
    { id: "movies", name: "Movies", icon: MoviesNavIcon, link: '/movies' },
    { id: "tv-series", name: "Tv Series", icon: TvSeriesNavIcon, link: '/tv-series' },
    { id: "bookmarked", name: "Bookmarked", icon: BookMarkNavIcon, link: '/bookmarked' },
  ]

  const location = useLocation()
  const { pathname } = location

  return (
    <section className="h-[56px] lg:h-full lg:w-[96px] flex items-center justify-center md:ml-[24px] md:mr-[24px] lg:ml-[32px] lg:mr-[36px]">
      <div className="  flex items-center justify-between lg:flex-col bg-semi-dark-blue h-full w-full md:rounded-[10px] lg:rounded-[20px] lg:py-[--space-desktop] px-[--space]  md:px-[--space-tablet]  ">
        {/* Logo */}
        <Logo className="scale-[0.9]" />
        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-6 lg:flex-col">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = item.link === pathname
              return (
                <li
                  key={item.id}
                  className="relative group"
                >
                  <Link
                    to={item.link}
                  >
                    <Icon className={`${isActive ? 'fill-white' : ' fill-greyish-blue'} group-hover:fill-white`} />
                    <span
                      className={` ${isActive && 'hidden'}
                    absolute whitespace-nowrap translate-y-[50%] -top-[75%] left-[60px] text-white invisible opacity-0 group-hover:opacity-100 lg:group-hover:visible  group-hover:left-[30px] transition-all duration-300
                    `}>• {item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <img className=" ring-[1.5px] ring-white rounded-full" width={24} height={24} src={Avatar} alt="Avatar Image" />
      </div>
    </section>
  )
}

export default Sidebar