import Navbar from "@/components/Navbar/Navbar";

const UserLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default UserLayout;