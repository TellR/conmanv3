<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
               <form v-on:submit.prevent="editContact">
                    <div>
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Contact</h4>
                            <button type="button" class="btn btn-sm" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label name="nama">Nama</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nama"
                                    required
                                    v-model="contact.nama"
                                    name="contactNama"
                                />
                            </div>
                            <div class="form-group">
                                <label name="nohp">No HP</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nohp"
                                    required
                                    v-model="contact.nohp"
                                    name="contact-nohp"
                                />
                            </div>
                            <div class="form-group">
                                <label name="email">Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    required
                                    v-model="contact.email"
                                    name="contact-email"
                                />
                            </div>
                            <div class="form-group">
                                <label name="alamat">Alamat</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="alamat"
                                    required
                                    v-model="contact.alamat"
                                    name="contact-alamat"
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" v-on:click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary" @click="saveContact">Save changes</button>
                        </div>
                    </div>
              </form>
        </div>
      </div>
  </div>
</template>

<script>
import ContactDataService from "../../services/ContactDataService";

export default{
        data(){
            return{
                contact:{},
                currentContact:null
            }
        },

        created: function(){
            //this.getProduct();
        },

        methods: {
            closeModal() {
            this.$emit('close-modal');
            },
            getContact(id) {
            ContactDataService.get(id)
                .then(response => {
                this.currentContact = response.data;
                console.log("iki respon datae" +response.data);
                })
                .catch(e => {
                console.log(e);
                });
            },

            //getProduct() {
            //axios.get('http://localhost:8070/contact/' + this.$route.params.id)
           /* ContactDataService.get(this.$route.params.id)
                .then(response => {
                this.contacts = response.data;
                console.log(response.data);
                this.originalContacts = this.contacts;
                })
                .catch(e => {
                console.log(e);
                });

            }, */
            
        },

        mounted() {
            console.log(this.$route.params.id);
        }
};
</script>
<style scoped>
  .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  }
</style>
