import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import './App.css'
import { Grid } from '@mui/material';

import {SearchPerson} from "./components/search"
import { Main } from './components/main';
import { conection } from './conectionApi/conection';
import { UserGit } from './Types/index';
function App() {
  const [input, setInput]=useState("")
  const [values, setValues]=useState("")
  const funCallback=useCallback(async()=>{
    const valuesInput=input.length>0&&input
    setValues(await conection(valuesInput))
  }, [input])
useEffect(()=>{funCallback()}, [])
  return (
    <Grid container sx={{ height:"30rem", backgroundColor:"whitesmoke"}}  borderRadius={"10px"}  spacing={2}>
      <Grid item xs={12}>
        <SearchPerson funCallback={funCallback} input={input} setInput={setInput}/>
      </Grid>

      <Grid item xs={6} justifySelf={"center"}>
        <img src={values?.avatar_url} alt="" />
      </Grid>
      <Grid item xs={6} justifySelf={"center"}>
        <Main values={values}/>
      </Grid>
    </Grid>
  )
}

export default App
