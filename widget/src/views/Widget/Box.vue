<template>
  <div class="box animate__animated animate__fadeInUp animate__faster">
    <div
      :class="{
        'justify-between': canShowAditionalControlAndInfo,
        'justify-end': !canShowAditionalControlAndInfo
      }"
      class="relative w-full flex"
    >
      <button
        v-if="canShowAditionalControlAndInfo"
        @click="() => ({})"
        :disabled="canGoBack"
        class="{ invisible: canGoBack }"
        class="text-xl text-gray-800"
      >
        <icon name="arrowRight" :color="colors.gray['800']"/>
      </button>

      <p
        v-if="canShowAditionalControlAndInfo"
        class="text-xl font-black text-center text-brand-main"
      >
        {{ label }}
      </p>

      <button
        @click="() => emit('close-box'))"
        class="text-xl text-gray-800"
      >
        <icon name="close" :color="colors.gray['800']"/>
      </button>
    </div>

    <div class="text-gray-800 text-sm flex" v-if="canShowAditionalControlAndInfo">
      <icon class="mr-1" name="chat" :color="brandColors.graydark"/>
      Widget by <span class="ml-1 font-bold">feedbacker</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, SetupContext } from 'vue'
import { brand } from '../../../palette'
import colors from 'tailwindcss/colors'
import useStore from '../../hooks/store'
import Icon from '../../components/Icon/index.vue'

interface SetupReturn {
  emit: SetupContext['emit'];
  label: ComputedRef<string>;
  canGoBack: ComputedRef<boolean>;
  canShowAditionalControlAndInfo: ComputedRef<boolean>;
  brandColors: Record<string, string>;
  colors: Record<string, string>;
}

export default defineComponent({
  emits: ['close-box'],
  setup (_, { emit }: SetupContext): SetupReturn {
    const store = useStore()

    const label = computed<string>(() => {
      if (store.feedbackType === 'ISSUE') {
        return 'Reporte um problema'
      }

      if (store.feedbackType === 'IDEA') {
        return 'Envie a sua ideia'
      }

      if (store.feedbackType === 'OTHER') {
        return 'Abra sua mente'
      }

      return 'O que você tem em mente?'
    })

    const canGoBack = computed<boolean>(() => {
      return store.currentComponent === 'SelectFeedbackType'
    })

    const canShowAditionalControlAndInfo = computed<boolean>(() => {
      return store.currentComponent !== 'Success' && store.currentComponent !== 'Error'
    })

    return {
      emit,
      label,
      canGoBack,
      canShowAditionalControlAndInfo,
      colors,
      brandColors: brand
    }
  }
})
</script>

<style lang="postcss" scoped>
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white
  rounded-xl py-5 px-5 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>
