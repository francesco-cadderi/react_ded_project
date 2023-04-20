import { useEffect, useState } from "react";
import MonsterSheet from './components/MonsterSheet';
import CharactersList from './components/CharactersList';


function App() {

  const [monstersNames, setMonstersNames] = useState([]);

  useEffect(() => {
		fetch("http://127.0.0.1:8000/api/name_list", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
          console.log(data);
					setMonstersNames(data);
				}
			})
			.catch((err) => console.error(err));
	}, []);

  const showMonster = ()=>{
      
  }

  return (
    <div className='container'>
      <div className='bg-light rounded border p-5 my-5'><h2 className="text-center">Monster's track</h2></div>
      <div className='row'>
        <MonsterSheet />
        <CharactersList monstersNames={monstersNames}/>
      </div>
    </div>
  )
}

export default App
