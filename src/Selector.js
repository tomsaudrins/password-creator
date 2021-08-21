const Selector = ({type, value, setValue}) => {
    
    return (
        <div>
            <p className="type-value">{type} <span className="right-align">{value}</span> </p>
            <input type="range" name='selection' min="0" max="12" className="selector-input-field max-width" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default Selector