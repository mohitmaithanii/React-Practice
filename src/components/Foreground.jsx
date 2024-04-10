import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
	const ref = useRef(null);

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
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
		},
		{
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
		},
	];
	return (
		<>
			<div
				ref={ref}
				className=" fixed z-[3] left-0 top-0 w-full h-full flex flex-wrap gap-5 "
			>
				{data.map((item, index) => (
					<Card data={item} reference={ref} />
				))}
			</div>
		</>
	);
};

export default Foreground;
