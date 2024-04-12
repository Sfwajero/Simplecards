import logo from './logo.svg';
import './App.css';
import Simplecards from './components/SimpleCards';
import Data from"./Data.json"


function App() {
  return (
    <div className="App">
    
    
    {/* < Simplecards iname="Solape" ititle="CEO" idesc="Software Developer. Database Administrator. Data Analyst." />
    < Simplecards iname="Solape" ititle="CEO" idesc="Software Developer. Database Administrator. Data Analyst." />
    < Simplecards iname="Solape" ititle="CEO" idesc="Software Developer. Database Administrator. Data Analyst." />
    < Simplecards iname="Solape" ititle="CEO" idesc="Software Developer. Database Administrator. Data Analyst." />
     */}
    <div className='d-flex' >
          {
            Data.data.map( (elem)=> {
               return <Simplecards iname= {elem.name} til={elem.til} id={elem.id} age={elem.age} />
            }
            )
          }
        </div>


    </div>
  );
}
export default App;
