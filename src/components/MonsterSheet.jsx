import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MonsterSheet = ({currentMonster, dataAtLoading, weaponsAtLoading}) => {

  const { register, handleSubmit, setValue, watch, formState: {errors} } = useForm({mode: "all"});

  const [currentWeapon, setCurrentWeapon] = useState([]);

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
        setCurrentWeapon(currentMonster.weapons);
    }
  }, [currentMonster.id])

  //funzione di riduzione quantità armi
  const counterNumberWeapon = (weaponID)=>{
    let weaponToReduce = currentWeapon.findIndex((weapon)=>{return weapon.id === weaponID})
    currentWeapon[weaponToReduce].pivot.quantity -= 1;
    setCurrentWeapon([].concat(currentWeapon));
  }

  //stampo lista armi
  const renderList =()=>{
    return( <>
      {
        currentWeapon.map((monsterWeapon, index) => {
          let elementList = (
            <div key={index} className="d-flex justify-content-end mb-1">
              <li className="form-control">x{monsterWeapon.pivot.quantity} {monsterWeapon.name} {monsterWeapon.damage}</li>
              <button type="button" onClick={()=>counterNumberWeapon(monsterWeapon.id, monsterWeapon.pivot.quantity)} className="btn btn-secondary">X</button>
            </div>
          )
          return elementList}
        )
      }
      </>)
  }

  //controllo l'arma selezionata nella select
  const [selectedWeapon, setSelectedWeapon] = useState("");

  //aggiungo arma
  const addWeapon = ()=>{

    var selectedWeaponInt = Number(selectedWeapon);
      console.log("weaponsAtLoading[selectedWeaponInt-1]", weaponsAtLoading[selectedWeaponInt-1]);
      console.log("currentWeapon", currentWeapon);
      console.log("weaponsAtLoading", weaponsAtLoading);

      //setCurrentWeapon([].concat(weaponsAtLoading[selectedWeaponInt-1]));

    /* currentWeapon.map((monsterWeapon) => {
      if (selectedWeapon == monsterWeapon.id) {
        currentWeapon[monsterWeapon.id -1].pivot.quantity += 1;
        setCurrentWeapon([].concat(currentWeapon));
        console.log("if");
      }
      else {
        
      }
    }) */ 
  }

  return (
      <form className='col-12 col-md-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row border rounded p-4 bg-light'>
                <p className="text-center">Name</p>
                <input {...register("name", { required: 'Field "name" is required'})} id="name" className="form-control"></input>
              </div>
              <div className='row border rounded p-4 bg-light mt-3'>
                <p className="text-center">Characteristics</p>
                <div className="row">
                  <div className="col-4">
                    <span>STR</span>
                    <div className="row">
                      <input {...register("str", { required: 'Field "name" is required'})} id="str" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("str") - 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>DEX</span>
                    <div className="row">
                      <input {...register("dex", { required: 'Field "name" is required'})} id="dex" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("dex") - 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CON</span>
                    <div className="row">
                      <input {...register("con", { required: 'Field "name" is required'})} id="con" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("con") - 10) /2)}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <span>INT</span>
                    <div className="row ">
                      <input {...register("int", { required: 'Field "name" is required'})} id="int" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("int")- 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>WIS</span>
                    <div className="row">
                      <input {...register("wis", { required: 'Field "name" is required'})} id="wis" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("wis") - 10) /2)}</span>}
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CHA</span>
                    <div className="row">
                      <input {...register("cha", { required: 'Field "name" is required'})} id="cha" maxLength="2" className='text-center cellInput form-control col-6'></input>
                      {currentMonster.id && <span  className='text-center col-6 mt-2'>{ Math.floor((watch("cha") - 10) /2)}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className='row border rounded p-4 mt-3 bg-light'>
                <div className='col-6'>
                  <p className="text-center">AC</p>
                  <div className="d-flex justify-content-center">
                    <input {...register("ac", { required: 'Field "name" is required'})} id="ac" maxLength="2" className='text-center cellInput form-control'></input>
                  </div>
                </div>
                <div className='col-6'>
                  <p className="text-center">HP</p>
                  <div className="d-flex justify-content-center">
                    <input {...register("hp", { required: 'Field "name" is required'})} id="hp" maxLength="3" className='text-center cellInput form-control'></input>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='form-control bg-light'>
                <p className="text-center">currentWeapon</p>
                <select id="arma" onChange={(e) => setSelectedWeapon(e.target.value)} className="form-select">
                  <option defaultValue>None</option>
                  {(weaponsAtLoading.map((weaponName, index) => (
                    <option key={index} value={weaponName.id}>{weaponName.name}</option>
                  )))}
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button type="button" onClick={()=>addWeapon()} className="btn btn-secondary mb-2">Add</button>
                </div>
                {currentWeapon.length>0 ?  renderList() : (<li className="form-control">No weapons equiped</li>)}
              </div>
              <div className='form-control mt-3 bg-light'>
                <p className="text-center">Spells</p>
                <select className="form-select">
                  <option defaultValue>None</option>
                  <option value="1">Fire bolt</option>
                  <option value="2">Cure wounds</option>
                  <option value="3">Charm monster</option>
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-secondary me-3">Add</button>
                  <button className="btn btn-secondary">Remove</button>
                </div>

                <textarea className="form-control mt-2" rows="3"></textarea>
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