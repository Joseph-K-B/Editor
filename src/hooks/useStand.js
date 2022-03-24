import create from 'zustand'

const useStore = create((set) => ({
    selection: 'placeholder',
    setSelection: (selection) => set({selection}),
}));

export {useStore}