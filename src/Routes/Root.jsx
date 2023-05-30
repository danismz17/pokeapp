import './../Styles/App.css'
import Header from '../Components/A-Header/Header'
import Dashboard from '../Components/B-Dashboard/Dashboard'
import MovileControls from '../Components/C-Subcomponentes/MovileControls'

function Root() {

  return (
    <>
      <div className="web-container">
        <Header/>
        <Dashboard/>
      </div>
    </>
  )
}

export default Root
