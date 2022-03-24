import create from 'zustand'

const useStore = create((set) => ({
    selection: [],
    setSelection: (selection) => set({selection}),
    color: 'green',
    setColor: (color) => set({color}),
}));

export {useStore}