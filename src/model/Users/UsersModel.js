//External Import
const { model, Schema } = require("mongoose");

const UsersSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
    },
    FatherName: {
      type: String,
    },
    MotherName: {
      type: String,
    },
    DateofBirth: {
      type: String,
    },
    Gender: {
      type: String,
      required: true,
    },
    Religion: {
      type: String,
    },
    MaritalStatus: {
      type: String,
    },
    Nationality: {
      type: String,
    },
    NationalId: {
      type: String,
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
    SecondaryMobile: {
      type: String,
      validate: {
        validator: function (v) {
          return /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/.test(v);
        },
        message: (prop) => `Invalid Phone Number: ${prop.value}`,
      },
      unique: true,
    },
    EmergencyContact: {
      type: String,
      validate: {
        validator: function (v) {
          return /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/.test(v);
        },
        message: (prop) => `Invalid Phone Number: ${prop.value}`,
      },
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
    AlternateEmail: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email Address: ${prop.value}`,
      },
      unique: true,
    },
    BloodGroup: {
      type: String,
      required: true,
    },
    HeightMeters: {
      type: String,
      default: "",
    },
    WeightKg: {
      type: String,
      default: "",
    },
    Country: {
      type: String,
      default: "",
    },
    PresentAddress: {
      type: Object,
      default: {},
    },
    PermanentAddress: {
      type: Object,
      default: {},
    },
    Road: {
      type: String,
      default: "",
    },
    CarrierObjective: {
      type: String,
      default: "",
    },
    PresentSalary: {
      type: String,
      default: "",
    },
    ExpectedSalary: {
      type: String,
      default: "",
    },
    JobLevel: {
      type: String,
      default: "",
    },
    JobNature: {
      type: String,
      default: "",
    },
    PreferredAreas: {
      type: Array,
      default: [],
    },
    Experience: {
      type: Array,
      default: [],
    },
    PreferredJobLocationInsideBangladesh: {
      type: Array,
      default: [],
    },
    PreferredJobLocationOutsideBangladesh: {
      type: Array,
      default: [],
    },
    PreferredOrganization: {
      type: Array,
      default: [],
    },
    OtherRelevantInformation: {
      type: Array,
      default: [],
    },
    CareerSummary: {
      type: String,
      default: "",
    },
    SpecialQualification: {
      type: String,
      default: "",
    },
    Keywords: {
      type: String,
      default: "",
    },
    NationalDisability: {
      type: String,
      default: "",
    },
    Educations: {
      type: Array,
      default: [],
    },
    Trainings: {
      type: Array,
      default: [],
    },
    Professionals: {
      type: Array,
      default: [],
    },
    EmploymentHistorys: {
      type: Array,
      default: [],
    },
    EmploymentHistoryArmi: {
      type: Array,
      default: [],
    },
    Specialization: {
      type: Array,
      default: [],
    },
    LanguageProficiency: {
      type: Array,
      default: [],
    },
    References: {
      type: Array,
      default: [],
    },
    Password: {
      type: String,
      required: true,
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
