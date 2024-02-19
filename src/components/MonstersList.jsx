const MonstersList = ({dataAtLoading, showMonster}) => {
    return (
        <div className='col-12 col-md-4 mt-3 mt-md-0 border rounded p-4 bg-light mt-3'>
            <p className="text-center">Monsters</p>
            <ul className="list-group">
                {dataAtLoading.length ? (dataAtLoading.map((monster, index) => (
                    <button onClick={()=>showMonster(monster.id)} key={index} className="list-group-item">{monster.name}</button>
                ))) : (<li className="list-group-item">No monster found</li>)}
            </ul>
        </div>
    )
}

export default MonstersList;