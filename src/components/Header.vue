<template>
  <div class="es-header">
    <div class="es-page-title">
      <h1>What's my sign again? 🍕</h1>
    </div>
    <div class="es-page-subtitle">
      <p>star signs for the emo soul 😭</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.es-header {
  padding: 20px 60px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Amatic SC';

  .es-page-title {
     h1 {
      margin: 0;
      letter-spacing: 0.08em;
      font-weight: lighter;
      font-size: 40px;

      @media only screen and (max-width: 768px) {
        margin: 0;
        font-size: 22px;
      }
    }
  }

  .es-page-subtitle {
    font-size: 20px;
    
    p {
      margin: 0;

      @media only screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>