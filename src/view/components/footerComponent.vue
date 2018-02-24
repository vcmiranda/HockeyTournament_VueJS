<template>
  <div class="footer">
    <p>Copyright @ 2018 - Hockey Tournaments Inc. All rights reserved.</p>
  </div>
</template>

<style scoped>
.footer {
  background-color: #111;
  display: flex;
  justify-content: flex-end;
}

.footer p {
  color: white;
  margin: 0;
  padding: 5px;
}

/************** medium screen media query 768px***************/
@media screen and (max-width: 768px) {
  .footer p {
    font-size: 0.7em;
  }
}
</style>
