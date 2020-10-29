<template>
    <div>
        <b-container fluid="sm" class="mt-5">
            <b-row>
                <div class="mt-5 mx-auto">
                    <h1 class="mywork">My Recent Work</h1>
                    <h1 class="intro-mywork"> Here are a few design projects I've worked on recently. Want to see more? Email me. </h1>
                </div>
            </b-row>
        </b-container>
        <b-container fluid="sm" class="mt-5">
            <b-row>
                <b-col v-b-hover="portfolioShowcase">
                    <b-card
                    bg-variant="primary"
                    text-variant="white"
                    v-if="isHovered"
                    >
                    </b-card>
                    <b-card class="shadow pointer" v-else
                        overlay
                        img-src="https://mattfarley.ca/img/projects/awg2020.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col>
                    <b-card class="shadow pointer"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isHovered: false
            }
        },
        methods: {
            portfolioShowcase(hovered) {
                this.isHovered = hovered
            }
        }
    }
</script>