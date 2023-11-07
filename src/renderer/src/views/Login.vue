<template>
  <div style="display: flex;align-items: center;justify-content:center;height: 100vh">
    <div style="text-align: center;height: 150px">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
      size="large">
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" style="width: 300px"/>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="primary" @click="submitForm(ruleFormRef)" size="default">立即登陆</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive,ref,getCurrentInstance} from "vue";
import {useRouter} from 'vue-router'
const router = useRouter()
import type { FormInstance, FormRules } from 'element-plus'
const { proxy } : any = getCurrentInstance();


const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  pass: ''
})
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  pass: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6,  message: '密码错误', trigger: 'blur' },
  ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const post ={
        name: ruleForm.name,
        pass: ruleForm.pass
      };
      proxy.$axios.sendAjax(post, 'login/login').then((res) => {
        if (res.code == 0) {
          window.sessionStorage.setItem('token',res.data.token);
          router.push('/patient/list')
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped>

</style>
