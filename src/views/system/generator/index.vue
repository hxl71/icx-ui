<template>
  <div class="app-container">
    <div class="filter-container">
      <el-row :gutter="20" type="flex" justify="start">
        <el-col :span="3"><el-input></el-input></el-col>
        <el-col :span="3"><el-input></el-input></el-col>
        <el-col :span="3"><el-input></el-input></el-col>
        <el-col :span="3"><el-input></el-input></el-col>
        <el-col :span="3"><el-input></el-input></el-col>
        <el-col :span="3"><el-input></el-input></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><el-button type="primary">生成代码</el-button></el-col>
      </el-row>
    </div>
    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row height="600px" style="width: 100%;">
      <el-table-column
        type="selection"
        width="43">
      </el-table-column>
      <el-table-column align="center" label='ID'>
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="tableName"  align="center">
        <template slot-scope="scope">
          {{scope.row.tableName}}
        </template>
      </el-table-column>
      <el-table-column label="engine"  align="center">
        <template slot-scope="scope">
          {{scope.row.engine}}
        </template>
      </el-table-column>
      <el-table-column label="createTime" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.createTime}}</span>
        </template>
      </el-table-column>
      <el-table-column label="tableComment" align="center">
        <template slot-scope="scope">
          {{scope.row.tableComment}}
        </template>
      </el-table-column>

    </el-table>
    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

  </div>
</template>
<script>
import { page } from '@/api/generator'
export default {
  name: 'generator',
  data() {
    return {
      list: null,
      listLoading: true,
      params: {}
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.listLoading = true
      page(this.params).then(res => {
        this.list = res.data.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-container>div{
  margin: 10px 0px;
}
</style>


