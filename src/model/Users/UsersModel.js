//External Import
const { model, Schema } = require("mongoose");

const UsersSchema = new Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email Address: ${prop.value}`,
      },
      unique: true,
    },
    Phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/.test(v);
        },
        message: (prop) => `Invalid Phone Number: ${prop.value}`,
      },
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Portfolio: {
      type: String,
      default: "",
    },
    Dejection: {
      type: String,
      default: "",
    },
    Address: {
      type: String,
      default: "",
    },
    CarrierObjective: {
      type: String,
      default: "",
    },
    Education: {
      type: Array,
      default: [],
    },
    Skills: {
      type: Array,
      default: [],
    },
    Experience: {
      type: Array,
      default: [],
    },
    Projects: {
      type: Array,
      default: [],
    },
    Roles: {
      type: String,
      enum: ["User", "MODERATOR", "ADMIN"],
      default: "User",
      required: true,
    },
    AccountStatus: {
      type: String,
      enum: ["PENDING", "ACTIVE", "REJECTED"],
      default: "ACTIVE",
      required: true,
    },
    Image: {
      type: String,
      default:
        "https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png",
    },
  },
  { versionKey: false, timestamps: true },
);

const UsersModel = model("User", UsersSchema);
module.exports = UsersModel;
