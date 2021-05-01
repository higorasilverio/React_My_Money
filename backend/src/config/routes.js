const express = require('express')

module.exports = function(server) {
    //Base URL
    const router = express.Router()
    server.use('/api', router)
    //Billing cycle routes
    const BillingCycle = require('../api/billingCycle/billingCylcleService')
    BillingCycle.register(router, '/billingCycles')
}