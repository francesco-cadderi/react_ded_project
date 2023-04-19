import { useEffect, useState } from "react";
import CharacterSheet from './components/CharacterSheet';
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

  return (
    <div className='container'>
      <div className='bg-light rounded border p-5 my-5'><h2 className="text-center">Monster's track</h2></div>
      <div className='row'>
        <CharacterSheet />
        <CharactersList monstersNames={monstersNames}/>
      </div>
    </div>
  )
}

export default App
