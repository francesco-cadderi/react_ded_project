const CharactersList = ({monstersNames}) => {
    return (
        <div className='col-12 col-md-4 mt-3 mt-md-0 border rounded p-4 bg-light mt-3'>
            <p className="text-center">Weapons</p>
            <ul className="list-group">
                {monstersNames.length ? (monstersNames.map((name, index) => (
                    <li key={index} className="list-group-item">{name.name}</li>
                ))) : (<li className="list-group-item">No monster found</li>)}
            </ul>
        </div>
    )
}

export default CharactersList;