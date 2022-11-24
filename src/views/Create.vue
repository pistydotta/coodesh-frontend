<template>
    <div>
      <b-row align-h="center" class="py-4">
        <b-col xs="12" sm="12" md="6" lg="6">
            <h4>Criando artigo</h4>
          <div class="input-div">
            <label for="ID">ID</label>
            <b-form-input
              class=""
              id="ID"
              v-model="article.externalId"
              placeholder="ID"
              type="number"
            ></b-form-input>
          </div>
          <div class="input-div">
            <label for="title">Title</label>
            <b-form-input
              class=""
              id="title"
              v-model="article.title"
              placeholder="Title"
            ></b-form-input>
          </div>
          <div class="input-div">
            <label for="summary">Summary</label>
            <b-form-input
              class=""
              id="summary"
              v-model="article.summary"
              placeholder="Summary"
            ></b-form-input>
          </div>
          <div class="input-div">
            <label for="newsSite">News Site</label>
            <b-form-input
              class=""
              id="summary"
              v-model="article.newsSite"
              placeholder="News Site"
            ></b-form-input>
          </div>
          <div class="input-div">
            <label for="url">News URL</label>
            <b-form-input
              class=""
              id="url"
              v-model="article.url"
              placeholder="News URL"
            ></b-form-input>
          </div>
          <div class="input-div">
            <label for="imageUrl">Image URL</label>
            <b-form-input
              class=""
              id="imageUrl"
              v-model="article.imageUrl"
              placeholder="Image URL"
            ></b-form-input>
          </div>
          <b-button @click="createArticle"  variant="primary" class="float-right mt-4">Create</b-button>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        article: {
            externalId: "",
            title: "",
            summary: "",
            newsSite: "",
            newsUrl: "",
            imageUrl:""
        },
      };
    },
    async mounted() {
      
    },
  
    methods: {
  
      async createArticle() {
          const response = await this.$store.dispatch("createArticle", this.article)
          if (response.statusCode == 201) {
              alert("Artigo criado com sucesso")
          } else {
              alert(response.message)
          }
      }
    }
  };
  </script>
  
  <style scoped>
  .input-div {
    margin-top: 20px;
  }
  </style>