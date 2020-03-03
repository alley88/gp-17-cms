<template>
    <div>
        one
        <el-form :model="onemodel">
            <el-form-item>
                <el-input type="text" v-model="onemodel.inputVal"></el-input>
            </el-form-item>
        </el-form>
    </div>  
</template>


<script>
export default {
    name:"One",
    data(){
        return {
            onemodel:{
                inputVal:""
            }
        }
    }
}
</script>