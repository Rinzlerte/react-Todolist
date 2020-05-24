import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

const ListFile = (props) => {
    const {data} = props;

    const renderItems = data.map(item =>{
        return <div key={item.key} className="list">
            <p>
                <input type="text" id={item.key} value={item.text} 
                onChange={(e)=>props.setUpdate(e.target.value, item.key)}/>
            </p>
            <span>
                <FontAwesomeIcon className="faicons" icon="trash" onClick={()=>props.deleteItem(item.key)}/>
            </span>
        </div>
    })

    return (
        <div style={{width:`100%`, marginTop:`150px`}}>
            <FlipMove duration={400} easing="ease-in-out">
                { renderItems }
            </FlipMove>
        </div>
    )
}

export default ListFile
