<template>
  <div
    @click="handleToggle"
    class="flex flex-col px-8 py-6 mt-8 rounded cursor-pointer bg-brand-gray"
  >
    <div class="flex items-center justify-between w-full">
      <badge :type="feedback.type"/>
      <span class="font-regular text-brand-graydark">
        {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
      </span>
    </div>

    <div class="mt-8 text-lg font-medium text-gray-800">
      {{ feedback.text }}
    </div>

    <div
      v-if="state.isOpen"
      :class="{
        animate__fadeOutUp: state.isClosing
      }"
      class="flex mt-8 animate__animated animate__fadeInUp animate__faster"
    >
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col w-1/2">
          <span class="font-bold text-gray-400 uppercase select-none">Página</span>
          <span class="font-medium text-gray-700">{{ feedback.page }}</span>
        </div>
        <div class="flex flex-col w-1/2">
          <span class="font-bold text-gray-400 uppercase select-none">Dispositivo</span>
          <span class="font-medium text-gray-700">{{ feedback.device }}</span>
        </div>
      </div>

      <div class="flex flex-col w-1/2">
        <div class="flex flex-col w-1/2">
          <span class="font-bold text-gray-400 uppercase select-none">Usuario</span>
          <span class="font-medium text-gray-700">{{ feedback.fingerprint }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end" v-if="!state.isOpen">
      <icon name="chevron-down" size="24" :color="brandColors.graydark"/>
    </div>
  </div>
</template>

<script>
import Badge from './Badge'
import Icon from '../Icon'
import { getDiffTimeBetweenCurrentDate } from '../../utils/date'
import palette from '../../../palette'
import { reactive } from '@vue/reactivity'
import { wait } from '../../utils/timeout'

export default {
  components: { Badge, Icon },
  props: {
    feedback: { type: Object, required: true },
    isOpened: { type: Boolean, default: false }
  },
  setup (props) {
    const state = reactive({
      isOpen: props.isOpened,
      isClosing: !props.isOpened
    })

    async function handleToggle () {
      state.isClosing = true
      await wait(250)
      state.isOpen = !state.isOpen
      state.isClosing = false
    }

    return {
      state,
      handleToggle,
      getDiffTimeBetweenCurrentDate,
      brandColors: palette.brand
    }
  }
}
</script>
