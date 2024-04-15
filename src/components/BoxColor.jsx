

//argumento color es para comprobar que el nombre introducido en el input esta dentro del array colors

function BoxColor ({color, value}) {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const isValid = colors.includes(color) //si el color esta dentro del array seria valido(True)
  
  return (
    <>
     <div className="container">
      {colors.map((colorName, index) =>(
        <div key={index} className={`box ${colorName} ${colorName === value && isValid ? 'valid' : ''}`}> 
          {colorName===value && isValid ? (
            <p>Ies!! aim {value} kolor</p>
          ) : (
          <p>No! aim not a {value} kolor</p>
          )}
          </div>
          
      ))}
      </div>
    </> 
  )
}
export default BoxColor;  
