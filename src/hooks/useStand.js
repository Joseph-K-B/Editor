import create from 'zustand'

const useStore = create((set) => ({
    selection: [],
    setSelection: (selection) => set({selection}),
    color: {
      headColor:  'purple',
      shoulderLColor: 'purple',
      shoulderRColor: 'purple',
    },
    setColor: (color) => set({color}),
    centerLight: true,
    setCenterLight: (centerLight) => set({centerLight}),
}));

export {useStore}