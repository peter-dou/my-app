<template>
  <!--    添加患者信息-->
  <el-dialog
    v-model="dialogVisible"
    title="患者信息"
    width="600">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
      status-icon>
      <div class="dis-flex">
        <div style="width: 280px">
          <el-form-item label="患者姓名" prop="name">
            <el-input v-model="ruleForm.name"  style="width: 180px"/>
          </el-form-item>
          <el-form-item label="客服" prop="kefu">
            <el-select v-model="ruleForm.kefu" placeholder="请选择" style="width: 180px">
              <el-option v-for="(item,index) in kefu" :key="index" :label="item['name']" :value="item['id']" />
            </el-select>
          </el-form-item>
          <el-form-item label="电话" prop="mobile">
            <el-input v-model="ruleForm.mobile"  style="width: 180px"/>
          </el-form-item>
          <el-form-item label="微信" prop="wechat">
            <el-input v-model="ruleForm.wechat"  style="width: 180px"/>
          </el-form-item>

          <el-form-item label="状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择" style="width: 180px">
              <el-option v-for="(item,index) in status" :key="index" :label="item['label']" :value="item['label']" />
            </el-select>
          </el-form-item>
          <el-form-item label="渠道" prop="qudao">
            <el-select v-model="ruleForm.qudao" placeholder="请选择" style="width: 180px">
              <el-option v-for="(item,index) in qudao" :key="index" :label="item['label']" :value="item['label']" />
            </el-select>
          </el-form-item>

          <el-form-item label="顾虑" prop="gulv">
            <el-select v-model="ruleForm.gulv" placeholder="请选择" style="width: 180px">
              <el-option v-for="(item,index) in gulv" :key="index" :label="item['label']" :value="item['label']" />
            </el-select>
          </el-form-item>
        </div>
        <div style="width: 280px;">
          <el-form-item label="医院" prop="yiyuan">
            <el-select v-model="ruleForm.yiyuan" placeholder="请选择" style="width: 180px">
              <el-option v-for="(item,index) in yiyuan" :key="index" :label="item['name']" :value="item['id']" />
            </el-select>
          </el-form-item>
          <el-form-item label="咨询时间" prop="zixun_time">
            <el-date-picker v-model="ruleForm.zixun_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" style="width: 180px"/>
          </el-form-item>
          <el-form-item label="登记时间" prop="dengji_time">
            <el-date-picker v-model="ruleForm.dengji_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" style="width: 180px"/>
          </el-form-item>
          <el-form-item label="预约时间" prop="yuyue_time">
            <el-date-picker v-model="ruleForm.yuyue_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" style="width: 180px"/>
          </el-form-item>
          <el-form-item label="到诊时间" prop="daozhen_time">
            <el-date-picker v-model="ruleForm.daozhen_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" style="width: 180px"/>
          </el-form-item>
          <el-form-item label="回访时间" prop="huifang_time">
            <el-date-picker v-model="ruleForm.huifang_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" style="width: 180px"/>
          </el-form-item>


        </div>
      </div>
      <el-form-item label="备注信息" prop="desc">
        <el-input v-model="ruleForm.notes" type="textarea" />
      </el-form-item>
      <div class="dis-flex justify-content-center">
        <el-button type="primary" @click="submitForm(ruleFormRef)">确定添加</el-button>
      </div>
    </el-form>
  </el-dialog>
  <!--    添加患者信息-->
