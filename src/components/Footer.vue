<template>
  <section class="footer">
      <div class="footer-links">
        <div>
          <div class="text">
            <p>Routes</p>
          </div>
          <div class="list">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/Products">Products</router-link></li>
              <li><router-link to="/About">About</router-link></li>
              <li><router-link to="/Admin">Admin</router-link></li>
           </ul>
          </div>
        </div>
  
        <div>
          <div class="text">
            <p>Policies</p>
          </div>
          <div class="list">
            <ul>
              <li><a href="../views/AboutView.vue">FAQ</a></li>
              <li><a href="../views/AboutView.vue">TERMS OF USE</a></li>
              <li><a href="../views/AboutView.vue">COOKIES</a></li>
            </ul>
          </div>
        </div>
  
        <div>
          <div class="text">
            <p>Help</p>
          </div>
          <div class="list">
            <ul>
              <li><a href="../views/SignInView.vue">SALES</a></li>
              <li><a href="../views/AboutView.vue">SUPPORT</a></li>
              <li><a href="../views/AboutView.vue">LIVE CHAT</a></li>
            </ul>
          </div>
          </div>
  
        <div>
          <div class="text">
            <p>Contact</p>
          </div>
          <div class="list">
            <ul>
              <li><a href="../views/HomeView.vue">Grey Foundation</a></li>
              <li><a href="">081 488 6388</a></li>
              <li><a href="#">mlanjanasiphamanjana@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div><p>Copyrights © 2023 @The Grey Foundation</p></div>
      <button><a href="#"></a></button>
    </section>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>

.footer {
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: top 20%;
    background-size: 20%;
    text-decoration: none;
  }
  
  .footer img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 10px;
  }
  
  .footer-heading {
    display: flex;
    justify-content: space-between;
    width: 92vw;
    margin: 180px 0 0 0px;
    padding: 35px;
    border-bottom: 1px solid hsl(273, 4%, 51%);
  }
  
  .social-media {
    width: 300px;
  }
  
  
  .footer-links {
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 70px 0 0 120px;
    font-size: 0.85rem;
    text-decoration: none;
    text-align: justify;
    color: rgb(140, 149, 245);
    font-size: 12px;
  }
  
  .footer-links div {
    width: 150px;
    margin: 0 0 40px 0;
    text-decoration: none;
  }
  
  .footer-links ul {
    margin-top: 50px;
    padding: 0;
    list-style: none;
    text-align: justify;
  }
  
  .footer-links p {
    color: hsl(273, 4%, 51%);
  }
  
  .footer-links a {
    color: hsl(270, 9%, 17%);
    text-decoration: none;
    font-size: larger;
  }
  
  .footer-links a:hover {
    text-decoration: none;
    color: hsl(270, 9%, 17%);
  }
  button{
    border: 1px solid hsl(124, 52%, 12%);
  }
</style>
