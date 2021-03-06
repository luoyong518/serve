/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-26 11:46:57
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-06-05 17:54:11
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    labels: { //标签
        type: Array
    },
    isAuthor: {
        type: Number,
        default: 0, //0：原创 ， 1：转载
    },
    isTop: { //是否置顶
        type: Number,
        default: 0, //0：原创 ， 1：转载
    },
    isPublish: {
        type: Number,
        default: 0, //0：原创 ， 1：转载
    },
    createDate: {
        type: String
    },
    imgUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    htmlContent: {
        type: String
    },
    commentCount: { //评论数
        type: Number,
        default: 0
    },
    lookCount: { //阅读次数
        type: Number,
        default: 0
    },
    likeCount: { //点赞数
        type: Number,
        default: 0
    }

})
module.exports = mongoose.model('Article', articleSchema)