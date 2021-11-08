import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



export default function SinglePost({ postInfo, post_id, getPostSentiment }) {



    return (
        <button className="singlePost" onClick={() => getPostSentiment(post_id)}>
            <List sx={{ width: '100%', Width: 500, bgcolor: '#f0f5f5' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        {/* // TODO UPDATE IMAGE SOURCE SO THAT IT SHOWS: {postInfo.media_url} */}
                        <Avatar
                            alt="Remy Sharp"
                            // sx={ width: 24, height: 24 }
                            variant='square'
                            src='https://i.imgur.com/0N4Huwn.jpg'
                        />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                        primary={
                            <React.Fragment>
                                <Typography
                                    sx={{ fontFamily: 'Montserrat, sans-serif', display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="#0a1429"
                                >
                                    {postInfo.caption}
                                </Typography>

                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ fontFamily: 'Montserrat, sans-serif', display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="#0a1429"
                                >
                                    @kimkardashian  {postInfo.likes_count} likes
                                </Typography>
                                {/* // TODO: Replace below with  / LikeCount / Date ?? */}
                                { }
                            </React.Fragment>
                        }
                    />
                </ListItem>
                {/* <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Fake Kim K
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem> */}
            </List>
        </button>
    );
}
