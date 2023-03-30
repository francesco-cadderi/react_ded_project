const CharacterSheet = () => {
    return (
        <div className='col-1 col-md-8'>
        <div className='bg-secondary container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row bg-warning p-4'>
              <p>Caratteristiche</p>
                <input className='cellInput'></input>
                <input className='cellInput'></input>
                <input className='cellInput'></input>
                <input className='cellInput'></input>
                <input className='cellInput'></input>
                <input className='cellInput'></input>
              </div>
              <div className='row bg-danger p-4'>
                <div className='col-6'>
                  <p className="text-center">Classe Armatura</p>
                  <input className='cellInput'></input>
                </div>
                <div className='col-6'>
                  <p className="text-center">Punti ferita</p>
                  <input className='cellInput'></input>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='row bg-primary'>
                <p>Nome</p>
                <input></input>
              </div>
              <div className='row bg-info'>
                <p>Armi</p>
                <input></input>
              </div>
              <div className='row bg-success'>
                <p>Incantesimi</p>
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