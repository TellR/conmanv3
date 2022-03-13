<template>
   <div id="wrapper" class="animate">
       <nav class="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">KU Admin</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav animate side-nav">
              <li class="nav-item">
                <router-link active-class="active" to="/" exact><a class="nav-link" href="./dash" title="Dashboard"><i class="fas fa-cube"></i> Dashboard <i class="fas fa-cube shortmenu animate"></i></a></router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/contacts"><a class="nav-link" href="./contacts" title="Contact"><i class="fas fa-tablet-alt"></i>Contact<i class="fas fa-tablet-alt shortmenu animate"></i></a></router-link>
              </li>
    
            </ul>
            <ul class="navbar-nav ml-md-auto d-md-flex">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-user"></i> Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-key"></i> Logout</a>
              </li>
            </ul>
          </div>
        </nav>
   </div>
</template>