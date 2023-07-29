import React from 'react'
const ToDoLists=(props)=>{

    // const deleteItems=()=>{
    //     console.log('deleted');
    // }
    return(
        <>
        <div className='todo_style'>
            <i className='fa fa-times' aria-hidden="true" onClick={()=>{
                props.onSelect(props.id)
            }}/>
        {/* <button onClick={()=>{
            props.onSelect(props.id)
        }} > X </button> */}

        <li>{props.text}</li>
        </div>
        </>
    )
}

export default ToDoLists;