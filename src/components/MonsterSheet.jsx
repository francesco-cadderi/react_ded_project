const MonsterSheet = () => {
    return (
      <div className='col-12 col-md-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row border rounded p-4 bg-light'>
                <p className="text-center">Name</p>
                <input className="form-control"></input>
              </div>
              <div className='row border rounded p-4 bg-light mt-3'>
                <p className="text-center">Characteristics</p>
                <div className="row">
                  <div className="col-4">
                    <span>STR</span>
                    <div className="row">
                      <input maxLength="2" className='text-center cellInput form-control col-6'></input>
                      <input maxLength="2" className='text-center cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>DEX</span>
                    <div className="row">
                      <input maxLength="2" className='text-center cellInput form-control col-6'></input>
                      <input maxLength="2" className='text-center cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CON</span>
                    <div className="row">
                      <input maxLength="2" className='text-center cellInput form-control col-6'></input>
                      <input maxLength="2" className='text-center cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <span>INT</span>
                    <div className="row ">
                      <input maxLength="2" className='text-center cellInput form-control col-6'></input>
                      <input maxLength="2" className='text-center cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>WIS</span>
                    <div className="row">
                      <input maxLength="2" className='text-center cellInput form-control col-6'></input>
                      <input maxLength="2" className='text-center cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CHA</span>
                    <div className="row">
                      <input maxLength="2" className='text-center cellInput form-control col-6'></input>
                      <input maxLength="2" className='text-center cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row border rounded p-4 mt-3 bg-light'>
                <div className='col-6'>
                  <p className="text-center">AC</p>
                  <div className="d-flex justify-content-center">
                    <input maxLength="2" className='text-center cellInput form-control'></input>
                  </div>
                </div>
                <div className='col-6'>
                  <p className="text-center">HP</p>
                  <div className="d-flex justify-content-center">
                    <input maxLength="3" className='text-center cellInput form-control'></input>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='form-control bg-light'>
                <p className="text-center">Weapons</p>
                <select className="form-select">
                  <option defaultValue>None</option>
                  <option value="1">Dagger</option>
                  <option value="2">Sword</option>
                  <option value="3">Axe</option>
                  <option value="4">Bow</option>
                </select>
                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-secondary me-3">Add</button>
                  <button className="btn btn-secondary">Remove</button>
                </div>
                <textarea className="form-control mt-2" rows="3"></textarea>
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
      </div>
    )
}

export default MonsterSheet;