<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">GoTalkYourself</a>

      <button 
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#" class="navbar-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link">Logout</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>