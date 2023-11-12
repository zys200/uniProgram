<template>
	<div class="box">
		<div class="content">
			<div class="left">
				<div class="top">
					<div class="name">name</div>
					<div class="phoneNum">564654654</div>
				</div>
				<div class="address">
					4654654654
				</div>
			</div>
			<div class="right">
				<text>修改</text>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.content {
			display: flex;
			flex-direction: row;
			height: 70px;
			background-color: antiquewhite;

			.left {
				flex: 6;
				display: flex;
				flex-direction: column;

				.top {
					display: flex;
					flex-direction: row;
					line-height: 35px;

					.name {
						width: 30%;
						padding-left: 10px;
					}
				}

				.address {
					padding-left: 10px;
					line-height: 35px;
				}
			}

			.right {
				flex: 1;
				text-align: center;
				line-height: 70px;
				border-left: 1px solid grey;
			}
		}
	}
</style>