import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
