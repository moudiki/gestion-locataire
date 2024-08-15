<template>
    <nav class="uk-navbar-container   " id="nav" >
      <div class=" ">
          <div uk-navbar  class="flex bg-blue-500 px-3 md:px-10 lg:px-16 xl:px-20 " >
            <div>
                
            </div>
              <div class="uk-navbar-left cursor-pointer">
                  <NuxtLink to="/" class="hover:no-underline " > 
                      <a href="" class="text-white" >LOGO</a>
                  </NuxtLink>
                
  
              </div>
              <div class="uk-navbar-right lg:hidden  ">
                  
                  <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
                  <div  class="uk-dropbar uk-dropbar-top bg-blue-500 " id="drop"
                  uk-drop="stretch: true; animation: reveal-top; animate-out: true; duration: 700">
                      <ul class=" uk-navbar-dropdown-nav text-xl  " uk-nav>
                         <li v-for="link in Links" :key="link.name">
                           <NuxtLink class="text-white" :to="link.path"   > {{link.name}} </NuxtLink>
                         </li>
                         
                      </ul>
                  </div>
              </div>
              <!-- desktop nav -->
              <div class="uk-navbar-right hidden lg:block  ">
                  <ul class="uk-navbar-nav flex gap-16 ">
                      <li class="[&>a.router-link-active]:" v-for="link in Links" :key="link.name">
                          <NuxtLink :to="link.path" class=" text-white font-bold  relative group cursor-pointer "
                          >   
                              {{link.name}}
                              <div
                                      class="absolute   w-full h-0.5 top-14 scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                              </div>
                              <!-- <div
                                  v-show= "isActive(link.path)"    class="absolute w-full h-0.5 bg-gold top-14 scale-x-100 transition-transform duration-500">
                              </div> -->
                          </NuxtLink>
                         
                      </li>
                      
  
                  </ul>
  
              </div>
  
          </div>
      </div>
    </nav>
  
  </template>
  
  <script setup >
     
      const Links = [
                  
                  {name : "Accueil" , path: "/"},
                  {name : "Appartements" , path: "/appartements"},
                  {name : "Locataires" , path: "/locataires"},
                  {name : "Suivi Financier" , path: "/finances"},
              ];
      
    
  
  
  </script>