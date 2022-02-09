<template>
  <div>
    <div class="row">
      <q-input
        outlined
        v-model="userName"
        label="Enter UserName"
        :class="success ? 'success' : 'error'"
      />
      <q-input
        outlined
        v-model="passWord"
        label="Enter PassWord"
        :class="success ? 'success' : 'error'"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="white"
        text-color="black"
        label="Submit"
        v-on:click="checkUserPass"
      />
    </div>
  </div>
</template>
<script>
import {
  isValidUser,
  GetUserEmail,
  GetUserRealName,
} from "../services/Login.js";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
      email: "",
      realName: "",
      success: false,
    };
  },
  methods: {
    checkUserPass() {
      if (isValidUser(this.userName, this.passWord)) {
        this.success = true;
        alert(
          "Welcome" +
            "\n" +
            GetUserRealName(this.userName) +
            "\n" +
            GetUserEmail(this.userName)
        );
      } else {
        this.success = false;
        alert("Wrong Username Or PassWord");
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