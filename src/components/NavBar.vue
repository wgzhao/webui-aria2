<template>
  <div class="card">
    <Menubar :model="menuItems" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";

const menuItems = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Services",
    link: "/services",
    items: [
      { label: "Web Development", link: "/services/web-development" },
      { label: "App Development", link: "/services/app-development" },
      { label: "SEO", link: "/services/seo" },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
]);

const showDropdown = (name: string) => {
  const item = menuItems.value.find((item) => item.name === name);
  if (item && item.submenu) {
    item.value.showDropdown = true;
  }
};

const hideDropdown = (name: string) => {
  const item = menuItems.value.find((item) => item.name === name);
  if (item && item.submenu) {
    item.value.showDropdown = false;
  }
};
</script>
