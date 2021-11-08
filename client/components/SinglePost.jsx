import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import variables from '../scss/_variables.scss';



export default function SinglePost({ postInfo, post_id, getPostSentiment }) {

    // helper fucntion to format like count 
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // function to format date
    function formatDate(d) {
        // helper obj to convert num month to string 
        let monthNumToWord = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec',
        }

        // get year + month + date from string 
        let year = d.split('T')[0].split('-')[0];
        let month = d.split('T')[0].split('-')[1];
        let date = d.split('T')[0].split('-')[2];

        // convert month to word representation 
        month = monthNumToWord[month];

        // strip leading 0 from date 
        if (date.slice(0, 1) === '0') {
            date = date.slice(1);
        }

        // format year 
        year = year.slice(2);

        return `${month} ${date}, '${year}`;
    }

    // format likes + date string 
    let dateAndLikeString = `${formatDate(postInfo.timestamp)} | Likes: ${numberWithCommas(postInfo.likes_count)}`;




    return (
        <button className="singlePost" onClick={() => getPostSentiment(post_id)}>
            <List sx={{ width: '100%', Width: 500 }} className="ListPostContainer">
                <ListItem
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        {/* // TODO UPDATE IMAGE SOURCE SO THAT IT SHOWS: {postInfo.media_url} */}
                        <Avatar
                            alt="Remy Sharp"
                            // sx={ width: 24, height: 24 }
                            variant='square'
                            src={postInfo.media_url}
                            className="postAvatar"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                        primary={
                            <React.Fragment>
                                <Typography
                                    sx={{ fontFamily: 'Montserrat, sans-serif', display: 'inline', fontWeight: '900' }}
                                    component="span"
                                    variant="body2"
                                    color="#262626"
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
                                    {dateAndLikeString}
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
