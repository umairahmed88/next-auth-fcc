import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Member = async () => {
	const session = await getServerSession(options);

	if (!session) {
		redirect("/api/auth/signin?callbackUrl=/Member");
	}

	return (
		<div>
			<h1>Member Server Session</h1>
		</div>
	);
};

export default Member;
