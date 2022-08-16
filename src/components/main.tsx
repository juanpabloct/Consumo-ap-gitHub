import { UserGit } from '../Types/index';
import { useEffect } from 'react';
export const Main=({values}:{values:UserGit})=>{
    useEffect(()=>{
        console.log(values);
    }, [values])
    return (
        <div>{values?.name}</div>
    )
}