<!--  搜索-->
  <div class="tabb">
    <el-form :inline="true" :model="search" class="demo-form-inline" label-width="60">
      <el-form-item label="医院">
        <el-select v-model="search.yiyuan" placeholder="请选择" clearable style="width: 120px;">
          <el-option v-for="(item,index) in yiyuan" :key="index" :label="item['name']" :value="item['id']" />
        </el-select>
      </el-form-item>
      <el-form-item label="客服">
        <el-select v-model="search.kefu" placeholder="请选择" clearable style="width: 120px;">
          <el-option v-for="(item,index) in kefu" :key="index" :label="item['name']" :value="item['id']" />
        </el-select>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="search.name" placeholder="请输入姓名" clearable style="width: 120px;"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="search.mobile" placeholder="请输入手机号" clearable style="width: 120px;" />
      </el-form-item>
      <el-form-item label="微信号">
        <el-input v-model="search.wechat" placeholder="请输入微信号" clearable style="width: 120px;" />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="search.status" placeholder="请选择" clearable style="width: 120px;">
          <el-option v-for="(item,index) in status" :key="index" :label="item['label']" :value="item['label']" />
        </el-select>
      </el-form-item>
      <el-form-item label="渠道">
        <el-select v-model="search.qudao" placeholder="请选择" clearable style="width: 120px;">
          <el-option v-for="(item,index) in qudao" :key="index" :label="item['label']" :value="item['label']" />
        </el-select>
      </el-form-item>
      <el-form-item label="顾虑">
        <el-select v-model="search.gulv" placeholder="请选择" clearable style="width: 120px;">
          <el-option v-for="(item,index) in gulv" :key="index" :label="item['label']" :value="item['label']" />
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="search.leixing" placeholder="请选择" clearable style="width: 120px;">
          <el-option  label="咨询时间" value="1" />
          <el-option  label="登记时间" value="2" />
          <el-option  label="预约时间" value="3" />
          <el-option  label="到诊时间" value="4" />
          <el-option  label="回访时间" value="5" />
        </el-select>
      </el-form-item>
      <el-form-item label="起始">
        <el-date-picker v-model="search.start_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" clearable  style="width: 120px;"/>
      </el-form-item>
      <el-form-item label="截止">
        <el-date-picker v-model="search.end_time" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" clearable  style="width: 120px;"/>
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="getList" icon="Search">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
<!--  搜索-->
  <!--    tab-->
  <div class="mt-1 dis-flex">
    <el-button icon="Plus" @click="dialogVisible = true" type="primary">添加患者</el-button>
    <el-button @click="ExportXlsx" icon="TakeawayBox" type="primary">导出</el-button>
    <el-upload
      ref="uploadRef"
      class="ml-1"
      action=""
      :limit="1"
      accept=".xlsx, .xls"
      :show-file-list="true"
      :on-change="ImportXlsx"
      :auto-upload="false">
      <template #trigger>
        <el-button icon="DocumentAdd"  type="primary" v-loading="ImportLoading">导入</el-button>
      </template>
    </el-upload>
  </div>
  <!--    tab-->
  <!--  患者列表-->
  <div class="dis-flex">
    <el-table class="tabb" :data="tableData" @row-click="rowClick" v-loading="loading" empty-text="暂无更多患者" highlight-current-row @current-change="handleCurrentChange">
      <el-table-column prop="name" label="姓名" width="120"/>
      <el-table-column prop="mobile" label="手机号" width="120"/>
