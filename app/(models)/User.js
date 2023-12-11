import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
	{
		name: String,
		email: String,
		password: String,
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.models("User", userSchema);

export default User;
