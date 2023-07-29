import React,{ useState } from 'react';
import ToDoLists from './todolist';
const App=(props)=>{

    //inputlist and items are the state variables 
    const[inputList,upList]=useState("");

    //isko array me store karne ke liye square bracket add karenge
    const[Items,setItems]=useState([]);

    const inputEvent = (event)=>{
        upList(event.target.value);
    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList]
        })

        upList('');
        
    
}
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDO List</h1>
                <br />
                <input type="text" placeholder='Add items'
                value={inputList} onChange={inputEvent}/>
                
                <button onClick={listOfItems}>+</button>
                <ol>
                    {/* <li>{inputList}</li> */}

                    {Items.map((itemval,index)=>{
                        return <ToDoLists key={index}
                        id={index} text={itemval}
                        onSelect={deleteItems}/>
                    })}
                    
                </ol>
            </div>
        </div>
        </>
    )
}
export default App;