<!--      <el-table-column prop="wechat" label="微信号" width="120"/>-->
      <el-table-column prop="yiyuan" label="医院" width="120"/>
      <el-table-column prop="status" label="状态" width="120"/>
      <el-table-column prop="qudao" label="渠道" width="120"/>
      <el-table-column prop="kefu" label="客服" width="120"/>
      <el-table-column prop="gulv" label="顾虑" width="120"/>
      <el-table-column prop="zixun_time" label="咨询时间" minWidth="120"/>
      <el-table-column prop="dengji_time" label="登记时间" width="120"/>
      <el-table-column prop="yuyue_time" label="预约时间" width="120"/>
      <el-table-column prop="daozhen_time" label="到诊时间" width="120"/>
      <el-table-column prop="huifang_time" label="回访时间" width="120"/>
      <el-table-column prop="create_time" label="创建时间" width="180"/>
    </el-table>
    <div style="min-width: 200px;" class="tabb ml-1 saveInfo">
      <div v-if="saveView">
        <div class="mt-1"><span>姓名:</span>{{saveView['name']}}</div>
        <div class="mt-1"><span>手机号:</span>{{saveView['mobile']}}</div>
        <div class="mt-1"><span>微信号:</span>{{saveView['wechat']}}</div>
        <div class="mt-1"><span>咨询时间:</span>{{saveView['zixun_time']}}</div>
        <div class="mt-1"><span>登记时间:</span>{{saveView['dengji_time']}}</div>
        <div class="mt-1"><span>预约时间:</span>{{saveView['yuyue_time']}}</div>
        <div class="mt-1"><span>到诊时间:</span>{{saveView['daozhen_time']}}</div>
        <div class="mt-1"><span>回访时间:</span>{{saveView['huifang_time']}}</div>
        <div class="mt-1"><span>状态:</span>{{saveView['status']}}</div>
        <div class="mt-1"><span>渠道:</span>{{saveView['qudao']}}</div>
        <div class="mt-1"><span>顾虑:</span>{{saveView['gulv']}}</div>
        <div class="mt-1">备注信息
          <el-input class="mt-1" v-model="saveView['notes']" type="textarea" />
        </div>
        <div class="mt-2" style="display: flex;justify-content: space-between">
          <el-popconfirm title="确定删除?" @confirm="confirmDel(saveView['id'])">
            <template #reference>
              <el-button style="width: 30%" icon="delete" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
          <el-button style="width: 60%" icon="DocumentChecked" type="warning" @click="saveInfo(saveView)">保存</el-button>
        </div>
      </div>
    </div>

  </div>
  <div class="dis-flex justify-content-center">
    <JdyPublicFooter :total="total" @currentChange="currentChange"></JdyPublicFooter>
  </div>

  <!--  患者列表-->
</template>

