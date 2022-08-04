<template>
  <div class="container mt-3">
    
    <Form @submit="form.onSubmit" ref="form1">
      <b-row>
        <b-col  lg="6" sm="12">
          <b-form-group 
            id="input-group-1"
            label="Email address:"
            label-for="input-1">

          <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col  lg="6" sm="12">
           <b-form-group 
            id="input-group-1"
            label="Email address:"
            label-for="input-1">

          <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>  
    
       
    </Form>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup(){
    const form = reactive({
      mail:"",

      onSubmit:()=>{

      }
    })

    return{
      form
    }
  }
}
</script>

<style>

</style>