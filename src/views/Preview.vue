<template>
  <div>
    <b-row align-h="center" class="py-4">
      <b-col xs="12" sm="12" md="6" lg="6">
        <b-img thumbnail fluid :src="article.imageUrl" alt="" />
        <h4 class="py-4">{{ article.title }}</h4>
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
        <b-button @click="editArticle"  variant="primary" class="float-right mt-4">Edit</b-button>
        <b-button @click="deleteArticle" variant="danger" class="float-left mt-4">Delete</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  async mounted() {
    await this.$store.dispatch("getArticle", this.$route.params.id);
    this.article = this.$store.state.article;
  },

  methods: {
    async editArticle() {
        const response = await this.$store.dispatch("editArticle", this.article)
        if (response.statusCode == 200) {
            alert("Artigo editado com sucesso")
        } else {
            alert(response.message)
        }
    },

    async deleteArticle() {
        const response = await this.$store.dispatch("deleteArticle", this.article.externalId)
        if (response.statusCode == 200) {
            alert("Artigo deletado com sucesso")
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