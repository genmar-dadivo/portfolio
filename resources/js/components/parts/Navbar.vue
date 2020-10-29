<template>
   <div>
      <b-navbar class="bg-custom-one mt-2" toggleable="sm" type="light" fixed="top" style="position: sticky">
         <b-navbar-brand href="#">
            <b-img-lazy class="logo hidden" fluid src="./img/MercenariesIcon.png" alt="logo"></b-img-lazy>
            <b-navbar-brand class="ml-5">Gen</b-navbar-brand>
         </b-navbar-brand>
         <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
               <b-icon v-if="expanded" icon="arrow-up"></b-icon>
               <b-icon v-else icon="arrow-down"></b-icon>
            </template>
         </b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
               <b-navbar-nav class="ml-auto">
                  <b-nav-item class="mx-2" v-scroll-to="'#home'" left>Home</b-nav-item>
                  <b-nav-item class="mx-2" v-scroll-to="'#portfolio'" left>Portfolio</b-nav-item>
                  <b-nav-item class="mx-2" v-scroll-to="'#about'" left>About</b-nav-item>
                  <b-nav-item class="mr-5" v-scroll-to="'#contact'" left>Contact</b-nav-item>
               </b-navbar-nav>
            </b-navbar-nav>
         </b-collapse>
      </b-navbar>
   </div>
</template>