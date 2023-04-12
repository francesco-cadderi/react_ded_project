const CharacterSheet = () => {
    return (
      <div className='col-12 col-md-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row border rounded p-4 bg-light'>
                <p className="text-center">Characteristics</p>
                <div className="row">
                  <div className="col-4">
                    <span>STR</span>
                    <div className="row">
                      <input className='cellInput form-control col-6'></input>
                      <input className='cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>DEX</span>
                    <div className="row">
                      <input className='cellInput form-control col-6'></input>
                      <input className='cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>COS</span>
                    <div className="row">
                      <input className='cellInput form-control col-6'></input>
                      <input className='cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <span>INT</span>
                    <div className="row">
                      <input className='cellInput form-control col-6'></input>
                      <input className='cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>WIS</span>
                    <div className="row">
                      <input className='cellInput form-control col-6'></input>
                      <input className='cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>CHA</span>
                    <div className="row">
                      <input className='cellInput form-control col-6'></input>
                      <input className='cellInputMod form-control col-6'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row border rounded p-4 mt-3 bg-light'>
                <div className='col-6'>
                  <p className="text-center">AC</p>
                  <input className='cellInput form-control'></input>
                </div>
                <div className='col-6'>
                  <p className="text-center">Hit points</p>
                  <input className='cellInput form-control'></input>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='form-control bg-light'>
                <span>Name</span>
                <input className="form-control"></input>
              </div>
              <div className='form-control mt-3 bg-light'>
                <span>Weapons</span>
                <select class="form-select">
                  <option selected>None</option>
                  <option value="1">Dagger</option>
                  <option value="2">Sword</option>
                  <option value="3">Axe</option>
                  <option value="4">Bow</option>
                </select>
              </div>
              <div className='form-control mt-3 bg-light'>
                <span>Spells</span>
                <select class="form-select">
                  <option selected>None</option>
                  <option value="1">Fire bolt</option>
                  <option value="2">Cure wounds</option>
                  <option value="3">Charm monster</option>
                </select>
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button className='btn btn-success me-3 mt-5'>Save</button>
                <button className='btn btn-danger mt-5'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CharacterSheet;