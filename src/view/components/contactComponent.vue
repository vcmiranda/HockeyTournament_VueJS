<template>
  <div class="contact" id="contact">
    <h4>Contact</h4>
    <div class="form">
      <label for="fname">First Name</label>
      <input type="text" id="fname" v-model="form.firstname" placeholder="First name" class="input">
      <label for="lname">Last Name</label>
      <input type="text" id="lname" v-model="form.lastname" placeholder="Last name" class="input">
      <label for="topic">Topic</label>
      <input type="text" id="topic" v-model="form.topic" placeholder="Topic" class="input">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" placeholder="Leave yor message" style="height:200px" class="input"></textarea>
      <input type="submit" @click="submit" value="Submit" class="submit-btn">
      <input type="submit" @click="clear" value="Clear" class="submit-btn">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        topic: '',
        message: '',
      }
    }
  },
  methods: {
    submit() {},
    clear () {
      this.form = {};
    },
  }
}
</script>

<style scoped>
.contact {
  padding: 50px 0;
  width: 80%;
  margin: 0 auto;
}

.contact h4 {
  font-size: 1.5em;
  color: orange;
  text-transform: uppercase;
}

.form {
  width: 50%;
  margin: 50px auto;
  border-radius: 5px;
  background-color: #ddd;
  padding: 20px 20px;
}

.input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.submit-btn {
  background-color: #111;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #666;
}

/************** medium screen media query 1024px***************/
@media screen and (max-width: 1024px) {
  .form {
    width: 70%;
    margin: 20px auto;
  }
}

/************** medium screen media query 768px***************/
@media screen and (max-width: 768px) {
  .contact {
    padding: 20px 0;
    width: 90%;
  }

  .form {
    width: 80%;
    margin: 20px auto;
  }
}

/************** medium screen media query 400px***************/
@media screen and (max-width: 400px) {
  .contact {
    padding: 0 0 20px 0;
  }

  .form {
    width: 90%;
    margin: 0px auto;
  }
}
</style>
