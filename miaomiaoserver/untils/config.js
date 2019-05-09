var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Mongoose = {
	url: 'mongodb://localhost:27017/miaomiao',
	connect() {
		mongoose.connect(this.url, {
			useNewUrlParser: true
		}, (err) => {
			if(err) {
				console.log(err);
				console.log("数据库连接失败");
				return false;
			}
			console.log("数据库连接成功")
		})
	}
}
var Email = {
	config: {
		host: "smtp.qq.com",
		port: 587,
		auth: {
			user: "727947194@qq.com", // 发件邮箱 需要开通 IMAP/SMTP或者POP3/SMTP
			pass: "fjfawupwnzhrbdch" // 授权码
		}
	},
	get transporter(){
		return nodemailer.createTransport(this.config)
	},
	get verify(){
		return Math.random().toString().substring(2,6);
	}
}
module.exports = {
	Mongoose,
	Email
}