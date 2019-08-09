const Dev = require('../models/Dev')

module.exports = {
  async store(req, res) {
    const { userId } = req.params
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(userId)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev não encontrado.' })
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('match')
    }

    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    res.json(loggedDev)
  },
}
