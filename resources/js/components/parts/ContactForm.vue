<template>
  <div class="mt-1">
    <b-form>
        <b-form-group>
            <b-form-input
            class="text-capitalize"
            id="name"
            required
            placeholder="Enter Name"
            autocomplete="off"
            @keyup="name($event); capitalize($event)"
            @keydown.space="preventLeadingSpace"
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
  methods: {
    name: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        return true;
      }
      else { evt.preventDefault(); }
    },
    preventLeadingSpace(e) {
      if (!e.target.value || e.target.value.indexOf(' ') >= 0) { e.preventDefault(); }
    },
    disablespace(e) { e.preventDefault(); }
  }
}
</script>
