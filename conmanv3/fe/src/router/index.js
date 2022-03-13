import { createWebHistory, createRouter } from "vue-router"

import DashBoard from "@/components/dash/MainApp.vue"
import Contacts from "@/components/contact/ContactList.vue"
import AddContact from "@/components/contact/AddContact.vue"
import EditContact from "@/components/contact/EditContact.vue"
import DelContact from "@/components/contact/DeleteContact.vue"

//import Home from "@/views/Home.vue"
const routes = [
  {
    path: "/",
    name: "dash",
    component: DashBoard,
  },
  {
    path: "/contacts",
    name: "contact-list",
    component: Contacts,
  },
  {
    path: "/contact-add",
    name: "contact-add",
    component: AddContact,
  },
  {
    path: "/contact-edit",
    name: "contact-edit",
    component: EditContact,
  },
  {
    path: "/contact-delete",
    name: "contact-delete",
    component: DelContact,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

