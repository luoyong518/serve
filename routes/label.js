/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-28 09:48:50
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-06-01 17:28:52
 */
const express = require('express')
const router = express.Router()
const Labels = require('./../model/label')
const tokenConfig = require('./../utils/tokens')

/**
 * @name: 增加标签
 * @param {String} name
 * @param {String} note  
 * @Author: 471826078@qq.com
 */
/**
 * @swagger
 * /addLabel:
 *  post:
 *      tags: 
 *           - 标签管理
 *      summary:  增加
 *      parameters:
 *        - name: name
 *          in: query
 *          required: true
 *          type: string
 *        - name: note
 *          in: query
 *          required: false
 *          type: string
 * 
 */
router.post('/addLabel', (req, res, next) => {
        const { name, note } = req.body
        Labels.find({ name }, (err, doc) => {
            if (err) {
                res.send({ isSuccess: false, message: '添加失败' });
            } else {
                if (doc.length > 0) {
                    res.send({ isSuccess: false, message: '此标签已存在' });
                } else {
                    const newLabels = new Labels({
                        name,
                        note
                    })
                    newLabels.save(err => {
                        const datas = err ? { isSuccess: false, message: '添加失败' } : { isSuccess: true, message: '添加成功' }
                        res.send(datas);
                    })
                }
            }
        })

    })
    /**
     * @name: 删除标签
     * @param {String} id 
     * @Author: 471826078@qq.com
     */
    /**
     * @swagger
     * /deleteLabel:
     *  post:
     *      tags: 
     *           - 标签管理
     *      summary:  删除
     *      parameters:
     *        - id: name
     *          in: query
     *          required: true
     *          type: string
     * 
     */
router.post('/deleteLabel', (req, res, next) => {
        const { id } = req.body
        Labels.findByIdAndDelete({ _id: id }, (err, doc) => {
            if (err) {
                res.send({ isSuccess: false, message: '删除失败' });
            } else {
                res.send({ isSuccess: true, message: '删除成功' });
            }
        })

    })
    /**
     * @name: 修改标签
     * @param {String} id
     * @param {String} name 
     * @param {String} note  
     * @Author: 471826078@qq.com
     */
    /**
     * @swagger
     * /updateLabel:
     *  post:
     *      tags: 
     *           - 标签管理
     *      summary:  修改
     *      parameters:
     *        - name: id
     *          in: query
     *          required: true
     *          type: string
     *        - name: name
     *          in: query
     *          required: true
     *          type: string
     *        - name: note
     *          in: query
     *          required: false
     *          type: string
     * 
     */
router.post('/updateLabel', (req, res, next) => {
        const { id, name, note } = req.body
        const whereStr = { _id: id }
        const updateStr = { name, note }
        Labels.findOneAndUpdate(whereStr, updateStr, (err, doc) => {
            if (err) {
                res.send({ isSuccess: false, message: '修改失败' });
            } else {
                res.send({ isSuccess: true, message: '修改成功' });
            }
        })
    })
    /**
     * @name: 标签查询
     * @param {} 
     * @Author: 471826078@qq.com
     */
    /**
     * @swagger
     * /query:
     *  get:
     *      tags: 
     *           - 标签管理
     *      summary:  查询
     * 
     */
router.get('/query', (req, res, next) => {
    Labels.find({}, (err, doc) => {
        if (err) {
            res.send({ isSuccess: false, message: '查询失败' })
        } else {
            res.send({ isSuccess: true, data: doc })
        }
    })
})
module.exports = router