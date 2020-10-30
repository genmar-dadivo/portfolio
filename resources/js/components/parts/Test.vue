<template>
  <div>
    <b-form-group
      class="mb-0"
      label="Text input with formatter (on input)"
      label-for="input-formatter"
      description="We will convert your name to lowercase instantly"
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
        @keypress="nameRes"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      class="mb-0"
      label="Text input with lazy formatter (on blur)"
      label-for="input-lazy"
      description="This one is a little lazy!"
    >
      <b-form-input
        id="input-lazy"
        v-model="text2"
        placeholder="Enter your name"
        lazy-formatter
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
    <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text1: '',
        text2: ''
      }
    },
    methods: {
        formatter(value) {
            return value.toLowerCase()
        },
        nameRes: function(evt) {
            console.log(this.text1)
        },
    }
  }
</script>