import React from "react";
import Card from "./Card";

const Foreground = () => {
	const data = [
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" },
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
		},
	];
	return (
		<>
			<div className=" fixed z-[3] left-0 top-0 w-full h-full flex flex-wrap gap-5 ">
				{data.map((item, index) => (
					<Card data={item} />
				))}
			</div>
		</>
	);
};

export default Foreground;
