import Hero  from "../../component/Hero"
import Cards  from "../../component/Cards"


const Home = () => {
  return (
    <>
      {/* Video */}
      <video
        src="bgvedioo.mp4"
        controls
        autoPlay
        muted
        loop
        className="w-full  inset-0 object-cover bg-center fixed brightness-60  "
      />
      <Hero/>
      <Cards />
    </>
  )
}

export default Home
