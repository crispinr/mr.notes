import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Layout(props) {
    const useStyles = makeStyles({
        rightToolbar: {
          marginLeft: "auto",
          marginRight: -12
        },
        centerToolbar: {
            marginRight: -12,
            marginLeft: 550
          },
      })
    const classes = useStyles();
    const history = useHistory();
    function logout() {
        firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
    }

    return(
        <>
            <AppBar position = "static">
                <Toolbar className = "d-flex">
                  <Avatar src = "./imgs/" />
                    <section className = { classes.centerToolbar }>
                        <Typography variant = "h6">
                            Mr. Notes
                        </Typography>
                    </section>
                    <section className={classes.rightToolbar}>
                        <Button
                            variant = "contained"
                            className = "text-capitalize"
                            onClick = {logout}
                        >
                            Logout
                        </Button>
                    </section>
                </Toolbar>
            </AppBar>
            {props.children}
        </>
    );
}