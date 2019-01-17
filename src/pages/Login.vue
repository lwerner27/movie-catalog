<template>
    <div class="login-page">
        <div class="container my-container">
            <div class="row">
                <div class="col s12 m6 offset-m3 container-col z-depth-2">
                    <h3>Login</h3>
                    <hr>
                    <div class="row my-row">
                        <div class="input-field col s12">
                            <input v-model.trim="email" id="username" type="text" class="validate">
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div class="row my-row">
                        <div class="input-field col s12">
                            <input v-model.trim="password" id="password" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row my-btn-row">
                        <button @click="login" class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data: function() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( 
                (user) => {
                    alert("Congrats you signed in.")
                    localStorage.setItem("userObject", JSON.stringify(user))
                },
                (err) => {
                    alert("Oops. " + err.message)
                }
            )
        }
    }
}
</script>

<style scoped>
    h3 {
        margin-left: 30px;
    }
    hr {
        margin-left: 30px;
        margin-right: 30px;
    }
    .my-row {
        margin-left: 20px;
        margin-right:20px;
    }
    .my-btn-row {
        margin-left: 30px;
    }
    .my-container {
        padding-top: 50px;
    }
</style>

