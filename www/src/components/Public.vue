<template>
     <div class = "public">
         <nav class = "navbar navbar-inverse navbar-fixed-top">
             <div class = "container">
                 <ul class = "nav navbar-nav navbar-left">
                     <h1>K</h1>
                 </ul>
                 <ul class = "nav navbar-nav navbar-right">
                     <li><button class="btn-lg active"><router-link :to="'/dashboard/'">Dashboard</router-link></button></li>
                     <button class="btn-lg active" @click="logout(this.user)">Logout</button>
                 </ul>
             </div>
                <div class= "search">
                    <input type="text" name="search" placeholder="Search..">
                </div>
         </nav>
     </div>
 </template>
 
 <script>
 export default {
     name: 'public',
     data() {
         return {
             keeps: []
         }
     },
     methods: {
         logout() {
             this.$store.dispatch('logout',this.user)
         }
     }
 }
 </script>
 
 <style scoped>
 .nav {
     font-size: 65px;
     padding: 10px;
     margin-right: -100px;
 }

 h1 {
     font-size: 75px;
     
 }
 .btn-lg {
     margin-right: 20px;
 }
input[type=text] {
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
    width: 50%;
}
 </style>
