<template>
  <div>
    <div :class="topBarClass" id="header">
      <div class="headerContainer">
        <div class="navbar">
          <div>
            <img src="../../assets/images/brand.png" alt="brand logo">
          </div>
          <nav class="links">
            <ul>
              <li><a href="#home" class="nav-btn">Home</a></li>
              <li><a href="#info" class="nav-btn">Information</a></li>
              <li><a href="#events" class="nav-btn">Events</a></li>
              <li><a href="#contact" class="nav-btn">Contact</a></li>
            </ul>
          </nav>
        </div>
        <nav class="social">
          <ul>
            <li><a href="#" class="facebook"></a></li>
            <li><a href="#" class="instagram"></a></li>
            <li><a href="#" class="twitter"></a></li>
            <li><a href="#" class="youtube"></a></li>
            <li><a href="#" class="snapchat"></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="home" id="home" ref="home">
      <div class="videoContainer">
        <div>
          <h1>Hockey Tournaments</h1>
          <h3>Weekend hockey provides exciting adult and youth hockey tournaments</h3>
        </div>
        <video autoplay loop src="../../assets/videos/background.mp4"></video>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      scrollPosition: false,
    }
  },
  computed: {
    topBarClass() {
      return {
        'header': this.scrollPosition,
        'header scroll': !this.scrollPosition,
      }
    },
  },
  methods: {
    screenPosition() {
      this.scrollPosition = (window.scrollY <= this.$refs.home.clientHeight*0.93) ? true : false;
      return this.scrollPosition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.screenPosition);
  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.headerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0);
  padding: 10px;
}

.headerContainer img {
  width: 30px;
  height: auto;
}

.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.links ul {
	list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.links a {
  color: #fff;
  padding: 0 20px;
  text-decoration: none;
  font-size: 1em;
}

.nav-btn {
  transition: all 150ms linear;
}

.nav-btn:hover {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  background: rgba(255,255,255,0.3);
  transition: all 250ms linear;
}

.social {
  width: 200px;
}

.social ul {
	list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.social a {
  display: block;
  width: 40px;
  height: 30px;
}

.scroll {
  background-color: #111;
}

.videoContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.videoContainer video {
  object-fit: cover;
  width:100%;
  height:100%;
}

.videoContainer div {
  margin: 0 auto;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 40%;
  transform:translateY(-50%);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: white;
  text-transform: uppercase;
  text-shadow:4px 4px 0 rgba(0,0,0,0.4);
}

.videoContainer h1 {
  font-size: 4em;
}

.videoContainer h3 {
  font-size: 2em;
  width: 50%;
  margin: 0 auto;
}

/*********** sprites ***********/

.facebook {
	background: url(../../assets/images/sprites.png) no-repeat 0 0;
	overflow: hidden;
}

.facebook:hover {
	background: url(../../assets/images/sprites.png) no-repeat 0 -30px;
	overflow: hidden;
}

.instagram {
	background: url(../../assets/images/sprites.png) no-repeat -40px 0;
	overflow: hidden;
}

.instagram:hover {
	background: url(../../assets/images/sprites.png) no-repeat -40px -30px;
	overflow: hidden;
}

.twitter {
	background: url(../../assets/images/sprites.png) no-repeat -80px 0;
	overflow: hidden;
}

.twitter:hover {
	background: url(../../assets/images/sprites.png) no-repeat -80px -30px;
	overflow: hidden;
}

.youtube {
	background: url(../../assets/images/sprites.png) no-repeat -120px 0;
	overflow: hidden;
}

.youtube:hover {
	background: url(../../assets/images/sprites.png) no-repeat -120px -30px;
	overflow: hidden;
}

.snapchat {
	background: url(../../assets/images/sprites.png) no-repeat -160px 0;
	overflow: hidden;
}

.snapchat:hover {
	background: url(../../assets/images/sprites.png) no-repeat -160px -30px;
	overflow: hidden;
}

/************** medium screen media query 1024px***************/
@media screen and (max-width: 1024px) {
  .videoContainer h1 {
    font-size: 3em;
  }

  .videoContainer h3 {
    font-size: 1.5em;
    width: 50%;
  }
}

/************** medium screen media query 768px***************/
@media screen and (max-width: 768px) {
  .links a {
    font-size: 0.7em;
    padding: 0 10px;
  }

  .videoContainer h1 {
    font-size: 2.5em;
  }

  .videoContainer h3 {
    width: 80%;
  }

  .social ul {
    display: none;
  }

  .info {
    line-height: 1.2;
    width: 90%;
    margin: 20px auto;
  }
}

/************** medium screen media query 400px***************/
@media screen and (max-width: 400px) {
  .social {
    width: 200px;
  }

  .videoContainer h1 {
    font-size: 1.5em;
  }

  .videoContainer h3 {
    font-size: 0.8em;
    width: 80%;
  }
}
</style>
