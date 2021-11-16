<template>
  <div class="flex flex-col p-4 rounded bg-gray-50">
    <content-loader
        class="rounded"
        width="100%"
        height="30px"
        animation-duration="2s"
    />

    <content-loader
        class="mt-3 rounded"
        width="70%"
        height="30px"
        animation-duration="2s"
    />

    <content-loader
        class="mt-3 rounded"
        width="70%"
        height="30px"
        animation-duration="2s"
    />

    <content-loader
        class="mt-3 rounded"
        width="60%"
        height="30px"
        animation-duration="2s"
    />
  </div>
</template>

<script>
import ContentLoader from '../ContentLoader'

export default {
  components: { ContentLoader }
}
</script>
