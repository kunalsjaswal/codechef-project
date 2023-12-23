import React from 'react'

const ExperimentPage = ({id,name}) => {
  return (
    <div style={{color:"white"}}>
            id: {id} <br />
            name: {name}
            <br />
            {
                id < 5 
                    && 
                <div className={`div-${id}`} style={{marginLeft:`${1.5*id}%`}}> 
                    <ExperimentPage id = {id+1} name = {`level - ${id}`}/> 
                </div>

            }
    </div>
  )
}

export default ExperimentPage