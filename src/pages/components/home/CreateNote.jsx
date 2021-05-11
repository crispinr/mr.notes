import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SnackBar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import firebase from "firebase/app";
import "../../firebase";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
  })

export default function CreateNote() {

    function Alert(props) {
        return (
            <MuiAlert
            elevation = {6}
            variant = "filled"
            {...props}
            />
        );
    }

    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = useState({
        note: "",
        title: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log(state.note);
        const note = state.note;
        console.log(state.title);
        const title = state.title;
        var db = firebase.firestore();
        if (state.note !== "") {
            db.collection("notes")
                .add({
                note: note,
                title: title,
                created: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setOpen(true);
                setState((prevState) => ({
                    ...prevState,
                    note: "",
                    title: "",
                }));
            })
            .catch((error) => {
            console.error("Error adding document: ", error);
            });
        }
    }

    return(
        <>
            <div className = "container col-md-8 col-xl-6 mt-4">
                <form action = "#">
                <TextField
                    id = "title"
                    label = "Add a title..."
                    variant = "outlined"
                    rows = {4}
                    className={classes.field}
                    fullWidth
                    singleline
                    onChange = {handleChange}
                    value = {state.title}
                />
                <TextField
                        id = "note"
                        label = "Create a new note..."
                        variant = "filled"
                        rows = {4}
                        className = "shadow-sm"
                        fullWidth
                        multiline
                        onChange = {handleChange}
                        value = {state.note}
                        />
                        <Button
                            variant = "contained"
                            color = "primary"
                            className = "d-flex ml-auto mt-3 text-capitalize font-weight-bold"
                            onClick = {handleSubmitClick}
                        >
                            Create
                        </Button>
                </form>
            </div>
            <SnackBar open = {open} autoHideDuration = {6000} onClose = {handleClose}>
                <Alert onClose = {handleClose} severity = "success">
                    Note created sucessfully!
                </Alert>
            </SnackBar>
        </>
    );
}