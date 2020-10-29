<template>
    <div>
        <full-page :options="options">
            <!-- <div class="section">
                <navbar></navbar>
                <front></front>
            </div>
            <div class="section">
                <portfolio></portfolio>
            </div>
            <div class="section">
                <about></about>
            </div> -->
            <div class="section">
                <contact></contact>
            </div>
        </full-page>
    </div>
</template>
<script>
   import navbar from '../components/parts/Navbar.vue'
   import front from '../components/parts/Front.vue'
   import portfolio from '../components/parts/Portfolio.vue'
   import about from '../components/parts/About.vue'
   import contact from '../components/parts/Contact.vue'

   export default {
       components: {
           'navbar' : navbar,
           'front' : front,
           'portfolio' : portfolio,
           'about' : about,
           'contact' : contact,
       }
   }
</script>