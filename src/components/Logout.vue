<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log Out</h2>
    <p>Log out of your account.</p>
    <router-link to="/Home">Home</router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
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
