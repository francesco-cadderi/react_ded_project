import { useEffect, useState } from "react";
import MonsterSheet from './components/MonsterSheet';
import MonstersList from './components/MonstersList';


function App() {

  const [monstersNames, setMonstersNames] = useState([]);

  useEffect(() => {
		fetch("http://127.0.0.1:8000/api/name_list", {
			method: "GET",
		})
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setMonstersNames(data);
      }
    })
    .catch((err) => console.error(err));
	}, []);

  //fetch di tutti i dati del singolo mostro. Mostro i dati
  const [monsterData, setMonsterData] = useState([]);

  const showMonster = (monsters) =>{
    fetch(`http://127.0.0.1:8000/api/monsters/${monsters}`, {
			method: "GET",
		})
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setMonsterData(data);
        console.log(data.str);
      }
    })
    .catch((err) => console.error(err));
  }

  return (
    <div className='container'>
      <div className='bg-light rounded border p-5 my-5'><h2 className="text-center">Monster's track</h2></div>
      <div className='row'>
        <MonsterSheet monsterData={monsterData}/>
        <MonstersList monstersNames={monstersNames} showMonster={showMonster}/>
      </div>
    </div>
  )
}

export default App
