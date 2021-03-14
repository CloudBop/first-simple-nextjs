import Navbar from "../components/Navbar"

const AboutPage = () => {
  // ssr if initial request of app.
  // console.log("<About/> running ssr&&client")
  return (
    <>
    <Navbar/>
    <h1>This is the about page</h1>
    </>
  )
}
export default AboutPage