<template>
  <div id="publicfooter">
    <div class="footer">
      <div class="block">
        <el-pagination
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="total" :page-size="15">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRef} from "vue";
const props = defineProps({
  total:Number
})
const total = toRef(props, 'total');
const emit = defineEmits(['currentChange'])
const currentChange = (page) => {
  emit('currentChange',page);
}
</script>

<style scoped>
.footer .block{
  margin-top: 9px;
}
</style>
