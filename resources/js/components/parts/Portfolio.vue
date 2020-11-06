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
                <b-col>
                    <b-card class="shadow pointer fall-item hover-blur fall-effect"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                        <div class="mask">
                            <p> {{ sample }} </p>
                        </div>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer project-item"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer project-item"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col>
                    <b-card class="shadow pointer project-item"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer project-item"
                        overlay
                        img-src="https://mattfarley.ca/img/projects/wfdesignbuild.png">
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="shadow pointer project-item"
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
                isHovered: false,
                sample: 'High-end, custom residential renovaters serving Fraser Valley homeowners.'
            }
        }
    }
</script>