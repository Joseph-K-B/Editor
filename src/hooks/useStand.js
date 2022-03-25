import create from 'zustand'

const useStore = create((set) => ({
    selection: [],
    setSelection: (selection) => set({selection}),
    color: {
      headColor: 'green',
      shoulderLColor: 'purple',
      shoulderRColor: 'red'
    },
    setColor: (color) => set({color})
}));

export {useStore}