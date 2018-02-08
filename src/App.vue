<template>
  <div id="page">
    <div id="nav">
      <b-navbar toggleable="md" type="light" variant="primary" full>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/home">NavbarBrand</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

            <b-nav type="is-nav-bar">
              <b-nav-item to="/home" active>Home <span class="sr-only">(current)</span></b-nav-item>

              <b-nav-item to="/login">Login</b-nav-item>
              <b-nav-item to="/logout">Logout</b-nav-item>
              <b-nav-item to="/signup">Signup</b-nav-item>
              <b-nav-item class="navbar-nav ml-auto" to="/about">About</b-nav-item>
            </b-nav>
          </b-collapse>
      </b-navbar>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'app'
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/
ul {
  position: fixed;
  top: 0;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #333;
}
li {
  float: left;
  /*border-right: 1px solid #bbb;*/
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover:not(.active){
  background-color: #111;
}
.active{
  background-color: #4CAF50;
}
/*li:last-child {*/
  /*border-right: none;*/
/*}*/
/*a {*/
  /*display: block;*/
  /*padding: 8px;*/
  /*background-color: #dddddd;*/
  /*color: #42b983;*/
/*}*/
/*body {font-family: "Lato", sans-serif;}*/
/*ul.tab {*/
  /*list-style-type: none;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*overflow: hidden;*/
  /*border: 1px solid #ccc;*/
  /*background-color: #c4b8f1;*/
/*}*/
/*!* Float the list items side by side *!*/
/*ul.tab li {float: left;}*/
/*!* Style the links inside the list items *!*/
/*ul.tab li a {*/
  /*display: inline-block;*/
  /*color: black;*/
  /*text-align: center;*/
  /*padding: 14px 16px;*/
  /*text-decoration: none;*/
  /*transition: 0.3s;*/
  /*font-size: 17px;*/
/*}*/
/*!* Change background color of links on hover *!*/
/*ul.tab li a:hover {*/
  /*background-color: #ddd;*/
/*}*/
/*!* Create an active/current tablink class *!*/
/*ul.tab li a:focus, .active {*/
  /*background-color: #ccc;*/
/*}*/
/*!* Style the tab content *!*/
/*.tabcontent {*/
  /*display: none;*/
  /*padding: 6px 12px;*/
  /*border: 1px solid #ccc;*/
  /*border-top: none;*/
/*}*/
/*.active {*/
  /*background-color: #4CAF50;*/
/*}*/
</style>
