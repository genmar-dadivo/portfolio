<template>
  <div class="mt-1">
    <b-form>
        <b-form-group>
            <b-form-input
            class="text-capitalize"
            required
            placeholder="Enter Name"
            autocomplete="off"
            v-model="form.name"
            v-on:blur="noDoublespace(event);"
            v-on:keypress="nameRes(event);"
            :formatter="formatter"
            ></b-form-input>
        </b-form-group>

        <b-form-group>
            <b-form-input
            id="email"
            type="email"
            required
            placeholder="Enter Email"
            autocomplete="off"
            @keydown.space="disablespace"
            ></b-form-input>
        </b-form-group>
        
        <b-form-group>
            <b-form-textarea class="contact-message"
            id="message"
            placeholder="Message"
            rows="8"
            no-resize
            @keydown.space="disablespace(e)"
            ></b-form-textarea>
        </b-form-group>
        <b-button class="shadow pb-2"
        block
        variant="secondary"
        pill
        size="lg"
        >Submit</b-button>
    </b-form>

  </div>
</template>
<script>
export default {
  data() {
      return {
        form: {
          name
        }
      }
    },
  methods: {
    noDoublespace: function(evt) {
      evt = (evt) ? evt : window.event;
      var nameRaw = this.form.name;
      this.form.name = nameRaw.replace(/\s+/g, ' ');
    },
    nameRes: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) { return true; }
      else { evt.preventDefault(); }
    },
    disablespace(e) { e.preventDefault(); }
  }
}
</script>
