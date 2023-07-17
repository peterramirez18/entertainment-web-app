import { SearbarIcon } from "./Icons"

const Searbar = () => {
    return (
        <div className="flex items-center gap-x-4 ">
            <SearbarIcon />
            <input className="placeholder-searbar outline-none bg-transparent w-full" type="text" placeholder="Search for movies or TV series" />
        </div>
    )
}

export default Searbar