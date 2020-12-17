import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
    media: {
      height: 400,
    },
  });

function GroupInfo(props){   
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/* <CardMedia
                image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/user20c5688c.jpg"
                title="Group"
                /> */}
                <CardContent>
                    <input id="check1" placeholder="Group Name"/>
                    <input id="check2" placeholder="Group Info"/>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={props.handleClick}>
                Create Group
                </Button>
            </CardActions>
        </Card>

    )
    
}

export default GroupInfo;
