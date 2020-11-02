<template>
    <div>
        <full-page :options="options">
            <!-- <div class="section">
                <navbar></navbar>
                <front></front>
            </div> -->
            <div class="section">
                <portfolio></portfolio>
            </div>
            <div class="section">
                <about></about>
            </div>
            <div class="section">
                <contact></contact>
            </div>
            <!-- <fab></fab> -->
            <!-- <div class="section">
                <test></test>
            </div> -->
        </full-page>
    </div>
</template>
<script>
    import navbar from '../components/parts/Navbar.vue'
    import front from '../components/parts/Front.vue'
    import portfolio from '../components/parts/Portfolio.vue'
    import about from '../components/parts/About.vue'
    import contact from '../components/parts/Contact.vue'
    import test from '../components/parts/Test.vue'
    //import fab from '../components/parts/ScrolltoTop.vue'

    export default {
        data() {
            return {
                options: {
                    licenseKey: 'YOUR_KEY_HERE',
                    controlArrows: true,
                    scrollBar: true,
                    lockAnchors: true,
                    anchors: ['home', 'portfolio', 'about', 'contact'],

                    keyboardScrolling: true,
                    animateAnchor: true,
                    recordHistory: true,
                    lazyLoading: true,
                }
            }
        },
        components: {
           'navbar' : navbar,
           'front' : front,
           'portfolio' : portfolio,
           'about' : about,
           'contact' : contact,
           'test' : test,
        }
    }
</script>