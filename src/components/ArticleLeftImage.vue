<template>
  <div>
    <b-row align-h="center" class="py-4">
      <b-col cols="4">
        <b-img
          thumbnail
          fluid
          src="https://spaceflightnow.com/wp-content/uploads/2018/10/ccp-countdown-header-326x245.jpg"
          alt=""
        />
      </b-col>

      <b-col cols="5" class="d-flex flex-column justify-content-between">
        <div>
          <b-row>
            <b-col>
              <h5 class="article-title">Titulo</h5>
            </b-col>
          </b-row>

          <b-row class="d-flex justify-content-between">
            <b-col class="d-flex justify-content-start">
             <span class="small">dd/mm/yyyy</span>
            </b-col>

            <b-col class="d-flex justify-content-end">
                <div class="news-site-class">
                    <a href="" class="small px-3 news-site-href">newsSite</a>
                </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="d-flex">
              <p>content</p>
            </b-col>
          </b-row>
        </div>

        <b-row class="">
          <b-col class="d-flex justify-content-start">
            <b-button>Ver Mais</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>