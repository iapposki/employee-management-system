import jwt from 'jsonwebtoken'
import {config} from './config/index'

const token = jwt.sign({data: "token data"}, config.jwtSecret, { expiresIn: '1d'})

console.log(token)