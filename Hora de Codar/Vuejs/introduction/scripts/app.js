const myNameApp = {
    data() {
        return {
            name: "",
            age: 19,
            input_name: ""
        }
    },
    methods: {
        submitForm() {
            this.name = this.input_name
        }
    }
}

Vue.createApp(myNameApp).mount("#app")