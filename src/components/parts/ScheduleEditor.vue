<template>
	<div>
		<div style="
		min-height: 6em;
		display: grid;
		grid-template-columns: 1.5em repeat(44, 1fr);
		border: 1px solid;">

			<div class="centerAlign" style="background-color: #bbbbbb; grid-row: span 5;"><slot/></div>

			<div
					v-for="h in gridArrHeader" v-bind:key="'header' + h[0]"
					:style="{'grid-column': 'span '+ h[1]}"
					style="text-align: left;border-left: 1px solid; background-color: #aaaaaa; color: #fff;"
			>
				{{h[0]}}
			</div>

			<div
					v-for="(workArr, index) in gridArrSorted"
					:key="'w' + index"
					:style="{
						'grid-column-start': workArr[0] + 1,
						'grid-column-end': 'span '+workArr[1],
						}"
					class="ScheduleItem centerAlign"
			>{{workArr[2]}}
			</div>

		</div>
		<div>
			<textarea v-if="isEditMode" style="height: 4em; width: 99%" v-model="inputPlan"></textarea>
		</div>

	</div>
</template>

<script>
	const time_start = '0845';
	const time_end = '1945';

	export default {
		name: "ScheduleEditor",
		props:{
			isEditMode: Boolean
		},
		data(){
			return{
				inputPlan: "0845 1000 MT・報告・連絡"

			}
		},
		computed:{
			gridArr: function () {
				let res = [];
				for (let i = 0; i < this.dayArrPlan.length; i++) {
					res.push(this.workArrayToParams(this.dayArrPlan[i]))
				}
				return res;
			},
			gridArrSorted: function(){
				let gridArr = this.gridArr.slice();
				/*				gridArr.sort(function (a,b) {
									return a[0] - b[0];
								})*/
				let newGridArr = [];
				while(gridArr.length) {
					newGridArr.push(gridArr[0]);
					gridArr[0] = null;
					for (let i = 0; i < gridArr.length; i++) {
						if(!gridArr[i]) continue;
						if(gridArr[i][0] >= newGridArr[newGridArr.length-1][1] - 1){
							newGridArr.push(gridArr[i]);
							gridArr[i] = null;
						}
					}
					gridArr = gridArr.filter(v => v);
				}
				return newGridArr;
			},
			minuteStampStart: function () {
				console.log('minuteStampStart' + time_start);
				return this.timeToMinuteStamp(time_start);
			},
			minuteStampEnd: function () {
				console.log('minuteStampEnd' + time_end);
				return this.timeToMinuteStamp(time_end);
			},
			gridArrHeader: function () {
				let res = [];
				for (let handle = this.minuteStampStart; handle < this.minuteStampEnd; handle+=15) {
					let hourHandle = Math.floor(handle/60);
					let hourLast = res.length ? Math.floor(res[res.length-1][0]) : -1;
					if(hourHandle !== hourLast){
						res.push([hourHandle, 0])
					}
					res[res.length-1][1]++;
				}
				return res;
			},
			dayArrPlan: function () {
				let raw = this.inputPlan.trim().replace(/[\u3000 ]+/g,' ');
				raw = raw.replace("\r", '').split("\n");
				for (let i = 0; i < raw.length; i++){
					let splited = raw[i].split(' ');
					raw[i] = splited.slice(0,2);
					let work = splited.slice(2);
					raw[i][2] = work.join(' ');
				}
				return raw;
			}
		},
		methods:{
			timeToMinuteStamp: function (timeStr4) {
				console.log(timeStr4);
				if(!timeStr4) return 0;
				return parseInt(timeStr4.substr(0, 2))
					* 60 + parseInt(timeStr4.substr(2, 2));
			},
			timeToGridNo: function (timeStr4, shift = 0) {
				console.log('timeToGridNo', time_end, time_start);
				let timeTotal =
					this.timeToMinuteStamp(time_end) - this.timeToMinuteStamp(time_start);
				console.log('timeToGridNo 2', timeStr4 + shift, time_start);
				let timeInput = this.timeToMinuteStamp(timeStr4) + shift - this.timeToMinuteStamp(time_start);
				let num = timeTotal/15;
				let rate = timeInput / timeTotal;
				return Math.floor(num * rate) + 1;
			},
			workArrayToParams: function (arr) {
				let time1 = arr[0];
				let time2 = arr[1];
				let note = arr[2];
				let no1 = this.timeToGridNo(time1);
				let no2 = this.timeToGridNo(time2, -1) - no1;
				return [no1, no2, note];
			}
		}
	}
</script>

<style>
	.ScheduleItem{
		border: 1px solid;
	}
	.centerAlign{
		align-items: center;
		justify-content: center;
		display: flex;
	}
</style>
