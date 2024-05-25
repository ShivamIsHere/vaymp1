const mongoose = require("mongoose");

const kuchviSchema = new mongoose.Schema({
    // refund:{
    //     type: Array,
    //     default:[]
    // },
//     productdata:{
//       type: Object,
//       default:{}
//   },
img:{
    type: String,
    default:""
},
  orderId: {
    type: String,
    default:""

  },
  productId: {
    type: String,
    default:""

  },
  size: {
    type: String,
    default:""

  },
  qty:{
    type: Number,
    default:1

  },
  userId: {
    type: String,
    default:""

  },
  status: {
    type: String,
    default:""
  },
  shopId: {
    type: String,
    default:""

  },
  shopPrice: {
    type: Number,
    default:0

  },
  markedPrice: {
    type: Number,
    default:0

  },
  
  discountPrice: {
    type: Number,
    default:0
  },
  shippingAddress:{
    type: Object,
    default:{}
},
delivered:{
    type: Boolean,
    default:false
},
cancel:{
    type: Boolean,
    default:false
},
return1:{
    type: Boolean,
    default:false
},
refund:{
    type: Boolean,
    default:false
},
refundStatus:{
    type: Boolean,
    default:false
},
paidAt:{
    type: Date,
    default: Date.now(),
},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Kuchvi", kuchviSchema);
