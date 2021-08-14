<template>
  <div class="container">
    <p>  {{forms}} </p>
    <br>
    <br>
    <div
      v-for="(form, index) in forms"
      :key="index"
      flat
      outlined
      rounded="lg"
    >
      <span>{{index+1}}. firstName</span>
      <v-text-field
        v-model="form.firstName"
        solo
      />
    </div>
    <v-btn
      elevation="2"
      class="ma-2"
      @click="setStateArray"
    >SET STATE ARRAY</v-btn>
    <br>
     <span>firstName</span>
      <v-text-field
        v-model="formsObject.firstName"
        solo
      />
     <span>lastName</span>
      <v-text-field
        v-model="formsObject.lastName"
        solo
      />


    <v-btn
      elevation="2"
        class="ma-2"
      @click="setStateObject"
    >SET STATE OBJECT</v-btn>
    <br>
    <br>
      <p>State Array:  {{formsArray}} </p>
    <br>
    <br>
      <p> State Object:  {{formObject}} </p>
  </div>

</template>

<script>
import { mapMutations,mapState } from 'vuex'

export default {
    data() {
    return {
      forms: [],
      formsObject: {
        firstName: 'sad',
        lastName: 'sd'
      }
    }
  },
  created() {
    for (let i = 0; i < 2; i++) {
      const formData = {
        firstName: '',
      }
      this.forms.push(formData)
    }
  },
    computed: {
    ...mapState('form', ['formsArray','formObject']),
  },
  methods:{
    ...mapMutations('form',['SET_FORMSARRAY','SET_FORMSOBJECT']),
    setStateArray(){
       this.SET_FORMSARRAY(this.forms)
    },
    setStateObject(){
       this.SET_FORMSOBJECT(this.formsObject)
    }
  }
}
</script>