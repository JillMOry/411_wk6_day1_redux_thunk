import React from "react";
import VertMore from "./VertMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from "@material-ui/core";

const Import = (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<p>{props.makes.length}</p>
			<button variant="contained" color="primary" onClick={props.fetchMakes}>
				Import
			</button>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="right">ID</TableCell>
						<TableCell align="right">Make</TableCell>
						<TableCell align="right">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.makes.map((make, index) => {
						return (
							<TableRow key={make.MakeId}>
								<TableCell align="right">{make.MakeId}</TableCell>
								<TableCell align="right">{make.MakeName}</TableCell>
								<TableCell align="right">
									<VertMore deleteMake={props.deleteMake} index={index} />
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};
//

export default Import;
