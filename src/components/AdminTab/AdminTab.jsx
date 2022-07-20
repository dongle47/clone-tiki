import React from 'react'
import {
    Box, Stack
} from "@mui/material"
import "./AdminTab.scss"
function AdminTab(props) {
    const [items,setItems] = React.useState([])
    const [selected, setSelected] = React.useState(null)
    const [handleChangeTab,setHandleChangeTab]=React.useState(null)
    React.useEffect(()=>{
        const loadData = ()=>{
            if(props.items){
                setItems(props.items)
                setSelected(0)
                setHandleChangeTab(props.handleChangeTab)
            }
        }
        loadData()
    },[props.items])

    const handleClickTab =(i)=>{
        if(i!==selected){
            setSelected(i)
            if(props.handleChangeTab){
                props.handleChangeTab(i)
            }
        }
    }
    return (
        <Stack direction="row" spacing={0.5}>
            {
                items?.map((item, i) =>
                    <Stack onClick={()=>{handleClickTab(i)}} key={item.id||i} alignItems="center" justifyContent="center" className={`adminTab__item ${i === selected ? "selected" : ""}`}>
                        {item.label}
                    </Stack>)
            }
        </Stack>
    )
}

export default AdminTab