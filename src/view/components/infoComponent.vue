<template>
  <div class="info" id="info">
    <h4>General Information</h4>
    <h5>Hockey Tournaments Regulations</h5>
    <p>Any team or association (all divisions) wishing to host a Branch tournament must receive a tournament sanction permit from their respective Hockey Manitoba Zone Registrar. The registrar will verify the eligibility of all teams and players entered in tournaments sanctioned by Hockey Manitoba.</p>
    <h6>Tournament Sanction Request Form</h6>
    <p>No sanctioned tournament shall accept entries from any team which is not a member team of Hockey Canada. Every player competing in any sanctioned tournament must be registered with that team on a Hockey Canada approved roster and it must be produced for inspection at all tournaments.</p>
    <h6>Hockey Canada Tournament Regulations (Regulation M)</h6>
    <p>The tournament sanction fee shall be $100.00 (plus gst), however, if the tournament sanction request is received 3 weeks prior to the starting date of the tournament, the fee will be reduced to $25.00 (including gst). Please note: Different fees apply if you are hosting a tournament that includes teams outside of Manitoba. Also, tournaments with teams outside of Canada must be sanctioned directly through the Hockey Manitoba head office.</p>
    <p>Hockey Manitoba registered teams may not participate in a tournament that has not been granted a sanction.</p>
    <p>For further information on tournament sanctions please contact your zone registrar.</p>
    <ul>
      <li>MINOR HOCKEY TOURNAMENTS</li>
      <li>SUBMIT TOURNAMENT LISTING</li>
    </ul>
    <p>Please note that once a tournament is posted we are unable to make any changes. Please double check to ensure all information is accurate before posting. We can delete tournament so they can be re-added in case of an error. To do so please email the date and location of the tournament to <span>support@hockeytournaments.ca</span></p>
  </div>
</template>

<style scoped>
.info {
  line-height: 1.5;
  width: 80%;
  margin: 50px auto;
}

.info h4 {
  font-size: 1.5em;
  color: orange;
  text-transform: uppercase;
}

.info h5 {
  font-size: 1.2em;
  color: orange;
  text-transform: uppercase;
}

.info h6 {
  font-size: 1em;
  color: orange;
  text-transform: uppercase;
}

.info li {
  font-size: 1em;
  color: orange;
  text-transform: uppercase;
}

.info p {
  font-size: 1em;
}

.info span {
  color: orange;
  text-decoration: underline;
}

/************** medium screen media query 768px***************/
@media screen and (max-width: 768px) {
  .info {
    line-height: 1.2;
    width: 90%;
    margin: 20px auto;
  }
}
</style>
