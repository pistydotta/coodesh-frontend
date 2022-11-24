<template>
  <div>
    <b-row align-h="center" class="py-4">
      

      <b-col xs="12" sm="6" md="6" lg="5" class="d-flex flex-column justify-content-between">
        <div>
          <b-row>
            <b-col>
              <h5 class="article-title">{{article.title}}</h5>
            </b-col>
          </b-row>

          <b-row class="d-flex justify-content-between">
            <b-col class="d-flex justify-content-start">
             <span class="small">{{moment(article.updatedAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('DD/MM/YYYY')}}</span>
            </b-col>

            <b-col class="d-flex justify-content-end">
                <div class="news-site-class">
                    <a :href="article.url" class="small px-3 news-site-href">{{article.newsSite}}</a>
                </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="d-flex">
              <p>{{article.summary}}</p>
            </b-col>
          </b-row>
        </div>

        <b-row class="">
          <b-col class="d-flex justify-content-start">
            <b-button @click="redirect">Ver Mais</b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col xs="12" sm="5" md="5" lg="4">
        <b-img
          thumbnail
          fluid
          :src="article.imageUrl"
          alt=""
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    article: {}
  },

  data() {
    return {
      moment
    }
  },
  methods: {
    redirect() {
      this.$router.push({
        name: 'Preview',
        params: {
          id: this.article.externalId
        }
      })
    }
  }
};
</script>

<style>

</style>