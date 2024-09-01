import React from 'react'
import { useNavigate } from 'react-router'
import './style.css'

function UiComponent({title}) {
    console.log(title,'iuihgh','wsoekuhu');
    const nav = useNavigate()
    return (
        <div className='uicomponent'>
            <h1 onClick={() => nav(`/catalogProduct/${title}`)}>{title}</h1>
        </div>
    )
}

export default UiComponent
