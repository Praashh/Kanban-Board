import Design from "@/components/landing/Design"
import Hero from "@/components/landing/Hero"
const Home = () => {
  return (
    <>
      <Hero />
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap p-2 md:p-4 relative min-w-max">
          <Design heading="Design" />
          <Design heading="Prototip" />
          <Design heading="Trello" />
          <Design heading="Test" />
          <Design heading="Final" />
        </div>
      </div>
    </>
  )
}

export default Home
