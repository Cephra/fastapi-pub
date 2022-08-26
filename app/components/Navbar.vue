<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Hausdaten</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="item in navbarItems"
          :key="item.name"
          :to="item.page"
          active-class="active"
          exact
          >{{ item.name }}</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      navbarItems: [
        {
          name: 'Startseite',
          page: '/',
        },
        {
          name: 'Meters',
          page: '/meters',
        },
        {
          name: 'Values',
          page: '/values',
        },
        {
          name: 'About',
          page: '/about',
        },
      ],
    }
  },
}
</script>
