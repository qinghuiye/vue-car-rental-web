<template>
	<el-upload
		class="avatar-uploader"
		action="https://upload-z2.qiniup.com"
		:data="uploadData"
		:show-file-list="false"
		:on-success="handleAvatarSuccess"
		:before-upload="beforeAvatarUpload"
	>
		<img v-if="imageUrl" :src="imageUrl" class="avatar" />
		<i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>
</template>

<script>
import { GetQiniuToken } from "@/api/common";
export default {
	name: "",
	components: {},
	data() {
		return {
			imageUrl: "",
			uploadData: {}
		};
	},
	beforeMount(){
		this.requestFlag && this.getQiniuToken();
	},
	methods: {
		getQiniuToken() {
			// 在工作中，
			const requestData = {
				ak: "mv_DYWW5zeMASDgE_mpVmZvfeKU6THuXH2OjVGxV",
				sk: "58O95lOOx6TtmXUm4ro5oZVmviA6dGsR7SCccZBw",
				buckety: "zfwcode-web-cars"
			};
			GetQiniuToken(requestData).then(response => {
				const data = response.data;
				if (data.token) {
					this.$store.commit("common/SET_UPLOAD_TOKEN", data.token)
				}
				console.log(data)
			});
		},
		handleAvatarSuccess(res, file) {
			this.imageUrl = `http://rcxt2mpd4.hn-bkt.clouddn.com/${res.key}`;
			this.$emit("update:value", this.imageUrl)
		},
		// 上传之前
		beforeAvatarUpload(file) {
			const isJPG = file.type === "image/jpeg";
			const isLt2M = file.size / 1024 / 1024 < 2;
			if (!isJPG) {
				this.$message.error("上传头像图片只能是 JPG 格式!");
			}
			if (!isLt2M) {
				this.$message.error("上传头像图片大小不能超过 2MB!");
			}
			let fileName = file.name;
			let key = encodeURI(fileName);
			this.uploadData.key = key;
			this.uploadData.token = this.$store.state.common.upload_token;
			console.log(this.fileName)
			return isJPG && isLt2M;
		}
	},
	props: {  // 接收到的数据属于“静态数据”，是单向数据，不能反向修改
		imgUrl: {
			type: String,
			default: ""
		},
		requestFlag: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		imgUrl: {
			handler(newValue){
				this.imageUrl = newValue;
			}
		}
	}
};
</script>
<style lang='scss'>
</style>