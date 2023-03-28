<template>
  <div class="Navbar">
    <NavbarComp />
  </div>
  <div v-if="!user" class="login-box">
    <p>Login</p>
    <form @submit.prevent="login">
      <div class="user-box">
        <input
          required="true"
          name="email"
          v-model="payload.email"
          type="text"
        />
        <label>Email</label>
      </div>
      <div class="user-box">
        <input
          required="true"
          name="password"
          v-model="payload.password"
          type="password"
        />
        <label>Password</label>
      </div>
      <a href="#">
        <input class="submit" type="submit" value="login" @submit.prevent="login"/>
      </a>
    </form>
    <p>Don't have an account? <router-link to="/Login" class="a2">Sign up!</router-link></p>
  </div>
  <div v-else>
    <h3>{{ user.name }}</h3>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import router from "@/router"; 

export default {
  components: {
    NavbarComp,
  },
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    message() {
      return this.$store.state.msg;
    },
    user () {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.$router.push('/Products'))
      console.log(this.payload);
    },
  },
  name: "SignIn",
};
</script>
<style scoped>
.Navbar {
  height: 400px;
  background-image: url("https://i.postimg.cc/9fm23zR3/hi.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.login-box {
  width: 70%;
  height: 30%;
  padding: 40px;
  margin: 20px auto;
  background: rgba(0, 0, 0, 0.9);
}

.login-box p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
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

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #fff;
  font-size: 12px;
}

.login-box form .submit {
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
  margin: 40px;
  letter-spacing: 3px;
  width: 50%;
  background-color: #181818;
  border: none;
  border-bottom: 1.5px solid whitesmoke;
}

.login-box .submit:hover {
  background: #fff;
  color: #272727;
  border-radius: 5px;
}

.login-box p:last-child {
  color: #aaa;
  font-size: 14px;
}

.login-box a.a2 {
  color: #fff;
  text-decoration: none;
}

.login-box a.a2:hover {
  background: transparent;
  color: #aaa;
  border-radius: 5px;
}
</style>
