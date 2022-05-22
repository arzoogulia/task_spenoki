<template>
    <div>
        <b-button v-b-modal.modal-1>Add Post</b-button>
  
        <b-modal :hide-footer="true" id="modal-1" title="Add Post">
            <b-form @submit.prevent>

                <b-row>
                    <b-col sm="3" class="rowStyle">
                        <label>Title:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.title" type="text" placeholder="Enter title"></b-form-input>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="3" class="rowStyle">
                        <label>Body:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.body" type="text" placeholder="Enter body"></b-form-input>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="3" class="rowStyle">
                        <label>UserId:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.userId" type="number" placeholder="Enter UserId"></b-form-input>
                    </b-col>
                </b-row>

                <b-button @click="onSubmit" class="submitBtn" type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-modal>
    </div>  
</template>

<script>
import axios from 'axios';
export default {
  name: 'CreatePost',
  data() {
      return {
        form: {
          title: '',
          body: '',
          userId: ''
        }
      }
    }, 
  methods: {
      onSubmit(event) {
        return this.$store.dispatch('posts/CREATE_NEW_POST', this.form)
      }
    }
}
</script>

<style>

.rowStyle {
    margin-bottom: 20px;
}

.submitBtn {
    float: right;
}

</style>
