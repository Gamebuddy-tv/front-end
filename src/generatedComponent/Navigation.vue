<template>
  <div
    :style="{width: '170px', height: '1024px', textAlign: 'left', fontSize: '16px', color: '#efefef', fontFamily: 'Roboto', ...NavigationStyle}"
  >
    <div
      :style="{position: 'absolute', height: '100%', width: '31.18%', top: '0%', right: '68.82%', bottom: '0%', left: '0%', backgroundColor: '#000'}"
    />
    <img
      :style="{position: 'absolute', height: '3.91%', width: '22.94%', top: '2.34%', right: '72.94%', bottom: '93.75%', left: '4.12%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      src="/mask-group@2x.png"
    />
    <div
      :style="{position: 'absolute', height: '2.19%', width: '54.12%', top: '30.57%', right: '36.47%', bottom: '67.25%', left: '9.41%', cursor: 'pointer'}"
      @click="onGroupContainerClick"
    >
      <div
        :style="{position: 'absolute', height: '98.21%', width: '67.39%', top: '0%', right: '0%', bottom: '1.79%', left: '32.61%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search3Style}"
        >
          Search...
        </div>
      </div>
      <img
        :style="{position: 'absolute', height: '100%', width: '24.35%', top: '0%', right: '75.65%', bottom: '0%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'contain'}"
        alt=""
        src="/vector@2x.png"
      />
      <div
        :style="{position: 'absolute', height: '98.21%', width: '67.39%', top: '0%', right: '0%', bottom: '1.79%', left: '32.61%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search4Style}"
        >
          Search...
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', height: '2.15%', width: '51.94%', top: '36.62%', right: '36.47%', bottom: '61.23%', left: '11.59%', cursor: 'pointer'}"
      @click="onGroupContainer1Click"
    >
      <img
        :style="{position: 'absolute', height: '68.18%', width: '16.99%', top: '13.64%', right: '83.01%', bottom: '18.18%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
        alt=""
        :src="dimensionLabel"
      />
      <div
        :style="{position: 'absolute', height: '100%', width: '70.22%', top: '0%', right: '0%', bottom: '0%', left: '29.78%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search5Style}"
        >
          Home
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', height: '2.15%', width: '52.94%', top: '43.46%', right: '36.47%', bottom: '54.39%', left: '10.59%', cursor: 'pointer'}"
      @click="onGroupContainer2Click"
    >
      <img
        :style="{position: 'absolute', height: '60%', width: '20%', top: '27.27%', right: '80%', bottom: '12.73%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
        alt=""
        src="/icon@2x.png"
      />
      <div
        :style="{position: 'absolute', height: '100%', width: '68.89%', top: '0%', right: '0%', bottom: '0%', left: '31.11%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search6Style}"
        >
          Community
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', height: '2.15%', width: '51.94%', top: '50%', right: '36.29%', bottom: '47.85%', left: '11.76%', cursor: 'pointer'}"
      @click="onGroupContainer3Click"
    >
      <img
        :style="{position: 'absolute', height: '68.18%', width: '16.99%', top: '18.18%', right: '83.01%', bottom: '13.64%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
        alt=""
        src="/vector@2x.png"
      />
      <div
        :style="{position: 'absolute', height: '100%', width: '70.22%', top: '0%', right: '0%', bottom: '0%', left: '29.78%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search7Style}"
        >
          Event
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', height: '2.15%', width: '51.94%', top: '56.05%', right: '36.47%', bottom: '41.8%', left: '11.59%', cursor: 'pointer'}"
      @click="onGroupContainer4Click"
    >
      <img
        :style="{position: 'absolute', height: '68.18%', width: '16.99%', top: '31.82%', right: '83.01%', bottom: '0%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
        alt=""
        src="/vector@2x.png"
      />
      <div
        :style="{position: 'absolute', height: '100%', width: '70.22%', top: '0%', right: '0%', bottom: '0%', left: '29.78%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search8Style}"
        >
          Competitions
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', height: '2.15%', width: '51.94%', top: '63.18%', right: '36.47%', bottom: '34.67%', left: '11.59%', cursor: 'pointer'}"
      @click="onGroupContainer5Click"
    >
      <img
        :style="{position: 'absolute', height: '68.18%', width: '16.99%', top: '9.09%', right: '83.01%', bottom: '22.73%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
        alt=""
        src="/group-758530577@2x.png"
      />
      <div
        :style="{position: 'absolute', height: '100%', width: '70.22%', top: '0%', right: '0%', bottom: '0%', left: '29.78%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search9Style}"
        >
          Profile
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
                if(value === undefined || value === '') return;
                return {[key]: value};
              }

  export default defineComponent({
  name: "Navigation",
  props: {
  dimensionLabel: { type: String  }
  ,showSearch: { type: Boolean  }
  ,property1DefaultWidth: { type: String  }
  ,property1DefaultHeight: { type: String  }
  ,property1DefaultPosition: { type: String  }
  ,property1DefaultTop: { type: String  }
  ,property1DefaultLeft: { type: String  }
  ,searchFontSize: { type: String  }
  ,searchFontSize1: { type: String  }
  ,searchFontSize2: { type: String  }
  ,searchFontSize3: { type: String  }
  ,searchFontSize4: { type: String  }
  ,searchFontSize5: { type: String  }
  ,searchFontSize6: { type: String  }
  ,onGroupContainerClick: { type: Function  }
  ,onGroupContainer1Click: { type: Function  }
  ,onGroupContainer2Click: { type: Function  }
  ,onGroupContainer3Click: { type: Function  }
  ,onGroupContainer4Click: { type: Function  }
  ,onGroupContainer5Click: { type: Function  }
  },
  computed: {  NavigationStyle(): CSS.Properties {
                    return {
                      width: this.property1DefaultWidth,
        height: this.property1DefaultHeight,
        position: this.property1DefaultPosition,
        top: this.property1DefaultTop,
        left: this.property1DefaultLeft
                    }
                  }
                ,  search3Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize
                    }
                  }
                ,  search4Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize1
                    }
                  }
                ,  search5Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize2
                    }
                  }
                ,  search6Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize3
                    }
                  }
                ,  search7Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize4
                    }
                  }
                ,  search8Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize5
                    }
                  }
                ,  search9Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize6
                    }
                  }
                }})
</script>
