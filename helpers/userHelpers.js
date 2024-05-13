const db = require('../config/database');
const bcrypt = require('bcrypt');
const collections = require('../config/collections');

module.exports = {
    addOneUser: (user) => {
        return new Promise(async (resolve, reject) => {
            const usernameExist = await db.get().collection(collections.USER_COLLECTIONS).findOne({username: user.username});
            const emailExist = await db.get().collection(collections.USER_COLLECTIONS).findOne({email: user.email});
            
            if (usernameExist) {
                reject('Username already exist');
            } else if (emailExist) {
                reject('Email already exist')
            } else {
                await bcrypt.hash(user.password, 10, async (err, hash) => {

                    try {
                        user.password = hash
                        await db.get().collection(collections.USER_COLLECTIONS).insertOne(user);
                    } catch {
                        reject('Server Error')
                    }

                    resolve()
                    
                })
            }
        })
    },
    getAllUsers: () => {
        return new Promise (async (resolve, reject) => {
            const allUsers = await db.get().collection(collections.USER_COLLECTIONS).find().toArray();
            resolve(allUsers)
        })
    },
    deleteOneUser: (username) => {
        return new Promise(async (resolve, reject) => {
            await db.get().collection(collections.USER_COLLECTIONS).deleteOne({username})
            resolve()
        })
    },
    getOneUser: (username) => {
        return new Promise(async (resolve, reject) => {
            const user = await db.get().collection(collections.USER_COLLECTIONS).findOne({username});
            if(user) resolve(user);
            else reject();
        })
    },
    updateOne: (username, userData) => {
        return new Promise(async (resolve, reject) => {
            await db.get().collection(collections.USER_COLLECTIONS).updateOne({username}, {$set: userData})
                .then(() => {
                    resolve();
                })
        })
    }
}