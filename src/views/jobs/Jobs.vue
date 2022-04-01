<template>
  <h1>this is job page</h1>
  <div v-for="job in jobs" :key="job.id">
<router-link :to="{name:'jobDetail',params:{id:job.id}}">
  <h1>{{job.title}}</h1>
</router-link>
</div>
</template>

<script>
export default {
      data(){
        return{
          jobs:[
            {id:"1",title:"manager",detail:"creative code"},
            {id:"2",title:"designer",detail:"creative code"},
            {id:"3",title:"developer",detail:"creative code"}
          ]
        }
      }
}
</script>

<style>

</style>