import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

function Todo({todo, inprogress, id}) {


    function toggleInProgress(){
        db.collection('todos').doc(id).update({
            inprogress: !inprogress
        })
    }

    function deleteTodo(){
        db.collection('todos').doc(id).delete()
    }

    return (
        <div className="container" style={{display: "flex", marginLeft: "5px"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "In Progress" : "Completed"} />
            </ListItem>
            <Button onClick={toggleInProgress}>{inprogress ? "Done" : "UnDone"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}

export default Todo
