import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote:(state)=>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action)=>{
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action)=>{
            state.active = action.payload;
        }, 
        setNotes: (state, action)=>{

        },
        setSaving: (state)=>{

        },
        updateNote: (state, action)=>{

        },
        deleteNote: (state, action)=>{

        }
    }
});
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNote,
    savingNewNote
 } = journalSlice.actions;