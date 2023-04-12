const CharacterSheet = () => {
    return (
      <div className='col-12 col-md-8'>
        <div className='bg-secondary container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row bg-warning p-4'>
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
              <div className='row bg-danger p-4'>
                <div className='col-6'>
                  <p className="text-center">AC</p>
                  <input className='cellInput form-control'></input>
                </div>
                <div className='col-6'>
                  <p className="text-center">Hit points</p>
                  <input className='cellInput col-lg-4 col-lg-offset-4'></input>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='row bg-primary'>
                <p>Name</p>
                <input></input>
              </div>
              <div className='row bg-info'>
                <p>Weapons</p>
                <input></input>
              </div>
              <div className='row bg-success'>
                <p>Spells</p>
                <input></input>
              </div>
              <div className='spacebetween'>
                <button className='btn btn-sm btn-success'>salva</button>
                <button className='btn btn-sm btn-danger'>cancella</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CharacterSheet;