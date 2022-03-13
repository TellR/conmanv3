<template>
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="submit-form">
                    <div v-if="!submitted">
                        <div class="modal-header">
                            <h4 class="modal-title">Add Contact</h4>
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
                                    name="contact-nama"
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContactDataService from "../../services/ContactDataService";

  export default {
   name: 'AddContact',
   
   data() {
    return {
      contact: {
          id:null,
          nama: "",
          nohp: "",
          email: "",
          alamat: ""
      },
      submitted: false
    };
  },
  methods: {
    closeModal() {
        this.$emit('close-modal');
    },
    reloadPage() {
      window.location.reload();
    },
    saveContact() {
      var data = {
        nama: this.contact.nama,
        nohp: this.contact.nohp,
        email: this.contact.email,
        alamat: this.contact.alamat,  
      };
      ContactDataService.create(data)
        .then(response => {
          this.contact.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.reloadPage();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    
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
