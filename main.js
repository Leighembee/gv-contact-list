const { db } = require('./server/db/models')
const app = require('./server')
const PORT = 1337

db.sync()
  .then(() => {
    console.log('database synced')
    app.listen(PORT, () => console.log(`server is being served on port ${PORT}`))
  })
