import { useEffect, useState } from "react";
import MonsterSheet from './components/MonsterSheet';
import MonstersList from './components/MonstersList';

function App() {

  //fetch del nome e id mostro
  const [dataAtLoading, setDataAtLoading] = useState([]);

  useEffect(() => {
		fetch("http://127.0.0.1:8000/api/loading_data", {
			method: "GET",
      headers: {
        Accept: "application/json"
      }
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

  //fetch degli incantesimi nella select
  const [spellsAtLoading, setSpellsAtLoading] = useState([]);

  useEffect(() => {
		fetch("http://127.0.0.1:8000/api/loading_spells", {
			method: "GET",
		})
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setSpellsAtLoading(data);
      }
    })
    .catch((err) => console.error(err));
	}, []);

  //fetch di tutti i dati del singolo mostro
  const [currentMonster, setCurrentMonster] = useState([]);

  const showMonster = (monsterID) =>{
    fetch(`http://127.0.0.1:8000/api/monsters/${monsterID}`, {
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

  //cancello mostro dal db
  const deleteMonster = (id) => {
    console.log("ID è: ", id);
		/* fetch(`http://127.0.0.1:8000/api/dlt_monster/${monsterID}`, {
			method: 'DELETE',
		})
    .then(console.log(monsterID))
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setDataAtLoading(data);
      }
    })
    .catch((err) => console.error(err)); */
	};

  //aggiorno db
  /* const updMonster = (updatedMonster) => {
    setCurrentMonster(updatedMonster);
    fetch(`http://127.0.0.1:8000/api/monsters/${monsterID}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      if(data) {
        // rimpiazzo l'utente aggiornato dopo la modifica all'interno dello state locale
        setUsers(prevUsers => {
          return prevUsers.map(prevUser => prevUser.id === id ? updatedMonster : prevUser)
        })
      }
    })
    .catch(err => console.error(err))
  } */

  return (
    <div className='container'>
      <div className='bg-light rounded border p-5 my-5'><h2 className="text-center">Monster's track</h2></div>
      <div className='row'>
        <MonsterSheet weaponsAtLoading={weaponsAtLoading} 
                      spellsAtLoading={spellsAtLoading} 
                      currentMonster={currentMonster}
                      setCurrentMonster={setCurrentMonster}
                      deleteMonster={deleteMonster}
        />
        <MonstersList dataAtLoading={dataAtLoading} 
                      showMonster={showMonster}
        />
      </div>
    </div>
  )
}

export default App
