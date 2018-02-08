<template>
  <div>
    <h1>{{name}}</h1>
    {{msg}} page
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Home page',
        name: 'Home'
        // user: auth.user
      }
    },
    methods: {
      logout () {
        // auth.logout()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


body {font-family: "Lato", sans-serif;}


ul.tab {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #c4b8f1;
}



/* Float the list items side by side */
ul.tab li {float: left;}

/* Style the links inside the list items */
ul.tab li a {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of links on hover */
ul.tab li a:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
ul.tab li a:focus, .active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}



</style>
