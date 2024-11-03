<template>
  <div class="container">
    <Menubar :model="menuItems">
      <template #start> Aria2 WebUI </template>
      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        </div>
      </template>
    </Menubar>
  </div>
  <component :is="currComp"></component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
import { useI18n } from "vue-i18n";
import { PrimeIcons } from "@primevue/core/api";
import { addUris, addTorrents } from "@/js/services/rpc/helpers.ts";
const { t, locale } = useI18n();
// compoenent to be rendered
import GetUris from "@/components/GetUris.vue";

const currComp = ref("");
const menuItems = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    route: "/",
  },
  {
    label: "Add",
    route: "/add",
    items: [
      {
        label: "By URIs",
        icon: PrimeIcons.LINK,
        command: () => {
          currComp.value = GetUris;
          //addUris();
        },
      },
      {
        label: "By Torrents",
        command: () => {
          addTorrents();
        },
      },
    ],
  },
  {
    label: "Services",
    route: "/services",
    items: [
      { label: "Web Development", route: "/services/web-development" },
      { label: "App Development", route: "/services/app-development" },
      { label: "SEO", route: "/services/seo" },
    ],
  },
  {
    label: "Contact",
    route: "/contact",
  },
]);
</script>
