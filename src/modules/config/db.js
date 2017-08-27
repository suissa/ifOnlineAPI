const mongoose = require('mongoose')

const DB = 'ifonline'
mongoose.connect('mongodb://hc3:root@ds025973.mlab.com:25973/sgvdb')
mongoose.Promise = require('bluebird')

const db = mongoose.connection

db.on('error', (err) => console.log('Erro de conexao.', err) )
db.on('open', () => console.log('Conexão aberta.') )
db.on('connected', (err) => console.log('Conectado na base: ', DB) )
db.on('disconnected', (err) => console.log('Desconectado') )

export default db;

