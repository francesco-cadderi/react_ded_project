import { useEffect, useState } from "react";
import MonsterSheet from './components/MonsterSheet';
import MonstersList from './components/MonstersList';


function App() {

  //fetch del nome e id mostro
  const [dataAtLoading, setDataAtLoading] = useState([]);

  useEffect(() => {
		fetch("http://127.0.0.1:8000/api/loading_data", {
			method: "GET",
		})
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setDataAtLoading(data);
      }
    })
    .catch((err) => console.error(err));
	}, []);

  //fetch delle armi nelle select
  const [weaponsAtLoading, setWeaponsAtLoading] = useState([]);

  useEffect(() => {
		fetch("http://127.0.0.1:8000/api/loading_weapons", {
			method: "GET",
		})
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setWeaponsAtLoading(data);
      }
    })
    .catch((err) => console.error(err));
	}, []);

  //fetch di tutti i dati del singolo mostro
  const [currentMonster, setCurrentMonster] = useState([]);

  const showMonster = (monsters) =>{
    fetch(`http://127.0.0.1:8000/api/monsters/${monsters}`, {
			method: "GET",
		})
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setCurrentMonster(data);
      }
    })
    .catch((err) => console.error(err));
  }


  return (
    <div className='container'>
      <div className='bg-light rounded border p-5 my-5'><h2 className="text-center">Monster's track</h2></div>
      <div className='row'>
        <MonsterSheet weaponsAtLoading={weaponsAtLoading} currentMonster={currentMonster}/>
        <MonstersList dataAtLoading={dataAtLoading} showMonster={showMonster}/>
      </div>
    </div>
  )
}

export default App
