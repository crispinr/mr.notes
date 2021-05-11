import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }

    
  })

export default function Notes(props) {
    const { notes } = props;
    const { title } = props;
    const { col1 } = title.map((title) => {
                        return (
                        <Typography key = {title.id} style = {{ width: "150px" }} className = "d-flex mx-auto mt-3 justify-content-center text-capitalize font-weight-bold card p-3">
                            <h5 className = "m-0">
                                {title.title}
                            </h5>
                        </Typography>
                        )});
    const { col2 } = notes.map((note) => {
        return (
        <Typography key = {note.id} className = "card p-3 text-center">
            <h6 className = "m-0">
                {note.note}
            </h6>
        </Typography>
        )});

    if(!notes || notes.length === 0) {
        return (
            <p className = "mt-5">
                You haven't created any notes yet!
            </p>
        );
    }
    else {
        return (
            <>
                <h4 className="container mt-4">
                    Your Notes
                </h4>
                <div className="container mt-4">
                    <div className="card-columns">
                    {title.map((title) => {
                        return (
                            notes.map((note) => {
                                return (
                                    <Card className = "card">
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography key = {title.id} style = {{ width: "150px" }} className = "d-flex mx-auto mt-3 text-center justify-content-center text-capitalize font-weight-bold card p-3">
                                                    <h5 className = "m-0">
                                                        {title.title}
                                                    </h5>
                                                </Typography>
                                                <Typography key = {note.id} className = "card p-3 text-center">
                                                    <h6 className = "m-0">
                                                        {note.note}
                                                    </h6>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                );
                            })
                        );
                    })}
                    </div>
                </div>
            </>
        )
    }
}