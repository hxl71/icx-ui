<template>
    <div class="app-container">
<el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="tableName" width="180" align="center">
        <template slot-scope="scope">
          {{scope.row.tableName}}
        </template>
      </el-table-column>
      <el-table-column label="engine" width="180" align="center">
        <template slot-scope="scope">
          {{scope.row.engine}}
        </template>
      </el-table-column>
      <el-table-column label="createTime" width="250" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.createTime}}</span>
        </template>
      </el-table-column>
      <el-table-column label="tableComment" width="180" align="center">
        <template slot-scope="scope">
          {{scope.row.tableComment}}
        </template>
      </el-table-column>

    </el-table>
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

</style>


