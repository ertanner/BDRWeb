<template>
  <div class="signup">
    <h2>Sign up for new account</h2>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <h2>Create an account.</h2>

        <div class="alert alert-danger" v-if="error">
          <p>{{ error }}</p>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your account name"
            v-model="credentials.accountname"
          >
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
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      msg: '',
      // We need to initialize the component with any
      // properties that will be used in it
      credentials: {
        accountname: '',
        username: '',
        password: ''
      },
      error: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
