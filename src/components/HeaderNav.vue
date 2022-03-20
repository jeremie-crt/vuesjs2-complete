<template>
    <div class="container mb-4">
        <nav class="nav justify-content-between" id="header-nav">
            <ul class="list-group list-group-horizontal">
                <li class="list-group-item">
                  <router-link :to="{ name: 'home' }">HOME</router-link>
                </li>
                <li class="list-group-item">
                  <router-link :to="{ name: 'articles' }">ARTICLES</router-link>
                </li>
                <li class="list-group-item">
                  <router-link :to="{ name: 'profile' }">PROFIL</router-link>
                </li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'about' }">ABOUT</router-link>
                </li>
            </ul>
            <ul class="list-group list-group-horizontal">
                <li class="list-group-item">
                  <router-link :to="{ name: 'register' }">SIGN UP</router-link>
                </li>
                <li class="list-group-item">
                  <router-link :to="{ name: 'login' }">SIGN IN</router-link>
                </li>
                <li class="list-group-item">
                  <router-link :to="{ name: 'logout' }">LOGOUT</router-link>
                </li>
            </ul>
        </nav>
      <img alt="Vue logo" class="logo-nav" src="../assets/wall-horz1.jpg">
    </div>
</template>

<script>
export default {
    name: 'HeaderNav',
}
</script>

<style>
.logo-nav {
  max-height: 85px;
  width: 100%;
  border-bottom: 1px lightgrey solid;
}
#header-nav {
    margin-top: 4px;
}

#header-nav a {
    font-weight: bold;
    color: #2c3e50;
}

#header-nav a.router-link-exact-active {
    color: #42b983;
}

</style>