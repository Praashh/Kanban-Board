import LeftMenu from "@/components/ui/left-menu"
import Menu from "@/components/ui/menu"

const Home = () => {
  return (
    <div className='flex p-2 md:p-6 w-full items-center gap-0 md:justify-between'>
      <div className="md:w-1/2">
        <LeftMenu />
      </div>
      <div className="flex gap-6 md:gap-3 items-center mt-10 md:mt-0 justify-between md:justify-evenly w-full md:w-1/3">
        <div className="w-1/2 md:w-1/4">
          <Menu />
        </div>
        <p className="font-sans text-black text-xl md:text-2xl ml-3 md:-ml-4">Menu</p>
      </div>
    </div>
  )
}

export default Home
