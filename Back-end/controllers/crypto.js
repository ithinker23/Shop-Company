const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const initVector = crypto.randomBytes(16)
const securityKey = crypto.randomBytes(32).toString("hex")

module.exports ={

    encrypt: async (data)=>{
        var cipher = crypto.createCipheriv(algorithm,  Buffer.from(securityKey, "hex"), initVector)
        var encryptedData = cipher.update(data, "utf-8", "hex") + cipher.final('hex');
        return encryptedData
    },
 
    decrypt: async (data)=>{
        var decipher = crypto.createDecipheriv(algorithm, Buffer.from(securityKey, "hex"), initVector);
        var decryptedData = decipher.update(data, "hex", "utf-8") + decipher.final("utf-8");
        return decryptedData
    }

}

