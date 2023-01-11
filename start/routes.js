const express = require('express')
const userRouter = require('../routes/user')
const customerRouter = require('../routes/customer')
const authRouter = require('../routes/auth')
const orderRouter = require('../routes/order')
const employeeRouter = require('../routes/employee')
const balanceRouter = require('../routes/balance')
const attendenceRouter = require('../routes/attendence')
const { errorHandler } = require('../middleware/error')

module.exports = function (app){
    app.use(express.json())
    app.use('/api/attendence/', attendenceRouter)
    app.use('/api/auth/', authRouter)
    app.use('/api/balances/', balanceRouter)
    app.use('/api/customers/', customerRouter)
    app.use('/api/employees/', employeeRouter)
    app.use('/api/orders/', orderRouter)
    app.use('/api/users/', userRouter)
    app.use(errorHandler)
}
