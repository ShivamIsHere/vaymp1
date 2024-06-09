class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);

    }
    
}
module.exports = ErrorHandler


// class ErrorHandler extends Error {
//     constructor(message, statusCode, field) {
//       super(message);
//       this.statusCode = statusCode;
//       this.field = field;

//       Error.captureStackTrace(this, this.constructor);
//     }
//   }

//   module.exports = ErrorHandler;
