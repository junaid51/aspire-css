<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="../../assets/aspire_desktop_logo.png" height="30px" width="100px" alt="..." />
      <div>Trusted way of banking for 3000+ SMEs and startups in Singapore</div>
    </div>
    <ul class="menu-list">
      <li class="menu-item"><font-awesome-icon :icon="['fas', 'home']" /><span>home</span></li>
      <li class="menu-item selected"><font-awesome-icon :icon="['fas', 'credit-card']" /><span>cards</span></li>
      <li class="menu-item"><font-awesome-icon :icon="['fas', 'exchange-alt']" /><span>payments</span></li>
      <li class="menu-item"><font-awesome-icon :icon="['fas', 'arrow-circle-up']" /><span>credit</span></li>
      <li class="menu-item"><font-awesome-icon :icon="['fas', 'user']" /><span>settings</span></li>
    </ul>
  </div>
</template>

<script src="./sidebar.js"></script>

<style lang="scss">
@import "./sidebar.scss";
</style>
