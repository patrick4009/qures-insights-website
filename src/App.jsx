import Nav from './components/Nav'
import HeroFlow from './components/HeroFlow'
import HowItWorks from './components/HowItWorks'
import QuestionTypes from './components/QuestionTypes'
import Targeting from './components/Targeting'
import Results from './components/Results'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroFlow />
        <HowItWorks />
        <QuestionTypes />
        <Targeting />
        <Results />
        <SocialProof />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
