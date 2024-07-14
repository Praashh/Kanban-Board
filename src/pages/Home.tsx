import Design from "@/components/landing/Design"
import Hero from "@/components/landing/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col md:flex-row">
        <Design heading="Design" />
        <Design heading="Prototip" />
        <Design heading="Trello" />
        <Design heading="Test" />
        <Design heading="Final" />
      </div>
    </>
  )
}

export default Home
