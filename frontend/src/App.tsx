import Footer from "./components/Footer"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App