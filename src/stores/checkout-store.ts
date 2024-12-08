import { create } from "zustand";

type States = {
    name: string
    address: {
        street: string
        number: string
        complemente?: string | undefined
        district: string
        city: string
        state: string
    }
}

type Actions = {
    setName: (name: States["name"]) => void
    setAddress: (address: States["address"]) => void
}

const initialStates: States = {
    name: '',
    address: {
        street: '',
        number: '',
        complemente: '',
        district: '',
        city: '',
        state: ''
    }
}

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialStates,
    setName: (name) => set(state => ({...state, name})),
    setAddress: (address) => set(state => ({...state, address}))
}))