import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () =>{
    return async(dispatch, getState)=>{
        dispatch(savingNewNote());
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            content: '',
            date: new Date().getTime(),
        }
        const newDoc = doc(collection(FirebaseDB, `${ uid }/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}
export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if(!uid) throw new Error('uid invalido');
        const notes =await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}
export const startSaveNote = () =>{
    return async(dispatch, getState)=>{
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        const noteUpdate = {...note}
        delete noteUpdate.id;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteUpdate, {merge: true});

        dispatch(updateNote(note))
    }
}
//vamos a subir a cloudinary 
export const startUploadFiles = (files=[])=>{
    return async(dispatch)=>{
        dispatch(setSaving());
        const fileUploadsPromises = [];
        for( const file of files ){
            fileUploadsPromises.push(fileUpload(file));
        }
        const photoUrls = await Promise.all(fileUploadsPromises);
        dispatch(setPhotosToActiveNote(photoUrls));
    }
}