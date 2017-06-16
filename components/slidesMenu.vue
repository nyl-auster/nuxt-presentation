 <template>
  <div="counter">
    <ul class="">
      <li v-for="(slide, index) in slider.slides">
        <span style="color:white" @click="goTo(index)">{{ slide.title }} </span>
        <!--<nuxt-link @click.native="setActiveSlide(index)" :to="slide.uri">{{ slide.title }} </nuxt-link>-->
      </li>
    </ul>
  </div>
</template>
