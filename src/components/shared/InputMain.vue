<template>
  <div class="input-container" @click="focusInput"
       :class="{'textarea' : info.type === 'textarea',
       'focus' : focused}">
    <div class="letter-counter" v-if="info.type === 'textarea'">
      <p>{{this.countLetter}}/{{lengthTextArea}}</p>
    </div>
    <slot/>
    <input :type="info.type"
           :name="info.dataIndex"
           @focus="focused = true"
           @blur="focused = false"
           :placeholder="info.placeholder"
           v-if="info.type !== 'textarea'"
           v-model="textInput">

    <textarea class="textarea"
              ref="textareaMessage"
              :name="info.dataIndex"
              @focus="focused = true"
              @blur="focused = false"
              :placeholder="info.placeholder"
              :maxlength="lengthTextArea"
              v-model="textInput" v-else></textarea>
  </div>
</template>

<script>


export default {
  name: "InputMain",
  props: {
    info: {
      type: Object,
      required: true
    },
    lengthTextArea: {
      type: Number
    },
    submitActive: {
      type: Boolean
    },
    nameBlock: {
      type: String
    },
    activeTextInput: {
      type: String
    }
  },

  mounted() {
    if(this.activeTextInput !== undefined) {
      this.textInput = this.activeTextInput
    }
  },

  data() {
    return {
      textInput: '',
      countLetter: 0,
      focused: false
    }
  },
  watch: {
    textInput() {
      this.countLetter = this.textInput.length
      this.$emit('changeTextInput', this.textInput, this.info.dataIndex)
    },
    submitActive() {
      if(this.submitActive) {
        this.textInput = ''
      }
    },
  },
  methods: {
    focusInput() {
      let block = document.querySelector("." + this.nameBlock)
      if(this.info.type !== 'textarea') {
        let input = block.querySelectorAll("input")
        input[this.info.id].focus()
      } else {
        let textarea = block.querySelectorAll("textarea")
        textarea[this.info.id].focus()
      }
    },
  }
}
</script>

<style scoped lang="scss">

.input-container {
  overflow: visible;
  cursor: text;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: var(--main-color-text);
  position: relative;
  transition: opacity .5s ease;
  opacity: .6;
  height: 100%;
  border: 1px solid rgba(28, 27, 25, 0.50);
  border-radius: 120px;
  width: 100%;

  &.eng {
    & input, textarea {
      &::placeholder {
        font-variant: all-small-caps;
      }
    }
  }


  &:hover {
    opacity: 1;
  }

  &.focus {
    opacity: 1;
  }

  .button-icon-container {
    position: absolute;
  }

  .letter-counter {
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    position: absolute;
    opacity: .6;
  }


  .important-input {
    position: relative;
  }


  & input, textarea {
    overflow: visible;
    width: 100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: var(--color-text);
    background-color: rgba(1,1,1,0);

    &::placeholder {
      color: var(--color-text);
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .textarea {
    resize: none;
    height: auto;
  }
}

  .input-container {
    padding: 14px 16px;
    column-gap: 16px;
    max-height: 52px;

    &.textarea {
      max-height: 158px;
      min-height: 158px;
    }

    .letter-counter {
      bottom: 18px;
      right: 36px;
      font-size: 16px;
    }

    & input, textarea {
      font-size: 18px;
    }
  }

</style>