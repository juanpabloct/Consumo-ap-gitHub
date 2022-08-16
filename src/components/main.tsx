import { UserGit } from '../Types/index';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography, Grid } from '@mui/material';
export const Main=({values}:{values:UserGit})=>{
    const {login, avatar_url, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin, name, company, blog, location, email, hireable, bio, twitter_username, public_repos, public_gists, followers, following, created_at, updated_at}=values
    console.log(values);
    
    return (
        <Grid container justifyContent={"center"} >
            <Grid item></Grid>
            <Typography>{name}</Typography>
        </Grid>
    )
}