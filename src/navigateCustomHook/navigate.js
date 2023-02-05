import { useNavigate } from "react-router-dom";

export const CustomNavigate = () => {
	const navigate = useNavigate();
	const navigation = (path) => navigate(path);
	return navigation;
};
