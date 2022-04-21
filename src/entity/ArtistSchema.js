const Artist = require('../models/Artist').Artist

const EntitySchema =  require('typeorm').EntitySchema

module.exports = new EntitySchema( {
    name:"Artist",
    target:Artist,
    columns:{
        id:{
            primary:true,
            type:'int',
            generated:true
        },
        name:{
            type:"varchar",
        },
        last_name:{
            type:"varchar",
        },
        
        artist_name:{
            type:"varchar",
        },

        gender_music:{
            type:"varchar",
        },

        birth_place:{
            type:"varchar",
        },

        description:{
            type:"varchar",
        }



    }
})
