import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MonsterSheet = ({currentMonster, weaponsAtLoading, spellsAtLoading}) => {

  const { register, setValue, watch} = useForm({mode: "all"});

  const [currentWeapon, setCurrentWeapon] = useState([]);

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
        setCurrentWeapon(currentMonster.weapons.map(w => {
          return ({id: w.id, quantity: w.pivot.quantity})
        }));
        setCurrentSpells(currentMonster.spells);
    }
  }, [currentMonster.id])

  //funzione di riduzione quantità armi
  const counterNumberWeapon = (weaponID)=>{
    let weaponToReduce = currentWeapon.findIndex((weapon)=>{return weapon.id === weaponID})
    currentWeapon[weaponToReduce].quantity -= 1;
    setCurrentWeapon([].concat(currentWeapon));
  }

  const getWeaponData = (weaponID) => {
    const weapon = weaponsAtLoading.find(weapon => weapon.id === weaponID);
    if(weapon) {
      return weapon;
    } else {
      return 'Data not found';
    }
  }

  //controllo l'arma selezionata nella select
  const [selectedWeapon, setSelectedWeapon] = useState("");

  //aggiungo arma
  const addWeapon = ()=>{
    setCurrentWeapon(prevCurrentWeapon => {
        const updCurrentWeapons = [...prevCurrentWeapon];
        const updWeaponIndex = updCurrentWeapons.findIndex(weapon => parseInt(selectedWeapon) === weapon.id);
        if(updWeaponIndex !== -1) {
          updCurrentWeapons[updWeaponIndex].quantity += 0.5;
        } else {
          const weaponObj = weaponsAtLoading.find(w => w.id === parseInt(selectedWeapon));
          updCurrentWeapons.push({id: weaponObj.id, quantity: 1})
        }
        return updCurrentWeapons;
      }
    )
  }

  //funzione di cancellazione spell
  const deleteSpells = (spellID)=>{
    setCurrentSpells(currentSpells.splice(currentSpells.findIndex(item => item.id === spellID), 1))
  }

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
                <div className="row">
                  <div className="col-4">
                    <span>STR</span>
                    <div className="row">
                      <input {...register("str")} id="str" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("str") - 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>DEX</span>
                    <div className="row">
                      <input {...register("dex")} id="dex" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("dex") - 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CON</span>
                    <div className="row">
                      <input {...register("con")} id="con" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("con") - 10) /2)}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <span>INT</span>
                    <div className="row ">
                      <input {...register("int")} id="int" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("int")- 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>WIS</span>
                    <div className="row">
                      <input {...register("wis")} id="wis" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("wis") - 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CHA</span>
                    <div className="row">
                      <input {...register("cha")} id="cha" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("cha") - 10) /2)}</span>}
                    </div>
                  </div>
                </div>
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
                <select id="arma" onChange={(e) => setSelectedWeapon(e.target.value)} className="form-select">
                  <option defaultValue>None</option>
                  {(weaponsAtLoading.map((weaponName, index) => (
                    <option key={index} value={weaponName.id}>{weaponName.name}</option>
                  )))}
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button type="button" onClick={()=>addWeapon()} className="btn btn-secondary mb-2">Add</button>
                </div>
                {currentWeapon.length>0 ? currentWeapon.map((monsterWeapon, index) => (
                <div
                  key={index} className="d-flex justify-content-end mb-1"><li className="form-control">{getWeaponData(monsterWeapon.id).name} ({getWeaponData(monsterWeapon.id).damage}) x{monsterWeapon.quantity}</li>
                  <button type="button" onClick={()=>counterNumberWeapon(monsterWeapon.id, monsterWeapon.quantity)} className="btn btn-secondary">X</button>
                </div>
                )) : (<li className="form-control">No weapons equiped</li>)}
              </div>
              <div className='form-control mt-3 bg-light'>
                <p className="text-center">Spells</p>
                <select className="form-select">
                  <option defaultValue>None</option>
                  {(spellsAtLoading.map((spellName, index) => (
                    <option key={index} value={spellName.id}>{spellName.name}</option>
                  )))}
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-secondary mb-2">Add</button>
                </div>
                {currentSpells.map((monsterSpell, index) => (
                  <div
                    key={index} className="d-flex justify-content-end mb-1"><li className="form-control">{monsterSpell.name}</li>
                    <button type="button" onClick={()=>deleteSpells(monsterSpell.id)} className="btn btn-secondary">X</button>
                  </div>
                ))}
                
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button className='btn btn-success me-3'>Save</button>
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </form>
  )
}

export default MonsterSheet;