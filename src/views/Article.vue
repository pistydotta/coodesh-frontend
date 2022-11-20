<template>
  <div>
    <b-row class="py-3 mr-2">
      <b-col></b-col>
      <b-col class="d-flex justify-content-end">
        <div class="mr-3">
          <b-input-group>
            <b-form-input placeholder="Search"></b-form-input>
            <b-input-group-append>
              <b-button @click="teste">
                <fa-icon icon="search"></fa-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div>
          <b-form-select
            v-model="sortBy"
            :options="[
              { text: 'Mais antigas', value: 'oldest' },
              { text: 'Mais novas', value: 'newest' },
            ]"
          >
            <template #first>
              <b-form-select-option :value="''" disabled
                >Sort</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4 pt-3">
      <b-col class="d-flex align-items-center flex-column">
        <div class="page-icon">
          <fa-icon icon="rocket" class="fa-3x"></fa-icon>
        </div>
        <div class="mt-4">
          <h4 style="color: #1e2022">Space Flight News</h4>
        </div>
      </b-col>
    </b-row>

    <hr class="border-bottom-custom" />

    <template v-for="(article, idx) in articles">
      <ImageLeft v-if="idx % 2 == 0" :key="article._id" />
      <ImageRight v-else :key="article._id" />
    </template>
    <div class="m-4">
      <b-button class="btn btn-outline-info outline-custom">Carregar mais</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: "",
      articles: [
        { _id: "12312fjasoifh", title: "Titulo 1", summary: "Resumo 1" },
        {
          _id: "OH9012HF9H",
          title: "Titulo 13",
          summary: "Resumo 13",
        },
      ],
    };
  },

  components: {
    ImageLeft: () => import("@/components/ArticleLeftImage.vue"),
    ImageRight: () => import("@/components/ArticleRightImage.vue"),
  },

  methods: {
    teste() {
      console.log(" testando carai ");
    },
  },

  mounted() {},
};
</script>

<style>
.page-icon {
  border-radius: 100%;
  padding: 35px;
  border: 2px solid #c6d1db;
  color: #4b5c6b;
}

.border-bottom-custom {
  border-bottom: 2px solid #c6d1db !important;
  margin-top: 50px;
}

.article-title {
  font-weight: 900;
}

.news-site-class {
  border: 2px solid #b8c3cc;
  background-color: #dfe6ed;
}

.news-site-href {
  color: #1e2022;
  text-decoration: none;
}

.news-site-href:hover {
  color: #1e2022;
  text-decoration: none;
  cursor: pointer;
}

.outline-custom {
  color: #665af5 !important;
  background-color: white !important;
  border: 1px solid #665af5 !important;
}

.outline-custom:hover {
    color: white !important;
    background-color: #665af5 !important;
}
</style>