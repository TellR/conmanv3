<template>
 <div id="wrapper" class="animate">
   
    <div id="all-contacts">
       <h3>All Contacts</h3>
        <div class="list row">
          <div class="col-md-8">
            <input type="text" name="search" v-model="contactSearch" placeholder="Search Nama" class="form-control" @keyup="searchContacts">
          </div>
          <div class="col-md-4">
             <button type="submit" class="btn btn-primary" @click="openModal">Create Contact</button>
             <modal v-show="isModalVisible" @close-modal="closeModal" />
          </div>
        </div>
        
          <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Nama</td>
                <td>no.HP</td>
                <td>email</td>
                <td>alamat</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
               
                <tr :class="{ active: index == currentIndex }" v-for="(contact, index) in contacts" :key="index" >
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.nama }}</td>
                    <td>{{ contact.nohp }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.alamat }}</td>
                    <td>
                       
                        <button type="submit" class="btn btn-primary" @click="setActiveContact(contact.id)">Edit</button>
                        <modal2 v-show="isModalVisible2" @close-modal="closeModal2" />
                        
                        <router-link :to="{name: 'contact-delete', params: { id: contact.id }}" class="btn btn-danger">Delete</router-link>
                    </td>
                </tr>
            </tbody> 
           
          </table>
       
    </div>
  </div>
</template>

<script>
import ContactDataService from "../../services/ContactDataService";
import modal from './AddContact.vue'
import modal2 from './EditContact.vue'


export default {
  name: "ContactList",
  components:{
    modal, 
    modal2
  },
  data() {
    return {
      isModalVisible: false,
      isModalVisible2: false,
      contacts: [],
      contactSearch: '',
      originalContacts: [],
      currentContact: null,
      currentIndex: -1,
      contactNama:"",
      nohp:"",
      email:"",
      alamat:""
    };
  },
  methods: {
    openModal() { 
     this.isModalVisible = true;
    },
    /*
    openModal2() { 
     this.isModalVisible2 = true;
     console.log(" ini dia testing" + this.currentContact);
    },
    */
    closeModal() {
      this.isModalVisible = false;
    },
    closeModal2() {
      this.isModalVisible2 = false;
    },

    retrieveContacts() {
      ContactDataService.getAll()
        .then(response => {
          this.contacts = response.data;
          console.log(response.data);
          this.originalContacts = this.contacts;
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveContacts();
      this.currentContact = null;
      this.currentIndex = -1;
    },
    

    searchContacts: function()
    {
      if(this.contactSearch == '')
      {
        this.contacts = this.originalContacts;
        return;
      }

      var searchedContacts = [];
                
      for(var i = 0; i < this.originalContacts.length; i++)
        {
          var contactName = this.originalContacts[i]['nama'].toLowerCase();
          if(contactName.indexOf(this.contactSearch.toLowerCase()) >= 0)
        {
          searchedContacts.push(this.originalContacts[i]);
        }
      }

      this.contacts = searchedContacts;
    },
    
    setActiveContact(contact) {
      //this.currentContact = contact;
      this.contactNama = contact;
      this.isModalVisible2 = true;
      console.log("ini id ne" +  this.contactNama );
    }
    
    
  },
  mounted() {
    this.retrieveContacts();
  }
};
</script>