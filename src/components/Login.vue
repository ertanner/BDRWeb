<template>
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <h2>Log in to your account.</h2>

      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your username"
          v-model="credentials.username"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
      </div>
      <div>
        <br>
        <button class="btn btn-primary" @click="submit()">Login</button>
        <br>
        <br>
        <router-link to="/Signup">New Account</router-link>
        <br>
        <router-link to="/GetPwd">Forgot Password</router-link>
        <br>
        <router-link to="/GetAcct">Forgot Account Name</router-link>
        <br>
        <router-link to="/ChgPwd">Change Password</router-link>
      </div>
    </div>
    <div class="col-sm-4"></div>
  </div>
</template>

<script>
  import NavBar from '@/NavBar'
  import axios from 'axios'
  export default {
    components: {
      NavBar
    },
    data () {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        console.log(credentials)
        this.fetchData()
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        // auth.login(this, credentials, 'secretquote')
      },
      fetchData () {
        var str = ''
        console.log('late')
        str = 'http://localhost:9080/getUser/'

        console.log('URL: ' + str)

        axios.post(str,
          this.credentials,
          { headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
          }).then(response => {
            this.trips = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }

  }
</script>
