<template>
  <div>
    <div class="col">
      <q-input
        :class="success ? 'success' : 'error'"
        outlined
        v-model="userName"
        label="Enter UserName"
      />
      <q-input
        :class="success ? 'success' : 'error'"
        outlined
        v-model="passWord"
        label="Enter PassWord"
      />
      <q-input
        :class="success ? 'success' : 'error'"
        outlined
        v-model="ConfirmPassWord"
        label="Confirm PassWord"
      />
      <q-input
        :class="success ? 'success' : 'error'"
        outlined
        v-model="Email"
        label="Enter Gmail"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="white"
        text-color="black"
        label="Submit"
        v-on:click="CreateAcc"
      />
    </div>
  </div>
</template>
<script >
export default {
  name: "CreateAcc",
  data() {
    return {
      userName: "",
      passWord: "",
      success: false,
      ConfirmPassWord: "",
      Email: "",
    };
  },
  methods: {
    CreateAcc() {
      if (this.userName === "" && this.passWord === "") {
        this.success = false;
        } else if (this.Email === "") {
          this.success = false;
      } else if (this.ConfirmPassWord === this.passWord) {
        this.success = true;
      } else {
        this.success = true
      }
    },
  },
};
</script>
<style scoped>
.error {
  border-radius: 5px;
  border: 2px solid red;
  background-color: pink;
}
.success {
  border-radius: 5px;
  border: 2px solid green;
  background-color: lightgreen;
}
.inpt {
  border: 3px solid black;
  border-radius: 3px;
  background-color: blanchedalmond;
}
</style>