<script lang="ts" setup>
import Excel from '../../core/Excel';
const { exportExcelTable, readFile } = Excel();
//引入jdy-public-footer
import JdyPublicFooter from "../../components/jdy-public-footer/jdy-public-footer.vue";
import * as XLSX from 'xlsx' // Vue3 版本
import {getCurrentInstance, onMounted, ref,reactive} from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import {ElMessage} from "element-plus";
const {proxy}: any = getCurrentInstance();
const tableData = ref([])
const total = ref(0);
//获取patient列表
const loading = ref(false);
const getList = () => {
  loading.value = true;
  const post = {};
  if(search.name) post['name'] = search.name;
  if(search.yiyuan) post['yiyuan'] = search.yiyuan;
  if(search.mobile) post['mobile'] = search.mobile;
  if(search.wechat) post['wechat'] = search.wechat;
  if(search.status) post['status'] = search.status;
  if(search.qudao) post['qudao'] = search.qudao;
  if(search.kefu) post['kefu'] = search.kefu;
  if(search.gulv) post['gulv'] = search.gulv;
  if(search.notes) post['notes'] = search.notes;
  if(search.leixing && search.start_time && search.end_time){
    post['leixing'] = search.leixing;
    post['start_time'] = search.start_time;
    post['end_time'] = search.end_time;
  }
  proxy.$axios.sendAjax(post, 'patient/getList').then((res) => {
    if (res.code == 0) {
      tableData.value = res.data.data;
      total.value = res.data.total;
      loading.value = false;
    }
  })
}
const currentChange = (page) => {
  proxy.$axios.sendAjax({
    page:page,
  }, 'patient/getList').then((res) => {
    tableData.value = res.data.data;
  })
}
//添加患者信息
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  yiyuan:'',
  mobile: '',
  wechat: '',
  zixun_time: '',
  dengji_time: '',
  yuyue_time: '',
  daozhen_time: '',
  huifang_time: '',
  status: '',
  qudao: '',
  kefu: '',
  gulv: '',
  notes: '',
})
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入患者姓名', trigger: 'blur' }
  ],
  yiyuan: [
    { required: true, message: '请选择医院', trigger: 'change' }
  ],
  kefu: [
    { required: true, message: '请选择客服', trigger: 'change' }
  ],
})
const dialogVisible = ref(false);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      proxy.$axios.sendAjax(ruleForm, 'patient/add').then((res) => {
        if (res.code == 0) {
          getList();
          dialogVisible.value = false;
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
//end

//点击行事件
const rowClick = (row: any) => {
  saveView.value = row;

}
//修改行事件
const saveView = ref(null);
const confirmDel = (id) => {
  proxy.$axios.sendAjax({
    id:id
  }, 'patient/del').then((res) => {
    if (res.code == 0) {
      getList();
    }
  })
}
const saveInfo = (data) => {
  proxy.$axios.sendAjax({
    id:data.id,
    notes:data.notes,
  }, 'patient/save').then((res) => {
    if (res.code == 0) {
      ElMessage.success('保存成功');

    }
  })
}

//搜索
const search = reactive({
  name: '',
  yiyuan:'',
  mobile: '',
  wechat: '',
  zixun_time: '',
  dengji_time: '',
  yuyue_time: '',
  daozhen_time: '',
  huifang_time: '',
  status: '',
  qudao: '',
  kefu: '',
  gulv: '',
  notes: '',
  leixing:'',
  start_time:'',
  end_time:'',
})
//导出数据
const ExportXlsx = () => {
  const titleArr=["姓名","手机号","微信号","医院","状态","渠道","客服","顾虑","咨询时间","登记时间","预约时间","到诊时间","回访时间","创建时间"]
  const fields = [
    "name", "mobile", "wechat", "yiyuan", "status", "qudao", "kefu", "gulv", "zixun_time", "dengji_time", "yuyue_time", "daozhen_time", "huifang_time", "create_time"
  ]
  exportExcelTable(tableData.value , '患者数据', titleArr, 'sheetname', fields);
}
const ImportLoading = ref(false);
const uploadRef = ref()
//导入数据
const ImportXlsx = async ev => {

  ImportLoading.value = true;
  const file = ev.raw; //这里面就是数据
  const data = await readFile(file);
  const workbook = XLSX.read(data, { type: "binary" });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const arr = XLSX.utils.sheet_to_json(worksheet);

  // 一次发送10条数据
  const batchSize = 10; // 发送的批次大小
  const delay = 1000; // 延时时间（以毫秒为单位）
  const delayAsync = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const processBatches = async () => {
    for (let i = 0; i < arr.length; i += batchSize) {
      const batch = arr.slice(i, i + batchSize);
      sendBatch(batch);
      if (i + batchSize < arr.length) {
        await delayAsync(delay);
      }
    }
  };
  await processBatches();
  uploadRef.value!.clearFiles()	//该方法就是清理上传列表
  ImportLoading.value = false;
  //导入完成后刷新列表
  getList();
}
//发送批次数据
const sendBatch = (item) => {
  proxy.$axios.sendAjax(item, 'patient/excelAdd');
}
onMounted(() => {
  getMap();
  getList()
})
const kefu = ref([]);
const gulv = ref([]);
const qudao = ref([]);
const status = ref([]);
const yiyuan = ref([]);
const getMap = () => {
  proxy.$axios.sendAjax({}, 'patient/getMap').then((res) => {
    if (res.code == 0) {
      kefu.value = res.data.kefu;
      gulv.value = res.data.gulv;
      qudao.value = res.data.qudao;
      status.value = res.data.status;
      yiyuan.value = res.data.yiyuan;
    }

  })
}
//表格选中效果
const currentRow = ref()
const handleCurrentChange = (val) => {
  currentRow.value = val
}
</script>

<style scoped>
/* 选中某行时的背景色*/
.el-table__body tr.current-row > td {
  color: #28A458;
  background: red !important;
}
.saveInfo{
  font-size: 15px;
  color: #333
}
.saveInfo span{
  display: inline-block;
  width: 80px;
  text-align: left;
}
</style>
