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
            state.notes = action.payload;
            state.messageSaved = '';
        },
        setSaving: (state)=>{
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action)=>{
            state.isSaving = false;
            state.notes = state.notes.map(note=>{
                if(note.id === action.payload.id){
                    return action.payload
                }
                return note
            });
            state.messageSaved = 'Nota actualizada correctamente';
        },
        setPhotosToActiveNote:(state, action)=>{
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving= false;
            //state.messageSaved = 'Imágenes subidas correctamente';
        },
        clearNotesLogOut:(state)=>{
            state.notes = [];
            state.active = null;
            state.messageSaved = '';
            state.isSaving = false;
        },

        deleteNote: (state, action)=>{
            state.notes = state.notes.filter(note => note.id!== action.payload);
            state.active = null;
            state.isSaving = false;
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
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogOut,
 } = journalSlice.actions;