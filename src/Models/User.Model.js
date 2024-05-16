import { model, Schema } from "mongoose";
import validator from "validator";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: "true",
      minlength: [5, `The name must be at least 5 characters long.`],
      maxlength: [20, `The name must not be more then 20 characters.`],
    },
    username: {
      type: String,
      required: false,
      validate: [
        {
          validator: (value) => validator.isLength(value, { min: 3, max: 50 }),
          message: "Name must be between 3 and 50 characters.",
        },
      ],
    },
    coverphoto: {
      type: String,
      required: false,
    },
    profilephoto: {
      type: String,
      required: false,
    },
    tittle: {
      type: String,
      minLength: 0,
      required: false,
      maxLength: 300,
    },
    birthday: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
      enum: ["male", "female", "other"],
    },
    hometwon: {
      type: String,
      required: false,
      minLength: 0,
      maxLength: 50,
    },
    friendrequests: {
      required: true,
      type: Array,
      default: [],
    },
    sendrequests: {
      required: true,
      type: Array,
      default: [],
    },
    friends: {
      required: true,
      type: Array,
      default: [],
    },
    block: {
      required: true,
      type: Array,
      default: [],
    },
    homecity: {
      type: String,
      required: false,
      minLength: 0,
      maxLength: 50,
    },
    online_status: {
      type: Boolean,
      required: true,
      default: false
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email format.",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [5, `The password                                                                                                                                                                                                                                                                                                                                                  must be at least 5 characters long.`],
      maxlength: [20, `The password                                                                                                                                                                                                                                                                                                                                                  must not be more then 20 characters.`],
    },
    verificationCode: {
      type: Number,
      required: false,
    },
    note: {
      type: Array,
      required: false,
    },
    position: {
      type: String,
      required: false,
      minLength: 0,
      maxLength: 50,
    },
    relationshipstatus: {
      type: String,
      required: false,
      minLength: 0,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);
export default User;
