<template>
    <div id="contact-list">
        <form v-on:submit.prevent="deleteContact">
            <p><button class="btn btn-danger">Delete Contact</button></p>
        </form>
    </div>
</template>

<script>
    import ContactDataService from "../../services/ContactDataService";
    export default{
        data(){
            return{
                contact:{}
            }
        },

        created: function(){
           
			this.deleteContact();
        },

        methods: {
		
		deleteContact() {
            ContactDataService.delete(this.$route.params.id)
                .then(response => {
                console.log("ini respon del" + response.data);
                this.$router.push({ name: "contact-list" });
                })
                .catch(e => {
                console.log(e);
                });
            }
        }
    }      
</script>
