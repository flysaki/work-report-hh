<template>
	<div class="a4">
		<div style="display: grid; grid-template-columns: 4fr 6fr">
			<div style=""></div>
			<div style="background-color: #bbbbbb">報告</div>
			<div style="background-color: #bbbbbb">予定</div>
			<div style="">名前：</div>
		</div>

		<hr/>

		<div style="display: grid; grid-template-columns: 1.5em repeat(44, 1fr)">
			<div style="background-color: #bbbbbb; grid-row: span 2">予定</div>
			<div>8</div>
			<div
					v-for="h in [9,10,11,12,13,14,15,16,17,18]" v-bind:key="h"
					style="grid-column: span 4"
			>
				{{h}}
			</div>
			<div style="grid-column: span 3">19</div>

			<div
					v-for="(workArr, index) in gridArr"
					:key="'w' + index"
					:style="{
						'grid-column-start': workArr[0] + 1,
						'grid-column-end': 'span '+workArr[1],
						}"
					style="border: 1px solid"
			>{{workArr[2]}}</div>

		</div>

	</div>
</template>

<script>
	const time_start = '0845';
	const time_end = '1945';
	const timeToMinuteStamp = function (timeStr4) {
		return parseInt(timeStr4.substr(0, 2))
			* 60 + parseInt(timeStr4.substr(2, 2));
	}
	const timeToGridNo = function (timeStr4, shift = 0) {
		let timeTotal =
			timeToMinuteStamp(time_end) - timeToMinuteStamp(time_start);
		let timeInput = timeToMinuteStamp(timeStr4 + shift) - timeToMinuteStamp(time_start);
		let num = timeTotal/15;
		let rate = timeInput / timeTotal;
		return Math.floor(num * rate) + 1;
	}
	const workArrayToParams = function (arr) {
		let time1 = arr[0];
		let time2 = arr[1];
		let note = arr[2];
		let no1 = timeToGridNo(time1);
		let no2 = timeToGridNo(time2, -1) - no1;
		return [no1, no2, note];
	}
	export default {
		name: "WorkReport",
		data() {
			return {
				day: [
					['0845', '1000', 'MT・報告・連絡'],
					['1000', '1130', 'コーディング'],
					['0915', '1200', 'ワイドスクランブル'],
					['1300', '1445', 'ドラマ再放送']
				],
				ccc: 12,
				ddd: 5,
			}
		},
		created() {
			console.log(
				workArrayToParams(this.day[0])
			)
		},
		computed:{
			gridArr: function () {
				let res = [];
				for (let i = 0; i < this.day.length; i++) {
					res.push(workArrayToParams(this.day[i]))
				}
				return res;
			}
		}
	}
</script>

<style scoped>
	.a4 {
		border: 1px solid #cccccc;
		box-sizing: border-box;
		padding: 5%;
	}
</style>
