<template>
	<div class="box">
		<div class="top">
		</div>
		<div class="content">
			<div class="contentItem">
				<div class="checked">
					<checkbox value="checkbox1" />
				</div>
				<div class="imgs">
					<image src="../../static/iconfonts/gouwu1.png"></image>
				</div>
				<div class="dsc">
					<text>1</text>
					<text>2</text>
					<text>3</text>
				</div>
				<div class="num">
					<button class="btn">-</button>
					<text>num</text>
					<button class="btn">+</button>
				</div>
			</div>
			<div class="contentItem">
				<div class="checked">
					<checkbox value="checkbox1" />
				</div>
				<div class="imgs">
					<image src="../../static/iconfonts/gouwu1.png"></image>
				</div>
				<div class="dsc">
					<text class="tt">111111111111</text>
					<text class="tt">222222222222</text>
					<text class="tt">33333</text>
				</div>
				<div class="num">
					<button class="btn">-</button>
					<text>num</text>
					<button class="btn">+</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.top {}

		.content {

			.contentItem {
				position: relative;
				margin: 2px;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 100px;
				border-radius: 20px;
				background-color: #efe0e9;

				.checked {
					padding-left: 16px;
					width: 30px;
				}

				.imgs {
					width: 100px;
					height: 100px;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.dsc {
					margin-left: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					height: 100%;

					.tt {
						flex: 1;
						line-height: 33px;
					}
				}

				.num {
					position: absolute;
					right: 10px;
					bottom: 6px;
					display: flex;
					flex-direction: row;
					align-items: center;

					.btn {
						margin: 0 10px;
						width: 36px;
						height: 36px;
						text-align: center;
						line-height: 36px;
						border-radius: 10px;
					}
				}
			}
		}
	}
</style>