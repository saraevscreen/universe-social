import React from 'react'
import Dialog from './Dialog';
import DialogsList from './DialogsList';
import s from './Messages.module.css'



const Messages = (props) =>{

    return (
        <div className={s.body}>
            <DialogsList DialogUsers={props.DialogUsers}/>
            <Dialog message={props.messages}/>
        </div>
    );
}

export default Messages;