<template>

  <div v-if="mode != 'trivia' ">
    <video-carousel-skeleton v-if="isLoading" />

    <div class="space-y-2" v-else>
      <h1 class="text-xl font-medium font-netflix_medium">
        {{ title }}
      </h1>

      <video-carousel :items="data.results" />

    </div>
  </div>

  <div v-else>

    <div class="space-y-2">
      <h1 class="text-xl font-medium font-netflix_medium">
        {{ title }}
      </h1>

      <video-carousel :items="data.results" />

    </div>
  </div>

</template>

<script>
import useQuery from "../hooks/useQuery";
import VideoCarouselSkeleton from "../skeletons/VideoCarouselSkeleton.vue";
import VideoCarousel from "./VideoCarousel.vue";
import { ref, reactive } from "vue";

export default {
  props: ["queryFn", "title", "name", "dontUseEndpoint", "dataShared", "mode"],
  components: {
    VideoCarousel,
    VideoCarouselSkeleton,
  },
  setup(props) {
    let [data, isLoading, isError] = useQuery(props.name, props.queryFn);
    console.log("IsLoading changing ---", isLoading);

    if(props.mode == 'trivia'){
      data = props.dataShared;
    }

    return { data, isLoading, isError };
  },
};
</script>

<style>
</style>