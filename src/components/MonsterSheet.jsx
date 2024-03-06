import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MonsterSheet = ({currentMonster, weaponsAtLoading, spellsAtLoading, setCurrentMonster, deleteMonster}) => {

  const { register, setValue, watch} = useForm({mode: "all"});

  const [currentWeapons, setCurrentWeapons] = useState([]);

  const [currentSpells, setCurrentSpells] = useState([]);

  useEffect(() => {
    if(currentMonster.id) {
        setValue("name", currentMonster.name);
        setValue("str", currentMonster.str);
        setValue("dex", currentMonster.dex);
        setValue("con", currentMonster.con);
        setValue("int", currentMonster.int);
        setValue("wis", currentMonster.wis);
        setValue("cha", currentMonster.cha);
        setValue("ac", currentMonster.AC);
        setValue("hp", currentMonster.HP);
        setCurrentWeapons(currentMonster.weapons.map(w => {
          return ({id: w.id, quantity: w.pivot.quantity})
        }));
        setCurrentSpells(currentMonster.spells.map(s => {
          return ({id: s.id, quantity: s.pivot.quantity})
        }));
    }
  }, [currentMonster.id])

  //funzione di riduzione quantità armi/incantesimi
  const counterNumber = (id, currentItems, setCurrentItems) => {
    const itemToReduce = currentItems.findIndex(item => item.id === id);
    if (currentItems[itemToReduce].quantity <= 1) {
      currentItems[itemToReduce].quantity = 0;
      currentItems.splice(itemToReduce, 1);
    } else {
      currentItems[itemToReduce].quantity -= 1;
    }
    setCurrentItems([].concat(currentItems));
  }
  
  const counterNumberWeapon = (weaponID) => {
    counterNumber(weaponID, currentWeapons, setCurrentWeapons);
  }
  
  const counterNumberSpells = (spellID) => {
    counterNumber(spellID, currentSpells, setCurrentSpells);
  }
  
  //funzione ottenimento dati armi/incantesimi
  const getData = (id, dataAtLoading) => {
    const item = dataAtLoading.find(item => item.id === id);
    return item ? item : 'Data not found';
  }
  
  const getWeaponData = (weaponID) => {
    return getData(weaponID, weaponsAtLoading);
  }
  
  const getSpellData = (spellID) => {
    return getData(spellID, spellsAtLoading);
  }
  
  //aggiungo arma/incantesimo
  const [selectedWeapon, setSelectedWeapon] = useState("");

  const [selectedSpells, setSelectedSpells] = useState("");

  const addItem = (selectedItem, currentItems, setCurrentItems, itemsAtLoading) => {
    setCurrentItems(prevCurrentItems => {
      const updCurrentItems = [...prevCurrentItems];
      const updItemIndex = updCurrentItems.findIndex(item => parseInt(selectedItem) === item.id);
      if(updItemIndex !== -1) {
        updCurrentItems[updItemIndex].quantity += 1;
      } else {
        const itemObj = itemsAtLoading.find(w => w.id === parseInt(selectedItem));
        updCurrentItems.push({id: itemObj.id, quantity: 1})
      }
      return updCurrentItems;
    });
  }
  
  const addWeapon = () => {
    addItem(selectedWeapon, currentWeapons, setCurrentWeapons, weaponsAtLoading);
  }
  
  const addSpell = () => {
    addItem(selectedSpells, currentSpells, setCurrentSpells, spellsAtLoading);
  }

  //update form
  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log("value:", value, "name:", name, "type:",type));
    return () => subscription.unsubscribe();
  }, [watch]);

  //delete mostro
  const handleClick = () => {
    deleteMonster(currentMonster.id);
  };
  

  const characteristics = [
    { name: 'str', label: 'STR' },
    { name: 'dex', label: 'DEX' },
    { name: 'con', label: 'CON' },
    { name: 'int', label: 'INT' },
    { name: 'wis', label: 'WIS' },
    { name: 'cha', label: 'CHA' },
  ];

  return (
      <form className='col-12 col-md-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row border rounded p-4 bg-light'>
                <p className="text-center">Name</p>
                <input {...register("name")} id="name" className="form-control"></input>
              </div>
                <div className='row border rounded p-4 bg-light mt-3'>
                  <p className="text-center">Characteristics</p>
                  {characteristics.map(({ name, label }) => (
                    <div className="col-4" key={name}>
                      <span>{label}</span>
                      <div className="row">
                        <input {...register(name)}
                              name={name}
                              id={name} maxLength="2"
                              type="number"
                              className='noArrow text-center cellInput form-control col-6'>
                        </input>
                        {currentMonster.id && <span className='text-center col-6 mt-2'>{Math.floor((watch(name) - 10) / 2)}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              <div className='row border rounded p-4 mt-3 bg-light'>
                <div className='col-6'>
                  <p className="text-center">AC</p>
                  <div className="d-flex justify-content-center">
                    <input {...register("ac")} id="ac" maxLength="2" className='text-center cellInput form-control'></input>
                  </div>
                </div>
                <div className='col-6'>
                  <p className="text-center">HP</p>
                  <div className="d-flex justify-content-center">
                    <input {...register("hp")} id="hp" maxLength="3" className='text-center cellInput form-control'></input>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='form-control bg-light'>
                <p className="text-center">Wapons</p>
                <select className="form-select" id="arma" onChange={(e) => setSelectedWeapon(e.target.value)}>
                  <option defaultValue>None</option>
                  {(weaponsAtLoading.map((weaponName, index) => (
                    <option key={index} value={weaponName.id}>{weaponName.name}</option>
                  )))}
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button type="button" className="btn btn-secondary mb-2" onClick={()=>addWeapon()}>Add</button>
                </div>
                {currentWeapons.length > 0 ? currentWeapons.map((monsterWeapon, index) => {
                  return (
                    <div key={index} className="d-flex justify-content-end mb-1">
                      <li className="form-control">{getWeaponData(monsterWeapon.id).name} ({getWeaponData(monsterWeapon.id).damage}) x{monsterWeapon.quantity}</li>
                      <button type="button" onClick={()=>counterNumberWeapon(monsterWeapon.id, monsterWeapon.quantity)} className="btn btn-secondary">X</button>
                    </div>
                  );
                  }) : (<li className="form-control">No weapons equiped</li>)}
              </div>
              <div className='form-control mt-3 bg-light'>
                <p className="text-center">Spells</p>
                <select className="form-select" id="incantesimo" onChange={(e) => setSelectedSpells(e.target.value)}>
                  <option defaultValue>None</option>
                  {(spellsAtLoading.map((spellName, index) => (
                    <option key={index} value={spellName.id}>{spellName.name}</option>
                  )))}
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button type="button" className="btn btn-secondary mb-2" onClick={()=>addSpell()}>Add</button>
                </div>
                {currentSpells.length > 0 ? currentSpells.map((monsterSpell, index) => (
                  <div key={index} className="d-flex justify-content-end mb-1">
                    <li className="form-control">{getSpellData(monsterSpell.id).name} x{monsterSpell.quantity}</li>
                    <button type="button" onClick={()=>counterNumberSpells(monsterSpell.id, monsterSpell.quantity)} className="btn btn-secondary">X</button>
                  </div>
                )): (<li className="form-control">No spell ready</li>)}  
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button className='btn btn-success me-3'>Save</button>
                <button className='btn btn-danger' onClick={handleClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </form>
  )
}

export default MonsterSheet;