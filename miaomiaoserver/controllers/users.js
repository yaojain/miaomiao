var {
	Email
} = require('../untils/config.js');
var UserModel = require("../models/users.js");
var login = async(req, res, next) => {

}
//注册验证
var register = async(req, res, next) => {
	var {
		username,
		password,
		email,
		verify
	} = req.body;
	console.log(req.body)
	if(req.session.verify !== verify || req.session.email !== email) {
		res.send({
			msg: '验证码错误',
			status: -1
		})
	}
	var result = await UserModel.save({
		username,
		password,
		email
	})
	console.log(result)
	if(result) {
		res.send({
			msg: '注册成功',
			status: 0
		})
	} else {
		res.send({
			msg: '注册失败',
			status: -1
		})
	}
}
//邮箱验证
var verify = async(req, res, next) => {
	var email = req.query.email;
	var verify = Email.verify;
	console.log(verify)
	req.session.verify = verify;
	req.session.email = email;
	var mailOptions = {
		from: '喵喵网 727947194@qq.com', // sender address
		to: email, // list of receivers
		subject: "喵喵网邮箱验证码", // Subject line
		text: "验证码" + verify // plain text body
	}
	Email.transporter.sendMail(mailOptions, (err) => {
		if(err) {
			res.send({
				msg: '验证码发送失败',
				status: -1
			})
		} else {
			res.send({
				msg: '验证码发送成功',
				status: 0
			})
		}
	});

}
var logout = async(req, res, next) => {
	
}
var getUser = async(req, res, next) => {

}
var findPassword = async(req, res, next) => {

}
module.exports = {
	login,
	register,
	verify,
	logout,
	getUser,
	findPassword
}