import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import './App.css'
import { Grid } from '@mui/material';

import {SearchPerson} from "./components/search"
import { Main } from './components/main';
import { conection } from './conectionApi/conection';
function App() {
  const [input, setInput]=useState("")
  const [values, setValues]=useState("")
  const funCallback=useCallback(async()=>{
    const valuesInput=input.length>0&&input
    setValues(await conection(valuesInput))
  }, [input])
useEffect(()=>{funCallback()}, [])
  return (
    <Grid container sx={{width:"80vw", height:"30rem", backgroundColor:"whitesmoke"}} direction="column" alignItems={"center"}>
      <SearchPerson funCallback={funCallback} input={input} setInput={setInput}/>
      <Main values={values}/>
    </Grid>
  )
}

export default App
