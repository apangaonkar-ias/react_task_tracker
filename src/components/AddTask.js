import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("PLease add Text")
            return
        }

        onAdd({text,day,reminder})
        
        //clear form 
        setDay('')
        setReminder(false)
        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Enter Task' 
                value = {text} onChange = {(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type="text" placeholder='Day & Time'
                value = {day} onChange = {(e)=> setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder}
                value = {reminder} onChange = {(e)=> setReminder(e.currentTarget.checked)}/>
            </div>
            <div className='form-control'>
                <input type="submit" value = 'Save Task' className='btn btn-block' />
            </div>
            
        </form>
    )
}

export default AddTask;