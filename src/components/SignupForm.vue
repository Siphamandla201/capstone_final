<template>
  <div class="Sign-up">
    <p>Sign up</p>
    <form class="form" @submit.prevent="register">
      <div class="form-information">
        <input type="text" v-model="payload.name" required />
        <label>Name</label>
      </div>
      <div class="form-information">
        <input
          type="text"
          v-model="payload.surname"
          required
        />
        <label>Surname</label>
      </div>
      <div class="form-information">
        <input type="text" v-model="payload.email" required />
        <label>Email Address</label>
      </div>
      <div class="form-information">
        <input type="text" v-model="payload.cellphone" required />
        <label>Cellphone number</label>
      </div>
      <div class="form-information">
        <input type="text" v-model="payload.password" required />
        <label>Password</label>
      </div>
      <div class="form-information">
        <input type="text" v-model="payload.address" />
        <label>Address</label>
      </div>
      <div class="form-information">
        <input type="text" v-model="payload.gender" />
        <label>Gender</label>
      </div>
      <input
        class="submit"
        type="submit"
        value="Sign Up"
        @submit.prevent="register"
      />
      <div style="display: flex; justify-content: center;text-align: justify;">
        <p style="font-size: 17px; font-weight: normal;">Already have an account.</p>
        <router-link to="/SignIn" style="color: antiquewhite"
          >Sign in!</router-link
        >
      </div>
    </form>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "SignupForm",
  setup() {
    const payload = {
      name: "",
      surname: "",
      cellphone: "",
      email: "",
      password: "",
      address: "",
      gender: "",
    } 
  // computed: {
  //   message (){ 
  //     return this.store.state.msg
  //   }
  // },
  // methods : {
  //   newUser () {
  //     this.$store.dispatch('register',this.payload)
  //   }
  // }
    const store = useStore();
    const register = () => {
      store.dispatch("register", payload);
    };
    const msg = computed(() => store.state.msg);
    return {
      payload,
      register,
      msg,
    };
  },
};
</script>
<style scoped>
.Sign-up {
  margin: 50px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  text-align: justify;
  width: 70%;
  padding: 40px;
  margin: 20px auto;
  background: rgba(0, 0, 0, 0.9);
}

p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.form-information {
  position: relative;
}

input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

input:focus ~ label,
input:valid ~ label {
  top: -20px;
  left: 0;
  color: #fff;
  font-size: 12px;
}

.submit {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 3px;
  width: 50%;
  left: 25%;
}

.submit:hover {
  background: #fff;
  color: #272727;
  border-radius: 5px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  background: transparent;
  color: #aaa;
  border-radius: 5px;
}
</style>
