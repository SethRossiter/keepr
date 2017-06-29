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
        <div class="all">
            <div class = "col-xs-4 text-center" v-for="keep in keeps">
                <div class= "panel panel-default">
                    <div class = "panel-body">
                            <button type="button" class="toggle-expand-btn btn bg-yellow btn-sm"><i class="fa fa-expand"></i></button>
                                                
                            <h4>Title: {{keep.title}}</h4>
                            <h5>Keeps: {{keep.keepCount}}</h5><!--badges-->
                            <h5>Shares: {{keep.shareCount}}</h5> 
                            <h5>Views: {{keep.viewCount}}</h5>
                            <h5>Author: {{keep.author}}</h5>
                            <img :src="keep.imgUrl" class="img-circle">
                     </div>                        
                 </div>
             </div>
         </div>
     </div>
 </template>
 
 <script>
 export default {
     name: 'public',
     data() {
         return {
            title: '',
            // description: '',
            // imgUrl: '',
            // articleUrl: '',
            // shareCount: Number,
            // viewCount: Number,
            // keepCount: Number,
            // body: '',
            // tags: '',
            creatorId: this.$store.state.user._id,
            activeVault: this.$store.state.activeVault
         }
     },
      mounted() {
        this.$store.dispatch('getKeepsByVaultId', this.activeVault._id)
    },
    computed: {
        keeps() {
            return this.$store.state.keeps
        },
        vault () {
            return this.$store.state.activeVault
        }
    },
     methods: {
         logout() {
             this.$store.dispatch('logout',this.user)
         },
          removeKeep(keep) {
            this.$store.dispatch('removeKeep', keep)
        },
       
     }
 }
 </script>
 
 <style scoped>

 .navbar {
     position: absolute;
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
    font-size: 20px;
    margin-bottom: 20px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
    width: 50%;
}

.all{
    border-radius: 50px;
    color: black;
    background: ghostwhite;
    margin-top: 250px;
    margin-left: 50px;
    transform: translate(-10%, - 10%);
    width: 30%;
}

.img-circle {
    width: 50px;
    height: 50px;
}
.panel-fullscreen {
display: block;
z-index: 9999;
position: fixed;
width: 100%;
height: 100%;
top: 0;
right: 0;
left: 0;
bottom: 0;
overflow: auto;
}
 </style>
