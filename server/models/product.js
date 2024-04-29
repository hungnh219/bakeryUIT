const { default: mongoose } = require("mongoose");

var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        index: true,
        trim: true,
    },
    // duoc tao ra tu ten cua san pham
    // dung de tao duong dan(link)
    // Bông Lan trứng muối -> slug: bong-lan-trung-muoi
    slug:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        // required: true,
    },
    quantity:{
       type: Number,
       default: 0, 
    },
    sold:{
        type: Number,
        default: 0,
    },
    image:{
        type: String,
        // required: true,
    },
    rating:[
        {
            star: {type: Number},
            postedBy: {type: mongoose.Types.ObjectId, ref: 'User'},
            comment: {type: String},
        }
    ],
    totalRatings:{
        type: Number,
        default: 0,
    }
});

//Export the model
module.exports = mongoose.model('Product', productSchema);