<template>
    <div>
        two
          <el-form :model="twomodel">
            <el-form-item>
                <el-input type="text" v-model="twomodel.inputVal"></el-input>
            </el-form-item>
        </el-form>
    </div>  
</template>

<script>
export default {
    data(){
        return {
            twomodel:{
                inputVal:""
            }
        }
    }
}
</script>