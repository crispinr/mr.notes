import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "../../firebase";

import Notes from "./Notes";
import NotesLoader from "./NotesLoader";

export default function GetNotes() {
    const Loader = NotesLoader(Notes);

    const [state, setState] = useState({
        isLoaded: false,
        notes: null,
        title: null,
    })
    const notes = []
    const title = []
    
    useEffect(() => {
        var db = firebase.firestore();
        db.collection("notes", "title")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const docData = {
                        id: doc.id,
                        created: doc.data().created,
                        note: doc.data().note,
                        title: doc.data().title,
                    };
                    notes.push(docData);
                    title.push(docData);
                });
                setState({ isLoaded: true, notes: notes, title: title });
            });
    }, [setState]);

    return (
        <div className = "container mt-5">
            <Loader isLoaded = {state.isLoaded} notes = {state.notes} title = {state.title} />
        </div>
    );
}