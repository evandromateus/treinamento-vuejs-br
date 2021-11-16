<template>
  <div class="flex flex-col rounded p-4 bg-gray-50">
    <content-loader
      class="rounded"
      width="96%"
      height="30px"
      animation-duration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="80%"
      height="30px"
      animation-duration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="80%"
      height="30px"
      animation-duration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="70%"
      height="30px"
      animation-duration="2s"
    />
  </div>
</template>

<script>
import ContentLoader from '../../components/ContentLoader'

export default {
  components: { ContentLoader }
}
</script>
