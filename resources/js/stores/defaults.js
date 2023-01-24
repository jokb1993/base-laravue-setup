import { defineStore } from 'pinia';

export const DefaultStore = defineStore({
    id: 'default',
    state: () => ({
        loading: false,
        demo: {
            id: 1,
            customer: {
                id: 1,
                name: 'John Doe'
            },
        },
        single: { //this holds the default state of the module
            id: null,
            customer: null,
        },
        many: [] //this
    }),
    getters: {
    },
    actions: {
        get(id = null) {
            return actions.get(this, id)
        },
        fetch(postData = null) {
            return actions.fetch(this, postData)
        },
        put() {
            return actions.put(this)
        },
    }
})