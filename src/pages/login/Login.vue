<template>
  <div class="login">
    <!-- 登录框 -->
    <div class="login-box">
      <!-- 标题 -->
      <h3 class="title">铁路桥梁监测系统平台</h3>
      <!-- 登录表单 -->
      <a-form
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 24 }"
        @keydown.enter="onSubmit"
      >
        <a-form-item
          label="UserName"
          v-bind="validateInfos.UserName"
        >
          <a-input
            v-model:value="modelRef.UserName"
            autocomplete="off"
            @blur="validate('UserName', { trigger: 'blur' }).catch(() => {})"
          />
        </a-form-item>
        <a-form-item
          label="Password"
          v-bind="validateInfos.Password"
        >
          <a-input
            v-model:value="modelRef.Password"
            type="password"
            autocomplete="off"
            @blur="validate('Password', { trigger: 'blur' }).catch(() => {})"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            :style="{width:'100%', marginTop: '15px'}"
            type="primary"
            @click="onSubmit"
          >
            Login
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from '@ant-design-vue/use'
import { message } from 'ant-design-vue'
export default {
  setup() {
    const modelRef = reactive({
      UserName: '',
      Password: ''
    })
    const rulesRef = reactive({
      UserName: [
        {
          required: true,
          message: 'Please input UserName',
          trigger: 'blur'
        },
        {
          min: 5,
          max: 16,
          message: 'Length should be 5 to 16',
          trigger: 'blur'
        }
      ],
      Password: [
        {
          required: true,
          message: 'Please input Password',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 16,
          message: 'Length should be 6 to 16',
          trigger: 'blur'
        }
      ]
    })
    const { validate, validateInfos } = useForm(modelRef, rulesRef)
    const router = useRouter()
    const onSubmit = e => {
      e.preventDefault()
      validate()
        .then(() => {
          // 校验成功
          if (modelRef.UserName === 'admin' && modelRef.Password === '123456') {
            router.push('/')
          } else {
            message.error('用户名或密码错误!')
          }
        }).catch((err) => {
          return err
        })
    }
    return {
      validate,
      validateInfos,
      modelRef,
      onSubmit
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(39, 44, 53);

  /* 登录框 */
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 40px;
    background-color: rgb(57, 64, 74);

    .title {
      margin: 10px 0;
      color: #eee;
      font-size: 16px;
    }
  }
}
</style>
