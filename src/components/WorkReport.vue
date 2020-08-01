<template>
	<div>
		<div class="ctrl">
			<button @click="isEditMode = !isEditMode">編集モード切り替え</button>
		</div>
		<div class="a4">
			<div style="display: grid; grid-template-columns: 4fr 6fr">
				<EditAndShow :is-edit-mode="isEditMode" placeholder="日付"></EditAndShow>
				<div style="background-color: #bbbbbb">報告</div>
				<div style="background-color: #bbbbbb">予定</div>
				<EditAndShow :is-edit-mode="isEditMode" placeholder="名前"></EditAndShow>
			</div>

			<hr/>
			<ScheduleEditor :is-edit-mode="isEditMode">予定</ScheduleEditor>
			<ScheduleEditor :is-edit-mode="isEditMode">実績</ScheduleEditor>

			<EditAndShow placeholder="目標" is-big-mode :is-edit-mode="isEditMode"></EditAndShow>
			<EditAndShow placeholder="成果" is-big-mode :is-edit-mode="isEditMode"></EditAndShow>
			<hr/>
			<EditAndShow placeholder="問題点" is-big-mode :is-edit-mode="isEditMode"></EditAndShow>
			<EditAndShow placeholder="原因" is-big-mode :is-edit-mode="isEditMode"></EditAndShow>
			<EditAndShow placeholder="対策" is-big-mode :is-edit-mode="isEditMode"></EditAndShow>

		</div>


	</div>
</template>

<script>

	import ScheduleEditor from "./parts/ScheduleEditor";
	import EditAndShow from "./parts/EditAndShow";
	export default {
		name: "WorkReport",
		components: {EditAndShow, ScheduleEditor},
		data() {
			return {
				isEditMode: true,
			}
		},
		created() {
/*			console.log(
				this.gridArrSorted
			)*/
		},
		computed:{

		},
		methods:{

		}
	}
</script>

<style scoped>
	.a4 {
		border: 1px solid #cccccc;
		box-sizing: border-box;
		padding: 5%;
	}

	@media print {
		.ctrl{
			display: none;
		}

		.a4{
			border: none;
			padding: inherit;
		}
	}
</style>
