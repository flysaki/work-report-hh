<template>
	<div class="editAndShow">
		<div v-if="!isBigMode" style="display: inline-block">
			<input v-if="isEditMode" type="text" v-model="inputText" :placeholder="placeholder">
			<div v-if="!isEditMode">{{inputText || (placeholder+'未入力')}}</div>
		</div>
		<div v-if="isBigMode">
			<div style="padding: 0.3em 1em; background-color: #bbbbbb; color: #fff; width: fit-content">{{placeholder}}</div>
			<textarea v-if="isEditMode" v-model="inputText" style="height: 3em; width: 100%;"></textarea>
			<div v-if="!isEditMode" class="centerAlign" style="white-space: pre; border: 1px solid;min-height: 3em;">{{inputText || (placeholder+'未入力')}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			isEditMode: Boolean,
			isBigMode: Boolean,
			placeholder: String,
		},
		name: "EditAndShow",
		data(){
			return{
				inputText: ""
			}
		},
		created() {
		}
	}
</script>

<style scoped>

</style>
