<template>
  <div class="events" id="events">
    <div class="gallery">
      <h4>Our Events</h4>
      <ul>
        <li><a href="https://huronperthlakers.ca/Tournaments/1317/2017-2018_Great_Lakes_Cup/" id="tournament1" target="_blank"><img src="../../assets/images/logos/tournament1.png" alt="tournament1"></a></li>
        <li><a href="http://sensplex.ca/10th-annual-ottawa-senators-winter-showcase-tournament-presented-by-the-kanata-girls-hockey" id="tournament2" target="_blank"><img src="../../assets/images/logos/tournament2.png" alt="tournament2"></a></li>
        <li><a href="http://gcmha.com/" id="tournament3" target="_blank"><img src="../../assets/images/logos/tournament3.png" alt="tournament3"></a></li>
        <li><a href="https://oakridgeaeroshockey.ca/Tournaments/1716/Oakridge_House_League_Classic/" id="tournament4" target="_blank"><img src="../../assets/images/logos/tournament4.png" alt="tournament4"></a></li>
        <li><a href="https://blomha.com/Tournaments/2681/" id="tournament5" target="_blank"><img src="../../assets/images/logos/tournament5.png" alt="tournament5"></a></li>
        <li><a href="https://silverstick.org/Tournaments/4865/" id="tournament6" target="_blank"><img src="../../assets/images/logos/tournament6.png" alt="tournament6"></a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.events {
  background-color: #ddd;
  padding: 50px 0;
}

.gallery {
  width: 80%;
  margin: 0 auto;
  background-color: #ddd;
}

.gallery h4 {
  font-size: 1.5em;
  color: orange;
  text-transform: uppercase;
}

.gallery ul {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  align-content: center;
}

.gallery li {
  text-align: center;
  width: 180px;
  height: 180px;
  overflow: hidden;
  margin: 10px;
}

.gallery li img {
  transform: translateY(0);
  transition: all 0.5s;
  width: 180px;
  height: 360px;
}

.gallery li img:hover{
  transform: translateY(-200px);
}

/************** medium screen media query 768px***************/
@media screen and (max-width: 768px) {
  .events {
    padding: 20px 0;
  }

  .gallery {
    width: 90%;
    background-color: #ddd;
  }
}
</style>
