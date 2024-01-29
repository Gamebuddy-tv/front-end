<template>
    <div class="w-full h-full md:pb-44">
      
      <Banner :type="tv" />

      <div
        class="px-4 md:px-12 relative z-10 space-y-12"
        :class="[isDesktop ? '-mt-28' : 'mt-20']"
      >
        <SectionContainer 
            :items="ITEMS['trivia']"
            :dontUseEndpoint = "true"
            :dataShared = "ITEMS['trivia'][0]['data']"
            mode="trivia"
        />

      </div>

    </div>
  </template>
  
  <script>
  import SectionContainer from "../../components/SectionContainer.vue";
  import Banner from "../../components/Banner.vue";
  import useDevice from "../../hooks/useDevice";

  import { BROWSE_ITEMS as TV_BROWSE_ITEMS } from "../services/tv";
  
  export default {
    name:'Trivia',
    components: {
      SectionContainer,
      Banner,
    },
    setup() {
      const { isDesktop } = useDevice();

      const ITEMS = {
        trivia: [{
            "name": "Section #1",
            "title": "Section #1",
            "data": {
              "results": [
                  {
                  "id": 1,
                  "adult": false,
                  "backdrop_path": "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
                  "genre_ids": [18, 80],
                  "title": "What is the capital of France?",
                  "options": ["Paris", "London", "Berlin", "Madrid"],
                  "correctAnswer": "Paris",
                  "original_language": "en",
                  "original_name": "Breaking Bad",
                  "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
                  "popularity": 502.901,
                  "poster_path": "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
                  "first_air_date": "2008-01-20",
                  "name": "Breaking Bad",
                  "vote_average": 8.898,
                  "vote_count": 12962
                  },

                  {
                  "id": 2,
                  "title": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "George Orwell", "J.K. Rowling", "Mark Twain"],
                  "correctAnswer": "Harper Lee",
                  "original_language": "en",
                  "original_name": "Breaking Bad",
                  "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
                  "popularity": 502.901,
                  "poster_path": "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
                  "first_air_date": "2008-01-20",
                  "name": "Breaking Bad",
                  "vote_average": 8.898,
                  "vote_count": 12962
                  }
                  // more trivia questions...
              ]
            }
        }]
      } // END OF ITEMS


      console.log(" I would like the TV ITEMS JSON --", TV_BROWSE_ITEMS);
  
      return { isDesktop, ITEMS };
    },
    computed: {
      type() {
        if (this.$route.path.includes("tv")) {
          return "tv";
        }
  
        if (this.$route.path.includes("movies")) {
          return "movies";
        }
  
        if (this.$route.path.includes("popular")) {
          return "popular";
        }
  
        return "home";
      },
  
      items() {
        return ITEMS['trivia'];
      },
    },
  };
  </script>
  <style>
  </style>