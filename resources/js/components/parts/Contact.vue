<template>
    <div>
        <b-container>
            <b-row>
                <div class="mx-auto">
                    <h1 class="intro-contact">Have some questions?</h1>
                </div>
            </b-row>
        </b-container>
        <b-container class="mt-5">
            <b-row class="justify-content-md-center">
                <b-col col lg="8">
                    <contactform></contactform>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
   import contactform from '../parts/ContactForm.vue'
   export default {
       components: {
           'contactform' : contactform
       }
   }
</script>