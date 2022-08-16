import { IconButton, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import { useState, useRef, useLayoutEffect, useEffect, ElementType, useCallback, useMemo } from 'react';
import { conection } from "../conectionApi/conection";

export const SearchPerson =({funCallback, setInput, input}:{funCallback:() => Promise<void>, setInput: React.Dispatch<React.SetStateAction<string>>, input:string})=>{
    return (
        <Box marginTop={"3rem"}>
        <TextField label="GitHub Projects" placeholder='Escribe la persona que buscas' onChange={({target})=>{setInput(target.value)}}/>
        <IconButton sx={{left:"-2.4rem", marginTop:"10px"}} size="small" onClick={()=>funCallback()}>
          <SearchIcon/>
        </IconButton>
    </Box>
    )
}